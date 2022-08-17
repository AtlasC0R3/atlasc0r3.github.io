var backgrounds = [
    {
        "name": "The Presence",
        "description": "Reference to Nine Inch Nails' 2007 release/ARG, Year Zero. The Presence is involved in this as a hand that reaches down from the sky. 'Some say it was a warning, some say it was a sign.'",
        "bg_url": "assets/img/themes/presence.png",
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 0,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "footer_color": 2,  // 0: inherit (disable), 1: dark, 2: white
        "font": "Consolas",
        "position": "right top"  // align to where? left, center, right, bottom
    },
    {
        "name": "Bliss",
        "description": "Who didn't like Windows XP?",
        "bg_url": "assets/img/themes/bliss.jpg",
        "bg_blend": 0,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 1,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "font": "Tahoma"
    },
    {
        "name": "Pukebucket",
        "description": "What the fuck. Blech.",
        "bg_url": "assets/img/themes/trash.jpg",
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 1,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "bg_size": "contain",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "font": "Comic Sans MS"
    },
    {
        "name": "Win95",
        "description": "Even if it came out in 1995, you still gotta admit we wouldn't be using computers if it weren't for that OS.",
        "bg_url": "assets/img/themes/win95.jpg",
        "bg_blend": 0,
        "text_color": 1,
        "text_shadow": 0,
        "bg_size": "cover",
        "font": "sans-serif",
        "position": "left bottom"
    },
    {
        "name": "Amiga",
        "description": "A multimedia powerhouse, that perhaps wasn't off to the best start. Commodore didn't know what they were doing. But it was definitely cutting-edge!",
        "bg_url": "assets/img/themes/amiga.png",
        "bg_blend": 0,
        "text_color": 1,
        "text_shadow": 0,
        "bg_size": "cover",
        "position": "left top",
        "font": "default"
    },
    {
        "name": "Quake",
        "description": "What, who doesn't like some good old Quake.",
        "bg_url": "assets/img/themes/quake.png",
        "bg_blend": 0,
        "text_color": 1,
        "text_shadow": 1,
        "bg_size": "cover",
        "font": "monospace"
    },
    {
        "name": "Macintosh 7.6.1",
        "description": "Hello, I am the Macintosh. It sure is great to get out of that bag. (I know, this isn't historically accurate, shut up.)",
        "bg_url": "assets/img/themes/macos.png",
        "bg_blend": 0,
        "text_color": 1,
        "text_shadow": 1,
        "bg_size": "cover",
        "position": "left top",
        "font": "monospace"
    }
]

// TODO: add CSS undertext filling stuff

function set_background(element){
    // Basic CSS stuff
    document.body.style.backgroundImage = `url('${element.bg_url}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";  // CAN CAUSE GRAPHICAL GLITCHES ON ANDROID BROWSERS IN SOME CIRCUMSTANCES THAT I HAVE NO FUCKING IDEA HOW OR WHY THEY MAY BE HAPPENING BUT THEY CAN

    var position = "center";
    if(element.position) position = element.position;
    document.body.style.backgroundPosition = position;

    document.body.style.backgroundSize = element.bg_size;
    if(!element.text_color) document.body.style.color = "var(--bs-dark)";  // set text dark
    if(element.text_shadow) document.body.style.textShadow = "0px 0px 12px #000000";
    if(element.bg_blend) document.body.style.backgroundBlendMode = "difference";
    if(element.footer_color){
        if(element.footer_color == 1) document.getElementById("footer").style.color = "var(--bs-dark)"
        if(element.footer_color == 2) document.getElementById("footer").style.color = "white"
    };
    document.body.style.fontFamily = element.font;
}

set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])
// if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])
// set_background(backgrounds[6])
