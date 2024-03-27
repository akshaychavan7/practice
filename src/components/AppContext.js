import { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const MyContext = createContext(null);

function AppContext() {
  const [username, setUsername] = useState("");
  return (
    <MyContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </MyContext.Provider>
  );
}

export default AppContext;
