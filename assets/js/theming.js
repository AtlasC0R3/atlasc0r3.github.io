var backgrounds = [
    {
        "name": "The Presence",
        "description": "Reference to Nine Inch Nails' 2007 release/ARG, Year Zero. The Presence is involved in this as a hand that reaches down from the sky.",
        "bg_url": "assets/img/themes/presence.jpg",
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 1,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "footer_color": 2,  // 0: inherit (disable), 1: dark, 2: white
        "themecolor": "#647177",
        "font": "Consolas, monospace",
        "position": "right top"  // align to where? left, center, right, bottom
    },
    {
        "name": "Bliss",
        "description": "Who didn't like Windows XP?",
        "bg_url": "assets/img/themes/bliss.jpg",
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 1,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "themecolor": "#245DDA",
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "font": "Tahoma"
    },
    {
        "name": "Pukebucket",
        "description": "Probably the least beautiful thing I have ever done on this website.",
        "bg_url": "assets/img/themes/trash-opt.jpg",
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": "yellow",
        "text_shadow": 1,  // 1: activate, 0: disable
        "themecolor": "#bdff00",
        "bg_size": "contain",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "font": "Comic Sans MS"
    },
    {
        "name": "Win95",
        "description": "Well what? It's Windows 95.",
        "bg_url": "assets/img/themes/win95.jpg",
        "bg_blend": 0,
        "text_color": 1,
        "text_shadow": 0,
        "themecolor": "#008081",  // #c0c0c0 for that good old gray taskbar color
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
        "themecolor": "#0252ab",
        "bg_size": "cover",
        "position": "left top",
        "font": "default"
    },
    {
        "name": "Quake",
        "description": "Mid-90's shooters galore. This one's definitely up there.",
        "bg_url": "assets/img/themes/quake.jpg",
        "bg_blend": 0,
        "text_color": 1,
        "text_shadow": 1,
        "themecolor": "#231313",
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
        "themecolor": "#818181",
        "bg_size": "cover",
        "position": "left top",
        "font": "monospace"
    }
]
file:///home/deck/Downloads/quake-opt.jpg
// add CSS undertext filling stuff
// a, h1, h2, h3, h4, h5, h6, p {background-color: white;}
// no other way to do this... so I give up. it'd be too clunky.

var footer_exists = !!document.getElementById("footer");

function set_background(element){
    // Basic CSS stuff
    document.body.style.backgroundImage = `url('${element.bg_url}')`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";  // CAN CAUSE GRAPHICAL GLITCHES ON ANDROID BROWSERS IN SOME CIRCUMSTANCES THAT I HAVE NO FUCKING IDEA HOW OR WHY THEY MAY BE HAPPENING BUT THEY CAN

    var position = "center";
    if(element.position) position = element.position;
    document.body.style.backgroundPosition = position;

    document.body.style.backgroundSize = element.bg_size;
    if(element.text_color == 0) document.body.style.color = "var(--bs-dark)"; else if(element.text_color == 1) document.body.style.color = "white"; else document.body.style.color = element.text_color
    if(element.text_shadow) document.body.style.textShadow = "0px 0px 18px #000000"; else document.body.style.textShadow = "";  // CAN ALSO CAUSE GRAPHICAL GLITCHES THAT I STILL HAVE NO IDEA WHAT THE FUCK IS CAUSING IT
    if(element.bg_blend) document.body.style.backgroundBlendMode = "overlay"; else document.body.style.backgroundBlendMode = "";
    if(element.footer_color && footer_exists){
        if(element.footer_color == 1) document.getElementById("footer").style.color = "var(--bs-dark)"
        if(element.footer_color == 2) document.getElementById("footer").style.color = "white"
    };
    document.body.style.fontFamily = element.font;
    document.body.style.backgroundColor = "rgb(32, 33, 36)";
    
    if(element.themecolor) document.querySelector('meta[name="theme-color"]').setAttribute("content", element.themecolor)
        else document.querySelector('meta[name="theme-color"]').setAttribute("content", "#C8C8C8");
}

function theming_menu(){
    document.getElementById("theme-column").style.display = "inline";
    document.getElementById("dropdown-thing").hidden = true;
    for(let i=0; i < backgrounds.length; i++){
        const bg = backgrounds[i]
        document.getElementById("theme-menu").innerHTML += `<a id="theme-${i}" class="dropdown-item" href="javascript:set_background(backgrounds[${i}]);" style="white-space: normal;"><b>${bg.name}</b><p><em>${bg.description}</em></p></a>`;
        // document.getElementById(`theme-${i}`).onclick = function(){console.log("bababooey"); set_background(backgrounds[i])}
        // document.getElementById(`theme-${i}`).addEventListener("click", function(e){
        //     console.log("HOLY SHIT")
        // })
    }
    // var myDropdown = document.getElementById('holyshitfuck')
    // myDropdown.addEventListener('show.bs.dropdown', function () {
    //     console.log("holy fuck my little ass")
    // })
}

// set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])
// if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])
set_background(backgrounds[0])

if(footer_exists) theming_menu();
