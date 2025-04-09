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


function fillout() {
        document.getElementById("email").value = JSONObject.shopper.email;
        document.getElementById("first_name").value = JSONObject.shopper.firstName;
        document.getElementById("last_name").value = JSONObject.shopper.lastName;
        document.getElementById("phone").value = JSONObject.shopper.phone;
        document.getElementById("age").value = JSONObject.shopper.age;
        document.getElementById("address").value = JSONObject.shopper.address;
}

function makeObject(email, first_name, last_name, phone, age, address) {
    JSONObject = {"shopper" : [
        {
            "email": document.getElementById('email').value,
            "firstName": document.getElementById('first_name').value,
            "lastName": document.getElementById('last_name').value,
            "phone": document.getElementById('phone').value,
            "age": document.getElementById('age').value,
            "address": document.getElementById('address').value,
        }
    ]}
}

// Populate form fields when the page loads
window.onload = fillout;
