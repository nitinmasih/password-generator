import { useState } from "react";
import "./styles.css";
import usePasswordGenerator from "../customHook/usePasswordGenerator";
import PasswordStrengthIndicator from "./StrengthChecker";

const Header = () => {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: true },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const handleBoxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <main className="main-container">
      <h1>Password Generator</h1>
      {password && (
        <div className="title-btn-container">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={handleCopy}>{copied ? "Copied" : "Copy"}</button>
        </div>
      )}
      <div className="charLength">
        <div>
          <span>Character Length:</span>
          <span style={{ marginLeft: "10px" }}>{length}</span>
        </div>
        <input
          type="range"
          min={"4"}
          max={"20"}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={checkbox.state}
              onChange={() => handleBoxChange(index)}
              id={index}
            />
            <label htmlFor={index}>{checkbox.title}</label>
          </div>
        ))}
      </div>
     <div style={{margin:"15px"}}> <PasswordStrengthIndicator password={password} /></div>
      <button className="generateBtn" onClick={() => generatePassword(length, checkboxData)}>
        Generate Password
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </main>
  );
};

export default Header;
