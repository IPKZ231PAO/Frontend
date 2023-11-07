// Task 1
const task1table=document.querySelector('#task1table')
const task1btn = document.querySelector('#task1AddBtn')

const addPerson=()=>{
    const personFN = document.querySelector('#task1FN').value
    const personLN = document.querySelector('#task1LN').value
    const newRow=task1table.insertRow(-1);
    const numCell = newRow.insertCell(0)
    const FNCell = newRow.insertCell(1)
    const LNCell = newRow.insertCell(2)
    numCell.innerHTML=task1table.rows.length-1
    
    FNCell.innerHTML=personFN;
    LNCell.innerHTML=personLN;

}

task1btn.addEventListener('click',()=>{
addPerson()
})
// task 2

const generateTable=()=>{
    const inputText=document.querySelector('#task2txtarea').value
    const tableContainer=document.querySelector('#task2tablecontainer')
    tableContainer.innerHTML=''
    const table = document.createElement('table');
    const rows = inputText.trim().split('\n');
    for (let i = 0; i < rows.length; i++) {
        const row = document.createElement('tr');
        const cells = rows[i].split('');

        for (let j = 0; j < cells.length; j++) {
            const cell = document.createElement('td');
            cell.style.width = '20px';
            cell.style.height = '20px';

            
            if (cells[j] === '1') {
                cell.style.backgroundColor = 'black';
            } else if (cells[j] === '0') {
                cell.style.backgroundColor = 'white';
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

   
    tableContainer.appendChild(table);
}
document.getElementById('task2btn').addEventListener('click', generateTable);
// task 3
const colorPalette = document.getElementById('colorPalette');
const rectangle = document.getElementById('rectangle');
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
const selectedColors = [];

const changeGradientColor=()=> {
    if (selectedColors.length === 0) {
        rectangle.style.background = 'linear-gradient(to bottom right, #FFFFFF, #FFFFFF)';
    } else if (selectedColors.length === 1) {
        rectangle.style.background = `linear-gradient(to bottom right, ${selectedColors[0]}, ${selectedColors[0]})`;
    } else {
        const gradientColors = selectedColors.join(',');
        rectangle.style.background = `linear-gradient(to bottom right, ${gradientColors})`;
    }
}

colors.forEach((color) => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;
    
    colorDiv.addEventListener('click', () => {
        
        if (selectedColors.includes(color)) {
           
            const colorIndex = selectedColors.indexOf(color);
            selectedColors.splice(colorIndex, 1);
        } else {
           
            selectedColors.push(color);
        }

        colorDiv.classList.toggle('selected');
        changeGradientColor();
    });

    colorPalette.appendChild(colorDiv);
});
// task 4
const postsArray=document.querySelectorAll('.post')
const editBtns=document.querySelectorAll('.task4edit')
const deleteBtns=document.querySelectorAll('.task4delete')
editBtns.forEach((el)=>{
el.addEventListener('click',(e)=>{
    editFunc(e.target.parentNode)
    el.classList.toggle('selected')
})
})
deleteBtns.forEach((el)=>{
    el.addEventListener('click',(e)=>{
       e.target.parentNode.parentNode.removeChild(e.target.parentNode)
       if(el.className==='selected')el.classList.remove('selected')
    })
    })

function editFunc(item){
    if(item.querySelector('.post p')){
        const p = item.querySelector('p')
        const txtArea = document.createElement('textarea')
        item.appendChild(txtArea)
        item.removeChild(p)
        txtArea.innerHTML=p.innerHTML
        txtArea.classList.add('selected')
    }
    else{
        const textArea = item.querySelector('textarea')
        const pTag=document.createElement('p')
        item.appendChild(pTag)
        pTag.innerHTML=textArea.value
        item.removeChild(textArea)
    }
}
// task 5

const colorss = document.querySelectorAll('.color');
const canvas = document.querySelector('.canvas');

let selectedColor = 'red';

   
colorss.forEach(color => {
    color.addEventListener('click',()=> {
        selectedColor = color.style.backgroundColor;
    });
});

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div')
        cell.className = 'cell'
        cell.addEventListener('click', ()=> {
            cell.style.backgroundColor = selectedColor
        });

        canvas.appendChild(cell);
    }
}
// Task 6
const cardContainer = document.querySelector('.task6container')
const cards = cardContainer.querySelectorAll('.card')

cards.forEach(card => {
    let isFlipped = false;

    card.addEventListener('click', function() {
        if (!isFlipped) {
            card.querySelector('.card-inner').style.transform = 'rotateY(180deg)'
        } else {
            card.querySelector('.card-inner').style.transform = 'rotateY(0deg)'
        }

        isFlipped = !isFlipped;
    });
});
// task7

const commentsForm = document.querySelector('.addCommentForm')


const commentFormBtn=commentsForm.querySelector('button')

commentsForm.addEventListener('submit',(e)=>{
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

    const comments = document.querySelector('.comments')
    e.preventDefault()
    const newComment=document.createElement('div')
    newComment.innerHTML=`<div class="comment-head">
    <p>${commentsForm.querySelector('#commentName').value}</p>
    <p>Date: ${day} ${year} ${hours}:${minutes}</p>
</div>
<div class="comment-text">
    ${commentsForm.querySelector('#commentText').value}
</div>`
    newComment.classList.add('comment')
    comments.appendChild(newComment)
})
// task 8

const bookList = document.querySelector('.book-list');
const books = bookList.querySelectorAll('.book');

for (const book of books) {
    book.addEventListener('click', ()=> {
        book.classList.toggle('selected-book')
    });
}

