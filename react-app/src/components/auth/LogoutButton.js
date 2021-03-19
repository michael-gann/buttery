import React from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/reducers/users.reducer";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(sessionActions.logoutUser());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
