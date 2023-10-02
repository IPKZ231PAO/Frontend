// Task 1.1
const paragraphArray = document.querySelectorAll('#paragraph p')
const arrayForP = []
paragraphArray.forEach(item => {
	arrayForP.push(item.innerText)
})
console.log(arrayForP)

// 1.2
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3]

console.log(`Max:${Math.max(...arr)} Min:${Math.min(...arr)}`)

let counterP = 0
let counterN = 0
arr.filter(cur => (cur % 2 == 0 ? counterP++ : counterN++))
console.log(`Непарні:${counterN} Парні:${counterP}`)

console.log(
	arr.filter(item => {
		if ((item <= -10 && item >= -99) || (item >= 10 && item <= 99)) {
			return item
		}
	})
)
counterN = 0
counterP = 0
arr.filter(item => (item >= 0 ? counterP++ : counterN++))
console.log(`-${counterN}, +${counterP}`)

console.log(arr.toSorted((a, b) => a - b))

console.log(arr.reverse())

// task 2

const tbodyElementsTd = document.querySelectorAll('td')
for (i = 0; i < tbodyElementsTd.length; i++)
	if (i % 2 == 0) tbodyElementsTd[i].classList.add('selected')

// taks 3
let matrix = []

for (let i = 0; i < 5; i++) {
	let row = []
	for (let j = 0; j < 7; j++) {
		let randomNumber = Math.floor(Math.random() * (50 - -20 + 1)) + -20
		row.push(randomNumber)
	}
	matrix.push(row)
}
console.log(matrix)

let count = 0
for (let row of matrix) {
	for (let element of row) {
		if (element > 0) {
			count++
		}
	}
}
console.log(`Кількість додатних елментів${count}`)

count = 0
for (let row of matrix) {
	if (!row.includes(0)) {
		count++
	}
}
console.log(`К-сть рядків без жодного нульового елемента${count}`)

count = 0
for (let col = 0; col < matrix[0].length; col++) {
	for (let row of matrix) {
		if (row[col] === 0) {
			count++
			break
		}
	}
}
console.log(
	`Кількість рядків, що містять хоча б один нульовий елемент ${count}`
)

let maxSeriesLength = 0
let rowIndex = -1
for (let i = 0; i < matrix.length; i++) {
	let currentSeriesLength = 1
	for (let j = 1; j < matrix[i].length; j++) {
		if (matrix[i][j] === matrix[i][j - 1]) {
			currentSeriesLength++
		} else {
			currentSeriesLength = 1
		}
		if (currentSeriesLength > maxSeriesLength) {
			maxSeriesLength = currentSeriesLength
			rowIndex = i
		}
	}
}
console.log(`Номер рядка з найдовшою серією однакових елементів: ${rowIndex}`)

let res = 1
for (let row of matrix) {
	if (!row.some(el => el < 0)) {
		for (let el of row) {
			res *= el
		}
	}
}
console.log(`Добуток ел. в тих рядках, які не містять - ел. ${res}`)

res = 1
for (let row of matrix) {
	if (!row.some(el => el < 0)) {
		for (let el of row) {
			res += el
		}
	}
}
console.log(`Сума ел. в тих рядках, які не містять - ел. ${res}`)

let sum = Array(matrix[0].length).fill(0)
for (let row of matrix) {
	for (let col = 0; col < row.length; col++) {
		if (row[col] < 0) {
			sum[col] += row[col]
		}
	}
}
console.log(`Суми в стовпцях з від'ємним ел. ${sum}`)

let trArr = []
for (let i = 0; i < matrix.length; i++) {
	trArr.push([])
}
for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix.length; j++) {
		trArr[j].push(matrix[i][j])
	}
}
console.log(trArr)
// Advance
const rows = matrix.length
const cols = matrix[0].length
let mSum = 0

for (let k = 0; k < cols; k++) {
	let sum = 0
	for (let i = 0, j = k; i < rows && j < cols; i++, j++) {
		sum += matrix[i][j]
	}
	mSum = Math.max(mSum, sum)
}

console.log(mSum)
let sums = []
for (let k = 0; k < rows + cols - 1; k++) {
	let sum = 0
	for (
		let i = Math.max(0, k - rows + 1), j = Math.min(k, rows - 1);
		i <= j;
		i++
	) {
		let col = k - i
		sum += Math.abs(matrix[i][col])
	}
	sums.push(sum)
}

let minSum = Math.min(...sums)

console.log(minSum)
