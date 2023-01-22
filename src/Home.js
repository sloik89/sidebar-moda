import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button onClick={openModal} className="btn btn-show">
        show modal
      </button>
      <Modal />
      <Sidebar />
    </main>
  );
};

export default Home;
