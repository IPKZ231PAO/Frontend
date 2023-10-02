const body = document.querySelector('body')
const pAll = document.querySelectorAll('p')

body.style.fontFamily = 'Arial, Helvetica, sans-serif'
pAll[0].style.cssText = `color:orange;
background-color:yellow;
font-size:16px;
padding:5px;
text-align:center;
`
pAll[1].style.cssText = `color:blue;
background-color:lightblue;
font-size:14px;
padding:5px;
text-align:right;
`
pAll[2].style.cssText = `color:red;
background-color:rgb(234, 87, 87);
font-size:16px;
padding:5px;
text-align:left;
`
// task  1.2
const tbodyElementsTd = document.querySelectorAll('td')
for (i = 0; i < tbodyElementsTd.length; i++)
	if (i % 2 == 0) tbodyElementsTd[i].classList.add('selected')

// Task 2

let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`

const arrayFromText = text.split(' ')
const newArr = []
newArr.push(
	arrayFromText[12],
	arrayFromText[6],
	arrayFromText[18],
	arrayFromText[25]
)
const newStrFromArr = newArr.join('')
console.log(newStrFromArr)
// task 2.2

const newStrLowerCase = text.toLowerCase()
console.log(newStrLowerCase)
// Task 2.3

for (i = 0; i < arrayFromText.length; i++)
	if (arrayFromText[i].includes('in')) console.log(i)

// Task 2.4

console.log(arrayFromText)

// task 2.5

console.log(arrayFromText.reverse().join(' '))

// task 2.6

function ucFirst(txt) {
	let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1)
	return newTxt
}
console.log(ucFirst('some text'))
