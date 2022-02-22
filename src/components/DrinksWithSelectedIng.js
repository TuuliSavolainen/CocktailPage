import '../styles/drink.css'
import { useState } from 'react'
import DrinkOverlay from './DrinkOverlay'


const ShowDrinks = ({cocktails, changeOverlay}) => {


    let drinkNames = []

    for (let object in cocktails){
        drinkNames = drinkNames.concat(cocktails[object].name)
    }

    const findObejct = (name) => {
        for (let object in cocktails){
            if (cocktails[object].name === name){
                return cocktails[object]
            }
        }
    }



    return(
        <div>
            <div className = 'drink-grid'>
                {drinkNames.map((item, index) => {
                    const cocktail = findObejct(item)
                    return(
            
                    <div key ={index} className="drink-card test" onClick={(e) => changeOverlay(e,cocktail) }>
                        
                        <img className='drink-image' src={require(`/src/img/cocktails/${item}.jpg`)} alt={item}/>
                        <span className='drink-gradient'>
                        </span>
                        <span className='drink-text'>
                            {item}
                        </span>
                        
                    </div>
                    
                    )}) }
            </div>
        </div>
    )
}


const DrinksWithSelectedIng = ({cocktails, ingridients, selectedIngridientsByName, changeOverlay}) => {
    let rightDrinks = []

    for (let i=0; i<cocktails.length;i++) {
      let checker = cocktails[i].ingridients.every(ing=>selectedIngridientsByName.includes(ing))
      if(checker === true) {
        rightDrinks = rightDrinks.concat(cocktails[i])
      }
    }

    return(
        <div>{
            rightDrinks.length > 0 ? <ShowDrinks cocktails = {rightDrinks}  changeOverlay={changeOverlay}/> : <span className='selection-text'>No drinks founded, please selecet more ingridients</span>}
            
        </div>
    )
}

export default DrinksWithSelectedIng