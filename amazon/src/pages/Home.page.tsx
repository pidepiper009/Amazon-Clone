import { logout, selectedUser } from "../features/auth/authSlice";
import HeaderComponent from "../features/products/components/Header.component";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";

const HomePage = () => {

  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

export default HomePage;
