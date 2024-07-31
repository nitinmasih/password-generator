import React from "react";

const PasswordStrengthIndicator = ({ password }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;
    if (passwordLength > 12) {
      return "Very Strong";
    } else if (passwordLength > 8) {
      return "Strong";
    } else if (passwordLength > 5) {
      return "Medium";
    } else if (passwordLength > 1) {
      return "Very Weak";
    } else {
      return "";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) {
    return null;
  }

  return (
    <div className="password-strength">
      Strength: <span style={{ fontWeight: "bold", color: "#fff", }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
