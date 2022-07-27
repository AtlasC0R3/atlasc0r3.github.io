function hideScriptDisabled() {
    console.log("JavaScript is enabled");
    document.getElementById("jsDisabled").remove();  // Destructive, but it works. So I don't care.

    // show box that says "you disabled ad blockers!"
    // will be taken care of later by popunder.js
}
hideScriptDisabled();