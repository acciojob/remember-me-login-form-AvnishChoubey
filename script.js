//your JS code here. If required.
document.getELementById('submit').addEventListener('click', () => {
	const username = document.getElementById('username').value;
	cont password = document.getElementById('password').value;
	const rememberme = document.getELementById('checkbox');
	if(rememberme.checked) {
		localstorage.setItem("username", username);
		localstorage.setItem("password", password);
	} else {
		localstorage.clear();
	}
	alert(`Logged in as ${username}`);
});

document.getElementById('existing').addEventListener('click', () => {
	const username = localStorage.getItem("username");
	alert(`Logged in as ${username}`);
})

function initialFunction() {
	if(localStorage.getItem("username") != null)
	document.getELementById('existing').style.display = block;
}

initialFunction();

