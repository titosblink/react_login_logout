
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get('http://localhost:8081/logout', { withCredentials: true })
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate('/login'); // redirect to login page
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to logout");
      });
  };

  return (
    <>
    My Home
    <button onClick={handleLogout} className="ud-main-btn">
      Logout
    </button>
    </>
  );
}

export default Home;
