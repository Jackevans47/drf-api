import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Redirector(props) {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
      } catch (err) {
        history.push("/signin");
      }
    };

    handleMount();
  }, [history]);

  return props.children;
}
