import React from 'react';
// Local import
import EditForm from './forms/EditForm.jsx';
import Monitor from './Monitor.jsx';

// Creating project page component
export default class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		}
	}

	render() {
		let project = this.props.project;

		return (
			<div id="project">
				<div className="row">
					<h3>{project.name}</h3>
				</div>
				<div className="row">
					<Monitor id={project._id} />
					<EditForm />
					<a className="waves-effect btn grey-text text-lighten-4 center-align">
						Build
						<i className="material-icons right">done</i>
					</a>
				</div>
			</div>
		)
	}
};