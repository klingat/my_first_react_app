var React = require('react');

var CharacterLimit = React.createClass({
    propTypes: {
        limit: React.PropTypes.number.isRequired 
    },
    getInitialState: function() {
        return {
            currentInput: ""
        }
    },
    _handleInput: function(event) {
        // if (this.state.currentInput.length < this.props.limit)
        
        if (event.target.value.length <= this.props.limit) {
            this.setState({
                currentInput: event.target.value
            })
        }
        //no need for else
    },
    characterCount: function() {
        var str = this.state.currentInput.length
        return <p>Characters remaining: {this.props.limit - str} </p>
    },
    render: function() {
        return (
            <div>
                <h1>Character Limit</h1>
                <input type="text" onInput={this._handleInput} value={this.state.currentInput}/>
                {this.characterCount()}
                
            </div>
        )
    }
})

module.exports = CharacterLimit;