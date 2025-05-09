// This JavaScript file is for the contactUs.html file
let popUp = document.querySelector('.message_sent_popUp');
popUp.style.display = "none";

let messageSent = () => {
  popUp.style.display = "block";
  var blockBacground = document.createElement('div');
  blockBacground.setAttribute('class', 'overlay');
  document.body.appendChild(blockBacground);
}
