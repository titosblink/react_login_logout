import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// set axios defaults once
axios.defaults.withCredentials = true;

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // 🔹 Check if user is already logged in when component mounts
  useEffect(() => {
    axios.get("http://localhost:8081/verify")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/home"); // already logged in → redirect
        }
      })
      .catch((err) => {
        console.error("Verify error:", err);
        // do nothing, user is not logged in
      });
  }, [navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate('/home');
        } else {
          alert(res.data.Message || "Login failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="App">
      <Header />
      <section className="ud-login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-login-wrapper">
                <form className="ud-login-form" onSubmit={handleSubmit}>
                  <div className="ud-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email/username"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ud-form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="*********"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="ud-form-group">
                    <button type="submit" className="ud-main-btn w-100">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
