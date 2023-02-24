import React from 'react';





export default function Home() {
  
       

    return (
        <>
        <div className="Home">
            <div>
                <img className="Hero-image" src={require('../Images/Poster.png')} alt='poster' />    
                <button type="button" className="Hero-text"><b>Get Started</b></button>
            </div>
        </div>
        </>
        

  );
}
