function onClick(event) {
	var file = event.target.attributes.file.value;
	loadContent(file);
}

function loadContent(filename) {
	var content = document.getElementById("content");
	content.style.opacity = 0;
	
	var ajax = new XMLHttpRequest();
 	ajax.onreadystatechange = function() {
		if (ajax.readyState==4 && ajax.status==200) {
			content.style.opacity = 1.0;
			content.innerHTML=ajax.responseText;
		}
	}
	ajax.open("GET",filename,true);
	ajax.send();
}

document.addEventListener("DOMContentLoaded", function(event) {
	var menuButtons = document.querySelectorAll("#menu li");
	for (var i = 0; i < menuButtons.length; i++) {
		menuButtons[i].onclick = onClick;
	}
	
	loadContent("home.html");
});