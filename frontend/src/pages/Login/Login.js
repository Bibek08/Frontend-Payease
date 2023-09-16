import Imagefront from "../../components/images/Imagefront.png";
import "../Login/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="login-template ">
        <div className="login-container p-5">
          <div className="row">
            <div className="col-md-6">
              <div className="image-container image-animation">
                <img src={Imagefront} alt="front img" className="front-img" />
              </div>
            </div>
            <div className=" formdetail col-md-6">
              <h3>Login Here</h3>
              <div className="form-container">
                <form>
                  <div>
                    <label htmlFor="">Username :</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="UserEmail"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Password :</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="UserPwd"
                    />
                  </div>
                  <div className="buttons">
                    <Link to="/Dashboard" className="login" role="button">
                      Login
                    </Link>
                    <div className="backtohomepage">
                      <Link to="/" className="movetohome">
                        Home page
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
