
// ===== CADASTRO =====
const FORM_CADASTRAR = document.getElementById("form-cadastrar");
 
if (FORM_CADASTRAR) {
    FORM_CADASTRAR.addEventListener("submit", function(event) {
        event.preventDefault();
 
        let temErro = false;
 
        const campoEmail = document.getElementById("email");
        const erroEmail = document.getElementById("erro-email");
        const emailDigitado = campoEmail.value.trim();
 
// lista de utilizadores
        let listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
 
// 2. Verificar se o e-mail já existe na lista
        const emailJaExiste = listaUsuarios.some(u => u.email === emailDigitado);
 
        if (emailJaExiste) {
            erroEmail.innerText = "Este e-mail já está cadastrado no sistema!";
            campoEmail.classList.add("erro-input");
            temErro = true;
        } else {
            erroEmail.innerText = "";
            campoEmail.classList.remove("erro-input");
            campoEmail.classList.add("sucesso-input");
        }
 
// Validação da Senha
        const campoSenha = document.getElementById("senha");
        const erroSenha = document.getElementById("erro-senha");
        const senhaDigitada = campoSenha.value;
 
        if (senhaDigitada.length < 6) {
            erroSenha.innerText = "Sua senha é muito curta. Mínimo de 6 caracteres!";
            campoSenha.classList.add("erro-input");
            temErro = true;
        } else {
            erroSenha.innerText = "";
            campoSenha.classList.remove("erro-input");
            campoSenha.classList.add("sucesso-input");
        }
 
// Validação do DDD
        const campoDDD = document.getElementById("ddd");
        const erroDDD = document.getElementById("erro-ddd");
        const dddDigitado = campoDDD.value;
 
        if (dddDigitado.length !== 2) {
            erroDDD.innerText = "O DDD precisa de exatamente 2 números.";
            campoDDD.classList.add("erro-input");
            temErro = true;
        } else {
            erroDDD.innerText = "";
            campoDDD.classList.remove("erro-input");
            campoDDD.classList.add("sucesso-input");
        }
 
// Se houver erros, interrompe a execução
        if (temErro) {
            return;
        }
 
// Montar objeto do utilizador
        const usuario = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: emailDigitado,
            senha: senhaDigitada,
            ddd: dddDigitado,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            cep: document.getElementById("cep").value,
            dataNascimento: document.getElementById("data-nascimento").value,
            genero: document.getElementById("genero").selectedOptions[0]?.text || "",
        };
 
    // Guardar o novo utilizador no array e atualizar o localStorage
        listaUsuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
 
        alert("Cadastro Realizado com SUCESSO!");
        window.location.href = "login.html"; // Redireciona para a página de login
    });
}
 
// ===== LOGIN =====

const FORM_LOGIN = document.getElementById("form-logar");
 
if (FORM_LOGIN) {
    FORM_LOGIN.addEventListener("submit", function(event) {
        event.preventDefault();
 
        const emailDigitado = document.getElementById("email").value.trim();
        const senhaDigitada = document.getElementById("senha").value;
 
        // Obter a lista de utilizadores guardada
        const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
 
        // Procurar o utilizador com o e-mail e senha correspondentes
        const usuarioValido = listaUsuarios.find(u => u.email === emailDigitado && u.senha === senhaDigitada);
 
        if (usuarioValido) {
            // Guardar sessão do utilizador logado
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
            alert("Usuário Logado com Sucesso!");
            window.location.href = "index.html"; // Redireciona para o painel/home
        } else {
            alert("ATENÇÃO: E-mail ou senha incorretos.");
        }
    });
}