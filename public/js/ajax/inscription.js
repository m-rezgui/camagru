let form = document.querySelector('#form');
let error = document.querySelector('#error');
let success = document.querySelector('#success');

form.addEventListener('submit', function (e){
	
	e.preventDefault();

	let data = new FormData(form);
	let xhr = getXMLHttpRequest();
	
	xhr.onreadystatechange = function () 
	{
		if (this.readyState == 4 && (this.status == 200))
		{
			let postback = this.responseText;
			
			if (postback.length > 1)
			{
				error.innerHTML = postback;
			}
			else
			{
				error.innerHTML = "";
				success.innerHTML = "Un mail de confirmation vient de vous être envoyer.";
				form.reset();
			}
		}
	};

	xhr.open('POST', form.getAttribute('action'), true);
	xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest');
	xhr.send(data);
});