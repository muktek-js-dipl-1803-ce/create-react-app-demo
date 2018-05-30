import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  render(){
    let someVal = 'Intelligent Conversations with the animals'

    let listOfAnimalsJSX = [
      <li>Chimpanzees</li>,
      <li>Jaguars</li>,
      <li>Alaskan Sled Dogs</li>,
      <li>My Little Savages</li>
    ]

    return (
      <div>
        <h1>Thank God for {someVal}</h1>
        <ul>
          {listOfAnimalsJSX}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
