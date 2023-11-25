var titles = [
    "hi",
    "somebody",
    "a Ubisoft original",
    "made in Canada",
    "vidja gaemr",
    "thing doer",
    "recommended by 9 out of 10 dentists",
    "the human being ever",
    "stupid fuck",
    "killed a spider",
    "New Funky Mode",
    "dear god anything but a waifu",
    "un épais québécois qui a rien à faire",
    "music enjoyer",
    "privacy enjoyer",
    "proud cthulhu voter for 2024",
    "Your Partner in Science",
    "pride of ${subject.hometown}",
    "Mug Moment",
    "batteries not included",
    "2+2 equals 10 (IN BASE FOUR! I'M FINE!)",  // it's okay, I barely even had math classes during 9th grade. not to mention that was a Portal reference.
    "Wii U owner",
    "nerd",
    "Halo disliker",
    "free time enjoyer",
    "gluten free"
]

var pron = [
    "doesn't/matter",
    "who gives a fuck",
    "eh",
    "want my zodiac signs instead?",
    "that's all you care about?",
    "irrelevant",
    "are an excuse for people to despise one another",
    "don't be stupid",
    "sequels to The Matrix weren't good",
    "<b>sod off.</b>",
    "ahem",
    "edgy joke here",
    "what the fuck is that"
]

document.title = "atlas_core, " + titles[Math.floor(Math.random()*titles.length)]

document.getElementById("pronoun").innerHTML = "pronouns: <i>" + pron[Math.floor(Math.random()*pron.length)] + "</i>"
