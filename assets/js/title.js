var titles = [
    "hi",
    "somebody",
    "made in Canada",
    "vidja gaemr",
    "thing doer",
    "recommended by 9 out of 10 dentists",
    "the human being ever",
    "stupid fuck",
    "killed a spider",
    "New Funky Mode",
    "un épais québécois qui a rien à faire",
    "music enjoyer",
    "privacy enjoyer",
    "proud cthulhu voter for 2028",
    "sponsored by Oingo Boingo VPN!",
    "pride of ${subject.hometown}",
    "batteries not included",
    "2+2 equals 10 (IN BASE FOUR! I'M FINE!)",
    "Wii U owner",
    "nerd",
    "free time enjoyer",
    "gluten free",
    "probably",
    "I think",
    "again.",
    "as seen on TV",
    "now in a record store",
    "drinking water",
    "probably alive",
    "now 20% more dysfunctional!",
    "please laugh",
    "in \"Doing Something is Hard!\""
]

let lastIndex = 0

function randomTitle(){
    let currentIndex = Math.floor(Math.random()*titles.length)
    if(currentIndex != lastIndex){
        document.title = "atlas_core, " + titles[currentIndex]
        lastIndex = currentIndex
        return
    } else{
        randomTitle()
        return
    }
}

setInterval(randomTitle, 30000)