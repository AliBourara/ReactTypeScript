import React, { createContext, useState } from "react";

export interface AuthUser {
  name: string;
  email: string;
}

interface UserContextType {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
