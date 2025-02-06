import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import EventsPage from "./pages/events/EventsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import Redirector from "./pages/auth/Redirector";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <Redirector>
                <PostsPage
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              </Redirector>
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <Redirector>
                <PostsPage
                  message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
              </Redirector>
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/posts/create"
            render={() => (
              <Redirector>
                <PostCreateForm />
              </Redirector>
            )}
          />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route
            exact
            path="/posts/:id/edit"
            render={() => (
              <Redirector>
                <PostEditForm />
              </Redirector>
            )}
          />
          <Route
            exact
            path="/profiles/:id"
            render={() => (
              <Redirector>
                <ProfilePage />
              </Redirector>
            )}
          />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => (
              <Redirector>
                <UsernameForm />
              </Redirector>
            )}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => (
              <Redirector>
                <UserPasswordForm />
              </Redirector>
            )}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => (
              <Redirector>
                <ProfileEditForm />
              </Redirector>
            )}
          />
          <Route
            exact
            path="/events"
            render={() => (
              <Redirector>
                <EventsPage />
              </Redirector>
            )}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
