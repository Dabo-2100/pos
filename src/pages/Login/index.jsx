import React from "react";
import Logo from "../../components/Logo";
import Slider from "../../components/Slider";

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
      <div className="col-7 h-100 bg-warning">
        <form className="col-5 rounded shadow bg-white">
          <label>user name</label>
          <input className="form-control" type="text" />
        </form>
      </div>
    </div>
  );
}
