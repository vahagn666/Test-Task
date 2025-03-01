import React, { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = ({ value, onChange, placeholder = "Enter password" }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-container">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="password-input"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="toggle-button"
      >
        {showPassword ? "🙈" : "👁️"}
      </button>
    </div>
  );
};

export default PasswordInput;