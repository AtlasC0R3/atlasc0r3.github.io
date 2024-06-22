function hell(){
	for (var i = 0; i < document.all.length; i++) {
		var owo = new OwO()
		item = document.all[i];
		if(["P", "H1", "H2", "H3", "H4", "H5", "BUTTON"].includes(item.nodeName)) item.innerText = owo.owoify(item.innerText)
		if(item.nodeName == "A"){
			if(item.children.length == 0) {
				item.innerText = owo.owoify(item.innerText)
			} else {
				if(item.innerText) item.firstChild.textContent = owo.owoify(item.firstChild.textContent)
				for(var o = 0; o < item.children.length; o++) if(["P", "B", "EM", "STRONG"].includes(item.children[o].nodeName)) {
					item.children[0].innerText = owo.owoify(item.children[0].innerText)
				}
			}
		}
	}
}

function start_hell(){
	if(typeof OwO == "undefined") {
		// this should be a const but whatever
		var script = document.createElement('script')
		script.src = 'https://aqua-lzma.github.io/OwOify/owoify.js'
		document.head.append(script)
		script.onload = function(){
			hell()
			return;
		}
	} else{
	hell();
		return;
	}
}

try {
	if(document.head.append) document.getElementById("heck-option").style.display = "inline";
	// if we can even load the script into the document's head, then display the option	
} catch(Exception) {
	// we must be running some ANCIENT browser...
}
