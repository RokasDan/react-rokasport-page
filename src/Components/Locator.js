import { useState } from 'react';


// Variable which keeps track of the mover animation location.
let position = 0;

const Locator = () => {

    // Setting up dynamic css values for components objects
    const [Position, setPosition] = useState(moverStyle);

    // Function which moves the rectangle on click of the locator buttons to create an animation.
    const MoveRectangle = (Id) => {

        // Getting target coordinates to which the animation will move
        let targetId = document.getElementById(Id);
        let target = targetId.getBoundingClientRect();

        // Getting buttons Id for turning them off during the animation.
        let button1 = document.getElementById('about');
        let button2 = document.getElementById('software');
        let button3 = document.getElementById('audio');

        // Time interval variables for the animation.
        let timer = setInterval(frame, 1);

        // Function which uses the time interval to move the mover animation
        function frame(){

            // Turning off the buttons so other animation functions can not be fired.
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;

            // If if movers position is on the pressed button nothing happens
            // 772 value accounts for the coordinate deviation due to root dive being
            // transformed to the middle of the screen.
            if (position == target.x - 772){

                position = target.x - 772;
                clearInterval(timer);

                // Turning buttons back on after the animation is finished.
                button1.disabled = false;
                button2.disabled = false;
                button3.disabled = false;

            } else {

                // Looking if the animation should move left or right.
                if (position < target.x - 772){
                    // The css of the mover is being updated in order to animate the object.
                    position += 4;
                    setPosition(prevPosition => {
                        return { ...prevPosition, transform: 'translateX('+position+'px)'}
                    });

                } else {
                    // The css of the mover is being updated in order to animate the object.
                    position -= 4;
                    setPosition(prevPosition => {
                        return { ...prevPosition, transform: 'translateX('+position+'px)'}
                    });
                }
            }
        }
    }

    // Creating the HTML structure for the object.
    return(
        <div id="move" style={locatorStyle}>
            <rect style={Position} />
            <button onClick={() => {MoveRectangle('about')}} id='about' style={buttonStyle}>About</button>
            <button onClick={() => {MoveRectangle('software')}} id='software' style={buttonStyle}>Software</button>
            <button onClick={() => {MoveRectangle('audio')}} id='audio' style={buttonStyle}>Audio</button>
        </div>
    );
}

// Styling Buttons
const buttonStyle = {
    color: 'black',
    width: 200,
    height: 60,
    zIndex: 3,
    backgroundColor: 'transparent'
}

// Styling the mover
const moverStyle = {
    color: 'blue',
    backgroundColor: 'blue',
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'absolute',
    transform: 'translateX(0px)'
}

// Styling of the Locator background
const locatorStyle = {
    color: 'red',
    backgroundColor: 'red',
    width: 600,
    height: 60,
    zIndex: 1,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    display: "flex"
}
export default Locator;