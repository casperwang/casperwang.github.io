const speed = 100;

function typewriter(target, content, idx) {
	var display_content = string(content).substring(0, idx);

	if (idx == content.length) {
		target.text(display_content);
	} else {
		target.text(display_content + "_");
		setTimeout(typewriter(target, idx+1), speed);
	}
}


typewriter($("#quote"), $("#quote").text(), 0);
typewriter($("#handle"), $("#handle").text(), 0);