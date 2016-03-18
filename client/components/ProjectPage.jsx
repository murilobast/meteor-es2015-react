import React from 'react';
// Local import
import EditForm from './forms/EditForm.jsx';

// Creating project page component
export default class ProjectPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let project = this.props.project;

		return (
			<div id="project">
				<div className="row">
					<h3>{project.name}</h3>
				</div>
				<div className="row">
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