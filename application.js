$(document).ready( function(){
	$('#formsubmit').click(function(e){
		console.log("asdf");
		e.preventDefault();
		var email = $('#email').val();
		var name = $('#name').val();
		console.log(email+name);
		if ((email != 'email address') && name != 'name') { // && (name != '' || 'name') ) 
			$.ajax({
				  dataType: 'jsonp',
				  url: "http://getsimpleform.com/messages/ajax?form_api_token=11ea25855a13b79371ce915c054cda86",
				  data: {
				    name: name,
				    email: email,
				  }
				}).done(function() {
				  //callback which can be used to show a thank you message
				  //and reset the form
				  alert("Thank you for leaving your details, you will be added to the mailing list shortly");
				  		$('#email').val('');
				  		$('#name').val('');
				});
		} else { alert("Your details are incorrect")}
	});
	console.log(jQuery('#centreimage').attr('src'));
	console.log(jQuery('#exhibitioncontext').html());
	if (jQuery('#centreimage').attr('src')==(''||undefined))
		{ jQuery('#centre').hide();
		}
	if (jQuery('#exhibitioncontext').html()==''){
		jQuery('#exhibitioncontext').hide();
	}


});