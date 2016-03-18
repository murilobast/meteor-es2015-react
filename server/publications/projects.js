Meteor.publish('projects', () => {
	return Projects.find();
});