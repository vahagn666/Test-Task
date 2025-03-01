import React, { useState } from "react";
import PasswordInput from "./Password/PasswordInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalDialog from "./Dialog/ModalDialog";
import './App.css';


const App = () => {
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOk = () => {
    alert('Confirm button clicked!');
  };

  return (
    <div className="app-container">
      <div className="password-input-container">
        <h1>Password Input</h1>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <div className="dialog-container">
          <h1>React Bootstrap Modal Example</h1>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Open Modal</button>
          <ModalDialog
            isShown={showModal}
            onConfirm={handleOk}
            onClose={() => setShowModal(false)}
            title="My Modal"
            confirmationButtonText={"Confirm"}
          >
            <p>Content.</p>
          </ModalDialog>
        </div>
    </div>
  );
};
  
export default App;