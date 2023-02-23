const lodeData = () => {
	fetch("https://api.kanye.rest/")
		.then((res) => res.json())
		.then((data) => addInnerHTML(data));
};

const addInnerHTML = (quotes) => {
	const quotesID = document.getElementById("quotes");
	quotesID.innerHTML = quotes.quote;
};
