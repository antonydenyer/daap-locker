var eyes = require('eyes'),
api = require('7digital-api'),
consumerkey = 'YOUR_KEY_HERE',
consumersecret = 'YOUR_SECRET_HERE',
daap = require('../../daap.js/lib/daap.js'),
song = require('./song'),
config = require('./config');
var user = new api.User();
user.getLocker({
	accesstoken: config.token,
	accesssecret: config.secret,
	pageSize: 2
},
function(err, result) {
//	eyes.inspect(result);
	daap.createServer({
		advertise: true,
		songs: song.parseAllSongs(result.locker.lockerReleases.lockerRelease)
	}).listen(3689);

});

