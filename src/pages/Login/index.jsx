import React from "react";
import Logo from "../../components/Logo";
import Slider from "../../components/Slider";
import styles from "./index.module.css";
import { ImFacebook2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="col-12 h-100 d-flex">
      <div
        className="col-12 col-md-5 h-100 position-relative"
        style={{ background: "var(--white)" }}
      >
        <Logo className="position-absolute z-3 p-3" />
        <Slider />
        <h4
          className="position-absolute col-12 text-center"
          style={{ bottom: "2rem", zIndex: "200" }}
        >
          Manage Sales , Inventory <br />
          and Other Transactions
        </h4>
      </div>
      <div className="col-7 h-100 d-flex align-items-center justify-content-center">
        <form className="col-6 d-flex flex-column gap-3" id={styles.login}>
          <div className="col-12">
            <h1>Welcome Back !</h1>
            <p>Please, sign in to continue</p>
          </div>

          <input type="text" placeholder="Sales ID number" />

          <div className="position-relative">
            <FaEyeSlash className={styles.eyeIcon} />
            <input type="text" placeholder="Password" />
          </div>

          <button>Sing in</button>

          <span className="col-12 text-center">or</span>

          <div className="d-flex justify-content-around">
            <button className={styles.btn}>
              <FcGoogle className={`${styles.icon} fs-3`} /> Sign up with Google
            </button>

            <button className={styles.btn}>
              <ImFacebook2 className={`${styles.fbIcon} fs-3`} /> Sign up with
              Facebook
            </button>
          </div>

          <a href="" className="text-decoration-none col-12 text-center">
            Forgot password?
          </a>

          <p className="col-12 text-center">
            Don't have an account? Go to Register
          </p>
        </form>
      </div>
    </div>
  );
}
