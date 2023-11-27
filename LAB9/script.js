class Modal {
	constructor() {
		this.modal = document.createElement('div')
		this.modal.className = 'modal'
		this.modal.innerHTML = `
        <div class="modal-header">Модальне вікно</div>
        <div class="modal-content"></div>
      `
		document.body.appendChild(this.modal)

		this.isDragging = false
		this.offsetX = 0
		this.offsetY = 0

		this.modal
			.querySelector('.modal-header')
			.addEventListener('mousedown', this.startDrag.bind(this))
		window.addEventListener('mousemove', this.drag.bind(this))
		window.addEventListener('mouseup', this.stopDrag.bind(this))
	}

	open(content) {
		this.modal.querySelector('.modal-content').innerHTML = content
		this.modal.style.display = 'block'
	}

	close() {
		this.modal.style.display = 'none'
	}

	setContent(content) {
		this.modal.querySelector('.modal-content').innerHTML = content
	}

	startDrag(e) {
		this.isDragging = true
		this.offsetX = e.clientX - this.modal.offsetLeft
		this.offsetY = e.clientY - this.modal.offsetTop
	}

	drag(e) {
		if (this.isDragging) {
			this.modal.style.left = e.clientX - this.offsetX + 'px'
			this.modal.style.top = e.clientY - this.offsetY + 'px'
		}
	}

	stopDrag() {
		this.isDragging = false
	}
}

const myModal = new Modal()

myModal.open('<p>Це вміст модального вікна</p>')
myModal.setContent('<p>Новий вміст модального вікна</p>')

myModal.close()
myModal.open('<p>Це вміст модального вікна</p>')
// Task 2
class Slider {
	constructor(container, isVertical = false) {
		this.container = container
		this.isVertical = isVertical
		this.currentSlide = 0

		this.createSlider()
		this.addControls()
	}

	createSlider() {
		this.slider = document.createElement('div')
		this.slider.className = 'slider'

		this.slides = document.createElement('div')
		this.slides.className = 'slides'

		this.slider.appendChild(this.slides)
		this.container.appendChild(this.slider)
	}

	addSlide(content) {
		const slide = document.createElement('div')
		slide.className = 'slide'
		slide.innerHTML = content

		this.slides.appendChild(slide)
		this.updateSlider()
	}

	addControls() {
		this.controls = document.createElement('div')
		this.controls.className = 'controls'

		this.prevButton = document.createElement('div')
		this.prevButton.className = 'prev'
		this.prevButton.innerHTML = '&lt;'
		this.prevButton.addEventListener('click', this.prevSlide.bind(this))

		this.nextButton = document.createElement('div')
		this.nextButton.className = 'next'
		this.nextButton.innerHTML = '&gt;'
		this.nextButton.addEventListener('click', this.nextSlide.bind(this))

		this.controls.appendChild(this.prevButton)
		this.controls.appendChild(this.nextButton)

		this.slider.appendChild(this.controls)
	}

	updateSlider() {
		const axis = this.isVertical ? 'Y' : 'X'
		this.slides.style.transform = `translate${axis}(${
			-this.currentSlide * 100
		}%)`
	}

	prevSlide() {
		this.currentSlide = Math.max(this.currentSlide - 1, 0)
		this.updateSlider()
	}

	nextSlide() {
		this.currentSlide = Math.min(
			this.currentSlide + 1,
			this.slides.children.length - 1
		)
		this.updateSlider()
	}
}

const mySlider = new Slider(document.body, false)

mySlider.addSlide(
	'<img src="https://via.placeholder.com/800x400" alt="Slide 1">'
)
mySlider.addSlide(
	'<img src="https://via.placeholder.com/800x400" alt="Slide 2">'
)
mySlider.addSlide(
	'<img src="https://via.placeholder.com/800x400" alt="Slide 3">'
)
// task 3
class Table {
	constructor(container) {
		this.container = container
		this.data = []

		this.createTable()
	}

	createTable() {
		this.table = document.createElement('table')
		this.container.appendChild(this.table)
	}

	addRow(rowData) {
		const row = this.table.insertRow()
		rowData.forEach(cellData => {
			const cell = row.insertCell()
			cell.textContent = cellData
		})
	}

	addColumn(colData) {
		this.data.forEach((row, rowIndex) => {
			if (!rowIndex) {
				const headerCell = this.table.rows[0].insertCell()
				headerCell.textContent = colData[0]
			}

			const cell = this.table.rows[rowIndex + 1].insertCell()
			cell.textContent = colData[rowIndex + 1]
		})
	}
}

const myTable = new Table(document.body)

myTable.addRow(['Name', 'Age', 'Country'])
myTable.addRow(['John', '25', 'USA'])
myTable.addRow(['Alice', '30', 'UK'])

myTable.addColumn(['Gender', 'Male', 'Female'])
// task4
class Form {
	constructor(fields) {
		this.fields = fields
		this.render()
	}

	render() {
		const form = document.createElement('form')
		form.addEventListener('submit', this.onSubmit.bind(this))

		this.fields.forEach(field => {
			const label = document.createElement('label')
			label.textContent = field.label

			const input = document.createElement('input')
			input.type = field.type
			input.name = field.name
			input.required = field.required

			form.appendChild(label)
			form.appendChild(input)
		})

		const submitButton = document.createElement('button')
		submitButton.type = 'submit'
		submitButton.textContent = 'Submit'
		form.appendChild(submitButton)

		document.body.appendChild(form)
	}

	onSubmit(event) {
		event.preventDefault()
		const formData = {}

		this.fields.forEach(field => {
			const input = document.querySelector(`[name="${field.name}"]`)
			formData[field.name] = input.value
		})

		if (this.validate(formData)) {
			// Виконати дії при валідних даних (наприклад, відправка на сервер)
			console.log('Form data:', formData)
		} else {
			console.log('Validation failed. Please check your input.')
		}
	}

	validate(formData) {
		// Простий приклад валідації: всі поля повинні бути заповнені
		return this.fields.every(field => formData[field.name].trim() !== '')
	}
}

const formFields = [
	{ label: 'Name', type: 'text', name: 'name', required: true },
	{ label: 'Email', type: 'email', name: 'email', required: true },
	{ label: 'Password', type: 'password', name: 'password', required: true }
]

const myForm = new Form(formFields)
// task 5

class Tab {
	constructor() {
		this.tabs = []
		this.contents = []
	}

	addTab(tabTitle, tabContent) {
		this.tabs.push(tabTitle)
		this.contents.push(tabContent)
	}

	render() {
		this.removeExistingTabs()

		const tabsContainer = document.createElement('div')
		tabsContainer.classList.add('tabs-container')

		const tabsList = document.createElement('ul')
		tabsList.classList.add('tabs')

		const contentsContainer = document.createElement('div')

		this.tabs.forEach((tabTitle, index) => {
			const tab = document.createElement('li')
			tab.textContent = tabTitle
			tab.classList.add('tab')
			tab.addEventListener('click', () => this.showTab(index))

			tabsList.appendChild(tab)

			const content = document.createElement('div')
			content.classList.add('tab-content')
			content.innerHTML = this.contents[index]

			contentsContainer.appendChild(content)
		})

		tabsList.children[0].classList.add('active')
		contentsContainer.children[0].classList.add('active')

		tabsContainer.appendChild(tabsList)
		tabsContainer.appendChild(contentsContainer)

		document.body.appendChild(tabsContainer)
	}

	showTab(index) {
		const tabs = document.querySelectorAll('.tab')
		tabs.forEach(tab => tab.classList.remove('active'))
		tabs[index].classList.add('active')

		const contents = document.querySelectorAll('.tab-content')
		contents.forEach(content => content.classList.remove('active'))
		contents[index].classList.add('active')
	}

	removeExistingTabs() {
		const existingTabsContainer = document.querySelector('.tabs-container')
		if (existingTabsContainer) {
			existingTabsContainer.remove()
		}
	}
}

const myTabs = new Tab()
myTabs.addTab('Tab 1', '<p>Content for Tab 1</p>')
myTabs.addTab('Tab 2', '<p>Content for Tab 2</p>')
myTabs.addTab('Tab 3', '<p>Content for Tab 3</p>')

myTabs.render()
// task 6
class Notification {
	constructor() {
		this.container = document.createElement('div')
		this.container.classList.add('notification-container')
		document.body.appendChild(this.container)
	}

	show(message, type) {
		const notification = document.createElement('div')
		notification.classList.add('notification', type)
		notification.textContent = message

		const closeBtn = document.createElement('span')
		closeBtn.classList.add('close-btn')
		closeBtn.innerHTML = '&times;'
		closeBtn.addEventListener('click', () => this.close(notification))

		notification.appendChild(closeBtn)

		this.container.appendChild(notification)

		setTimeout(() => {
			notification.style.display = 'block'
		}, 100)

		setTimeout(() => {
			this.close(notification)
		}, 5000)
	}

	close(notification) {
		notification.style.display = 'none'
	}
}

const myNotification = new Notification()

myNotification.show('Success message', 'success')
myNotification.show('Info message', 'info')
myNotification.show('Warning message', 'warning')
myNotification.show('Error message', 'error')
