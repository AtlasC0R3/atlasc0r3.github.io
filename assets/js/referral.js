function fediring_stuff(){
    // User came from the Fediring. Show a Fediring traversal menu.
    document.body.append(document.getElementById("fediring-box"));
    document.getElementById("fediring-text").style.display = "block";
    document.getElementById("fediring-link").style.display = "none";
    document.getElementById("fediring-box").style.position = "fixed";
    document.getElementById("fediring-box").style.top = "2em";
    document.getElementById("fediring-box").style.right = "2em";
    document.getElementById("fediring-box").style.backdropFilter = "blur(8px) brightness(0.5)"
    document.getElementById("fediring-box").style.borderRadius = "16px"
    document.getElementById("fediring-box").style.color = "white"
    document.getElementById("fediring-box").style.padding = "0px 12px"
}

function check_fediring() {
    try {
        if ([
            "fediring.net",
            "murtezayesil.me",
            "mcgillij.dev"]
            .includes(document.referrer
                .replace("https://", '')
                .replace("http://", '')
                .split('/', 1)[0])) fediring_stuff();
        // the array is due to the way webrings work; websites are required to have "previous" and "next" links.
        // I was gonna think that the referral string would just be fediring.net, but unfortunately, no.
        // So, instead, I have to put the links for the previous and next ring entries for this ring.
        // Which is fine, it's a hacky solution, but it works. Except for the /random thing.   
    } catch (Exception) {
        // We're probs on an old browser; give up.
    }
}

check_fediring(); // fediring_stuff()
