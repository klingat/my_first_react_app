var React = require('react');
var ImageCaption = require("./ImageCaption.jsx");
var Layout = require("./Layout.jsx");
var GuessTheNumber = require("./GuessTheNumber.jsx");
var YouClicked = require("./YouClicked.jsx");
var CharacterCount = require("./CharacterCount.jsx");
var CharacterLimit = require("./CharacterLimit.jsx");
var NumberGuessing = require("./NumberGuessing.jsx");
var GithubProfile = require("./GithubProfile.jsx");


var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

var App = React.createClass({
  renderImage: function(imageList) {
  return (
    <div>
      {imageList.map(imageObj => <ImageCaption key={imageObj.id} source={imageObj.source} text={imageObj.text} />)}
    </div>
    );
  },
  render: function() {
    return (
      <main>
        <h1>💸💸My first React App💸💸</h1>
        <hr/>
        <h2>testing ImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Rainbow-tail kitty!"/>
        <hr/>
        {this.renderImage(imageList)}
        <hr/>
        <h2>Testing Layout</h2>
        <Layout>
          <h2>About Us</h2>
          <p>We are <a href="/">React</a> Developers!</p>
        </Layout>
        <div>
        <hr/>
          <h1>GUESS THE NUMBER</h1>
          <GuessTheNumber/>
          <hr/>
          <h1>🤑🤑🤑🤑🤑🤑🤑</h1>
          <YouClicked/>
          <hr/>
          <h1>👄👄👄👄👄👄👄</h1>
          <CharacterCount/>
          <hr/>
          <h1>🕵🕵🕵🕵🕵🕵🕵</h1>
          <CharacterLimit limit={10}/>
          <hr/>
          <h1>🔥🔥🔥🔥🔥🔥🔥</h1>
          <NumberGuessing/>
          <hr/>
          <h1>🏓🏓🏓🏓🏓🏓🏓</h1>
          <h1>THE COOLEST GITHUB USERS</h1>
          <hr/>
          <GithubProfile username={"gaearon"}/>
          <hr/>
          <GithubProfile username={"klingat"}/>
          <hr/>
          <GithubProfile username={"decodeMTL"}/>
          <hr/>
          <GithubProfile username={"cbroomhead"}/>
          <hr/>
          <GithubProfile username={"ziad-saab"}/>
          <hr/>
          <GithubProfile username={"harrisrobin"}/>
          <hr/>
          <h1>💆🏼💆🏼💆🏼💆🏼💆🏼💆🏼💆🏼</h1>
          
        </div>
      </main>
    );
  }
});


module.exports = App;