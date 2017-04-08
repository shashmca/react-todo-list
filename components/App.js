import React, { Component } from 'react';
import TextInput from './TextInput'

class App extends Component {
    render() {
        return ( 
        	<div className="app" >
            	<h1> This is a App Component </h1>
            	<p> This is another line </p>
            	<TextInput />
            </div>
        )
    }
}

export default App;
