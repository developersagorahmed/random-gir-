const lodeUser = () => {
	fetch("https://randomuser.me/api/?gender=female")
		.then((res) => res.json())
		.then((data) => userData(data));
};

function userData(data) {
	const images = document.getElementById("images");
	images.src = data.results[0].picture.large;
	const address = data.results[0].location;
	const name = document.getElementById("name");
	name.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

	const gender = document.getElementById("gander");
	gender.innerText = data.results[0].gender;
	const location = document.getElementById("location");
	location.innerText = `sity: ${address.city}, country: ${address.country} state:${address.state}`;
	const email = document.getElementById("email");
	email.innerText = data.results[0].email;
	const phone = document.getElementById("phone");
	phone.innerText = data.results[0].phone;
}
lodeUser();
