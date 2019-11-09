import { domainToASCII } from 'url';

var QRCode = require('qrcode')

function initYT() {
  window.gapi.client.setApiKey("AIzaSyBS4PMOVmYxKrJF8kiuGVALbIqGDJIi64k");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
             .then(function() { console.log("GAPI client loaded for API"); },
                   function(err) { console.error("Error loading GAPI client for API", err); });
}

function getQRForVideos(videos, canvas, divid) {      
    var vids=[];
    console.log("input videos ", videos);
    for (var url of videos) {
      console.log("video ...", url);
      var video_id = url.trim();

      if (video_id.indexOf('v=') >0) {
         video_id = url.split('v=')[1];
      } else {
         var idx = video_id.indexOf("youtu.be/");
         if (idx > 0) {
            video_id = video_id.substr(idx+9); 
         }
      }
      console.log("vido is ", video_id);

      var ampersandPosition = video_id.indexOf('&');
      if (ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
      }
      vids.push(video_id);
    }

    var url = 'https://mymedia.tv/?v=' + vids.join('.');
    console.log("share URL ", url);

    $(divid).html(`<h3>Scan it or <a href="${url}">watch videos here</a> </h3>`);

    QRCode.toCanvas(canvas,  url, function (error) {
        if (error) console.error(error)
        console.log('success!');
    });
}

function YTDurationToSeconds(duration) {
  var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match.slice(1).map(function(x) {
    if (x != null) {
        return x.replace(/\D/, '');
    }
  });

  var hours = (parseInt(match[0]) || 0) +'';
  var minutes = (parseInt(match[1]) || 0) +'';
  var seconds = (parseInt(match[2]) || 0) + '';

  minutes = minutes.padStart(2, '0');
  seconds = seconds.padStart(2, '0');
  
  var dt = minutes + ':' + seconds;
  if (hours !== '0') {
      dt = hours + ":" +dt;
  }
  return dt;
}

class YTManager {
  constructor(props) {
    this.videos = props.videos.split('.');
    this.divid = props.divid;
    this.createPlayer();
    this.getSnippets();
  }
/*
https://www.googleapis.com/youtube/v3/videos?key=[YOUR API KEY
 HERE]&fields=items(snippet(title,tags,channelTitle,publishedAt),
 statistics(viewCount))&part=snippet,statistics&id=[VIDEOID]*
*/

    playVideo(alink) {
	console.log(alink, " in YTmanager ...");
	//var index = parseInt(alink.data('idx'));
	//this.player.loadVideoById(this.videos[index]);
	this.player.loadVideoById(alink);
	this.player.playVideo();
    }
  getSnippets() {
    var api_key = 'AIzaSyBS4PMOVmYxKrJF8kiuGVALbIqGDJIi64k';
    var id_query = "id=" + this.videos.join('%2C');
    var url = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&"
          + id_query + "&key=" + api_key;

    $.ajax({url: url}).done(data => {
        console.log(data);
	
        for (var index=0; index<data.items.length; index++) {
	    var video = data.items[index];
               var s = video.snippet;
               var title = s.title;
               var tn_img = s.thumbnails.medium.url;
               var vid = video.id;
               var duration = YTDurationToSeconds(video.contentDetails.duration);


	    var div = document.createElement('div');
	    $(div).append(`<h6> ${title}</h6>`);
	    var a = document.createElement('a');
	    var img = $(`<img src="${tn_img}" data-id="${vid}"width="210" heigth="120">`);
	    $(a).attr('href','#');
	    $(a).click(e => {
		e.preventDefault();
		//console.log(e, " and ", e.target);
		var vvid = $(e.target).data('id');
		this.player.loadVideoById(vvid);
		this.player.playVideo();
	    });
	    $(a).append(img);
	    $(div).append($(a));
	    $(div).append(`<p>Views: ${video.statistics.viewCount}, Duration: ${duration}</p>`);
	    $('#snippet').append($(div));
	}
    
      });
  }

/*
default: {url: "https://i.ytimg.com/vi/f2KhFEO_hJo/default.jpg", width: 120, height: 90}
high: {url: "https://i.ytimg.com/vi/f2KhFEO_hJo/hqdefault.jpg", width: 480, height: 360}
maxres: {url: "https://i.ytimg.com/vi/f2KhFEO_hJo/maxresdefault.jpg", width: 1280, height: 720}
medium: {url: "https://i.ytimg.com/vi/f2KhFEO_hJo/mqdefault.jpg", width: 320, height: 180}
standard: {url: "https://i.ytimg.com/vi/f2KhFEO_hJo/sddefault.jpg", w
*/
    
  createPlayer() {
    if (this.videos) {
        var vid = this.videos[0];

        this.player = new window.YT.Player(this.divid, {
          height: '390',
          width: '640',
          
          videoId: vid,
          enablejsapi: 1, 
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
          }
        });
    } else {

    }
  }

  onPlayerReady(event) {
        event.target.playVideo();
  }
  onPlayerStateChange(event) {
    console.log(event.data);
    if (event.data == YT.PlayerState.PLAYING) {
      window.postMessage("play", "*");
    } else {
      window.postMessage("play", "*");
      if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(event.data);
      }
    }
  }

   stopVideo() {
     player.stopVideo();
   }
}

export { YTManager, initYT, getQRForVideos }
