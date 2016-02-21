	
function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName
	console.log(fullName); 

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >=18) {

		console.log('User is an adult.');


	} else if (age>=13) {
		console.log('User is a teenager.');


	} else { 

		console.log('User is a child.');

	}


	/* 
		If the user's first name is 'General' and their last name is NOT 'Assembly', then greet the general! (Hint: Use a console. log())

		PS - Test with anybody, and General Assembly, General Somebodyelse 
	*/


		if (firstName.toLowerCase() =='general' && lastName.toLowerCase() !=='Assembly') {

				console.log('Welcome General!');

		}


		var faveColour = prompt('What is your favourite colour?').toLowerCase();

		if (faveColour == 'red' ||
			faveColour == 'blue' ||
			faveColour == 'green' ||
			faveColour == 'yellow' ) {

			$('h1').css('color', faveColour);

		}

}



/* when the page has loaded */
$(function() {
	$('img').on('click', askQuestions);

	// Hide all the sections 
	$('h3').next().hide();

	// when the user clicks an h3 
	$('h3').on('click', function() {

		// Toggle the next element 
		$(this).next().slideToggle(5000, 'swing');

	});

});