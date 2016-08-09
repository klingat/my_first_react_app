var React = require('react');

var CharacterCount = React.createClass({
    getInitialState: function() {
        return {
            currentInput: ""
        }
    },
    _handleInput: function(event) {
        var value = event.target.value;
        // continue here...
        console.log(value);

        this.setState({
            currentInput: value
        })
    },
    characterCount: function() {
        var str = this.state.currentInput.length
        return <p>The character count is: {str} </p>
    },
    render: function() {
        return (
            <div>
                <h1>Character Count</h1>
                <input type="text" onInput={this._handleInput}/>
                {this.characterCount()}
            </div>
        )
    }
})

module.exports = CharacterCount;