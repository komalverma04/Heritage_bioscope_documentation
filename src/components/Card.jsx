import React from "react";
function Card({diversityData}){
   
    return (
        <div className="all-cards">
        {diversityData.map((curElem) => {
            const {id, name,scientificName, category, image, description} = curElem
            return (
                <>
                
                <div className="card-container" key={id}>
        <div className="card">
            <div className="card-body">
                {/* <span className="card-number">{id}</span>
                <span className="card-category">{
                    category}</span> */}
                    <h3 className="card-subtitle">{scientificName}</h3>
                <h2 className="card-title"> {
                    name}</h2>
                <div className="card-description">
                {
                    description}
                </div>
                <img src={
                    image} height="100px" width="100px"/>
                </div>
        </div>
    </div>
    </>
            )
        })}
        
    
    </div>
    )
}
export default Card;