// 1 task
const selectCheckboxFunc =()=>{
    const checkboxes = document.querySelectorAll('.checkboxes input[type="checkbox"]')
    const checkboxArray=[]
    const checkboxP=document.querySelector('.checkboxP')

    for(let i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            checkboxArray.push(checkboxes[i].id)
        }
        
    }
   checkboxP.textContent = checkboxArray;
}
document.querySelector('.checkbox-btn').addEventListener('click',(e)=>{
    e.preventDefault()
    selectCheckboxFunc();
})
// task 2
const emails = document.querySelectorAll('.emails input[type="checkbox"]')
const resultDiv=document.querySelector('.result-div')
emails.forEach(item=>{
    item.addEventListener('change',()=>{
        emailFunc()
    })
})
const emailFunc=()=>{
    resultDiv.innerHTML-''
    const array=[]
    emails.forEach((item) =>{
        if (item.checked) {
            array.push(item.id)
        }
        resultDiv.innerHTML=array

    });
}
// task 3
const answerObj=[
    {
        question:'2x2=',
        rightAnswer:4,
        variants:[4,2,10,6]
    },
    {
        question:'3x4=',
        rightAnswer:12,
        variants:[41,12,10,16]
    },
    {
        question:'5x10=',
        rightAnswer:50,
        variants:[40,50,10,60]
    },
    {
        question:'5x5=',
        rightAnswer:25,
        variants:[45,25,15,65]
    }
]
let currentQuestion=0
let resultQuestionScore=0
const resultQuestionP=document.querySelector('.result')
const questionElement = document.querySelector('.question')
const nextQuestionBtn=document.querySelector('.next')
const radios=document.querySelectorAll('.questions input[type="radio"]')
const labels=document.querySelectorAll('.questions label')
const errorQuestionP=document.querySelector('.error')
const questionTextP=document.querySelector('.text')
const updateQuestion=()=>{
    let current=answerObj[currentQuestion];
    questionElement.textContent=current.question;
    console.log(questionElement.textContent)
    for(let i=0;i<labels.length;i++){
        labels[i].textContent=current.variants[i].toString();
        radios[i].id=current.variants[i].toString();;
    }

    errorQuestionP.textContent=''
}
updateQuestion()
nextQuestionBtn.addEventListener('click',()=>{
    console.log(questionElement.textContent)
    checkAnswer()
    currentQuestion++


    if(currentQuestion<answerObj.length){
        updateQuestion()
    }
    else{
        resultQuestionP.textContent='Finished'
        questionElement.textContent=currentQuestion
    }
})
const checkAnswer=()=>{
    let current=answerObj[currentQuestion]
    let answer=document.querySelector('.questions input[name="variant"]:checked')

    if(answer){
        if(parseInt(answer.id)===current.rightAnswer){
            resultQuestionScore++
            questionTextP.textContent="Right"
        }
        else{
            questionTextP.textContent="It isn't right. The right answer is: " + current.rightAnswer;
            updateQuestion()
        }
        resultQuestionP.textContent="Score: "+resultQuestionScore;
    }
    else{
        errorQuestionP.textContent="You didn't choose answer"
    }
}
// Task 4
let currentQuestion1=0
let resultQuestionScore1=0
const resultQuestionP1=document.querySelector('.result1')
const questionElement1 = document.querySelector('.question1')
const nextQuestionBtn1=document.querySelector('.next1')
const errorQuestionP1=document.querySelector('.error1')
const questionTextP1=document.querySelector('.text1')
const checkAnswerBtn=document.querySelector('.check')

const updateQuestion1=()=>{
    let current=answerObj[currentQuestion1];
    questionElement1.textContent=current.question;
    console.log(questionElement1.textContent)

    errorQuestionP1.textContent=''
}
updateQuestion1()
nextQuestionBtn1.addEventListener('click',()=>{
    console.log(questionElement.textContent)
    currentQuestion1++
   console.log(answerObj[currentQuestion1])

    if(currentQuestion1<answerObj.length){
        updateQuestion1()
    }
    else{
        resultQuestionP1.textContent='Finished'
        questionElement1.textContent=currentQuestion1
    }
})
const checkAnswer1=()=>{
    let current=answerObj[currentQuestion1]
    let answer=document.getElementById('answerNum').value

    if(answer!=''){
        if(answer==current.rightAnswer){
            resultQuestionScore1++
            questionTextP1.textContent="Right"
        }
        else{
            questionTextP1.textContent="It isn't right. The right answer is: " + current.rightAnswer;

        }
        resultQuestionP1.textContent="Score: "+resultQuestionScore1;
    }
    else{
        errorQuestionP1.textContent="You didn't choose answer"
    }
}
checkAnswerBtn.addEventListener('click',()=>{
    checkAnswer1()
})
// Task 5
const gallery = document.querySelectorAll('.gallery-img')


gallery.forEach(item=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('activeState')
    })
})
// Task 6
const sections = document.querySelectorAll('.form section');

sections.forEach(section => {
    const input = section.querySelector('.form input');

    input.addEventListener('focus', () => {
        sections.forEach(s => s.classList.remove('focused'));
        section.classList.add('focused');
    });
});
// Task 7
const figure = document.querySelector('.figure');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const rotateInput = document.getElementById('rotate');

widthInput.addEventListener('input',()=> ChangeWidth());
heightInput.addEventListener('input',()=> ChangeHeight());
rotateInput.addEventListener('input',()=> ChangeRotate());

function ChangeWidth() {
    const widthSize = widthInput.value + 'px';
    figure.style.width = widthSize;
}
function ChangeHeight() {
    const heightSize = heightInput.value + 'px';
    figure.style.height = heightSize;
}
function ChangeRotate() {
    const rotate = rotateInput.value + 'deg';
    figure.style.transform = `rotate(${rotate})`;
}
// Task 8
const toggleImg=document.querySelector('.task8container img')
const toggleBtn = document.querySelector('.task8btn')

toggleBtn.addEventListener('click',()=>{
    toggleImgSize(100,100);
})

const toggleImgSize=(prevW,prevH)=>{
    if(toggleImg.width===prevW&&toggleImg.height===prevH){
        toggleImg.style.width=(toggleImg.width*2).toString()+'px'
        toggleImg.style.height=(toggleImg.height*2).toString()+'px'
    }
    else{
        toggleImg.style.width=(toggleImg.width/2).toString()+'px'
        toggleImg.style.height=(toggleImg.height/2).toString()+'px'
    }
}

// Task 9

const selectedWear = document.querySelector('.selected-wear')

const orderBtns= document.querySelectorAll('.order-btn');
const basket = document.getElementById('basket');

const AddToOrder=(item)=> {
    const row = basket.querySelector(`tr[data-product="${item}"]`);
    if (row) {
        const count = parseInt(row.querySelector('.count').textContent);
        row.querySelector('.count').textContent = count + 1;
    } else {
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-product', item);
        newRow.innerHTML = `
            <td class="wear">${item}</td>
            <td class="count">1</td>
        `;
        basket.appendChild(newRow);
    }
}

orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        AddToOrder(btn.parentElement.parentElement.querySelector('td:first-child').textContent);
    });
});
// Task 10
const slideContainer = document.querySelector('.slide-container')
const slides = document.querySelectorAll('.slide');
const nextSlideBtn=document.querySelector('#right-btn')
const prevSlideBtn=document.querySelector('#left-btn')
let curSlide = 0;

prevSlideBtn.addEventListener('click', () => {
    ShowPrevSlide();
});

nextSlideBtn.addEventListener('click', () => {
    ShowNextSlide();
});

function ShowPrevSlide() {
    slides[curSlide].style.transform = 'translateX(100%)';
    curSlide = (curSlide - 1 + slides.length) % slides.length;
    slides[curSlide].style.transform = 'translateX(0)';
}

function ShowNextSlide() {
    slides[curSlide].style.transform = 'translateX(-100%)';
    curSlide = (curSlide + 1) % slides.length;
    slides[curSlide].style.transform = 'translateX(0)';
}



