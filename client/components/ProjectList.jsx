import React from 'react';

// Defining Card Item component
export class CardItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		let project = this.props.project;
		Meteor.call('removeProject', project._id);
	}

	render() {
		let project = this.props.project;
		return (
			<div className="col s12 m4">
					<div className="card small hoverable">
						<a href={"/project/" + project._id}>
							<div className="card-image card-image waves-effect waves-block waves-light">
								<img src="http://materializecss.com/images/office.jpg" />
							</div>
						</a>
						<div className="card-content">
							<a href={"/project/" + project._id}>
								<span className="card-title activator grey-text text-darken-4">
									{project.name}
									<i className="material-icons right">more_vert</i>
								</span>
							</a>
							<p>{project.desc}</p>
						</div>
						<div className="card-reveal">
							<span className="card-title activator grey-text text-darken-4">Ações</span>
							<div className="card-action">
								<a className="waves-effect waves-light btn-flat red grey-text text-lighten-4" onClick={this.handleClick.bind(this)}>Delete</a>
								<a className="waves-effect waves-light btn-flat grey grey-text lighten-2 text-darken-4 right">Save</a>
							</div>
						</div>
				</div>
			</div>
		);
	}
}

// Defining Project List component
export class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let projects = this.props.projects;

		if (projects.length) {
			return (
				<div className="row">
					{projects.map((project) => (
						<CardItem project={project} key={project._id} />
					))}
				</div>
			);
		}
		return (
			<p className="flow-text">Click in the "+" button to add a new Project.</p>
		)
	}
}

export default ProjectList;