function login()
	{
		var name1 = document.getElementById("name").value;
		var name2 = document.getElementById("na").value;
		var uname = document.getElementById("email").value;
		var mobile = document.getElementById("mob").value;
		var p1 = document.getElementById("pwd1").value;
		var p2 = document.getElementById("pwd2").value;
		

		var filter = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9\-]+).([a-zA-Z]{2,3})(.[a-z{2,3}])?$/;
        var fill = /^(?=.*[0-9])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,15})$/;
		var yname = /^([a-zA-Z]+)$/;
		var mob1 = /^([0-9{10}]+)$/;


		if(uname ==''||p2==''||name1==''||mobile==''||p1==''||name2=='')
		{
			alert("All field's are mandatory");
		}
		else if(!yname.test(name1))
		{
			alert("Name should not contain any number or special character");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
			
		}
		else if(!mob1.test(mobile))
		{
			alert("Number should not contain any letter or special character");
		}
		else if(mobile.length < 10 || mobile.length > 10)
		{
			alert("Enter 10 digit Mobile Number");
		}
		else if(!fill.test(p1))
		{
			alert("Password must have one uppercase,one lowercase, one special character and atleast one number");
		}
		
		else if(p1.length < 8 || p1.length > 10)
		{
			alert("Password minimum length should be 8");
		}
		
		else if(p1!=p2)
		{
			alert("Password entered should be match");
		}
		else
		{
	alert('Thank You for Login & You are Redirecting to Home Page');
  //Redirecting to other page or webste code or you can set your own html page.
       window.location = "index.html";
			}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("name").value="";
		document.getElementById("na").value="";
		document.getElementById("email").value="";
		document.getElementById("mob").value="";
		document.getElementById("pwd1").value="";
		document.getElementById("pwd2").value="";
	}	

	var strength = {
		0: "Poor" ,
		1: "Poor",
		2: "Medium",
		3: "Strong",
		4: "Strong"
	  }
	  var password = document.getElementById('pwd1');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
	
	var val = password.value;
	
		
 
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if(val !== "") {
	text.innerHTML = "Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + " " + result.feedback.suggestions + "</span"; 
}
 else {
    text.innerHTML = "";
  }
});
	