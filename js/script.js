function showForm() {
	const sizeIsChecked = document.getElementById("size-radio").checked;
	const bodyIsChecked = document.getElementById("body-radio").checked;

	const sizePanel = document.getElementById("size-panel");
	const bodyPanel = document.getElementById("body-panel");

	if(sizeIsChecked === true) {
		sizePanel.hidden = false;
		bodyPanel.hidden = true;
	}

	if(bodyIsChecked === true) {
		sizePanel.hidden = true;
		bodyPanel.hidden = false;
	}

}