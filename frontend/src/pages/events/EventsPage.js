import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Event from "./Event";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/Event.module.css"; // Import custom styles
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
    let isMounted = true; // Flag to track mounted state

    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?${filter}search=${query}`
        );

        // Update state only if component is still mounted
        if (isMounted) {
          setEvents({
            results: Array.isArray(data.results) ? data.results : [],
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

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, [query, pathname, currentUser, filter]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <i className={`fas fa-search ${styles.searchIcon}`} />
        <Form
          className={styles.searchBar}
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
            {Array.isArray(events.results) && events.results.length ? (
              <InfiniteScroll
                children={
                  <div className={styles.searchResultsContainer}>
                    {events.results.map((event) => (
                      <Event key={event.id} {...event} />
                    ))}
                  </div>
                }
                dataLength={events.results.length}
                loader={<Asset spinner />}
                hasMore={!!events.next}
                next={() => fetchMoreData(events, setEvents)} // Infinite scroll
              />
            ) : (
              <Container className={appStyles.Content}>
                <div className={styles.noResultsContainer}>
                  <Asset src={NoResults} message={message} />
                </div>
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default EventsPage;
