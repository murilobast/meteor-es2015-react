import Future from 'fibers/future';

Meteor.methods({
	insertProject: (obj) => {
		let future = new Future();
		
		Projects.insert(obj, function (err, data) {
			if (!err) {
				return future.return(data);
			}
			return future.return(err);
		});

		return future.wait();
	}
});