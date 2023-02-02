document.getElementById("platform-integration").style.display = "inherit";

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


function status_update(status){
    var status = JSON.parse(status);

    // Media stuff
    switch(status.media.latest){
        case "tv":
            // Trakt
            var media = status.media.tv;
            if(media.now_playing == true) var message1 = "am watching"; else var message1 = 'watched'
            if(media.type == 'episode'){
                // TVDB
                var show_link = "https://www.thetvdb.com/dereferrer/series/" + media.tvdb_id
                var ep_link   = "https://www.thetvdb.com/dereferrer/episode/" + media.ep.tvdb_id
                // IMDb
                // var show_link = "https://www.imdb.com/title/" + media.imdb_id
                // var ep_link   = "https://www.imdb.com/title/" + media.ep.imdb_id
                // TMDb
                // var show_link = "https://www.themoviedb.org/tv/" + media.tmdb_id
                // var ep_link   = show_link + "/season/" + media.ep.season + "/episode/" + media.ep.ep_number  // Janky.
                // TVRage is way too fucking confusing. And doesn't even have full info. So fuck it.
                // Trakt
                // var show_link = "https://www.trakt.tv/shows/" + media.trakt_id
                // var ep_link   = show_link + "/seasons/" + media.ep.season + "/episodes/" + media.ep.ep_number

                var message2 = "<strong><a href=\"" + show_link + "\">" + media.title + "</a></strong> <em>(" + media.year + ")</em><br><a href=\"" + ep_link + "\"><em>" + media.ep.format + "</em> — <em>" + media.ep.title + "</em></a>";

                document.getElementById("nowplaying1").innerHTML = message1 + " a TV show";
                document.getElementById("nowplaying2").innerHTML = message2;
            } else{
                // movie

                // IMDb
                var link = "https://www.imdb.com/title/" + media.imdb_id
                // TVDB
                // var link = "https://www.thetvdb.com/dereferrer/movie/" + media.tvdb_id
                // CANNOT TEST THIS AT THE MOMENT. May or may not be right. Absolutely no docs on the dereferrer.
                // TMDb
                // var link = "https://www.themoviedb.org/movie/" + media.tmdb_id
                // Trakt
                // var link = "https://www.trakt.tv/movie/" + media.trakt_id

                var message2 = "<strong><a href=\"" + link + "\">" + media.title + "</strong></a><br><em>" + media.year + "</em>";
                document.getElementById("nowplaying1").innerHTML = message1 + " a movie";
                document.getElementById("nowplaying2").innerHTML = message2;
            }
            break;
        case "music":
            // ListenBrainz. And I don't care to set up Last.fm here.
            var track = status.media.music;
            if(track.now_playing == true){
                var message1 = "am listening to"
            } else{
                var message1 = "listened to"
            }
    
            if(track.artist_mbids) var artist = "<a href=\"https://musicbrainz.org/artist/" + 
                track.artist_mbids[0] + "\">" + track.artist + "</a>"
                else var artist = track.artist;
            var message2 = "<strong>" + track.title + "</strong><br><em>" + artist + "</em>";
            if(track.album){
                if(track.release_mbid) var album = "<a href=\"https://musicbrainz.org/release/" + 
                    track.release_mbid + "\">" + track.album + "</a>"
                    else var album = track.album;
                message2 += " — <em>" + album + "</em>";
            }

            document.getElementById("nowplaying1").innerHTML = message1;
            document.getElementById("nowplaying2").innerHTML = message2;
            break;
    }

    // Steam integration
    var game = status.steam
    // var icon = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/" + game.appid + "/" + game.img_icon_url + ".jpg"

    var message2 = "<strong><a href=\"https://store.steampowered.com/app/" + game.appid + "/\">" + game.name + "</a></strong><br><em>for " + game.playtime_2weeks / 10 + " hours during the past 2 weeks</em>";
    if(game.playtime_linux_forever){
        message2 += " — <em>" + game.playtime_linux_forever / 10 + " hours overall spent playing this game on Linux</em>";
    }
    
    document.getElementById("steam1").innerHTML = "have been playing some";
    document.getElementById("steam2").innerHTML = message2;

    // Social integration
    switch(status.social.latest){
        case "mk":
            // pain.
            var post = status.social.mk;
            var idontfuckingknow = "am noting ";
            break;
        case "mstdn":
            var post = status.social.mstdn;
            var idontfuckingknow = "am tooting ";
            break;
    }
    if(post.cw){
        idontfuckingknow += "controversies"
        const random = Math.floor(Math.random() * 100) + 1;
        if(random < 20){
            var confirmation = "are you sure (is this what you want?)";
        } else{
            var confirmation = "click here to see...";
        }
        var content = `<strong>Marked as sensitive:</strong> ${post.cw}<br><a href=${post.link}><i>${confirmation}</i></a>`;
    } else if(!(post.content) && (post.attachments)){
        if(length > 1){
            idontfuckingknow += "multiple attachments"
        } else{
            idontfuckingknow += "a media attachment"
        }
        var content = `<em>nothing but attachments.</em><br><a href=${post.link}><i>click here to see them.</i></a>`;
    } else{
        idontfuckingknow += "something";
        var content = text_truncate(post.content, 300);
    }
    var link = post.link;

    document.getElementById("toot1").innerHTML = idontfuckingknow;
    document.getElementById("toot2").innerHTML = content;
    // document.getElementById("toot3").href = post.account.link;
}

// httpGet("http://192.168.2.202:5555/", status_update)
httpGet("https://blobfish.rightmouse.click/", status_update)

// document.getElementById("platformIntegration").hidden = false;

// -------------------------------------------------------------------
// Steam API integration
// -------------------------------------------------------------------
// function are_ya_winning(son){
//     var game = JSON.parse(son);
//     console.log(game);

//     var message2 = "<strong>" + game.name + "</strong><br><em>for " + game.playtime_2weeks / 10 + " hours during the past 2 weeks</em>";
//     if(game.playtime_linux_forever){
//         message2 += " — <em>" + game.playtime_linux_forever / 10 + " hours spent playing this game on Linux</em>";
//     }
    
//     document.getElementById("steam1").innerHTML = "have been playing some";
//     document.getElementById("steam2").innerHTML = message2;
// }

// httpGet("https://api.rightmouse.click/steamPlaying", are_ya_winning);
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Media integration (ListenBrainz, Trakt)
// var playing_now = true;

// function fuck(shit){
//     var listening = JSON.parse(shit).payload.listens[0];
//     try {
//         var trackinfo = listening.track_metadata;
//     } catch(TypeError){
//         playing_now = false;

//         // go through the recent listens, I guess...
//         document.getElementById("nowplaying2").innerHTML = "I am not currently listening to anything right now; I'll show you my most recently listened song, this won't take too long!";
//         httpGet("https://api.listenbrainz.org/1/user/atlas_core/listens?count=1", fuck);
//         return;
//     }

//     if(playing_now){
//         var message1 = "am listening to"
//     } else{
//         var message1 = "listened to"
//     }
    
//     var message2 = "<strong>" + trackinfo.track_name + "</strong><br><em>" + trackinfo.artist_name + "</em>";
//     if(trackinfo.release_name) message2 += " — <em>" + trackinfo.release_name + "</em>";
//     // I think the way ListenBrainz functions at times is that if the music player (e.g. Tauon Music Box) provies the MBID for the recording/release,
//     // it sees no purpose in keeping the album name and ditches it, probably expecting whatever app/client to fetch the album name from that.
//     // I definitely could do that, but it's not worth the extra networking/processing overhead, really.
//     // We're already taking a chance just running JavaScript, for fuck's sake. Some people might not have it enabled.
//     // Hell, I MYSELF don't even have it enabled by default; NoScript blocks JS domains by default unless I manually enable it to.
//     // And considering who might see this website, they might not be fully happy to have to enable it either.

//     document.getElementById("nowplaying1").innerHTML = message1;
//     document.getElementById("nowplaying2").innerHTML = message2;
// }

// function popcorn(data){
//     if(data === "0"){
//         console.log("nothing watching... going to use ListenBrainz instead");

//         document.getElementById("nowplaying1").innerHTML = "am connecting to ListenBrainz";
//         document.getElementById("nowplaying2").innerHTML = "since I am not watching anything on Trakt, I am going to show you what I'm listening to. just give me a second...";
//         httpGet("https://api.listenbrainz.org/1/user/atlas_core/playing-now", fuck)
//         return;
//     }

//     data = JSON.parse(data);

//     var episode = data.episode;
//     if(episode){
//         var message2 = "<strong>" + episode.show + "</strong><br><em>S" + episode.season + "E" + episode.ep + "</em> — <em>" + episode.title + "</em>";

//         document.getElementById("nowplaying1").innerHTML = "am watching a TV show";
//         document.getElementById("nowplaying2").innerHTML = message2;
//     } else{
//         // movie
//         var movie = data.movies[0];
//         var message2 = "<strong>" + movie.title + "</strong><br><em>" + movie.year + "</em>";
//         document.getElementById("nowplaying1").innerHTML = "am watching a movie";
//         document.getElementById("nowplaying2").innerHTML = message2;
//     }
// }

// // httpGet("https://api.rightmouse.click/traktWatching", popcorn);
// httpGet("https://api.listenbrainz.org/1/user/atlas_core/listens?count=1", fuck);
// // Because api.rightmouse.click is down.
// // -------------------------------------------------------------------


// // -------------------------------------------------------------------
// // Mastodon integration
// // -------------------------------------------------------------------
// function toothole(toots){  // toothole because funny or something idrk
//                            // I was tired when doing this part of the code. Don't ask.
//     var toot = JSON.parse(toots)[0];
//     var idontfuckingknow = "am tooting ";
//     if(toot.spoiler_text){
//         idontfuckingknow += "controversies"
//         const random = Math.floor(Math.random() * 100) + 1;
//         if(random < 20){
//             var confirmation = "are you sure (is this what you want?)";
//         } else{
//             var confirmation = "click here to see...";
//         }
//         var content = `<strong>Marked as sensitive:</strong> ${toot.spoiler_text}<br><a href=${toot.url}><i>${confirmation}</i></a>`;
//     } else if(!(toot.content) && (toot.media_attachments)){
//         if(length > 1){
//             idontfuckingknow += "multiple attachments"
//         } else{
//             idontfuckingknow += "a media attachment"
//         }
//         var content = `<em>nothing but attachments.</em><br><a href=${toot.url}><i>click here to see them.</i></a>`;
//     } else{
//         idontfuckingknow += "something";
//         var content = text_truncate(toot.content, 300);
//     }
//     var link = toot.url;

//     document.getElementById("toot1").innerHTML = idontfuckingknow;
//     document.getElementById("toot2").innerHTML = content;
// }

// httpGet("https://linuxrocks.online/api/v1/accounts/107615616350214854/statuses?exclude_reblogs=true&exclude_replies=true", toothole)
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
