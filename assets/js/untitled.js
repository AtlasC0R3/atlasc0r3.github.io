// const post = {profile: {avatar: "", name: "", handle: "", url: ""}, content: "", image: "", url: "", id: 0};

function social_post_media(post, service_name){
    var something = document.getElementById("social-post").cloneNode(true)
    something.querySelector("#username").innerHTML = post.profile.name
    something.querySelector("#handle").innerHTML = `${post.profile.handle}, <i>${service_name}</i>`
    something.querySelector("#content").innerHTML = post.content
    something.querySelector("#avatar").src = post.profile.avatar
    return something.outerHTML
//     return `<div id="post-media" class="container" style="margin-bottom: 24px;">
//     <div class="row g-0">
//         <div class="col-auto d-inline d-print-none d-sm-none d-xl-inline"><img id="post-avatar" class="rounded me-3 fit-cover" width="50" height="50" src="${post.profile.avatar}" style="height: 64px;width: 64px;" loading="auto" /></div>
//         <div class="col-xl-10 text-break">
//             <a href="${post.profile.url}"><div id="post-profile-div" class="row flex-grow-1 flex-shrink-1 justify-content-start align-items-start align-content-start">
//                 <div class="col-sm-auto col-lg-6 flex-grow-1 flex-shrink-1">
//                     <p id="post-profile-name" class="text-truncate fw-bold text-primary mb-0" style="font-size: 26px;">${post.profile.name}</p>
//                 </div>
//                 <div class="col-auto d-xl-flex flex-shrink-1 justify-content-end align-content-end align-self-end justify-content-xl-end align-items-xl-end">
//                     <p id="post-profile-handle" class="text-primary d-sm-none d-lg-block d-xl-flex align-items-xl-end mb-0" style="font-size: 18px;"><em>(${post.profile.handle}, ${service_name})</em></p>
//                 </div>
//             </div></a>
//             <style>
//                 .parallax-${service_name}-${post.id} {
//                     /* The image used */
//                     background-image: url("${post.image}");
// 
//                     /* Set a specific height */
//                     min-height: 400px;
// 
//                     /* Create the parallax scrolling effect */
//                     background-attachment: fixed;
//                     background-position: center;
//                     background-repeat: no-repeat;
//                     background-size: contain;
//                     background-width: 75%;
//                 }
//             </style>
//             <div class="parallax-${service_name}-${post.id} h-auto">
//                 <p class="mb-0" style="font-size: 20px;padding: 18px;text-shadow: 3px 2px 8px rgb(0,0,0), 3px 2px 8px rgb(0,0,0), 3px 2px 8px #000000;">${post.content}</p>
//             </div>
//         </div>
//         <div class="col"><a id="toot-2" class="d-xl-flex justify-content-xl-end" href="${post.url}" style="padding-right: 28px;font-size: 32px;margin-top: 16px;">
//                 <p class="d-inline d-print-none d-sm-inline d-md-inline d-lg-inline d-xl-none d-xxl-none" style="margin-left: 14px;font-size: 22px;">view post...</p><svg class="bi bi-box-arrow-up-right d-none d-print-inline d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline justify-content-center" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style="font-size: 40px;">
//                     <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path>
//                     <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path>
//                 </svg>
//             </a></div>
//     </div>
// </div>`
}

function add_element(element){
    document.getElementById("add-elements-here").innerHTML += element;
}

function httpGet(theUrl, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

// https://linuxrocks.online/system/media_attachments/files/108/716/243/333/560/323/original/9227f624375b18e0.jpg
// https://catgram.co/storage/m/_v2/446134297866323074/2f76a232a-f08599/tsFfXKX60LT8/WHW0tPCCYstDEg4Qrdk6jTXhP7o4zAJbxA8SWhcJ.jpg

// add_element(social_post_media({profile: {avatar: "https://catgram.co/storage/avatars/044/613/429/786/632/307/4/52maAfm8pUrwpWl7nZeW_avatar.jpg", name: "Ozzy", handle: "@ozzy@catgram.co", url: "https://catgram.co/ozzy"},
//                                          content: "Soo, are we watching the television or..?", image: "https://catgram.co/storage/m/_v2/446134297866323074/2f76a232a-f08599/tsFfXKX60LT8/WHW0tPCCYstDEg4Qrdk6jTXhP7o4zAJbxA8SWhcJ.jpg", url: "https://catgram.co/p/ozzy/447451473231694743"}, "Catgram"));
// add_element(social_post_media({profile: {avatar: "https://linuxrocks.online/system/accounts/avatars/107/615/616/350/214/854/original/07c9dda066ab2a37.png", name: "atlas_core", handle: "@atlas_core@linuxrocks.online", url: "https://linuxrocks.online/@atlas_core"}, content: "hold on let me check the logs", image: "https://linuxrocks.online/system/media_attachments/files/108/716/243/333/560/323/original/9227f624375b18e0.jpg", url: "https://linuxrocks.online/@atlas_core/108716244475406432"}, "Mastodon"));

function fuck(toots){
    toots = JSON.parse(toots);
    let domain = toots[0].account.url.replace("https://", "").split("/")[0]
    for(let i=0; i < toots.length; i++){
        const toot = toots[i]
        console.log(toot)
        if(toot.media_attachments.length){var attachment = toot.media_attachments[0].url; if(!(attachment.endsWith(".jpg") || attachment.endsWith(".png"))){attachment = null};} else{var attachment = null}
        console.log(attachment)
        add_element(social_post_media({profile: {avatar: toot.account.avatar, name: (toot.account.display_name || toot.account.username), handle: `@${toot.account.acct}@${domain}`, url: toot.account.url}, content: toot.content, image: attachment, url: toot.url, id: toot.id}, "Mastodon"))
    }
    // var toot = JSON.parse(toots)[0];
    // var idontfuckingknow = "recently tooted ";
    // if(toot.spoiler_text){
    //     idontfuckingknow += "something controversial"
    //     const random = Math.floor(Math.random() * 100) + 1;
    //     if(random < 20){
    //         var confirmation = "are you sure (is this what you want?)";
    //     } else{
    //         var confirmation = "click here to see...";
    //     }
    //     var content = `<strong>Marked as sensitive:</strong> ${toot.spoiler_text}<br><i>${confirmation}</i>`;
    // } else if(!(toot.content) && (toot.media_attachments)){
    //     if(length > 1){
    //         idontfuckingknow += "attachments"
    //     } else{
    //         idontfuckingknow += "an attachment"
    //     }
    //     var content = `<em>nothing but attachments.</em><br><i>click here to see them.</i>`;
    // } else{
    //     idontfuckingknow += "something";
    //     var content = text_truncate(toot.content, 300);
    // }
    // var link = toot.url;
    // document.getElementById("toot1").innerHTML = idontfuckingknow + ":";
    // document.getElementById("toot2").innerHTML = content;
}

httpGet("https://linuxrocks.online/api/v1/accounts/107615616350214854/statuses?exclude_reblogs=true&exclude_replies=true", fuck);
