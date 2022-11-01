function httpGet(theUrl, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl);
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.send();
}

text_truncate = function(str, length, ending){
    // https://www.w3resource.com/javascript-exercises/javascript-string-exercise-16.php
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };


// document.getElementById("platformIntegration").hidden = false;

// -------------------------------------------------------------------
// Steam API integration
// -------------------------------------------------------------------
function are_ya_winning(son){
    var game = JSON.parse(son);
    console.log(game);

    var message2 = "<strong>" + game.name + "</strong><br><em>for " + game.playtime_2weeks / 10 + " hours during the past 2 weeks</em>";
    if(game.playtime_linux_forever){
        message2 += " — <em>" + game.playtime_linux_forever / 10 + " hours spent playing this game on Linux</em>";
    }
    
    document.getElementById("steam1").innerHTML = "have been playing some";
    document.getElementById("steam2").innerHTML = message2;
}

httpGet("https://api.rightmouse.click/steamPlaying", are_ya_winning);
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Media integration (ListenBrainz, Trakt)
var playing_now = true;

function fuck(shit){
    var listening = JSON.parse(shit).payload.listens[0];
    // try {
        // var trackinfo = listening.track_metadata;
    // } catch(TypeError){
        playing_now = false;

        // go through the recent listens, I guess...
        document.getElementById("nowplaying2").innerHTML = "I am not currently listening to anything right now; I'll show you my most recently listened song, this won't take too long!";
        httpGet("https://api.listenbrainz.org/1/user/atlas_core/listens?count=1", fuck);
        return;
    // }

    if(playing_now){
        var message1 = "am listening to"
    } else{
        var message1 = "listened to"
    }
    
    var message2 = "<strong>" + trackinfo.track_name + "</strong><br><em>" + trackinfo.artist_name + "</em>";
    if(trackinfo.release_name) message2 += " — <em>" + trackinfo.release_name + "</em>";
    // I think the way ListenBrainz functions at times is that if the music player (e.g. Tauon Music Box) provies the MBID for the recording/release,
    // it sees no purpose in keeping the album name and ditches it, probably expecting whatever app/client to fetch the album name from that.
    // I definitely could do that, but it's not worth the extra networking/processing overhead, really.
    // We're already taking a chance just running JavaScript, for fuck's sake. Some people might not have it enabled.
    // Hell, I MYSELF don't even have it enabled by default; NoScript blocks JS domains by default unless I manually enable it to.
    // And considering who might see this website, they might not be fully happy to have to enable it either.

    document.getElementById("nowplaying1").innerHTML = message1;
    document.getElementById("nowplaying2").innerHTML = message2;
}

function popcorn(data){
    if(data === "0"){
        console.log("nothing watching... going to use ListenBrainz instead");

        document.getElementById("nowplaying1").innerHTML = "am connecting to ListenBrainz";
        document.getElementById("nowplaying2").innerHTML = "since I am not watching anything on Trakt, I am going to show you what I'm listening to. just give me a second...";
        httpGet("https://api.listenbrainz.org/1/user/atlas_core/playing-now", fuck)
        return;
    }

    data = JSON.parse(data);

    var episode = data.episode;
    if(episode){
        var message2 = "<strong>" + episode.show + "</strong><br><em>S" + episode.season + "E" + episode.ep + "</em> — <em>" + episode.title + "</em>";

        document.getElementById("nowplaying1").innerHTML = "am watching a TV show";
        document.getElementById("nowplaying2").innerHTML = message2;
    } else{
        // movie
        var movie = data.movies[0];
        var message2 = "<strong>" + movie.title + "</strong><br><em>" + movie.year + "</em>";
        document.getElementById("nowplaying1").innerHTML = "am watching a movie";
        document.getElementById("nowplaying2").innerHTML = message2;
    }
}

httpGet("https://api.rightmouse.click/traktWatching", popcorn);
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Mastodon integration
// -------------------------------------------------------------------
function toothole(toots){  // toothole because funny or something idrk
                           // I was tired when doing this part of the code. Don't ask.
    var toot = JSON.parse(toots)[0];
    var idontfuckingknow = "am tooting ";
    if(toot.spoiler_text){
        idontfuckingknow += "controversies"
        const random = Math.floor(Math.random() * 100) + 1;
        if(random < 20){
            var confirmation = "are you sure (is this what you want?)";
        } else{
            var confirmation = "click here to see...";
        }
        var content = `<strong>Marked as sensitive:</strong> ${toot.spoiler_text}<br><a href=${toot.url}><i>${confirmation}</i></a>`;
    } else if(!(toot.content) && (toot.media_attachments)){
        if(length > 1){
            idontfuckingknow += "multiple attachments"
        } else{
            idontfuckingknow += "a media attachment"
        }
        var content = `<em>nothing but attachments.</em><br><a href=${toot.url}><i>click here to see them.</i></a>`;
    } else{
        idontfuckingknow += "something";
        var content = text_truncate(toot.content, 300);
    }
    var link = toot.url;

    document.getElementById("toot1").innerHTML = idontfuckingknow;
    document.getElementById("toot2").innerHTML = content;
}

httpGet("https://linuxrocks.online/api/v1/accounts/107615616350214854/statuses?exclude_reblogs=true&exclude_replies=true", toothole);
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// Blog integration
// -------------------------------------------------------------------
// function blogthing(posts){
//     console.log(posts)
//     var thing = document.getElementById("blog-element").cloneNode(true);
//     document.getElementById("blog-element").remove()
//     thing.querySelector("#blog-title").innerHTML = "Testing thing";
//     thing.querySelector("#blog-desc").innerHTML = "This is a testing description, as well.";
//     thing.querySelector("#blog-link").href = "https://linuxrocks.online";
//     document.getElementById("blog-row").innerHTML += thing.outerHTML
// }
// httpGet("https://blog.rightmouse.click/rss", blogthing);
// -------------------------------------------------------------------
