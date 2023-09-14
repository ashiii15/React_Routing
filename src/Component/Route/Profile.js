import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logOut()
    navigate("/")
  };
  return (
    <>
      <div>welcome {auth.user}</div>
      <button onClick={handleLogout}>LogOut</button>
    </>
  );
};
