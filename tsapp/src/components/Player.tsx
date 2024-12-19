import React from 'react'

type PlayerProps = {
    name :string;
    numberOfCenturies : number;
    numberOfHalfCenturis :number;
    nationality:string;
}

function Player(props: PlayerProps) {
  return (
    <div>
        <h1>Player Name:{props.name}</h1>
        <h1>Number of Centuries:{props.numberOfCenturies}</h1>
        <h1>Number of Half-Centuries:{props.numberOfHalfCenturis}</h1>   
        <h1>Nationality :{props.nationality}</h1>  
    </div>
  )
}

export default Player
