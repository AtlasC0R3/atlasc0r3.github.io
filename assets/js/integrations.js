document.getElementById("platform-integration").style.display = "inherit";

function httpOops(url){
    console.log(url)
}

function httpGet(theUrl, callback, fallback=httpOops){
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl);
    xmlHttp.timeout = 3000;
    xmlHttp.onload = function() { 
        if (xmlHttp.readyState === 4){
            if (xmlHttp.status === 200) {
                console.log('HTTP fetch successful');
                callback(xmlHttp.responseText)
            } else {
                console.log('HTTP fetch failed. Yikes.');
                fallback(theUrl)
            }
        }
    }
    xmlHttp.ontimeout = xmlHttp.onload;  // do I know what's going on here? absolutely the fuck not. does it work? sure
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

function setRowBehind(rowId1, rowId2) {
    var row1 = document.getElementById(rowId1);
    var row2 = document.getElementById(rowId2);

    // Get the parent node (tbody) of the rows
    var tbody = row1.parentNode;

    // Insert row1 before row2
    tbody.insertBefore(row1, row2);
}

function setRowAsFirst(rowId) {
    var row = document.getElementById(rowId);

    // Get the parent node (tbody) of the row
    var tbody = row.parentNode;

    // Insert row at the beginning of the tbody
    tbody.insertBefore(row, tbody.firstChild);
}

function setRowAsLast(rowId) {
    var row = document.getElementById(rowId);

    // Get the parent node (tbody) of the row
    var tbody = row.parentNode;

    // Append row to the end of the tbody
    tbody.appendChild(row);
}

function changeHeaderType(headerId, newType) {
    var header = document.getElementById(headerId);

    if (header) {
        var newHeader = document.createElement(newType);
        newHeader.innerHTML = header.innerHTML;

        var parent = header.parentNode;
        parent.replaceChild(newHeader, header);
    }
}

function isTimestampOver14DaysAgo(timestamp) {
  var currentDate = new Date(); // Get the current date and time
  var twoWeeksAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000); // Calculate the date 14 days ago
  
  var timestampDate = new Date(timestamp * 1000); // Convert the Unix timestamp to milliseconds
  
  return timestampDate < twoWeeksAgo; // Compare the timestamp date with twoWeeksAgo and return the result
}

function socialPost(post, header, notice_text, headerId, contentId, noticeId){
    if(post.cw){
        header += "controversies"
        const random = Math.floor(Math.random() * 100) + 1;
        if(random < 20){
            var confirmation = "are you sure (is this what you want?)";
        } else{
            var confirmation = "click here to see...";
        }
        var content = `<strong>Marked as sensitive:</strong> ${post.cw}<br><a href=${post.link}><i>${confirmation}</i></a>`;
    } else if(!(post.content) && (post.attachments)){
        if(length > 1){
            header += "multiple attachments"
        } else{
            header += "a media attachment"
        }
        var content = `<em>nothing but attachments.</em><br><a href=${post.link}><i>click here to see them.</i></a>`;
    } else{
        header += "something";
        var content = text_truncate(post.content, 300);
    }
    var link = post.link;

    document.getElementById(headerId).innerHTML = header;
    document.getElementById(contentId).innerHTML = content;
    // document.getElementById("toot3").href = post.account.link;
    document.getElementById(noticeId).innerHTML += notice_text;
    document.getElementById(noticeId).style.display = "inherit";
}

function status_update(status){
    var status = JSON.parse(status);

    // Media stuff

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

    if(track.duration_ms) message2 += " <br><small><em>" + convertSecondsToMinutesAndSeconds(track.duration_ms / 1000) + "</em></small>";

    document.getElementById("nowplaying1").innerHTML = message1;
    document.getElementById("nowplaying2").innerHTML = message2;

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

        document.getElementById("nowplaying-4").innerHTML = message1 + " a TV show";
        document.getElementById("nowplaying-5").innerHTML = message2;
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
        document.getElementById("nowplaying-4").innerHTML = message1 + " a movie";
        document.getElementById("nowplaying-5").innerHTML = message2;
    }

    var musicColumn = document.getElementById("music");
    var tvColumn    = document.getElementById("tv");
    switch(status.media.latest){
        case "tv":
            // Trakt data is more recent than music data
            setRowAsFirst("tv")
            setRowAsLast("music")
            setRowBehind("music", "social-alt")
            setRowBehind("music", "empty-spaces")
            changeHeaderType("nowplaying1", "h5")
            var thirdElement = "music"
            break;
        case "music":
            // music data is more recent than Trakt data
            setRowAsFirst("music")
            setRowAsLast("tv")
            setRowBehind("tv", "social-alt")
            setRowBehind("tv", "empty-spaces")
            changeHeaderType("nowplaying-4", "h5")
            var thirdElement = "tv"
            break;
    }

    // Steam integration
    var game = status.steam
    // var icon = "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/" + game.appid + "/" + game.img_icon_url + ".jpg"

    var message2 = "<strong><a href=\"https://store.steampowered.com/app/" + game.appid + "/\">" + game.name + "</a></strong><br><em>for " + (game.playtime_2weeks / 60).toFixed(1) + " hours during the past 2 weeks</em>";
    if(game.playtime_linux_forever){
        message2 += " — <em>" + (game.playtime_linux_forever / 60).toFixed(1) + " hours overall spent playing this game on Linux</em>";
    }
    
    document.getElementById("steam1").innerHTML = "have been playing some";
    document.getElementById("steam2").innerHTML = message2;

    // Social integration
    // Pleroma
    var post = status.social.pleroma;
    var idontfuckingknow = "am posting ";
    var notice_text = '<a href="' + status.social.pleroma.account.link + '">Starnix Pleroma</a>'
    socialPost(post, idontfuckingknow, notice_text, "toot1", "toot2", "toot-notice")

    // Mastodon
    var alt_post = status.social.mstdn;
    var alt_idontfuckingknow = "am tooting ";
    var alt_notice_text = '<a href="' + status.social.mstdn.account.link + '">linuxrocks.online (Mastodon)</a>'
    socialPost(alt_post, alt_idontfuckingknow, alt_notice_text, "toot-1", "toot-2", "toot-notice-alt")

    // Put more relevant one first
    switch(status.social.latest){
        case "pleroma":
            // We do not need to do anything; the default placement is fine as is.
            // setRowBehind("social", thirdElement)
            // setRowAsLast("social-alt")
            break;
        case "mstdn":
            setRowBehind("social-alt", "social")
            setRowAsLast("social")
            break;
    }

    if(isTimestampOver14DaysAgo(status.social.mstdn.posted)) document.getElementById("social-alt").style.display = "none";
}

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
var playing_now = true;

function fuck(shit){
    var listening = JSON.parse(shit).payload.listens[0];
    try {
         var trackinfo = listening.track_metadata;
    } catch(TypeError){
        playing_now = false;

        // go through the recent listens, I guess...
        document.getElementById("nowplaying2").innerHTML = "I am not currently listening to anything right now; I'll show you my most recently listened song, this won't take too long!";
        httpGet("https://api.listenbrainz.org/1/user/atlas_core/listens?count=1", fuck);
        return;
    }

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

    if(trackinfo.duration_ms) message2 += "<small>" + convertSecondsToMinutesAndSeconds(trackinfo.duration_ms / 1000) + "</small>";

    document.getElementById("nowplaying1").innerHTML = message1;
    document.getElementById("nowplaying2").innerHTML = message2;
}

function convertSecondsToMinutesAndSeconds(seconds) {
  var minutes = Math.floor(seconds / 60); // Calculate minutes
  var remainingSeconds = seconds % 60; // Calculate remaining seconds

  // Format the minutes and seconds
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  // Return the formatted time
  return formattedMinutes + "m" + formattedSeconds + "s";
}

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


function fallback_update(_url){
    console.log("Using fallback update; couldn't reach the server status API thingamajig.")
    
    document.getElementById("fallback-notice").style.display = "inherit";
    // Let the user know about this fallback mode nonsense
    document.getElementById("the-game-thing").remove();
    // Removes unused field.
    document.getElementById("integrations-row").classList.remove('row-cols-xl-3');
    // Adapts stuff to not make it look horrible.
    
    httpGet("https://api.listenbrainz.org/1/user/atlas_core/listens?count=1", fuck);
    httpGet("https://linuxrocks.online/api/v1/accounts/107615616350214854/statuses?exclude_reblogs=true&exclude_replies=true", toothole);
}


// httpGet("http://192.168.2.202:5555/", status_update)
let bullshit = httpGet("https://azuki.rightmouse.click/atlas/status", status_update, fallback_update)

// document.getElementById("platformIntegration").hidden = false;
