import React, { useState } from "react";
import { Modal } from "antd";
import "./Header.css";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSignOut = () => {
    showModal();
  };

  return (
    <header className="Header">
      <img src={require("file:///home/bhavesh/Downloads/logo.png").default}
        className="Logo"
        alt="logo"
      />
      <nav className="Nav">
        <h1>Admin Panel</h1>
        <button onClick={handleSignOut}>SignOut</button>
        <Modal
          title="Sign Out"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure you want to sign out?</p>
        </Modal>
      </nav>
      
    </header>
  );
}
