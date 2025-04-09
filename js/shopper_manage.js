let JSONObject = {
    "shopper": {
        "email": "input",
        "firstName": "input",
        "lastName": "input",
        "phone": "input",
        "age": "input",
        "address": "input"
    }
};


/*function fillout() { //For in the future when we have accounts in a db.
        document.getElementById("email").value = JSONObject.shopper.email;
        document.getElementById("first_name").value = JSONObject.shopper.firstName;
        document.getElementById("last_name").value = JSONObject.shopper.lastName;
        document.getElementById("phone").value = JSONObject.shopper.phone;
        document.getElementById("age").value = JSONObject.shopper.age;
        document.getElementById("address").value = JSONObject.shopper.address;
}
///^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/  !(/^[1-9]\d{2}-\d{3}-\d{4}/.test(phone) || /^\(\d{3}\)\s\d{3}-\d{4}/.test(phone) || /^[1-9]\d{2}\s\d{3}\s\d{4}/.test(phone) || /^[1-9]\d{2}\.\d{3}\.\d{4}/.test(phone))
*/
function validateMakeObject(email, first_name, last_name, phone, age, address) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
	{
		alert("Email must be valid.");
		return false;
	}
    if (!/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
	{
		alert("Phone must be valid.");
		return false;
	}
    JSONObject = {"shopper" : [
        {
            "email": email,
            "firstName": first_name,
            "lastName": last_name,
            "phone": phone,
            "age": age,
            "address": address,
        }
    ]}
    alert("First Name: " + JSONObject.shopper.firstName + "\nLast Name: " + JSONObject.shopper.lastName + "\nEmail: " + JSONObject.shopper.email + "\nPhone: " + JSONObject.shopper.phone + "\nAge: " + JSONObject.shopper.age + "\nAddress: " + JSONObject.shopper.address)
}

// For future when we have accounts in db.
//window.onload = fillout;
