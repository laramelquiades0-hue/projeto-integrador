
//Jocinho
/*
const formBusca = document.querySelector('.busca')
const campoBusca = document.querySelector('.busca__campo')
const itensCatalogo = document.querySelectorAll('.bordados')

//VERIFICAR SE O FORMULARIO DE BUSCA EXISTE
if(formBusca){
    formBusca.addEventListener('submit', function(event){
        event.preventDefault()
    });
}
//Agora vamos verificar o texto que foi digitado
campoBusca.addEventListener('input', function() {
        //converter  otexto em minúsculo para facilitar a comparação
        const termoBusca = campoBusca.value.toLocaleLowerCase()

    //vamos verificar  todas as seções de bordados
    itensCatalogo.forEach(function(item){
        //pegar o elemento que tem o texto do bordado
        const titulo = item.querySelector('h3').innerText.toLocaleLowerCase();
        //verificar se o termo de busca e igual ao título
    if(titulo.includes(termoBusca)){
        item.style.display = 'block';
   }else{
        item.style.display = 'none';
   }
    })
})
 */

const formBusca = document.querySelector('.busca')
const campoBusca = document.querySelector('.busca-campo')
const itensCatalogo = document.querySelectorAll('.card')

// Verificar se o formulário de busca existe
if (formBusca) {

    formBusca.addEventListener('submit', function(event) {
        event.preventDefault()
    })

}

// Verificar o texto que foi digitado
if (campoBusca) {

    campoBusca.addEventListener('input', function() {

        // Pegar o texto digitado
        const termoBusca = campoBusca.value.toLowerCase()

        // Verificar todos os produtos
        itensCatalogo.forEach(function(item) {

            // Pegar o nome do produto
            const titulo = item.querySelector('.card-title').innerText.toLowerCase()

            // Verificar se o produto corresponde à pesquisa
            if (titulo.includes(termoBusca)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }

        })

    })

}

