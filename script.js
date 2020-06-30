// Immediately invoked function expression
// to not pollute the global scope
(function() {
    const wheel = document.querySelector('.wheel');
    const startbutton = document.querySelector('.button');
    let deg = 0;

    startbutton.addEventListener('click',() => {
        startbutton.style.pointerEvents ='none';
        deg = Math.floor(5000 + Math.random() * 5000);
        wheel.style.transition = 'all 10s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () =>{
        startbutton.style.pointerEvents ='auto';
        wheel.classList.remove('blur');
        wheel.style.transition ='none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        

    });
})();
