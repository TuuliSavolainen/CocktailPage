import '../styles/styles.css'
import '../styles/drink.css'
const HandleSubList = ({subtype, selectedIngridients, changeSelectedIngridient}) => {
    
    const openList = (subtype) => {
        let list = []
        for (const ing in subtype){
            list = list.concat(subtype[ing].name)
        }
        return list
    }
    let list = openList(subtype)

    const findIndex = (subtype, item) => {
        for (const n in subtype){
            if (subtype[n].name === item){
                return subtype[n].index
            }
        }
    }

    const handleSelection = (subtype, item) => {
        for (const n in subtype){
            if (subtype[n].name === item){
                const index = subtype[n].index
                changeSelectedIngridient(index, item)
            }
        }
    }

    return(
        <div className='chechkbox-group'>
            {list.map((item, index) => {
            return (
              <li key={index} className='check-item'>
  
                    <input
                        key = {index}
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={item}
                      value={item}
                      checked={selectedIngridients[findIndex()]}
                      onChange={() => handleSelection(subtype, item)}
                      />
                    <label htmlFor={`custom-checkbox-${index}`}>{item}</label>
        
              </li>
            );
          })}

        </div>
    )
}


const Checkboxes = ({ingridients, selectedIngridients, changeSelectedIngridient}) => {

    const createLists = () =>{
        return(
            Object.keys(ingridients).map((type, index) => {
                return(
                    <>
                        <div className = "checkboxes-type" key = {index}>
                            <span className='type-header'>{type.toUpperCase()}</span>
                            
                            <HandleSubList subtype = {ingridients[type]} selectedIngridients = {selectedIngridients} changeSelectedIngridient = {changeSelectedIngridient}/>
                        </div>
                    </>
            )})
        )
    }

    return (
      <div>
        <h3>Select Toppings</h3>
        <div className = "checkboxes">
            {createLists()}
        </div>
      </div>
    );
  }

export default Checkboxes