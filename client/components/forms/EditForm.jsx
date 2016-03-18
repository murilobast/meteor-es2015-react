import React from 'react';

// Creating edit form component
export default class EditForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			url: ''
		}
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	cleanStates() {
		for (let prop in this.state) {
			this.setState({[prop]: ''});
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		let project = this.state;

		Meteor.call('editProject', project, (err, data) => {
			if (!err) {
				this.cleanStates();
			}
		});
	}

	render() {
		return (
			<form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
				<div className="row">
					<div className="input-field col s6">
						<input id="project-url" name="url" type="text" value={this.state.url} onChange={this.handleChange.bind(this)} />
						<label htmlFor="project-url">Project url</label>
					</div>
				</div>
				<div className="row">
					<button type="submit" className="modal-action modal-close waves-effect waves-light btn blue right">Add</button>
				</div>					
			</form>
		);
	}
}