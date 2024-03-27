import { useContext } from "react";
import { MyContext } from "./AppContext";

function User() {
  const { username } = useContext(MyContext);
  return (
    <div>
      <p>Username: {username}</p>
    </div>
  );
}

export default User;
