
function DadosUsuarios(email, senha){
    this.email =  email;
    this.senha = senha;
}

function cadastrarUsuario(formCadastro,formLogin) {
    formCadastro.classList.remove("escondido")
    formLogin.classList.add("escondido")
}


document.addEventListener('submit', events => {
    events.preventDefault()
    const formCadastro = document.querySelector("#cadastroDeUsuarios");
    const formLogin = document.querySelector("#login-user")
    let dado = getDadosUsuarios(formCadastro,formLogin)
    console.log(dado)
})


function getDadosUsuarios(){
    try{
        const email = document.querySelector('#txtEmail').value;
        const senha = document.querySelector('#txtSenha').value;
        const dadosLogin = new DadosUsuarios(email,senha)
        if(email.length <= 0 || senha.length <= 0 ){
            throw "Nenhum Valor inserido" // GERO UM ERRO DE "Nenhum Vlor Inserido"
        }
        return dadosLogin

    }catch(error){ // Capturo o erro gerado lá em cima 
        alert("ERRO valores invalidos")
        console.log(error)
    }
}
