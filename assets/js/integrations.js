function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

document.getElementById("platformIntegration").hidden = false;

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
    
    document.getElementById("steam1").innerHTML = "have recently been playing:";
    document.getElementById("steam2").innerHTML = message2;
}

httpGet("https://api.rightmouse.click/steamPlaying", are_ya_winning);
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Media integration (ListenBrainz, Trakt)
var playing_now = true;

function fuck(shit){
    var listening = JSON.parse(shit).payload.listens[0];
    try {
        var trackinfo = listening.track_metadata;
    } catch(TypeError){
        playing_now = false;

        // go through the recent listens, I guess...
        httpGet("https://api.listenbrainz.org/1/user/atlas_core/listens?count=1", fuck);
        return;
    }

    if(playing_now){
        var message1 = "am currently listening to:"
    } else{
        var message1 = "recently listened to:"
    }
    var message2 = "<strong>" + trackinfo.track_name + "</strong><br><em>" + trackinfo.artist_name + "</em> — <em>" + trackinfo.release_name + "</em>";

    document.getElementById("nowplaying1").innerHTML = message1;
    document.getElementById("nowplaying2").innerHTML = message2;
}

function popcorn(data){
    if(data === "0"){
        console.log("nothing watching... going to use ListenBrainz instead");

        httpGet("https://api.listenbrainz.org/1/user/atlas_core/playing-now", fuck)
        return;
    }

    data = JSON.parse(data);

    var episode = data.episode;
    if(episode){
        var message2 = "<strong>" + episode.show + "</strong><br><em>S" + episode.season + "E" + episode.ep + "</em> — <em>" + episode.title + "</em>";

        document.getElementById("nowplaying1").innerHTML = "am currently watching:";
        document.getElementById("nowplaying2").innerHTML = message2;
    } else{
        // movie
        var movie = data.movies[0];
        var message2 = "<strong>" + movie.title + "</strong><br><em>" + movie.year + "</em>";
        document.getElementById("nowplaying1").innerHTML = "am currently watching:";
        document.getElementById("nowplaying2").innerHTML = message2;
    }
}

httpGet("https://api.rightmouse.click/traktWatching", popcorn);
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Mastodon integration
// -------------------------------------------------------------------
function toothole(toots){  // toothole because funny or something idrk
    var toot = JSON.parse(toots)[0];  // 1 is media only, 9 is something with a CW
    var idontfuckingknow = "recently tooted ";
    if(toot.spoiler_text){
        idontfuckingknow += "something controversial"
        var content = "<strong>Marked as sensitive:</strong> " + toot.spoiler_text + "<br><i>click \"view post\" to see...</i>";
    } else if(!(toot.content) && (toot.media_attachments)){
        if(length > 1){
            idontfuckingknow += "attachments"
        } else{
            idontfuckingknow += "an attachment"
        }
        var content = "<em>nothing but attachments.</em>" + "<br><i>click \"view post\" to see them.</i>";
    } else{
        idontfuckingknow += "something";
        var content = toot.content;
    }
    var link = toot.url;

    document.getElementById("toot1").innerHTML = idontfuckingknow + ":";
    document.getElementById("toot2").innerHTML = content;
}

httpGet("https://linuxrocks.online/api/v1/accounts/107615616350214854/statuses?exclude_reblogs=true&exclude_replies=true", toothole);
// -------------------------------------------------------------------
