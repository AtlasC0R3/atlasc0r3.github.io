var backgrounds = [
    {
        "name": "The Presence",
        "description": "Reference to Nine Inch Nails' 2007 release/ARG, Year Zero. The Presence is involved in this as a hand that reaches down from the sky.",
        "bg_url": "assets/img/themes/presence.jpg",
        "bg_size": "cover",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "bg_blend": 1,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 1,  // 0: dark, 1: white
        "text_shadow": 1,  // 1: activate, 0: disable
        "footer_color": 2,  // 0: inherit (disable), 1: dark, 2: white, 3: plain
        "themecolor": "#647177",
        "font": "Consolas, monospace",
        "position": "right top"  // align to where? left, center, right, bottom
    },
    {
        "name": "Plain",
        "description": "Brutal, nearly plain. Works well for e-ink devices, though.",
        "bg_url": "",
        "bg_size": "none",  // cover fits image to fit on screen without borders/stretching, contain puts image as big as possible while not losing any of the image but causes black bars, auto just kinda puts it there
        "bg_blend": 0,  // darken background image (or, really, enable use of "background-blend-mode: difference" in CSS)
        "text_color": 0,  // 0: dark, 1: white
        "text_shadow": 0,  // 1: activate, 0: disable
        "footer_color": 0,  // 0: inherit (disable), 1: dark, 2: white
        "footer_bg": 0,
        "themecolor": "#FFFFFF",
        "font": "monospace",
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
// add CSS undertext filling stuff
// a, h1, h2, h3, h4, h5, h6, p {background-color: white;}
// no other way to do this... so I give up. it'd be too clunky.

var footer = document.getElementsByClassName("footer")[0];
var footer_exists = !!footer;

function testBlendMode(){
	// Create a test element
	var testElement = document.createElement('div');

	// Apply a CSS rule that uses background-blend-mode
	testElement.style.backgroundBlendMode = 'multiply';

	// Append the test element to the document body
	document.body.appendChild(testElement);

	// Check if the browser applied the style correctly
	var isBlendModeSupported = (testElement.style.backgroundBlendMode === 'multiply');

	// Remove the test element from the document body
	document.body.removeChild(testElement);

	return isBlendModeSupported;
}

function detectIE(){
    if (
        (navigator.appName == "Microsoft Internet Explorer")
        || "ActiveXObject" in window
    ) return true
}

function set_background(element){
	if((element.bg_blend && (!testBlendMode() || detectIE()))) return;
	// if we require setting background-blend-mode all the while the browser doesn't support it, give up
	// or if we're running Internet Explorer.

    var position = "center";
    if(element.position) position = element.position;
    document.body.style.backgroundPosition = position;

    document.body.style.backgroundSize = element.bg_size;

    if(element.text_color == 0) document.body.style.color = "#202124"; else if(element.text_color == 1) document.body.style.color = "white"; else document.body.style.color = element.text_color
    if(element.text_shadow) document.body.style.textShadow = "0px 0px 18px #000000"; else document.body.style.textShadow = "";  // CAN ALSO CAUSE GRAPHICAL GLITCHES THAT I STILL HAVE NO IDEA WHAT THE FUCK IS CAUSING IT
    if(element.bg_blend) document.body.style.backgroundBlendMode = "overlay"; else document.body.style.backgroundBlendMode = "";
    if(element.footer_color && footer_exists){
        if(element.footer_color == 1) footer.style.color = "#202124"
        if(element.footer_color == 2) footer.style.color = "white"
    };
    if(element.footer_bg != 0 && footer_exists){
        footer.classList = "fancy";
    };
    document.body.style.fontFamily = element.font;
    document.body.style.backgroundColor = "rgb(32, 33, 36)";
    
	if(document && typeof document.querySelector === 'function'){
		if(element.themecolor) document.querySelector('meta[name="theme-color"]').setAttribute("content", element.themecolor)
			else document.querySelector('meta[name="theme-color"]').setAttribute("content", "#C8C8C8");
	}

    if(element.bg_url) {
        document.body.style.backgroundImage = "url('" + element.bg_url + "')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";  // CAN CAUSE GRAPHICAL GLITCHES ON ANDROID BROWSERS IN SOME CIRCUMSTANCES THAT I HAVE NO FUCKING IDEA HOW OR WHY THEY MAY BE HAPPENING BUT THEY CAN
    } else {
        document.body.style.backgroundColor = "#FFFFFF"
    }
}

function theming_menu(){
    document.getElementById("theme-column").style.display = "inline";
    document.getElementById("dropdown-thing").hidden = true;
	for(var i=0; i < backgrounds.length; i++){
        var bg = backgrounds[i]
        document.getElementById("theme-menu").innerHTML += '<a id="theme-' + i + '" class="dropdown-item" href="javascript:set_background(backgrounds[' + i + ']);" style="white-space: normal;"><b>' + bg.name + '</b><p><em>' + bg.description + '</em></p></a>';
        // document.getElementById(`theme-${i}`).onclick = function(){console.log("bababooey"); set_background(backgrounds[i])}
        // document.getElementById(`theme-${i}`).addEventListener("click", function(e){
        //     console.log("HOLY SHIT")
        // })
    }
    // var myDropdown = document.getElementById('holyshitfuck')
    // myDropdown.addEventListener('show.bs.dropdown', function () {
    // })
}

// set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])
// if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) set_background(backgrounds[Math.floor(Math.random()*backgrounds.length)])

if (screen.colorDepth <= 16) {
    // too low color depth; fuck that.
} else if(detectIE()){
    set_background({
        "bg_url": "assets/img/themes/bliss-manip.jpg", "bg_blend": 0,
        "text_color": 1, "text_shadow": 1, "themecolor": "#245DDA",
        "bg_size": "stretch", "font": "Tahoma"
    })
    
    // document.getElementById("chair-img").src = "assets/img/chair/chair.jpg"
    // you know what, Internet Explorer just sucks with images; only IE11 supports SVGs, and it insists on stretching the image.
    // I'm taking away your profile picture displaying rights, Internet Explorer.
    document.getElementById("chair-img").remove()
} else if(navigator.userAgent.indexOf("eRead") >= 0) {
    set_background(backgrounds[1])
    document.getElementById("chair-img").src = "assets/img/chair/chair.svg"
} else {
    set_background(backgrounds[0])
    // if(footer_exists) theming_menu();
    document.getElementById("chair-img").src = "assets/img/chair/chair.svg"
}