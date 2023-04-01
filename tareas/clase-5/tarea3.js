document.querySelector("#calcular").onclick = function(){
    const horasvideos = document.querySelectorAll(".horas-videos")
    let horastotales =  0
    let horasminuteras = 0 
    for (let i=0; i<horasvideos.length;i++){
        horastotales += Number(horasvideos[i].value)
    }


    const minutosvideos = document.querySelectorAll(".minutos-videos")
    let minutostotales = 0
    let nuevovalorminutos = 0
    for( let i=0; i<minutosvideos.length;i++){
        minutostotales += Number(minutosvideos[i].value)
    }
    if(minutostotales>60){
        horasminuteras = Math.floor(minutostotales/60)
        nuevovalorminutos=  minutostotales % 60
    }


    const segundosvideos = document.querySelectorAll(".segundos-videos")
    let segundostotales = 0
    let nuevovalorsegundos = 0
    let segundosminuteros = 0
    for( let i=0; i<segundosvideos.length;i++){
        segundostotales += Number(segundosvideos[i].value)
    }
    if(segundostotales>60){
        segundosminuteros = Math.floor(segundostotales/60)
        nuevovalorsegundos=  segundostotales %60
    }

    horastotales = horastotales + horasminuteras
    nuevovalorminutos= nuevovalorminutos + segundosminuteros
    resultado = `El resultado es ${horastotales} horas, ${nuevovalorminutos} minutos, ${nuevovalorsegundos} segundos ` 
  document.querySelector("#resultado").innerHTML = resultado
  return false
}


