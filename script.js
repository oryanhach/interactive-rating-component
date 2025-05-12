const RATING_SCREEN = document.querySelector('.card')
const RESULTS_SCREEN = document.querySelector('.results__card')
const RATING_BUTTONS = document.querySelectorAll('.rating__btn')
const SUBMIT_BTN = document.querySelector('.rating__btn-submit')

let selectedRating = null

RATING_BUTTONS.forEach((button) => {
	button.addEventListener('click', () => {
		RATING_BUTTONS.forEach((btn) => btn.classList.remove('clicked'))
		button.classList.add('clicked')

		selectedRating = button.textContent
	})
})

SUBMIT_BTN.addEventListener('click', () => {
	if (!selectedRating) {
		alert('Please select a rating before submitting.')
		return
	}

	RATING_SCREEN.style.display = 'none'
	RESULTS_SCREEN.style.display = 'block'

	const EL_RATING = document.querySelector('.results__result span')
	EL_RATING.textContent = `   ${selectedRating} `
})

function getRating() {
	const EL_BTN = document.querySelector('.clicked')
	RATING_NUM = EL_BTN.innerText
	setRating()
}

function setRating() {
	const EL_RATING = document.querySelector('.results__result span')
	EL_RATING.innerText = RATING_NUM
}
