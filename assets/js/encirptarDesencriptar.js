let input = document.querySelector('input')
let div = document.querySelector('.change')
let parrafo = document.querySelector('.textoDesencriptado')

// ENCRIPTAR
let buttonEncriptar = document.querySelector('.encriptar')

buttonEncriptar.addEventListener("click",(e)=>{
    e.preventDefault()
    let userText = input.value.toLowerCase()
    //llamar a la funcion solo si la validacion del texto nos da true 
    if (validarForm(userText)) {
        encriptador(userText)
    } else {
        alert("ingrese unicamente letras sin tildes")
    }    
})

const encriptador = function(texto){
    //guardo el texto como letras separadas en un array
    let aux = texto.split('')
    let textoEncriptado = []

    //recorrer el array buscando las vocales y cambiarlas por sus codigos
    aux.forEach(letra => {
        if(letra === "a"){
            textoEncriptado.push("ai")
        }else if(letra === "e"){
            textoEncriptado.push("enter")
        }else if(letra === "i"){
            textoEncriptado.push("imes")
        }else if(letra === "o"){
            textoEncriptado.push("ober")
        }else if(letra === "u"){
            textoEncriptado.push("ufat")
        }else{
            textoEncriptado.push(letra)
        }
    });
    // //elimino los espacios
    // textoEncriptado = textoEncriptado.map((elemnt)=>{
    //     if(elemnt != ' ') return elemnt
    // })

    //unifico el array
    textoEncriptado = textoEncriptado.join('')

    //modifico el html
    div.classList.add('none')
    parrafo.classList.remove('none')
    parrafo.innerHTML = `
        <p> ${textoEncriptado}</p>
        <i class="far fa-copy"></i>
        <a href="http://">Copiar</a>
        `

}

//valido que sean letras unicamente 
const validarForm = function(inputtxt){
    var letters = /^[A-Za-z\s]*$/;
    if(inputtxt.match(letters) && inputtxt !== "" )
        return true;
}

//DESENCRIPTAR 
let buttonDesencriptar = document.querySelector('.desencriptar')

buttonDesencriptar.addEventListener("click",(e)=>{
    e.preventDefault()
    let userText = input.value.toLowerCase()
    if (validarForm(userText)) {
        desencriptador(userText)
    } else {
        alert("ingrese unicamente letras sin tildes")
    }    
})

const desencriptador = function(arr){
    //guardo el array como letras separadas
    let aux = arr.split('')
    console.log(aux);
    let textoDesencriptado = []

    for (let i = 0; i < arr.length; i++) {
        //element equivale a la letra en cada vuelta
        const letra = arr[i];

        //si la letra es una vocal elimino las siguientes posiciones equivalentes a la encriptacion en las vueltas de i
        if(letra === "a"){
            textoDesencriptado.push(letra)
            i+=1
        }else if(letra === "e"){
            textoDesencriptado.push(letra)
            i+=4
        }else if(letra === "i"){
            textoDesencriptado.push(letra)
            i+=3
        }else if(letra === "o"){
            textoDesencriptado.push(letra)
            i+=3
        }else if(letra === "u"){
            textoDesencriptado.push(letra)
            i+=3
        }else{
            textoDesencriptado.push(letra)
        }        
    }
    console.log(textoDesencriptado);
    //unifico el array separandolo por los espacios de cada posicion
    textoDesencriptado = textoDesencriptado.join('')
    console.log(textoDesencriptado)

    //modifico el html
    div.classList.add('none')
    parrafo.classList.remove('none')
    parrafo.innerHTML = `
        <p> ${textoDesencriptado}</p>
        <i class="far fa-copy"></i>
        <a href="">Copiar</a>
        `    
}

