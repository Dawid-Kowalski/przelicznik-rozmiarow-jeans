let textWtoWaist = "";
let textLToGrowth = "";
let textwaistToW = "";
let textGrowthToL = "";

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

function convertSizetoBody() {

	const waist = document.getElementById("waist");
	const growth = document.getElementById("growth");

	wToWaist();
	lToGrowth();

	waist.innerHTML = textWtoWaist;
	growth.innerHTML = textLToGrowth;

}

function wToWaist () {
	const trousersW = parseInt(document.getElementById("trousers-width").value);

	switch(trousersW) {
		case 28:
			textWtoWaist = "71-73.5";
			break;
		case 29:
			textWtoWaist = "73.5-76";
			break;
		case 30:
			textWtoWaist = "76-78.5";
			break;
		case 31:
			textWtoWaist = "78.5-81";
			break;
		case 32:
			textWtoWaist = "81-83.5";
			break;
		case 33:
			textWtoWaist = "83.5-86";
			break;
		case 34:
			textWtoWaist = "86-88.5";
			break;
		case 36:
			textWtoWaist = "91.5-94";
			break;
		case 38:
			textWtoWaist = "96.5-99";
			break;
		case 40:
			textWtoWaist = "101.5-104";
			break;
		case 42:
			textWtoWaist = "106.5-109";
			break;
	}
}

function lToGrowth () {
	const trousersL = parseInt(document.getElementById("trousers-lang").value);

	switch(trousersL) {
		case 30:
			textLToGrowth = "158-165.5";
			break;
		case 32:
			textLToGrowth = "165.5-173";
			break;
		case 34:
			textLToGrowth = "173-180.5";
			break;
		case 36:
			textLToGrowth= "180.5-188";
			break;
	}
}

function convertBodyToSize() {

	const width = document.getElementById("width");
	const lang = document.getElementById("lang");

	waistToW();
	growthToL();

	width.innerHTML = textwaistToW ;
	lang.innerHTML = textGrowthToL;

}

function waistToW () {
	const waist = parseInt(document.getElementById("body-waist").value);

	switch(waist) {
		case 1:
			textwaistToW  = "28";
			break;
		case 2:
			textwaistToW  = "29";
			break;
		case 3:
			textwaistToW  = "30";
			break;
		case 4:
			textwaistToW  = "31";
			break;
		case 5:
			textwaistToW  = "32";
			break;
		case 6:
			textwaistToW  = "33";
			break;
		case 7:
			textwaistToW  = "34";
			break;
		case 8:
			textwaistToW  = "36";
			break;
		case 9:
			textwaistToW  = "38";
			break;
		case 10:
			textwaistToW  = "40";
			break;
		case 11:
			textwaistToW  = "42";
			break;
	}
}

function growthToL () {
	const growth = parseInt(document.getElementById("body-growth").value);

	switch(growth) {
		case 1:
			textGrowthToL = "30";
			break;
		case 2:
			textGrowthToL = "32";
			break;
		case 3:
			textGrowthToL = "34";
			break;
		case 4:
			textGrowthToL = "36";
			break;
	}
}