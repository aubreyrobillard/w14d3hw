import {state, useState} from 'react'

const Game = (props) => {

    const [ game, gameHandler ] = useState("")

    // fetch from api
    const fetchData = async () => {
        const url = 'http://jservice.io/api/random';
        const response = await fetch(url)
        const game = await response.json()
        console.log(game[0].question)
    }

    return <div className="game">
        <h2>Let's Play!</h2>
        <div className="answer">
            <button onClick={(fetchData)}>New Answer</button>
            <h3>Category:</h3>
            <h3>Points:</h3>
            <h3>Answer:</h3>
        </div>
        <div className="question">
            <button>Click to Reveal Question</button>
        </div>
    </div>
}

export default Game