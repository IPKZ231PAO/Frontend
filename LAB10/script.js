function saveForm() {
	let formData = {}

	formData.name = document.getElementById('name').value
	formData.email = document.getElementById('email').value
	formData.message = document.getElementById('message').value
	formData.checkbox = document.getElementById('checkbox').checked
	formData.radio = document.querySelector('input[name="radio"]:checked')
		? document.querySelector('input[name="radio"]:checked').value
		: null
	formData.select = document.getElementById('select').value

	localStorage.setItem('formData', JSON.stringify(formData))
}

window.onload = function () {
	let storedData = localStorage.getItem('formData')

	if (storedData) {
		var formData = JSON.parse(storedData)

		document.getElementById('name').value = formData.name
		document.getElementById('email').value = formData.email
		document.getElementById('message').value = formData.message
		document.getElementById('checkbox').checked = formData.checkbox

		if (formData.radio) {
			document.getElementById('radio1').checked = formData.radio === 'option1'
			document.getElementById('radio2').checked = formData.radio === 'option2'
		}

		document.getElementById('select').value = formData.select
	}
}

let formFields = document.getElementById('myForm').elements
for (let i = 0; i < formFields.length; i++) {
	formFields[i].addEventListener('input', saveForm)
}

// task 2
function showImages() {
	const fileInput = document.getElementById('fileInput')
	const imageContainer = document.getElementById('imageContainer')
	const message = document.getElementById('message')
	const error = document.getElementById('error')

	try {
		const files = JSON.parse(fileInput.value)
		if (!Array.isArray(files)) {
			throw new Error('Input is not a valid JSON array.')
		}
		imageContainer.innerHTML = ''
		files.forEach(file => {
			const imgElement = document.createElement('img')
			imgElement.src = file.trim()
			imgElement.alt = 'Image'
			imgElement.addEventListener('click', () => toggleImageSize(imgElement))
			imageContainer.appendChild(imgElement)
		})
		message.textContent = 'OK'
		error.textContent = ''
	} catch (err) {
		message.textContent = ''
		error.textContent = err.message
	}
}

function toggleImageSize(imgElement) {
	if (imgElement.style.transform === 'scale(1.5)') {
		imgElement.style.transform = 'scale(1)'
	} else {
		imgElement.style.transform = 'scale(1.5)'
	}
}

// task 3
class Student {
	constructor(lastName, firstName, math, history, JS, avg) {
		this.lastName = lastName
		this.firstName = firstName
		this.math = math
		this.history = history
		this.JS = JS
		this.avg = avg
	}
}

class ListOfStudents {
	constructor(students) {
		this.students = students
	}

	getTableList() {
		let table =
			'<table border="1"><thead><tr><th>lastName</th><th>firstName</th><th>math</th><th>history</th><th>JS</th><th>avg</th></tr></thead>'
		for (let student of this.students) {
			table += `<tbody><tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.math}</td><td>${student.history}</td><td>${student.JS}</td><td>${student.avg}</td></tr></tbody>`
		}
		table += '</table>'
		table +=
			'<br><span class="green-text">Total avg of group: ' +
			this.getTotalAvg() +
			'</span><br>'
		return table
	}

	getTotalAvg() {
		let totalAvg = 0
		for (let student of this.students) {
			totalAvg += Number(student.avg)
		}
		return (totalAvg / this.students.length).toFixed(2)
	}
}

class StylesTable extends ListOfStudents {
	getStyles() {
		return 'table { border-collapse: collapse; width: 50%; } th, td { border: 1px solid black; padding: 8px; text-align: left; }'
	}

	getTableList() {
		const parentTable = super.getTableList()
		const styles = this.getStyles()
		return `<style>${styles}</style>${parentTable}`
	}

	getAvgForPerson() {
		for (let student of this.students) {
			student.avg = ((student.math + student.history + student.JS) / 3).toFixed(
				2
			)
		}
	}
}

const students = [
	new Student('Doe', 'John', 5, 5, 5),
	new Student('Smith', 'Jane', 4, 2, 2),
	new Student('Smith', 'Jane', 4, 4, 5)
]

const styledTable = new StylesTable(students)
styledTable.getAvgForPerson()
document.getElementById('styledTable').innerHTML = styledTable.getTableList()
// task 4
class Shape {
	static total = 100

	constructor(a) {
		this.a = a
	}

	static fill() {
		Shape.total = 100
	}

	draw() {
		let quad = document.createElement('div')
		quad.style.width = '30px'
		quad.style.height = '30px'
		quad.style.backgroundColor = 'red'
		quad.style.opacity = Shape.total + '%'
		Shape.total -= 10
		return quad
	}
}

let btnDraw = document.querySelector('#draw')
let btnFill = document.querySelector('#fill')
let cont = document.querySelector('#container')
btnDraw.addEventListener('click', function () {
	let s = new Shape(100)
	container.appendChild(s.draw())
})
btnFill.addEventListener('click', function () {
	Shape.fill()
})
