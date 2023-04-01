

const botoningreso = document.querySelector("#unir")

botoningreso.onclick = function(){
    let  nombreUsuario;
    nombreUsuario = document.querySelector("#nombre-usuario").value
    let apellidoUsuario = document.querySelector("#apellido-usuario").value
    let edadUsuario = Number(document.querySelector("#edad-usuario").value)
    resultado = ` Nombres ${nombreUsuario} Apellidos ${apellidoUsuario} Edad ${edadUsuario} `
    document.querySelector("#resultado").innerHTML = resultado
    nuevosaludo = `Bienvenido ${nombreUsuario}`
    document.querySelector("#saludo").innerHTML = nuevosaludo
}
