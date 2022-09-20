import React, { useState } from "react"
import memesData from "../memesData"


function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
  return(
    <main>
    <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button 
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
            <img 
                src={memeImage} 
                className="meme--image" 
                alt="Meme images"
            />
        </div>
    </main>
  )
}

export default Meme