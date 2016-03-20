import cpuStats from 'cpu-stats';
import os from 'os';

let getUsage = (streamId) => {
	cpuStats(1000, function (error, result) {
		var usage = {
			total: {},
			cores: [],
			mem: {}
		}

		for (var i = 0; i < result.length; i++) {
			for (type in result[i]) {
				if (i === 0) {
					usage.total[type] = result[i][type];
				} else {
					usage.total[type] += result[i][type];
				}
				result[i][type] = ~~result[i][type];
			}

			result[i]['name'] = 'cpu ' + i;
			usage.cores.push(result[i])
		}

		for (type in usage.total) {
			usage.total[type] /= result.length;
			usage.total[type] = ~~usage.total[type];
		}

		usage.mem['free'] = {};
		usage.mem.free = {
			gbs: (os.freemem() / Math.pow(10, 9)).toFixed(3),
			percent: ~~((os.freemem() / os.totalmem()) * 100)
		}
		usage.mem['used'] = {};
		usage.mem.used = {
			gbs: ((os.totalmem() - os.freemem()) / Math.pow(10, 9)).toFixed(3),
			percent: ~~(((os.totalmem() - os.freemem()) / os.totalmem()) * 100)
		}
		usage.mem['total'] = {};
		usage.mem.total = {
			gbs: (os.totalmem() / Math.pow(10, 9)).toFixed(3),
			percent: 100
		}

		Streamy.broadcast(streamId, {data: usage});
	});
}

Projects.find().fetch().forEach(function (project) {
	console.log('Starting usage log for ' + project.name + '. ID: ' + project._id);
	Streamy.on(project._id, function(data, from) {
		Streamy.emit('pong', {}, from);
	});

	// Sending usage data to client each 5 seconds
	setInterval(() => {
		getUsage(project._id)
	}, 2000);
});