import { Outlet } from "react-router-dom";

const GrandLayout = () => {
  return (
    <div className="font-roboto">
      <Outlet />
    </div>
  );
};

export default GrandLayout;
