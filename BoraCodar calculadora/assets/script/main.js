const botoes = document.querySelectorAll("button");
const tela = document.querySelector(".valor_tela");
let texto = "";

botoes.forEach((elemento)=>{
    elemento.addEventListener("click", (event) => {
        texto = texto + elemento.dataset.botao

        tela.innerText = texto;
    })
})



/* NUMEROS SEM DATA SET

botoes.forEach((elemento)=>{
    elemento.addEventListener("click", (event) => {
        texto = texto + elemento.innerText

        tela.innerText = texto;
    })
})

*/