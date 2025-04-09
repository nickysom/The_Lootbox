let JSONObject = {"shopper" : [
		{
		      "","","","","",""
		}
]};

function fillout()
{
if (!JSONObject == null)
	{
	    document.getElementById("email").value = JSONObject.shopper[0].email;
	    document.getElementById("first_name").value = JSONObject.shopper[0].firstName;
	    document.getElementById("last_name").value = JSONObject.shopper[0].lastName;
	    document.getElementById("phone").value = JSONObject.shopper[0].phone;
	    document.getElementById("age").value = JSONObject.shopper[0].age;
	    document.getElementById("address").value = JSONObject.shopper[0].address;
	}
}

function makeObject(email, first_name, last_name, phone, age, address)
{
	JSONObject = {"shopper" : [
		{
		      "email": document.getElementById('email').value,
		      "firstName": document.getElementById('first-name').value,
		      "lastName": document.getElementById('last-name').value,
		      "phone": document.getElementById('phone').value,
		      "age": document.getElementById('age').value,
		      "address": document.getElementById('address').value,
		}
	]}
}
