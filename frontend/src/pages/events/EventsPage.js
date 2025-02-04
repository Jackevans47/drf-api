import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Event from "./Event";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/Post.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useLocation } from "react-router";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function EventsPage({ message, filter = "" }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  useEffect(() => {
    let isMounted = true; // A flag to track whether the component is mounted

    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?${filter}search=${query}`
        );
        console.log(data); // Log to check the structure of the response

        // Only update the state if the component is still mounted
        if (isMounted) {
          setEvents({
            results: Array.isArray(data.results) ? data.results : [], // Ensure results is always an array
            next: data.next,
          });
          setHasLoaded(true);
        }
      } catch (err) {
        console.error(err); // Handle error
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchEvents();
    }, 1000);

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, [query, pathname, currentUser, filter]); // Add filter dependency if necessary

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search events"
          />
        </Form>

        {hasLoaded ? (
          <>
            {Array.isArray(events.results) && events.results.length ? ( // Ensure results is an array and has items
              <InfiniteScroll
                children={events.results.map((event) => (
                  <Event key={event.id} {...event} setEvents={setEvents} />
                ))}
                dataLength={events.results.length}
                loader={<Asset spinner />}
                hasMore={!!events.next}
                next={() => fetchMoreData(events, setEvents)} // Handling infinite scroll
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      {/* You can add a second column for additional content */}
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* Add any other component here, like PopularProfiles */}
      </Col>
    </Row>
  );
}

export default EventsPage;
