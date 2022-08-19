var titles = [
    "hi",
    "certified human being",
    "a Ubisoft original",
    "made in Canada",
    "vidja gaemr",
    "with ADHD",
    "thing doer",
    "recommended by 9 out of 10 dentists",
    "as seen on TV",
    "the human being ever",
    "stupid fuck",
    "try the ketchup",
    "killed a spider",
    "New Funky Mode",
    "dear god anything but a waifu",
    "with illusions of enlightenment",  // with our snouts in the dirt, with our snouts in the dirt
    "person who watched all Matrix movies",
    "un épais québécois qui a rien à faire",
    "music enjoyer",
    "Spy x Family is decent",
    "the only person that watches anime right after a gory show made in the United States by very American people in a very American plot",
    "privacy enjoyer",
    "proud cthulhu voter for 2024",
    "for science. you monster.",
    "Your Partner in Science",
    "pride of ${subject.hometown}",
    "remains safely operational up to 4000 degrees Kelvin",
    "Mug Moment",
    "2+2 equals 10 (IN BASE FOUR! I'M FINE!)"  // it's okay, I barely even had math classes during 9th grade. not to mention that was a Portal reference.
]

// NOTE TO SELF: stop putting more entries here, there's enough.

document.title = "atlas_core, " + titles[Math.floor(Math.random()*titles.length)]
