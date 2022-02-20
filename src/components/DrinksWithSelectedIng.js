import '../styles/drink.css'

const ShowDrinks = ({cocktails}) => {

    let drinkNames = []

    for (let object in cocktails){
        drinkNames = drinkNames.concat(cocktails[object].name)
    }

    return(
        <div className = 'drink-grid'>
            {drinkNames.map((item, index) => {
                return(
                
                <div key ={index} className="drink-card">
                    <img className='drink-image' src={require(`/src/img/cocktails/${item}.jpg`)} alt={item}/>
                    <span className='drink-gradient'>
                    </span>
                    <span className='drink-text'>
                        {item}
                    </span>
                    

                </div>
                
                )}) }
                
        </div>
    )
}
const DrinksWithSelectedIng = ({cocktails, ingridients, selectedIngridientsByName}) => {
    let rightDrinks = []

    for (let i=0; i<cocktails.length;i++) {
      let checker = cocktails[i].ingridients.every(ing=>selectedIngridientsByName.includes(ing))
      if(checker === true) {
        rightDrinks = rightDrinks.concat(cocktails[i])
      }
    }

    return(
        <div>{
            rightDrinks.length > 0 ? <ShowDrinks cocktails = {rightDrinks}/> : <div>No drinks founded, please selecet more ingridients</div>}
            
        </div>
    )
}

export default DrinksWithSelectedIng