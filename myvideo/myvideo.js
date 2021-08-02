<script>
    var myvid = document.getElementById('myVideo');
    var myvids = [
      "vid/Design.mp4",
      "vid/Space-Tunnel.mp4", 
      "vid/Tunnel-.mp4",
      "vid/Code.1.0.1.0.0.mp4",
      "vid/Wlan.mp4",
      "vid/source-code.mp4", 
      "vid/globe-network.mp4",
      "vid/Glitch.mp4",
      "vid/Futuristic.mp4",
      "vid/Digital.mp4",
      "vid/Matrix.mp4",
      "vid/Code.mp4",
      "vid/Binary.mp4",
      "vid/The-Matrix.mp4"
    ];
    var activeVideo = 0;
    
    myvid.addEventListener('ended', function(e) {
      // update the active video index
      activeVideo = (++activeVideo) % myvids.length;
    
      // update the video source and play
      myvid.src = myvids[activeVideo];
      myvid.play();
    });
</script>
