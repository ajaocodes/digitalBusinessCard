import React from "react";

export default function Info() {
    return (
        <div className="info-container">
          <img className = "my-image" src="/myBoy.jpg" alt="picture of Ezra relaxing"/>
          <div className = "my-infos-container">  
            <h2> Ezra Olamide </h2>
            <p> Boss Baby</p>
          </div>
          <div className="my-buttons-container">
          <a href ="mailto:ajaoomololu@yahoo.com">  
            <button>
            <img className= "email-icon" src="/emailIcon.png" alt="contact via email button"/>
            <p>Email</p>
            </button>
          </a>
        <a href ="https://www.linkedin.com/in/omololuajao/">  
            <button className="linkedIn-btn">
            <img className= "linkedIn-btn" src="/linkedIn.png" alt="Link to LinkedIn link from Omololu Ajao"/>
            <p>LinkedIn</p>
            </button>
          </a>
        </div>
        </div>
    )
}

 