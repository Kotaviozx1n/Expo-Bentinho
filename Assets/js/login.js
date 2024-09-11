function mostarSenha(){
    //importando os cara da tela
    var  inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('eye-icon')

    //verifica se o input é tipo password
    if(inputPass.type === 'password'){
        //se for muda o tipo de input para texto, pra noIS ver o bagu
        inputPass.setAttribute('type','text')
        btnShowPass.setAttribute('class','bi bi-eye-slash-fill')
    }
    else{
        //SE NÃO MUDAR PRA TEXTO nois ve os baguui cz
        inputPass.setAttribute('type','password')
        btnShowPass.setAttribute('class','bi bi-eye-fill')
    }
}