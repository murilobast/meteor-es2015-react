Streamy.on('console', function(data, from) {
	Streamy.emit('pong', {}, from);
});