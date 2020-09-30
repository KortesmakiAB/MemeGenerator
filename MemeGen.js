const displayArea = document.querySelector('.MemeDisplayArea');
const submitBtn = document.querySelector('#MemeForm');

submitBtn.addEventListener('submit', function(e) {
	e.preventDefault();

	// if blank url, do not append. Otherwise append img div to display area.
	imgUrl = document.querySelector('#ImageForMeme');
	if (!imgUrl.value) {
		return;
	}

	// create img div container, set background image
	const imgContainer = document.createElement('div');
	imgContainer.classList.add('MemeContainer');
	imgContainer.style.backgroundImage = `url(${imgUrl.value})`;

	displayArea.append(imgContainer);

	// create top p tag, give top class, add text from form
	const topP = document.createElement('p');
	topP.classList.add('MemeTextTop');
	const topText = document.querySelector('#TopText');
	topP.innerText = topText.value;

	// create bottom p tag, give bottom class, add text from form
	const bottomP = document.createElement('p');
	bottomP.classList.add('MemeTextBottom');
	const bottomText = document.querySelector('#BottomText');
	bottomP.innerText = bottomText.value;

	// append top and bottom p tags to image container
	imgContainer.append(topP, bottomP);

	// reset form
	submitBtn.reset();
});

// click on image to remove
displayArea.addEventListener('click', function(e) {
	if (e.target.classList[0] === 'MemeContainer') {
		e.target.remove();
	}
});
