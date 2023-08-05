import {state, useState} from 'react'

const Game = (props) => {

    const [ game, setGame ] = useState(undefined)

    const [gameAnswer, setAnswer ] = useState("")

    // fetch from api
    const fetchData = async () => {
        const url = 'http://jservice.io/api/random';
        const response = await fetch(url)
        const game = await response.json()
        setGame(game[0])
        console.log(game[0].question)
        setAnswer('')
        // return <div>
        //     <h1>Answer:{game[0].answer}</h1>
        // </div>
    }

    const showAnswer = () => {
        const answer = game.answer
        console.log(answer)
        setAnswer(answer)
    }
    

    return <div className="game">
        <h2>Let's Play!</h2>
        <div className="answer">
            <button onClick={(fetchData)}>New Question</button>
            <h3>Category: {game && game.category.title}</h3>
            <h3>Points: {game && game.value}</h3>
            <h3>Question: {game && game.question}</h3>
    
            <button onClick={(showAnswer)}>Click to Reveal Answer</button>
            <h3>Answer: {gameAnswer}</h3>
        </div>
    </div>
}

export default Game