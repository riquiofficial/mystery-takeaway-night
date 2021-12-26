import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";

const food = ["Chinese", "Indian", "Fish and chips", "American", "Italian"]
const pickFood = () => food[Math.floor(Math.random()*food.length)]

function App() {
    const [people, setPeople] = useState([])

    console.log(people)
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <div className="content">
        <h1>Mystery Takeaway Night</h1>
        <h2>Add Person: </h2>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" /> <br />
          <br />
          <input className="btn" type="submit" onClick={() => setPeople([...people, document.getElementsByName("name")[0].value])} />
        </div>
        <div className="names">
          {people ? people.map(person => <div>{person}: {pickFood()}</div>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
