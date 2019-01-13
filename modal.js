//Get modal element
var modal = document.getElementById("basicModal");
//Get open modal button
var modalButton = document.getElementById("modalButton");
//Get close modal button
var closeButton = document.getElementById("closeButton");
//Listen for open click
modalButton.addEventListener("click", openModal);
//Listen for close click
closeButton.addEventListener("click", closeModal);
//Listen for outside click
window.addEventListener("click", outsideClick);
//Function to open modal
function openModal() {
	modal.style.display = "block";
}
//Function to close modal
function closeModal() {
	modal.style.display = "none";
}
//Function to close modal: outside click
function outsideClick() {
	if (event.target == modal) {
		modal.display.style = "none";
	}
}
