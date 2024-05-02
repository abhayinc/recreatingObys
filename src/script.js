function timer() {
    let count = 0
    const timer = document.querySelector('#timer ');
    setInterval(() => {
        if (count<100){
            timer.innerHTML = count++
        }else timer.innerHTML = count
    }, 55);
}
const tl = gsap.timeline();
tl.from('.disclaimer h1', {duration: 0.6, stagger:0.2, y: +100, delay: 0.5, })
tl.from('.counter', {opacity: 0, });
tl.to('#loader', {duration: 0.5, opacity: 0, delay:4.5});
tl.from('#one', {y: 1200, opacity: 0})
tl.to('#loader', {display: 'none'});

timer()