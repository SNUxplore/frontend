import React from "react";

function TeamCard({image , gif , name , title}) {
    function mouseHover(e) {
        e.target.src = gif;
    }
    function mouseOut(e) {
        e.target.src = image;
    }
    return(
        <div className="AboutUsCard">
            <img className="AboutUsCard--image" src={image} onMouseOver={mouseHover} onMouseOut={mouseOut}/>
            <p className="AboutUsCard--name">{name}</p>
            <p className="AboutUsCard--title">{title}</p>
        </div>
    )
}
export default TeamCard;