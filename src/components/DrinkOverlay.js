import react from "react";

const DrinkOverlay = ({cocktail, closeOverlay}) => {


        return(
          <div className='overlay'>
            <button className="overlay-button" onClick={(e)=>closeOverlay(e)}>
              <div className="close-button"></div>
              <div className="close-button"></div>
            </button>
            <div className="overlay-grid">
              <img className='overlay-image' src={require(`/src/img/cocktails/${cocktail.name}.jpg`)} alt={cocktail.name}></img>
              <div className="overlay-texts">
                <h3>{cocktail.name}</h3>
              </div>
            </div>

          </div>
        )
          
}

export default DrinkOverlay