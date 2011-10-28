var eyes = require('eyes');
// Copyright 2010 Matthew Wood
//
// Licensed under the Apache License, Version 2.0
var Song = exports.Song = function(release,lockertrack) {

	var song = this;

	var tags = {};
    
	this.artist = lockertrack.track.artist.appearsAs;
	this.name = lockertrack.track.title;
	this.album = release.title;
	this.dateAdded = new Date();
	this.dateModified = new Date();
    this.size = 0;
    this.time = 0;
    this.file = '';

    

};

exports.parseAllSongs = function(releases) {
	var songs = [];


	for (var i = 0; i < releases.length; i++) {
        for(var j = 0; j < releases[i].lockerTracks.lockerTrack.length; j++){
            songs.push(new Song(releases[i].release,releases[i].lockerTracks.lockerTrack[j]));
        }
	}

	return songs;
};

