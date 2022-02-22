import { useState, useEffect } from "react";
import image from '../img/home.jpg'
import '../styles/styles.css'
import '../styles/drink.css'
import DrinkOverlay from "../components/DrinkOverlay";
import Checkboxes from "../components/Checkboxes";
import DrinksWithSelectedIng from "../components/DrinksWithSelectedIng";



const Home = ({cocktails, ingridients}) => {

  let sublist = []
    for (const key in ingridients){

      const ingridientsByType = ingridients[key]
      for (const key in ingridientsByType){
        sublist[ingridientsByType[key].index] = false
      }
    }

  const [selectedIngridients, setSelectedIngridients] = useState(sublist)
  const [selectedIngridientsByName, setSelectedIngridientsByName] = useState([])

  // Function to remove or add ingridients when checkboxes are used
  const changeSelectedIngridient = (index, item) => {
    const lst = selectedIngridients
    lst[index] = !selectedIngridients[index]
    setSelectedIngridients(lst)
    if (selectedIngridientsByName.includes(item)){
      setSelectedIngridientsByName(selectedIngridientsByName.filter(ing => ing !== item))
    }
    else{
      setSelectedIngridientsByName(selectedIngridientsByName.concat(item))
    }
  }

  const [overlayShown, setOverlayShown] = useState(false)

  const changeOverlay = (e,cocktail) => {
    e.preventDefault()
    setOverlayShown(cocktail) 
  }

  const closeOverlay = (e) => {
    e.preventDefault()
    setOverlayShown(false)
  }

  console.log(overlayShown) 
  return(
    <div>
      <Checkboxes ingridients={ingridients} selectedIngridients={selectedIngridients} changeSelectedIngridient = {changeSelectedIngridient}/>
      <DrinksWithSelectedIng cocktails = {cocktails} selectedIngridientsByName = {selectedIngridientsByName} changeOverlay={changeOverlay}/>
      {overlayShown !== false && <DrinkOverlay cocktail={overlayShown} closeOverlay={closeOverlay}/>}
    </div>
  
  )
}

export default Home;
