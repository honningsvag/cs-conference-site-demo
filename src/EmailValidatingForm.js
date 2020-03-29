import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import useEmailValidationForm from "./useEmailValidationForm";

function EmailValidatingForm() {
  const { count, email, setEmail, emailValid } = useEmailValidationForm(10);

  return (
    <div className="containter">
      <br />
      <div>
        <div className="content">
          <input
            disabled={count <= 0}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
            type="email"
            name="email"
            required
          />
          &nbsp; &nbsp; &nbsp;
          <button
            disabled={!emailValid || count <= 0}
            onClick={() => alert(`button clicked with email ${email}`)}
            className="btn-lg"
            type="submit"
          >
            Go!
          </button>
          <div>
            {count > 0
              ? `You have ${count} seconds to enter your ${email}`
              : "Time's Up!"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailValidatingForm;
