import React from 'react'

// background image
import universe from '../images/universe.jpeg'

//memes


function Memes() {
    return (
        <>
        <container className='memesPage'>
       
        <img className='universePhoto 'src={universe} alt='Universe'
        
        
        />

        <button>New Meme</button>
       
        </container>
        

        </>

    )
}

export default Memes;