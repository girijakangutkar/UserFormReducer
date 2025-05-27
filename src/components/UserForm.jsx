import React, { useReducer } from "react";

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
    <div>
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

      {state.submittedEmail && (
        <div>
          <h2>Submitted Email: {state.submittedEmail}</h2>
        </div>
      )}
    </div>
  );
}

export default UserForm;
