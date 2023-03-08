let celsius = document.getElementById('celsius');
let fahrenheit=document.getElementById('fahrenheit');


celsius.oninput = () => {
    let output = (parseFloat(celsius.value) *9)/5  + 32;
    fahrenheit.value= parseFloat(output.toFixed(2));
}; 