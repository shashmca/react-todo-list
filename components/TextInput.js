import React, { Component } from 'react';
import TextDisplay from './TextDisplay'

class TextInput extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: 'initial state'
        }
    }

    handleChange(e) {
        console.log("inupt changed ", e.target.value);
        this.setState({inputText: e.target.value});
    }

    deleteLetter() {
    	this.setState({
    		inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    	})
    }

    render() {
        return <div><input type = "text"
        name = "uname"
        placeholder = "This is going to be text"
        value = { this.state.inputText }
        onChange = { this.handleChange.bind(this) }
        />
        <TextDisplay deleteLetter={this.deleteLetter.bind(this)} text={this.state.inputText} />
        </div>
    }
}

export default TextInput;
