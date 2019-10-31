
var QRCode = require('qrcode')

function getQRForVideos(videos, canvas) {
    var url = 'http://weidongshao.github.io/thepoint-mandarin/yt.html?v=' + videos.join('.');
    

    console.log(url);
    
    QRCode.toCanvas(canvas,  url, function (error) {
        if (error) console.error(error)
        console.log('success!');
    });
}

class YTManager {
  constructor(props) {
    this.videos = props.videos.split('.');
    this.divid = props.divid;
    this.createPlayer();
  }

  createPlayer() {
    if (this.videos) {
        var vid = this.videos[0];

        player = new window.YT.Player(this.divid, {
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
      window.ReactNativeWebView.postMessage(event.data);
    }
  }

   stopVideo() {
     player.stopVideo();
   }
}

export { YTManager, getQRForVideos }