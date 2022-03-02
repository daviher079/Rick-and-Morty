import { Fragment } from "react";

export default function Characters(props) {
    const {characters, setCharacters} = props; 

    const reset =() =>
    {
        setCharacters(null);
    }
    return (
    <div>
        <h1>Personajes</h1>
        <span className="back-home" onClick={reset}>Volver a home</span>
      
        <div className="container-characters">
            {
                characters.map(
                    (character, index)=>
                    (
                        <div className="character-container" key={index}>
                            <div>
                                <img src={character.image} alt={character.name}/>
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>
                                    {
                                        character.status ==='Alive' ?
                                        (
                                            <Fragment>
                                                <span className="alive"/>
                                                alive
                                            </Fragment>
                                            
                                        ) : (
                                            <Fragment>
                                                <span className="dead"/>
                                                Dead
                                            </Fragment>
                                        )
                                    }
                                </h6>

                                <div className="infoDavid">
                                    <h6>
                                        <span className="text-grey">Especie: {character.species}</span>
                                    </h6>
                                    <h6>
                                        <span className="text-grey">Genero: {character.gender}</span>
                                    </h6>
                                </div>
                                <div className="infoDavid">
                                    <h6>
                                        <span className="text-grey">Localización: {character.location.name}</span>
                                    </h6>

                                    <h6>
                                        <span className="text-grey">Origen: {character.origin.name}</span>
                                    </h6>
                                </div>
                                

                                <p>
                                    <span className="text-grey">Episodios:</span>
                                    <span>{character.episode.length}</span>
                                </p>

                                
                            </div>
                        </div>
                    )
                )
            }
        </div>
        
        <span className="back-home" onClick={reset}>Volver a home</span>
    </div>
  )
}
