// if (document.referrer && document.referrer != "") document.write('Thanks for visiting this site from ' + document.referrer);

function check_fediring() {
    if (document.referrer in ["https://fediring.net/", "https://cobra.vern.cc/", "https://tomxcd.me/"]) console.log("Seems like you came here from Fediring, no?");
    // the array is due to the way webrings work; websites are required to have "previous" and "next" links.
    // I was gonna think that the referral string would just be fediring.net, but unfortunately, no.
    // So, instead, I have to put the links for the previous and next ring entries for this ring.
    // Which is fine, it's a hacky solution, but it works. Except for the /random strategy.
    // TODO: The idea I have for this is to have a floating menu with the fediring links (or a block being shown early in the page), with a message that says "Hey, looks like you came here from Fediring! Here's some links for easier exploration:"

    // also tom please readd the previous/next links as per required by the fediring guidelines
    // TODO: remind tom to add fediring links (i'm just kidding)
}
