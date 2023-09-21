import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>This is the auth layout</h1>

      <Outlet />
    </>
   );
}
 
export default AuthLayout;