import React from 'react';

// Creating Modal component
export default class AddForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			desc: ''
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

		Meteor.call('insertProject', project, (err, data) => {
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
						<input id="project-name" name="name" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
						<label htmlFor="project-name">Project name</label>
					</div>
					<div className="input-field col s6">
						<input id="project-desc" name="desc" type="text" value={this.state.desc} onChange={this.handleChange.bind(this)} />
						<label htmlFor="project-desc">Project description</label>
					</div>
				</div>
				<div className="row">
					<button type="submit" className="modal-action modal-close waves-effect waves-light btn blue right">Add</button>
				</div>					
			</form>
		);
	}
}