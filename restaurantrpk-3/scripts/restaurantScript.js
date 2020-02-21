/* Krystal Thibault
    Date Due: 02.20.20
    This was a struggle for me. I find that I understand the fundementals / what goes on under the hood, but applying it was difficult.
*/

/* Attempt 1
function validateForm() {
  var x = document.getElementById['inputName'].innerText;
  if (x == '') {
    alert('Name must be filled out');
    return false;
  } else {
      alert('Thanks for reaching out. We'll be in touch!');
      return true;
      console.log('Valid Information Submitted');
  }
}
*/

function thankYou() {
  alert('Thanks for reaching out. We will be in touch!');
 console.log('Request sent successfully!');
}

function validateForm() {
  var name =  document.getElementById('inputName').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
      alert('Name cannot be empty');
  }
  var email =  document.getElementById('inputEmail').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
      alert('Email cannot be empty');
  }
    
