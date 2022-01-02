import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";

const food = [
  "Chinese",
  "Indian",
  "Fish and chips",
  "American",
  "Italian",
  "Mexican",
  "Sushi",
];
const pickFood = () => food[Math.floor(Math.random() * food.length)];

function App() {
  const [people, setPeople] = useState([]);
  const [showFood, setShowFood] = useState(false);

  const addPerson = () => {
    const person = document.getElementsByName("name")[0].value;
    if (person) {
      setPeople([
        ...people,
        {
          key: people.length,
          person: person,
          food: pickFood(),
          mysteryPerson: "",
        },
      ]);
    }
  };

  const pickMysteryPeople = () => {
    // people has to be even
    if (people.length % 2 !== 0) {
      alert("please enter at least one name and an even number of people");
      return;
    }

    let picked = [];
    people.forEach((person) => {
      const pickPerson = () => {
        // pick person at random
        const randomPerson = people[Math.floor(Math.random() * people.length)];
        // if random person not current person and not already been picked, pick them
        // otherwise use recursion to select another
        if (randomPerson !== person && !picked.includes(randomPerson)) {
          picked.push(randomPerson);
          return randomPerson;
        } else {
          console.log("repicking");
          return pickPerson();
        }
      };
      person.mysteryPerson = pickPerson();
      setPeople([...people]);
    });
  };

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <div className="content">
        <h1>Mystery Takeaway Night</h1>
        <h2>Add Person: </h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addPerson();
                document.getElementsByName("name")[0].value = "";
              }
            }}
          />{" "}
          <br />
          <br />
          {!showFood ? (
            <div>
              <input
                className="btn"
                type="submit"
                onClick={() => {
                  addPerson();
                  document.getElementsByName("name")[0].value = "";
                }}
              />
              <button
                className="btn"
                onClick={
                  people.length
                    ? () => setShowFood(true)
                    : () => alert("please enter at least one name")
                }
              >
                Pick Food Type!
              </button>
            </div>
          ) : null}
          {people[0]?.mysteryPerson === "" && people.length % 2 === 0 ? (
            <button className="btn" onClick={pickMysteryPeople}>
              Pick Mystery Person!
            </button>
          ) : null}
        </div>
        <div className="names">
          {people
            ? people.map((person, index) => (
                <div key={index}>
                  {person.person}
                  {showFood ? `: ${person.food}` : null}
                  {person.mysteryPerson
                    ? ` -> ${person.mysteryPerson.person}`
                    : null}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
