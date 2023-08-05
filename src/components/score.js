import {state, useState} from "react"

const Score = (props) => {
    
    const [score, setScore] = useState(0);

    function increase(){
        console.log(score)
        setScore(score + 100)
        console.log(score)
    }

    function decrease(){
        setScore(score- 100)
    }

    function reset(){
        state = 0;
        setScore(state);
        console.log(score)
    }

    return( <div className='score'>
        <h2>Score: {score}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
    )
}

export default Score