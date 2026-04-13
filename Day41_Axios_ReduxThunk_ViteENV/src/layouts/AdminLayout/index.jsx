import { Outlet } from "react-router";

function AdminLayout(){
  return (
    <>
      <h1>Admin layout</h1>
      <Outlet/>
    </>
  );
}

export default AdminLayout;