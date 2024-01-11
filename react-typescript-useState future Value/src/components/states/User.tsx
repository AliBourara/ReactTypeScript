import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({
      name: "Goku",
      email: "goku@exemple.xyz",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User name is {user?.email}</div>
    </div>
  );
};
