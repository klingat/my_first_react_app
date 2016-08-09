var React = require('react');

var numberToGuess = Math.floor(Math.random() * 100);

var NumberGuessing = React.createClass({
    // propTypes: {
    //     guessLimit: React.PropTypes.number.isRequired
    // },
    getInitialState: function() { //should return an empty object
        return ({})
    },
    _startGame: function() { //to reset the game, sets gameStatus to "playing", random number, and empty array
        this.setState({
            gameStatus: 'playing',
            numberToGuess: numberToGuess, // something between 1 and 100 generated when we start a game
            guesses: [] // initially guesses is an empty array
        })
    },
    _handleButtonClick: function() {
        var userGuess = this.refs.userGuess.value

        this.setState({
            guesses: this.state.guesses.concat([userGuess])
        })
    },
    _handleButtonReset: function() {
        this._startGame();
    },
    componentDidMount: function() {
        this._startGame();
    },
    displayMessage: function() {
        var userGuess = this.refs.userGuess.value;
 
        if (this.state.guesses.length < 5 && userGuess && this.state.guesses.length !== 0) {
            if (Number(userGuess) === numberToGuess) {
                return (
                    <div>
                    <p>"You WIN!🎉"</p>
                    <p>Your guesses: {this.state.guesses.join(", ")}</p>
                    <p>Attempts left: {5 - this.state.guesses.length}</p>
                    <button onClick={this._handleButtonReset}>NEW GAME?</button>
                    </div>
                )
            }
            if (Number(userGuess) < numberToGuess) {
                return (
                    <div>
                    <p>"You guessed too low."</p>
                    <p>Your guesses: {this.state.guesses.join(", ")}</p>
                    <p>Attempts left: {5 - this.state.guesses.length}</p>
                    </div>
                )
            }
            if (Number(userGuess) > numberToGuess) {
                return (
                    <div>
                    <p>"You guessed too high."</p>
                    <p>Your guesses: {this.state.guesses.join(", ")}</p>
                    <p>Attempts left: {5 - this.state.guesses.length}</p>
                    </div>
                )
            }
            
        }
        else if (this.state.guesses.length >= 5) {
            return (
                <div>
            <p>YOU LOSE HAHAHAHAHA</p>
            <button onClick={this._handleButtonReset}>NEW GAME?</button>
            </div>
            )
        } else {
            return <p></p>
        }
    },
    render: function() {
        return (
            <div>
                <h2>GUESS-A-NUMBA-BETWEEN-1-AND-100-GAME</h2>
                <input type="text" ref="userGuess"/>
                <button onClick={this._handleButtonClick}>GUESS</button>
                {this.refs.userGuess ? this.displayMessage() : ''}
            </div>
        )
    }
})

module.exports = NumberGuessing;