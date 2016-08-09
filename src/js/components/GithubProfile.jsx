var React = require('react');
var $ = require("jquery")

var GithubProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return ({});
    },
    componentDidMount: function() {
        var url = "https://api.github.com/users/" + this.props.username;
        var that = this; // has to be outside the function that we're using it in
        $.getJSON(url, function(result) {
            that.setState({
                username: result.login,
                avatarURL: result.avatar_url,
                bio: result.bio,
                name: result.name
            })
            console.log(result);
        })
    },
    render: function() {
        if (!this.state.username) {
            return (
                <div>
                    <p>LOADING</p>
                </div>
                )
        }
        else {
        return (
            <div className="github-user">
              <img className="github-user__avatar" src={this.state.avatarURL}/>
              <div className="github-user__info">
                <p>{this.state.username} ({this.state.name})</p>
                <p>{this.state.bio}</p>
              </div> 
            </div>
        );
        }
    }
});

module.exports = GithubProfile;