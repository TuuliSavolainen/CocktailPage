import react from "react";

const DrinkOverlay = ({drink}) => {

    console.log('hmmm')
        return(
          <div className='overlay'>
            {drink.instructons}
          </div>
        )
          
}

export default DrinkOverlay