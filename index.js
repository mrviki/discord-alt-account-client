// =============== Port ===============
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bot Is Working Well!'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
// =============== Bot ===============

const Discord = require('discord.js-self');
const user_1 = new Discord.Client();
const user_2 = new Discord.Client();
const user_3 = new Discord.Client();
const user_4 = new Discord.Client();
const user_5 = new Discord.Client();
const user_6 = new Discord.Client();
const user_7 = new Discord.Client();
const user_8 = new Discord.Client();
const user_9 = new Discord.Client();
const user_10 = new Discord.Client();
const user_11 = new Discord.Client();
const user_12 = new Discord.Client();
const { id, id_1, error, success } = require('./config.json');

user_1.on('ready', () => {
	console.log(`USER_1 ${user_1.user.tag}!`);
	user_1.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_1.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_2.on('ready', () => {
	console.log(`USER_2 ${user_2.user.tag}!`);
	user_2.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_2.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_3.on('ready', () => {
	console.log(`USER_3 ${user_3.user.tag}!`);
	user_3.user.setPresence({ activity: { name: '' }, status: 'dnd' });
	const channel = user_3.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_4.on('ready', () => {
	console.log(`USER_4 ${user_4.user.tag}!`);
	user_4.user.setPresence({
		activity: { name: 'Escape from Tarkov' },
		status: 'dnd'
	});
	const channel = user_4.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_5.on('ready', () => {
	console.log(`USER_5 ${user_5.user.tag}!`);
	user_5.user.setPresence({
		activity: { name: 'Escape from Tarkov' },
		status: 'dnd'
	});
	const channel = user_5.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_6.on('ready', () => {
	console.log(`USER_6 ${user_6.user.tag}!`);
	user_6.user.setPresence({
		activity: { name: 'Escape from Tarkov' },
		status: 'online'
	});
	const channel = user_6.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_7.on('ready', () => {
	console.log(`USER_7 ${user_7.user.tag}!`);
	user_7.user.setPresence({
		activity: { name: 'Escape from Tarkov' },
		status: 'dnd'
	});
	const channel = user_7.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_8.on('ready', () => {
	console.log(`USER_8 ${user_8.user.tag}!`);
	user_8.user.setPresence({
		activity: { name: 'Escape from Tarkov' },
		status: 'dnd'
	});
	const channel = user_8.channels.cache.get(`${id}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_9.on('ready', () => {
	console.log(`USER_9 ${user_9.user.tag}!`);
	user_9.user.setPresence({
		activity: { name: 'Call of Duty®: Modern Warfare®' },
		status: 'online'
	});
	const channel = user_9.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_10.on('ready', () => {
	console.log(`USER_10 ${user_10.user.tag}!`);
	user_10.user.setPresence({
		activity: { name: 'Call of Duty®: Modern Warfare®' },
		status: 'idle'
	});
	const channel = user_10.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_11.on('ready', () => {
	console.log(`USER_11 ${user_11.user.tag}!`);
	user_11.user.setPresence({
		activity: { name: 'Call of Duty®: Modern Warfare®' },
		status: 'dnd'
	});
	const channel = user_11.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================
user_12.on('ready', () => {
	console.log(`USER_12 ${user_12.user.tag}!`);
	user_12.user.setPresence({ activity: { name: '' }, status: 'idle' });
	const channel = user_12.channels.cache.get(`${id_1}`);
	if (!channel) return console.error(`${error}`);
	channel
		.join()
		.then(connection => {
			connection.voice.setSelfDeaf(false);
			connection.voice.setSelfMute(false);
			console.log(`${success}`);
		})
		.catch(e => {
			console.error(e);
		});
});
// ==============================================

user_1.login(process.enf.token_1);
user_2.login(process.enf.token_2);
user_3.login(process.env.token_3);
user_4.login(process.env.token_4);
user_5.login(process.env.token_5);
user_6.login(process.env.token_6);
user_7.login(process.env.token_7);
user_8.login(process.env.token_8);
user_9.login(process.env.token_9);
user_10.login(process.env.token_10);
user_11.login(process.env.token_11);
user_12.login(process.env.token_12);