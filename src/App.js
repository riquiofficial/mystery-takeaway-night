import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";

const food = ["Chinese", "Indian", "Fish and chips", "American", "Italian", "Mexican", "Sushi"]
const pickFood = () => food[Math.floor(Math.random()*food.length)]

function App() {
    const [people, setPeople] = useState([])
    const [showFood, setShowFood] = useState(false)

    const addPerson = () => {
      const person = document.getElementsByName("name")[0].value
      if (person) {
        setPeople([...people, {key: people.length, person: person, food: pickFood(), mysteryPerson: ""}])
      }
    }

    const pickMysteryPeople = () => {
      // people has to be even
      if (people.length % 2 !== 0) {
        alert("please enter at least one name and an even number of people")
        return
      }

      people.forEach((person) => {
        const pickPerson = () => {
          const mysteryPerson = people[Math.floor(Math.random()*people.length)]
          if (mysteryPerson !== person && person.mysteryPerson === "") {
            return mysteryPerson
          } else {
            pickPerson()
          }
        }
        setPeople([...people, person.mysteryPerson = pickPerson()])
        console.log(people)
      })
    }

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
          {!showFood ? 
            <div>
              <input className="btn" type="submit" onClick={addPerson}/>
              <button className="btn" onClick={people.length ? () => setShowFood(true) : () => alert("please enter at least one name")} >Pick Food Type!</button>
            </div>
            : null} 
          
          
          <button className="btn" onClick={pickMysteryPeople} >Pick Mystery Person!</button>

        </div>
        <div className="names">
          {people ? people.map(person => <div>{person.person}{showFood ? `: ${person.food}` : null}{person.mysteryPerson ? ` -> ${person.mysteryPerson.person}` : null}</div>) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
