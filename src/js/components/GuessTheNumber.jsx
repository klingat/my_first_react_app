var React = require('react');

var numberToGuess = Math.floor(Math.random() * 100);

var GuessTheNumber = React.createClass({
    
    _handleButtonClick: function(){
        var userGuess = this.refs.userGuess.value
        
        console.log(userGuess, numberToGuess);
        
        if (Number(userGuess) === numberToGuess) {
            alert("You are correct");
        }
        else if (Number(userGuess) < numberToGuess) {
            alert("You guessed to low.");
        }
        else if (Number(userGuess) > numberToGuess) {
            alert("You guessed to high!");
        }
    },
    render: function() {
        return (
            <div>
                <p>Guess a number from 1 to 100</p>
                <input type="text" ref="userGuess"/>
                <button onClick={this._handleButtonClick}>Guess da numba!</button>
            </div>
        )
    }
})


module.exports = GuessTheNumber;
