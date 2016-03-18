import Future from 'fibers/future';

Meteor.methods({
	removeProject: (_id) => {
		let future = new Future();
		
		Projects.remove(_id, function (err, data) {
			if (!err) {
				return future.return(data);
			}
			return future.return(err);
		});

		return future.wait();
	}
});