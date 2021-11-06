const body = document.body
const Element = document.getElementsByClassName("item")[0]
let isMouseDown = false;
let startX, scrollLeft;


body.addEventListener('mousedown',()=>{
    isMouseDown = true;
    body.classList.add('active');

    startX = e.pageX - body.offsetLeft;
    scrollLeft = body.scrollLeft;

});

body.addEventListener('mouseleave',()=>{
    isMouseDown = false;
    body.classList.remove('active');
});

body.addEventListener('mouseup',()=>{
    isMouseDown = false;
    body.classList.remove('active');
});

body.addEventListener('mousemove',()=>{
    if(!isMouseDown)return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) *1;
    slider.scrollLeft = scrollLeft - walk;

});



