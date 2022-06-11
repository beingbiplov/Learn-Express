
const btn = document.getElementById('clickme')
const heading =  document.getElementsByClassName('main_heading')[0]
const body = document.getElementsByTagName('body')[0]

let randomColor = () => {return Math.floor(Math.random()*16777215).toString(16);}

btn.addEventListener('click', ()=>{
    btn.style.backgroundColor = `#${randomColor()}`
    heading.style.color = `#${randomColor()}`
    body.style.backgroundColor = `#${randomColor()}`
})