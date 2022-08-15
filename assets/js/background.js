var backgrounds = [
    {
        "name": "The Presence",
        "description": "Reference to Nine Inch Nails' 2007 release/ARG, Year Zero. The Presence is involved in this as a hand that reaches down from the sky. 'Some say it was a warning, some say it was a sign.'",
        "bg_url": "assets/img/themes/presence.png",
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 0,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "font": "Consolas"
    },
    {
        "name": "Bliss",
        "description": "Who didn't like Windows XP?",
        "bg_url": "assets/img/themes/bliss.jpg",
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 1,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "font": "Tahoma"
    }
]

function set_background(element){
    // Basic CSS stuff
    document.body.style.backgroundImage = `url('${element.bg_url}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = element.bg_size;
    if(!element.text_color) document.body.style.color = "var(--bs-dark)";  // set text dark
    if(element.text_shadow) document.body.style.textShadow = "0px 0px 12px #000000";
    if(element.bg_blend) document.body.style.backgroundBlendMode = "difference";
    document.body.style.fontFamily = element.font;
}

set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])