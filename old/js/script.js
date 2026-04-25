function css(el, p, v) {
	$(el).css(p, v);
}

function html(el, h) {
	$(el).html(h);
}

function openContactModal() {
	css('.contactModalWrapper', 'opacity', '1');
	css('.contactModalWrapper', 'pointer-events', 'auto');
}

function closeContactModal() {
	css('.contactModalWrapper', 'opacity', '0');
	css('.contactModalWrapper', 'pointer-events', 'none');	
}

function attachClickHandlers() {
	$('#contactButton').click(function() {
		openContactModal();
	});

	$('#contactLink').click(function() {
		openContactModal();
	});

	$('#workButton').click(function() {
		window.location = 'work.html';
	});

	$('#skillsButton').click(function() {
		window.location = 'skills.html';
	});

	$('#contactModalCloseButton').click(function() {
		closeContactModal();
	});
}

function attachSessionStorageLinks() {
	$('#dbWork').click(function() {
		sessionStorage.img = 'db.jpg';
		sessionStorage.words = 'This is a project I created using the Swing library in Java, coupled with the Java Database Connector. It couples the CRUD functions of a database, along with some helpful export functions.';
	});

	$('#javaWork').click(function() {
		sessionStorage.img = 'java.jpg';
		sessionStorage.words = 'This was one of my favourite projects to work on. It uses a series of buttons with RGB values to create a new colour displayed in the bottom right.'
	});

	$('#wordsWork').click(function() {
		sessionStorage.img = 'words.jpg';
		sessionStorage.words = 'Here is on of the first projects I worked on regarding data files. It takes a text file, shuffles the words, then finds the average number of vowels per word.'
	});


	$('#edenWork').click(function() {
		sessionStorage.img = 'eden.jpg';
		sessionStorage.words = 'The first comomercial website I worked on was for a small business in my town. It is a simple number of pages, to display available stock from the business.'
	});


	$('#jsWork').click(function() {
		sessionStorage.img = 'js.png';
		sessionStorage.words = 'Above you can see my final Web Development project in my second year of college. It contained a number of utilities such as a to-do list, a timer and a calculator. I enjoyed working on this as I was able to look into the uses of Javascript in great detail.'
	});


	$('#mathsWork').click(function() {
		sessionStorage.img = 'maths.jpg';
		sessionStorage.words = 'One of my first projects in college was a website to help children learn about various maths functions. It showed how to work on different trigonometric functions, as well as unit conversions.';
	});

}

function loadWork() {
	console.log('Loading work...');

	html('#img', '<img src=\'img/' + sessionStorage.img + '\' />');
	html('#words', sessionStorage.words);
}

window.onload = function() {
	attachClickHandlers();
	attachSessionStorageLinks();

	if(window.location.pathname === '/viewWork.html') {
		loadWork();
	}
}