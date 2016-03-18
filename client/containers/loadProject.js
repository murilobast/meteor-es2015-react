import {composeWithTracker} from 'react-komposer';
// Local Imports
import ProjectPage from '/client/components/ProjectPage.jsx';

function composer(props, onData) {
	const handle = Meteor.subscribe('projects');
	if (handle.ready()) {
		const project = Projects.findOne(props.id);
		onData(null, {project});
	}
}

export default composeWithTracker(composer)(ProjectPage);