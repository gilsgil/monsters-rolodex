import React from "react";
import './card.css'

export const Card = (props) => {
    return (
        <div className={'card'}>
            <img src={`https://robohash.org/${props.monster.id}`} alt="monster"/>
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>

    )
}
