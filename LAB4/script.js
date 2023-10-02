const addTableFunction = (m, n) => {
	const tableTag = document.createElement('table')
	document.body.appendChild(tableTag)

	for (let i = 0; i < m; i++) {
		const trTag = document.createElement('tr')
		tableTag.appendChild(trTag)
		for (let j = 0; j < n; j++) {
			const tdTag = document.createElement('td')
			trTag.appendChild(tdTag)
		}
	}
}

addTableFunction(5, 5)
// task 1.2
const addForm = () => {
	// init
	const form = document.createElement('form')
	const container = document.createElement('div')
	const containerInputs = document.createElement('div')
	const containerlabels = document.createElement('div')
	const FMLabel = document.createElement('label')
	const FMInput = document.createElement('input')
	const PSLabel = document.createElement('label')
	const PSInput = document.createElement('input')
	const RPSLabel = document.createElement('label')
	const SXLabel = document.createElement('label')
	const RPSInput = document.createElement('input')
	const FLMenLabel = document.createElement('label')
	const FLMenInput = document.createElement('input')
	const FLWomenLabel = document.createElement('label')
	const FLWomenInput = document.createElement('input')
	const INLabel = document.createElement('label')
	const FootBallInput = document.createElement('input')
	const FootBallLabel = document.createElement('label')
	const ChessLabel = document.createElement('label')
	const ChessInput = document.createElement('input')
	const DrawLabel = document.createElement('label')
	const DrawInput = document.createElement('input')
	const MusicLabel = document.createElement('label')
	const MusicInput = document.createElement('input')
	const SendBtn = document.createElement('button')
	const ClearBtn = document.createElement('button')
	const CTLabel = document.createElement('label')
	const select = document.createElement('select')
	const ZTOption = document.createElement('option')
	const KyivOption = document.createElement('option')
	const LvivOption = document.createElement('option')

	// set attributes
	PSInput.setAttribute('type', 'password')
	RPSInput.setAttribute('type', 'password')
	FLMenInput.setAttribute('type', 'radio')
	FLWomenInput.setAttribute('type', 'radio')
	FootBallInput.setAttribute('type', 'checkbox')
	ChessInput.setAttribute('type', 'checkbox')
	DrawInput.setAttribute('type', 'checkbox')
	MusicInput.setAttribute('type', 'checkbox')
	SendBtn.setAttribute('type', 'button')
	ClearBtn.setAttribute('type', 'button')
	// addClasses
	container.classList.add('container')
	containerInputs.classList.add('container-input')
	containerlabels.classList.add('container-label')
	// add in order
	document.body.appendChild(form)
	form.appendChild(container)
	container.appendChild(containerlabels)
	container.appendChild(containerInputs)
	containerInputs.appendChild(FMInput)
	containerlabels.appendChild(FMLabel).innerHTML = 'Login:'
	containerlabels.appendChild(document.createElement('br'))
	containerlabels.appendChild(PSLabel).innerHTML = 'Password:'
	containerlabels.appendChild(document.createElement('br'))
	containerInputs.appendChild(PSInput)
	containerlabels.appendChild(RPSLabel).innerHTML = 'Repeat password:'
	containerlabels.appendChild(document.createElement('br'))
	containerInputs.appendChild(RPSInput)
	containerInputs.appendChild(document.createElement('br'))
	containerlabels.appendChild(SXLabel).innerHTML = 'Sex:'
	containerlabels.appendChild(document.createElement('br'))
	containerInputs.appendChild(FLMenInput)
	containerInputs.appendChild(FLMenLabel).innerHTML = 'Men'
	containerInputs.appendChild(FLWomenInput)
	containerInputs.appendChild(FLWomenLabel).innerHTML = 'Women'
	containerInputs.appendChild(document.createElement('br'))
	containerlabels.appendChild(CTLabel).innerHTML = 'Select city:'
	containerlabels.appendChild(document.createElement('br'))
	containerInputs.appendChild(select)
	select.appendChild(ZTOption).innerHTML = 'Zhitomir'
	select.appendChild(KyivOption).innerHTML = 'Kyiv'
	select.appendChild(LvivOption).innerHTML = 'Lviv'
	containerInputs.appendChild(document.createElement('br'))
	containerlabels.appendChild(INLabel).innerHTML = 'Interests:'
	containerInputs.appendChild(FootBallInput)
	containerInputs.appendChild(FootBallLabel).innerHTML = 'Football'
	containerInputs.appendChild(ChessInput)
	containerInputs.appendChild(ChessLabel).innerHTML = 'Chess'
	containerInputs.appendChild(DrawInput)
	containerInputs.appendChild(DrawLabel).innerHTML = 'Draw'
	containerInputs.appendChild(MusicInput)
	containerInputs.appendChild(MusicLabel).innerHTML = 'Music'
	containerInputs.appendChild(document.createElement('br'))
	containerInputs.appendChild(SendBtn).innerHTML = 'Send'
	containerInputs.appendChild(ClearBtn).innerHTML = 'Clear'
}

addForm()
// Task 2
document.addEventListener('DOMContentLoaded', function () {
	const accordionItems = document.querySelectorAll('.accordion-item')

	accordionItems.forEach(function (item) {
		const header = item.querySelector('.accordion-item-header')

		header.addEventListener('click', function () {
			const content = item.querySelector('.accordion-item-content')

			if (content.style.display === 'none' || content.style.display === '') {
				content.style.display = 'block'
			} else {
				content.style.display = 'none'
			}
		})
	})
})
