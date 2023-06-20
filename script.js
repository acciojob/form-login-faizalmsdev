function getFormvalue() {
  // Get the form element
  var form = document.getElementById("form1");

  // Get the values of the first name and last name input fields
  var firstName = form.elements.fname.value;
  var lastName = form.elements.lname.value;

  // Print the first name and last name with a space in between
  alert (firstName + " " + lastName);
  
}
