import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    host: "",
    households: 0,
  });

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <div className="content">
        <h1>Mystery Takeaway Night (Under construction!)</h1>
        <h2>Please enter your options:</h2>
        <form action="">
          <label htmlFor="name">What is your name?</label>
          <input name="name" type="text" /> <br />
          <label htmlFor="Households">
            How many households will be participating?
          </label>
          <input name="households" type="number" />
          <br />
          <input class="btn" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
