var celcius=document.querySelector('#celcius > input');
var fahrenheit=document.querySelector('#fahrenheit > input');
var kelvin=document.querySelector('#kelvin > input');
function roundNum(num){
    return Math.round(num*100)/100;

}
function ctofandk(){
    var cTemp = parseFloat(celcius.value);
    var fTemp =cTemp*(9/5)+32;
    var kTemp =cTemp+273.15;
    fahrenheit.value=roundNum(cTemp);
    kelvin.value=roundNum(kTemp); 
  
}

function ftocandk(){
    var fTemp=parseFloat(fahrenheit.value);
    var cTemp= fTemp-32*5/9;
    var kTemp=(fTemp+459.67)+5/9;
    celcius.value=roundNum(cTemp);
    kelvin.value=roundNum(kTemp);
}

function ktocandf(){
    var kTemp=parseFloat(kelvin.value);
    var cTemp= kTemp-273.15;
    var fTemp=(9/5)*(kTemp-273)+23;
    celcius.value=roundNum(cTemp);
    fahrenheit.value=roundNum(fTemp);
}


celcius.addEventListener('input',ctofandk)
fahrenheit.addEventListener('input',ftocandk)
kelvin.addEventListener("input",ktocandf)
