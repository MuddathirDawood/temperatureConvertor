const btnDisplay = document.querySelector('#display')

btnDisplay.addEventListener('click', ()=>{
    let celcius = document.querySelector('#celcius').value;
    let num = parseInt(celcius);
    let calculate = (num * 9/5) + 32;
    console.log(calculate);
    document.querySelector('#fahren').innerHTML = `${calculate}∘F`;
})