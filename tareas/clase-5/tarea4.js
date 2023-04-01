const arrayLi = Array.from(document.querySelectorAll("li"))
const arrayValores= arrayLi.map(li => parseInt(li.innerText))

const sumaArray = arrayValores.reduce((acumulado,actual) => acumulado + actual, 0)
const promedio = sumaArray/ arrayValores.length
const numPequeño = Math.min(...arrayValores)
const numGrande = Math.max(...arrayValores)
const frecuencias = {};
arrayValores.forEach(num => {frecuencias[num]= (frecuencias[num] || 0) + 1})
let máximaFrecuancia = 0;
let numFrecuente;
Object.entries(frecuencias).forEach(([num, frec])=>{
    if(frec > máximaFrecuancia){
        máximaFrecuancia = frec;
        numFrecuente = num  
    }
} );

document.querySelector("#promedio").innerText= `EL PROMEDIO DE LOS NUMEROS ES ${promedio}` 
document.querySelector("#numero-pequeño").innerText= `EL NÚMERO MAS PEQUEÑO ES ${numPequeño}` 
document.querySelector("#numero-grande").innerText= `EL NÚMERO MAS grande ES ${numGrande}` 
document.querySelector("#numero-repite").innerText= `El numero que más se repite es ${numFrecuente}` 
