const createNotesBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notescontainer");
let notes = document.querySelectorAll(".input-box");

// Adding a function to add notes  whenever the user will click the create notes button
createNotesBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "inputbox";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  savedata();
});
// Adding the functonallity to remove button
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    savedata();
  }
});
notesContainer.addEventListener("input", () => {
  savedata();
});

function savedata() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
function displayNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
displayNotes();
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
