// Array para armazenar os amigos
let amigos = [];

// Elementos da página
const inputNome = document.getElementById("nomeAmigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Função para adicionar amigo
document.getElementById("btnAdicionar").addEventListener("click", () => {
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Verifica se já existe
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputNome.value = "";
    inputNome.focus();
});

// Função para atualizar lista na tela
function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Criando botão de remover
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("btn-remover");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover amigo
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear amigo secreto
document.getElementById("btnSortear").addEventListener("click", () => {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `🎉 Seu amigo secreto é ${sorteado}! 🎁`;
});

// Função para limpar lista
document.getElementById("btnLimpar").addEventListener("click", () => {
    if (amigos.length === 0) {
        alert("A lista já esta vazia!");
        return;
    }

    if (confirm("Tem certeza que deseja limpar toda a lista?")) {
        amigos = [];
        atualizarLista();
        resultado.textContent = "";
    }
});
