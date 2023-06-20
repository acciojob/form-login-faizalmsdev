function getFormvalue() {
  // Get the form element
  var form = document.getElementById("form1");

  // Get the values of the first name and last name input fields
  var firstName = form.elements.fname.value;
  var lastName = form.elements.lname.value;

  // Print the first and last name using alert()
  alert("First name: " + firstName + "\nLast name: " + lastName);

  // Prevent the form from submitting
  return false;
}
