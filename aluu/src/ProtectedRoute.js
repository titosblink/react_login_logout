import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/verify")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch(() => setAuth(false));
  }, []);

  if (auth === null) {
    return <p>Loading...</p>; // while checking token
  }

  return auth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
