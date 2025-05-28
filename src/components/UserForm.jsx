import React, { useReducer } from "react";
import "../App.css";

function userFormReducer(state, action) {
  switch (action.type) {
    case "onChange":
      return { ...state, [action.field]: action.value };
    case "submit":
      return {
        ...state,
        submittedEmail: state.email,
      };
    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(userFormReducer, {
    email: "",
    password: "",
    submittedEmail: "",
  });

  return (
    <div className="userForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "submit" });
        }}
      >
        <label>Email: </label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "onChange",
              field: "email",
              value: e.target.value,
            })
          }
          placeholder="Enter your email"
        />

        <label>Password: </label>
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "onChange",
              field: "password",
              value: e.target.value,
            })
          }
          placeholder="Enter your password"
        />

        <button type="submit">Submit</button>
      </form>

      <div className="textDiv">
        {state.submittedEmail && (
          <div>
            <p>
              <b style={{ color: "black" }}>Submitted Email:</b>{" "}
              {state.submittedEmail}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserForm;
