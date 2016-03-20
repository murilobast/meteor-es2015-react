import React from 'react';

// Creating project page component
export default class Console extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [],
			command: ''
		}
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
  }

  cleanStates() {
  	for (let prop in this.state) {
  		if (typeof this.state[prop] === 'string')
  			this.setState({[prop]: ''});
  	}
  }

	handleSubmit(e) {
		e.preventDefault();

		Meteor.call('runCommand', this.state.command, (err, data) => {
			if (!err) {
				this.cleanStates();
			}
		});
	}

	componentDidMount() {
		Streamy.on('console', (data) => {
			this.setState({messages: [...this.state.messages, data]});
			setTimeout(() => {
				$('.consoleWindow').scrollTop($('.consoleWindow')[0].scrollHeight);
			}, 100);
		});
	}

	render() {
		let messages = this.state.messages;
		let project = this.props.project;

		return (
			<div id="console">
				<div className="row">
					<div className="consoleWindow">
						{messages.map((message) => (
							<p key={message.key} className={message.type}>{message.data}</p>
						))}
					</div>
					<form className="con s12" onSubmit={this.handleSubmit.bind(this)}>
						<div className="input-field">
							<input onChange={this.handleChange.bind(this)} name="command" type="text" value={this.state.command} />
						</div>
					</form>
				</div>
			</div>
		)
	}
};