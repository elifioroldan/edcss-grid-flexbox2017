!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){function showVideo(mq){mq.matches?youtubeWrapper.forEach(function(video,index){video.innerHTML='<iframe src="https://www.youtube.com/embed/'+youtubeIds[index]+'" frameborder="0"></iframe>'}):youtubeWrapper.forEach(function(video,index){video.innerHTML='<a href="https://www.youtube.com/watch?v='+youtubeIds[index]+'" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>'})}var d=document,mq=window.matchMedia("(min-width: 64em)"),youtube=d.querySelectorAll(".Youtube"),youtubeWrapper=d.querySelectorAll(".Youtube-wrapper"),youtubeIds=[];youtube.forEach(function(video,index){return youtubeIds[index]=video.id}),console.log(youtubeIds),mq.addListener(showVideo),showVideo(mq)}},{}],2:[function(require,module,exports){"use strict";(0,function(obj){return obj&&obj.__esModule?obj:{default:obj}}(require("./components/youtube_video")).default)()},{"./components/youtube_video":1}]},{},[2]);