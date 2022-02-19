import { useState, useEffect } from "react";
import image from '../img/home.jpg'
import '../styles/styles.css'
import '../styles/drink.css'
import DrinkOverlay from "../components/DrinkOverlay";
import Checkboxes from "../components/Checkboxes";

const Home = ({cocktails, ingridients}) => {

  let sublist = []
    for (const key in ingridients){

      const ingridientsByType = ingridients[key]
      for (const key in ingridientsByType){
        sublist[ingridientsByType[key].index] = false
      }
    }

  const [selectedIngridients, setSelectedIngridients] = useState(sublist)

  const changeSelectedIngridient = (index) => {
    const lst = selectedIngridients
    lst[index] = !selectedIngridients[index]
    setSelectedIngridients(lst)
    console.log('hmmm', lst)
  }

  console.log(selectedIngridients)
 
  return(
    <div>
      <Checkboxes ingridients={ingridients} selectedIngridients={selectedIngridients} changeSelectedIngridient = {changeSelectedIngridient}/>
    </div>
  
  )
}

export default Home;
