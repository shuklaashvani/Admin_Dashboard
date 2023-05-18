import React from "react";
import Sidebar from '../Sidebar'
import MainDash from '../MainDash/MainDash'
import RightSide from '../RigtSide/RightSide'
const AdminDashboard = () => {
  return (
    <div className="AppGlass">
        <Sidebar idx={0}/>
        <MainDash/>
        <RightSide/>
      </div>
  );
};

export default AdminDashboard;