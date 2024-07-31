import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (length, checkboxData) => {
    let charset = "";
    let generatedPassword = "";

    const selectedOptions = checkboxData.filter((checkbox) => checkbox.state);
    console.log(selectedOptions)
    if (selectedOptions.length === 0) {
      setErrorMessage("Select at least one option");
      setPassword("");
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%^&*()_+[]{}|;:,.<>?";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      console.log({randomIndex})
      console.log({charset})
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;
