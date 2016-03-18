import React from 'react';
// Local Import
import Modal from './ModalBottom.jsx';
import Form from './forms/AddForm.jsx';
import ProjectList from '/client/containers/loadProjects.js';

// Creating main content component
export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$('.modal-trigger').leanModal();
	}

	render() {
		return (
			<div id="home">
				<div className="row">
					<h3>Welcome, {this.props.name}</h3>
					<div className="fixed-action-btn">
						<a className="btn-floating btn-large waves-effect waves-light blue modal-trigger" href="#project-form"><i className="material-icons">add</i></a>
					</div>
					<Modal El={Form} identifier="project-form" title="Add Project" />
					<ProjectList />
				</div>
			</div>
		)
	}
};
