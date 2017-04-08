import React, {Component} from 'react';

class TextInput extends Component {

	
	constructor(props, context) {
		super(props, context);
		this.state = {
			inputText: 'initial state'
		}
	}

	handleChange(e) {
		console.log("iupt changed ", e.target.value);
		this.state.inputText = e.target.value;
	}

	render() {
		return <input type="text" 
		name="uname" 
		placeholder="This is going to be text" 
		value={this.state.inputText} 
		onChange={this.handleChange}
		/>
	}
}

export default TextInput;