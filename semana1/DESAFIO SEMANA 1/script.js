function Cadastro() {
    let usuario = {
        nome: document.getElementById("NOME").value,
        sobrenome: document.getElementById("SOBRENOME").value,
        idade: document.getElementById("IDADE").value,
        email: document.getElementById("EMAIL").value,
        senha: document.getElementById("SENHA").value
    }

   

    if(!usuario.nome || !usuario.sobrenome || !usuario.idade || !usuario.email || !usuario.senha){
        document.getElementById('output').innerHTML = 'Erro! <br> Certifique-se de ter preenchido todos os dados pedidos'
        return;
    }

    if(usuario.idade < 18) {
        document.getElementById('output').innerHTML = 'Erro! <br> A idade minima de cadastro e 18 anos'
        return;
    }

    document.getElementById('output').innerHTML = `Sucesso! <br> Seja bem vindo ${usuario.nome} ${usuario.sobrenome}`

}

