var React = require('react');

var YouClicked = React.createClass({
    getInitialState: function() {
        return {
            timesClicked: 0,
            timesReset: 0
        }
    },
    _handleButtonClick: function() {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
        
        console.log(this.state.timesClicked)
    },
    _handleButtonReset: function() {
        this.setState({
            timesClicked: 0,
            timesReset: this.state.timesReset + 1
        })
    }, 
    displayLogicGame: function(){
        if (this.state.timesClicked === 0) {
            return <p>You haven't clicked me yet.</p>
        } else if (this.state.timesClicked === 1) {
            return <p>You clicked me once🖕</p>
        } else if (this.state.timesClicked === 2) {
            return <p>You clicked me twice✌️ </p>
        } else {
            return <p>You clicked me {this.state.timesClicked} times.</p>
        }
    },
    displayLogicReset: function() {
      if (this.state.timesReset === 0) {
          return <p></p>
      } else {
          return <p>You reset {this.state.timesReset} times</p>  
      }
    },
    render: function() {
        return (
            <div>
            <h1>Click me, click me!</h1>
            <button onClick={this._handleButtonClick}>I like being clicked, do it.</button>
            <button ref="reset" onClick={this._handleButtonReset} >Play again?</button>
            {this.displayLogicGame()}
            {this.displayLogicReset()}
        </div>
        )
    }
})

module.exports = YouClicked;