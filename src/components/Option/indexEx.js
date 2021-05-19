
import { useState } from "react";
import "./styles.css";
import Option from "./Option";

export default function App() {
  const [value, setValue] = useState("");

  function setNewValue(newValue) {
    setValue(newValue);
  }

  return (
    <>
      <h1>Choisir une option</h1>
      <p>Selection: {value === "" ? "Rien" : value}</p>
      <Option value={value} onRadioClick={setNewValue} />{" "}
    </>
  );
}




import "./styles.css";

export default function Option(props) {
  const { value, onRadioClick } = props;

  function onRadioClicked(e) {
    onRadioClick(e.target.value);
  }

  return (
    <>
      <form>
        <label>
          <input
            type="radio"
            name="myChoice"
            value="choix_1"
            onClick={onRadioClicked}
            checked={value === "choix_1"}
          />
          Choix 1
        </label>
        <label>
          <input
            type="radio"
            name="myChoice"
            value="choix_2"
            onClick={onRadioClicked}
            checked={value === "choix_2"}
          />
          Choix 2
        </label>
        <label>
          <input
            type="radio"
            name="myChoice"
            value="choix_3"
            onClick={onRadioClicked}
            checked={value === "choix_3"}
          />
          Choix 3
        </label>
      </form>
    </>
  );
}
