import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { user, jwt } = useAppSelector(selectedUser);

  const logoutHandler = () => {
    dispatch(logout());
  }

  return <div>
    <h1>HomePage</h1>
    <a onClick={logoutHandler} style={{ 
      backgroundColor:'yellow', 
      cursor:'pointer',
      height: '40px',
      width: '60px',
      padding: '8px' }}>
        Logout
      </a>
    {user?.email}
  </div>
}

export default HomePage;
