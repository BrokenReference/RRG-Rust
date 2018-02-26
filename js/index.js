function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
                videoId: 'gk7JS-Opjkg', // YouTube Video ID
                playlist: 'gk7JS-Opjkg',
                width: "100%",               // Player width (in px)
                height: "200%",              // Player height (in px)
                playerVars: {
                autoplay: 1,        // Auto-play the video on load
                controls: 0,        // Show pause/play buttons in player
                showinfo: 0,        // Hide the video title
                modestbranding: 1,  // Hide the Youtube Logo
                loop: 1,            // Run the video in a loop
                fs: 1,              // Hide the full screen button
                cc_load_policy: 1, // Hide closed captions
                iv_load_policy: 3,  // Hide the Video Annotations
                autohide: 1         // Hide video controls when playing
            },
            events: {
                onReady: function(e) {
                e.target.setVolume(0);
            }
        }
    });
} 

$(document).ready(function () {
    $.getJSON("https://api.battlemetrics.com/servers/1941422", function(data){
        var details = data.data.attributes;
        if (details.status === "online") {
            $("#data-name").text(details.name);
            $("#data-ip").text("Server IP: " + details.ip);
            $("#data-players").text("Players: " + details.players + " / " + details.maxPlayers);
        } else {
            $("#data-name").text("Server Offline");
            $("#data-name").css("color", "red");
            $("#data-name").css("font-size", "25px");
        };
    })
})
