import cmd from 'node-cmd';
import {spawn} from 'child_process';

// Defining ssh instance
let sh = spawn('bash');
sh.stdout.on('data', function(data) {
	let key = ~(new Date() - ~~(Math.random() * 1000)) % 10000;
	Streamy.broadcast('console', {data: data.toString(), key: key, type: 'output'});
});

sh.stderr.on('data', function(data) {
	let key = ~(new Date() - ~~(Math.random() * 1000)) % 10000;
	Streamy.broadcast('console', {data: data.toString(), key: key, type: 'error'});
});

sh.on('exit', function (code) {
	let key = ~(new Date() - ~~(Math.random() * 1000)) % 10000;
	Streamy.broadcast('console', {data: code, key: key, type: 'exit'});
});

Meteor.methods({
	runCommand: (cmdLine) => {
		let key = ~(new Date() - ~~(Math.random() * 1000)) % 10000;
		sh.stdin.write(cmdLine + '\n');
		Streamy.broadcast('console', {data: cmdLine, key: key, type: 'input'});
	}
});