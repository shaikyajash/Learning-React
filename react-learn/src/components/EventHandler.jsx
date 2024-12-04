import React from 'react'

const EventHandler = () => {
    
    const handleClick = () => {
      alert('Button Clicked');
    }

    const handleCopy = () => {
        alert('Text Copied');
    }

    const moveHandler = () => { 
        console.log('Mouse Moved');
    }



  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <br />
        <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus maiores quidem qui fugit cumque consequatur labore distinctio facere iusto vero!</p>

        <br />
        <p onMouseMove={moveHandler}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, repellat.
        </p>

           
    </div>
  )
}

export default EventHandler