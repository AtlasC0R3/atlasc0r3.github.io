function random404title() {
    var randomtxt = [
        "Nope, you're lost",
        "Wait, what?",
        "Ow.",
        "Way to go, champ",
        "redrum",
        "Not the actual events",
        "You're pissing me off",
        "Got a map around here?",
        "How the..?",
        "Cold and black and infinite",
        "Welcome oblivion",
        "That is not how you use a web browser.",
        "why 404, though?",
        "The cake is a lie",
        "Out of milk",
        "feels like I've been here before",
        "What in the goddamn fuck?",
        "What?!",
        "WHAT DO YOU WANT!?",
        "What was that for?!"
    ];
    return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

function random404desc() {
    var randomtxt = [
        "you're not supposed to be here. needless to say.",
        "no clue what you just did, but it was <strong>not</strong> the right thing, I can tell you that.",
        "<i>You're not a good person. You know that, right?<br>Good people don't end up here.<br>Can you hear me?</i>",
        "<blockquote>-So once we get out of the tunnel, go right, if you can.<br>-Well don't tell Manny that, he's gonna go over the freakin' guard rail.<br>-GO RIGHT?<br>-IF YOU CAN! DON'T- Don't go right, we'll go into the freaking-</blockquote>",
        "hold on.. I think we're lost. what did you do?! HOW??",
        "<blockquote>So here I go<br>Left, right, left<br>Right, left, wrong<br>I don't know where I'm going<br>But I just keep moving on</blockquote>",
        "so, this would be a good time to bring up that, uh, I have no idea where we are.",
        "I have no idea how you learned to use the Web, but that's not the right way.",
        "Please tell me you did this on purpose. There's <i>no</i> way you DIDN'T do this by accident... right?",
        "no that is not a web page, bud.",
        "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxgccccccccccccccccgszhhhcoplkmjbnuynhdfstdgyx jjuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuujuhdildxfgjhduxdfgtresdxzwetbn e8.,-^mijkfgbvt5c45edc34egdffffffffffffffffffffffffffffffffffffffffffffxyjhmngd",
        "<strong>You think you're funny?</strong>",
        "your keys are in your other pants.",
        "<blockquote>Thank you Mario! But our princess is in another castle!</blockquote>",
        "agh, you caught me in my socks and sandals!",
        "I think I recognize this page...",
        "Wait, haven't I been here before? I don't know anymore.",
        "Yes I have been here before, and I don't care anymore. Don't give a fuck anymore, even.",
        "think you should go somewhere else for that.",
        "Gah, I look away for <strong>two seconds</strong> and someone's already broke something!",
        "See, this is why we can't have nice things.",
        "<blockquote>AGHHH I tried to sneak through the door, man! Can't make it, can't make it, the shit's stuck! Outta my way son! <strong>DOOR STUCK! DOOR STUCK!</strong> Please! I beg you! We're dead!</blockquote>",
        "Teh FwitnyessGwam Pacew test is a muwtistage aewowobic capacity test dat pwowogwessiwewy gets mwowe diffwicuwt as it cwondinyues >w< Teh 20 mwetew Pacew test wiww begin in 30 secwonds >w< Winye up at teh stawt (⌒ω⌒) Teh wunnying speed stawts swowowwy  (・\`ω´・)w ^w^ but gets fastew each minyute aftew u heaw fwis signyaw \*bwoowop\* ヽ(\*・ω・)ﾉ A singwal wap shwowouwd be cwowompweted each tim u heaw fwis swound \*ding\* >w< Wemwembew two wun in a stwaight winye ヽ(\*・ω・)ﾉ and wun as wowong as pwowossibwe (・\`ω´・) Teh secwowond tim u faiw twowo cwompwete a wap befwowowe teh swound  (\* ^ ω ^)w >w< ywouw test is owowowor ＼(＾▽＾)／ Teh test wiww begin on teh wowd stawt (\* ^ ω ^) On ywowouw mawk ^w^ get weady ^w^ stawt ＼(＾▽＾)／<br><i>cwowough cwough</i> Okay ┬─┬ ノ( ゜-゜ノ) weww dat's owowowow nywowow (o･ω･o)",
        "You're going to make me lose my McFucking Marbles. Don't do that again.",
        "Okay, what the fuck."
    ];
    return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

function random404home() {
    var randomtxt = [
        "I want to go home!",
        "Take me back!",
        "WHERE AM I?!",
        "Huh?",
        "No, the other way!",
        "No, the other left!",
        "Sorry!",
        "Whoops, didn't mean it!",
        "Whoopsies!",
        "Oh, snap!",
        "Reset",
        "I'm just gonna leave you alone."
    ];
    return randomtxt[Math.floor((Math.random() * randomtxt.length))];
}

document.getElementById("404title").innerHTML = random404title();
document.getElementById("404desc").innerHTML = random404desc();
document.getElementById("404home").innerHTML = random404home();