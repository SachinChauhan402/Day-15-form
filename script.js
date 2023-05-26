document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var food = [];
  var foodOptions = document.getElementsByName("food[]");
  for (var i = 0; i < foodOptions.length; i++) {
    if (foodOptions[i].checked) {
      food.push(foodOptions[i].value);
    }
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  // Check if at least two food options are selected
  if (food.length < 2) {
    alert("Please select at least two food options.");
    return;
  }

  // Create a new row in the table
  var table = document.getElementById("tableBody");
  var newRow = table.insertRow();

  // Add cells to the new row
  var firstNameCell = newRow.insertCell();
  var lastNameCell = newRow.insertCell();
  var addressCell = newRow.insertCell();
  var pincodeCell = newRow.insertCell();
  var genderCell = newRow.insertCell();
  var foodCell = newRow.insertCell();
  var stateCell = newRow.insertCell();
  var countryCell = newRow.insertCell();

  // Set the cell values
  firstNameCell.textContent = firstName;
  lastNameCell.textContent = lastName;
  addressCell.textContent = address;
  pincodeCell.textContent = pincode;
  genderCell.textContent = gender;
  foodCell.textContent = food.join(", ");
  stateCell.textContent = state;
  countryCell.textContent = country;

  // Clear form fields
  document.getElementById("myForm").reset();
});
