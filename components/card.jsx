import React from "react";
import star from "/src/assets/star.png"
import img1 from "/src/assets/katie-zaferes.png"
import img3 from "/src/assets/mountain-bike.png"
import img2 from "/src/assets/wedding-photography.png"

export default function Card(props) {
    const img = [img1, img2, img3]
    let badgeText
    if(props.openSpots===0) {
        badgeText="SOLD OUT"
    }    else if(props.location === "Online"){
        badgeText="ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}     
            <img src={img[`${props.id}`-1]}  className="card--image" />
           
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.rating} </span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}