document.addEventListener('submit', events => {
    events.preventDefault()
})
function cadastrarUsuario() {
    const formCadastro = document.querySelector("#cadastroDeUsuarios");
    formCadastro.classList.remove("escondido")
}