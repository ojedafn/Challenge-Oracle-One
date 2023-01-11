let input = document.querySelector('input')
let divHome = document.querySelector('.change')
let divTexto = document.querySelector('.textoDesencriptado')
let divCopy = document.querySelector('.copy')
let copy = document.querySelector('.btncopy')
let userText;

// ENCRIPTAR
let buttonEncriptar = document.querySelector('.encriptar')

buttonEncriptar.addEventListener("click",(e)=>{
    e.preventDefault()
    encriptador()
    //llamar a la funcion solo si la validacion del texto nos da true 
})

const encriptador = function(){
    userText = input.value.toLowerCase()
    if (validarForm(userText)) {
        // userText = userText
        //la /g al final de la expresion regular determina que busque todas las coincidencias y no solo la primera
        // .replace(/e/g, "enter")        
        // .replace(/i/g, "imes")
        // .replace(/a/g, "ai")
        // .replace(/o/g, "ober")
        // .replace(/u/g, "ufat")

        //mas eficiente
        let aux = "";
        for (let i = 0; i < userText.length; i++) {
            if(userText.charAt(i) === "a"){
                aux += "ai"
            }else if(userText.charAt(i) === "e"){
                aux +="enter"
            }else if(userText.charAt(i) === "i"){
                aux +="imes"
            }else if(userText.charAt(i) === "o"){
                aux +="ober"
            }else if(userText.charAt(i) === "u"){
                aux +="ufat"
            }else{
                aux += userText.charAt(i)
            }           
        }
        userText = aux

        //modifico el html
        divHome.classList.add('none')
        divTexto.classList.remove('none')
        divCopy.classList.remove('none')
        divTexto.innerHTML = `
            <h1> ${userText}</h1>
            `
    } else {
            alert("ingrese unicamente letras sin tildes")
    }  
}

//DESENCRIPTAR 
let buttonDesencriptar = document.querySelector('.desencriptar')

buttonDesencriptar.addEventListener("click",(e)=>{
    e.preventDefault()
    desencriptador()  
})

const desencriptador = function(arr){
    userText = input.value.toLowerCase()
    if (validarForm(userText)) {
        //la /g al final de la expresion regular determina que busque todas las coincidencias y no solo la primera      
        // userText = userText
        // .replace(/enter/g, "e")        
        // .replace(/imes/g, "i")
        // .replace(/ai/g, "a")
        // .replace(/ober/g, "o")
        // .replace(/ufat/g, "u")
        
        //si la letra es una vocal elimino las siguientes posiciones equivalentes a la encriptacion en las vueltas de i
        let aux = "";
        for (let i = 0; i < userText.length; i++) {
            if(userText.charAt(i) === "a"){
                aux += "a"
                i ++
            }else if(userText.charAt(i) === "e"){
                aux +="e"
                i += 4
            }else if(userText.charAt(i) === "i"){
                aux +="i"
                i += 3
            }else if(userText.charAt(i) === "o"){
                aux +="o"
                i += 3
            }else if(userText.charAt(i) === "u"){
                aux +="u"
                i += 3
            }else{
                aux += userText.charAt(i)
            }           
        }
        userText = aux
        
        //modifico el html
        divHome.classList.add('none')
        divTexto.classList.remove('none')
        divCopy.classList.remove('none')
        divTexto.innerHTML = `
            <h1> ${userText}</h1>
            `
    } else {
            alert("ingrese unicamente letras sin tildes")
    }
           
}


//valido que sean letras unicamente 
const validarForm = function(inputtxt){
    var letters = /^[A-Za-z\s]*$/
    if(inputtxt.match(letters) && inputtxt !== "" )
        return true
}

// COPIAR 

function copiador(){
    console.log("xoxo")
    navigator.clipboard.writeText(userText)
    console.log("copiado " + userText)
    // divCopy.innerHTML += `<p class="small">Copiado!</p>`
}
copy.addEventListener("click", copiador)


