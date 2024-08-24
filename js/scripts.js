

let Clock = null;
// quando clicco il bottone start
const Start = document.getElementById('start');
Start.addEventListener('click', function() {
    Clock = setInterval(function() {
        // console.log('Avvia il timer');
        // prendo il numero dall'html
        let Time = parseInt(document.getElementById('number').innerText);
        Time++;
        console.log(Time);
        document.getElementById('number').innerText = Time;
    }, 1000)
});

// quando clicclo il bottone stop
const Stop = document.getElementById('stop');
Stop.addEventListener('click', function() {
    console.log('Stoppa il timer');
    clearInterval(Clock);
    Clock = null;
});

// quando clicclo il bottone reset
const Reset = document.getElementById('reset');
Reset.addEventListener('click', function() {
    document.getElementById('number').innerText = 0;
    console.log('Resetta il timer');
});