 
function sendMail(){
	var name = document.getElementById('name');
	var phone = document.getElementById('phone');
	var email = document.getElementById('email');
	var telegram = document.getElementById('telegram');
	var description = document.getElementById('description');
		Email.send({
	    SecureToken : "35a80d7b-2315-422e-a72c-bcdfbe8a3704",
	    To : 'mohammad.masoudi59@gmail.com',
	    From : "persiandesign.sender@gmail.com",
	    Subject : name.value,
	    Body : "تلفن : " + "<b>" + phone.value + "</b>"  + "<br/> ایمیل : " + "<b>" + email.value + "</b>" + "<br/> ایدی تلگرام : " + "<b>" + telegram.value + "</b>" + "<br/> توضیحات :  <br/>" + description.value 
		}).then(
		  message => 
		}),
		  name.value = "" ,
		  phone.value = "" ,
		  email.value = "" ,
		  telegram.value = "" , 
		  description.value = ""    
		);
	}
}
