import { useState } from "react";
import cardArray from "./data";
import "./App.css";
import { Printer } from "./components/Printer/Printer";

function App() {
  const [validator, setValidator] = useState([]);
  const [changedPlanets, setPlanets] = useState(cardArray)
  const [isImageChanged, setIsImageChanged] = useState(false);

  console.log(validator);
  
  let [cont, setCont] = useState(0);


  const resetCards = () => {

    setValidator([]);
    setIsImageChanged(false);
  };
  const fillArray = (data) => {
    setCont((cont += 1));
    if (validator.length <= 1) {
      console.log("soy push")
      validator.push(data);
    }
  }
  if (validator.length === 2 && validator[0] === validator[1]) {
    console.log("soy mas de acierto")
    alert("acertarstee");
    let changedPlanets = cardArray.map((card,index)=>{(card.name === validator[0] ||card.name === validator[1])?  card.img ="../../public/tick.svg":null})
    console.log(changedPlanets)
    setPlanets (cardArray)
    setValidator([]);

  }
  if (validator.length == 2 && validator[0] != validator[1]){
    console.log("soy reset")
    // cardArray.map((card,index)=>{(card.name === validator[0] || card.name === validator[1])?  card.img ="../../public/universe.svg":null})
  resetCards();

  } 
  if(validator.length >= 2){
    console.log("soy mas de 2")
    setValidator([]);
  };

  

  return (
    <>
        <div className="title">
        {validator[0]},{validator[1]}

          <h1> Memory planets  </h1>
        </div>

      <div className="wall">
        {cardArray.map((card, index) => (
          <div className="card" key={index}>
           <Printer card={card} fillArray={fillArray}></Printer>
          </div>
        ))}
      </div>
      <div>
        {validator[0]},{validator[1]}
      </div>
    </>
  );
}

export default App;
