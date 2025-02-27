import React from "react";

const Card = (props) => {
    const {image, title, description} = props.cards;
    return(
        <div className="card">
            <img src={image} className="card-img-top"/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Learn More!</button>
            </div>
        </div>
    );
};

export default Card;