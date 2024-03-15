import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Ali",
        email: "ali@a.a",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {userContext.user ? (
        <>
          <div>User Name is {userContext.user.name}</div>
          <div>User Email is {userContext.user.email}</div>
        </>
      ) : (
        " "
      )}
    </div>
  );
};

export default User;
