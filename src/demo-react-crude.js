
import React from 'react';
import ReactDOM from 'react-dom';


const TitleComponent = React.createElement('h2', {}, 'Hello React')

const ParagraphComponent = function(d) { return React.createElement('p', {style: {color: 'salmon'}}, d )}

const TopLevelReactComponent = React.createElement('div', {}, [
  TitleComponent,
  React.createElement('hr'),
  React.createElement('div', {},
    ['wwowow', 'pioasfda', 'safionasf'].map((word)=> ParagraphComponent(word))
 )
])

ReactDOM.render(TopLevelReactComponent, document.getElementById('root'));
