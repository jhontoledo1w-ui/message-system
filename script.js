let messages = [
  "HI PAHINGI GRASYA MEOW 😂",
  "JOKE LANG 😆",
  "MABAIT AKO BLEEE 😇",
  "BYE NA NGA MOEW 😺"
];

let index = 0;

function openDialog() {
  index = 0;
  document.getElementById("messageText").innerText = messages[index];
  document.getElementById("overlay").style.display = "block";
}

function nextMessage() {
  index++;
  if (index >= messages.length) {
    index = 0;
  }
  document.getElementById("messageText").innerText = messages[index];
}

function closeDialog() {
  document.getElementById("overlay").style.display = "none";
}