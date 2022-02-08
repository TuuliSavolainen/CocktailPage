
import './App.css';
import { useState } from "react";
import  "./drink.css"
import './styles.css'
import './responsive.css'
import image from './img/home.jpg'

const Checkboxes = ({removeIngridient, addIngridient, ingridients}) => {

  const [checkedState, setCheckedState] = useState(
    new Array(ingridients.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    if (updatedCheckedState[position] === true) {
      addIngridient(ingridients[position])
    }
    else {
      removeIngridient(ingridients[position])
    }
  }

  return (
    <div>
      <h3>Select Toppings</h3>
      <ul className='check-box'>
        {ingridients.map((item, index) => {
          return (
            <li key={index} className='check-item'>

                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={item}
                    value={item}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{item}</label>
      
            </li>
          );
        })}

      </ul>
    </div>
  );
}
const P = ({drink}) => {
  console.log('hmmm')
  return(
    <div className='overlay'>
      {drink.instructons}
    </div>
  )
}


const ShowDrinks = ({drink}) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = (event, drink) =>{
    event.preventDefault()
    setIsActive(!isActive)
  }
  return(
    <div>
    <button  className = "drinkButton drinkCard" key={drink.name} onClick={(e) => handleClick(e, drink)}>{drink.name}</button>
    {isActive?<P drink ={drink}/>:<p></p>}
    </div>
  )
}


// Filters drinks based on the ingridients
const FindDrinks = ({drinks, ingridients}) => {
  let rightDrinks = []
  for (let i=0; i<drinks.length;i++) {
    let checker = drinks[i].ingridients.every(ing=>ingridients.includes(ing))
    if(checker === true) {
      rightDrinks = rightDrinks.concat(drinks[i])
    }
  }

  return(
    <div>
      {rightDrinks.map(drink=> <ShowDrinks key = {drink.name} drink = {drink}/>)}
    </div>
  )
}


const Home = () => {
  const drinks = [
    {
      "name": "Margharita",
      "type": "coctail",
      "gatecory": "sweet",
      "ingridients": ["tequila", "triple sec",  "lime juice", "lime"],
      "portions": ["1 part", '1/2 part', '1/2 part', '1 widge'],
      "instructons": "Chill your glass. Put lots of ice and all of the ingredients into a shaker, then shake hard for about 30 seconds to chill the liquid really well Run a lime wedge around the outside of the rim of your glass before rolling the rim in salt Double strain the mix into the glass",
    },
    {
      "name": "Shotti",
      "type": "coctail",
      "gatecory": "sweet",
      "ingridients": ["tequila"],
      "portions": ["1 part"],
      "instructons": "Bottoms up",
    }
  ]
  const ingridients = ['tequila', 'lime juice', 'triple sec', 'lime', 'vodka', 'gin', 'lemon', 'wine', 'cider', 'beer', 'ginger']
  const [selectedIngridients, setSelectedIngriedients] = useState([]) 
  let checkedIngridients = []

  const addIngridient = (string) => {
    let newList = selectedIngridients.concat(string)
    setSelectedIngriedients(newList)
  }

  const removeIngridient = (string) => {
    let newList = selectedIngridients.filter(i=> i!==string)
    setSelectedIngriedients(newList)
  }
  console.log(image)

  return (
    <div className='base'>
      <div className='intro'>
        <div className='image'>

        </div>
        <h1>Take a sip and love it</h1>
        <h3>
          Just add ingridients, serach and enjoy
        </h3>
      </div>
      <Checkboxes removeIngridient={removeIngridient} addIngridient = {addIngridient} ingridients={ingridients} checkedIngridients={checkedIngridients} selectedIngridients= {selectedIngridients} setSelectedIngriedients={setSelectedIngriedients}/>
      <h2>Valitut raaka-aineet</h2>
      <ul>{selectedIngridients.map((item, index)=><li key = {index}>{item}</li>)}</ul>
      <h2>Sopivat juomat</h2>
      <FindDrinks ingridients={selectedIngridients} drinks={drinks}/>
    </div>
  );
}

export default Home;