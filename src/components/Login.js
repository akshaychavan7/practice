import { useContext } from "react";
import { MyContext } from "./AppContext";

function Login() {
  const { username, setUsername } = useContext(MyContext);
  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default Login;
