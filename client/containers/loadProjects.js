import {composeWithTracker} from 'react-komposer';
// Local Imports
import ProjectList from '/client/components/ProjectList.jsx';

function composer(props, onData) {
	const handle = Meteor.subscribe('projects');
	if (handle.ready()) {
		const projects = Projects.find().fetch();
		onData(null, {projects});
	}
}

export default composeWithTracker(composer)(ProjectList);