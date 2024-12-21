// const right = document.getElementById("right");
// const cards = document.querySelector(".causerol");
// const drag = (e)=>{
//     console.log(e.pageX)
// }

// cards.addEventListener("mousemove",drag)
const boxes = [...document.querySelectorAll('.scroolbar')]
const rbtn = [...document.querySelectorAll('.right')]
const lbtn = [...document.querySelectorAll('.left')]
boxes.forEach((item,i) => {
    let container = item.getBoundingClientRect();
    let containerwidth = container.width

    rbtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerwidth
    })
    lbtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerwidth
    })
})




