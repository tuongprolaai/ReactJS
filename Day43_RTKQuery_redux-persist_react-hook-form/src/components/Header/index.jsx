import { setCurrentUser, useCurrentUser } from "@/features/auth";
import { Link, useNavigate } from "react-router";

import * as authService from "@/services/auth";
import { useDispatch } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.clear();
      dispatch(setCurrentUser(null));
      navigate("/login");
    }
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <p>{currentUser.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Sign in</Link>
          <br />
          <Link to="/register">Sign up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
