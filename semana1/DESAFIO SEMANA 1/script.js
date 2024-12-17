function Cadastro() {
    let usuario = {
        nome: document.getElementById("NOME").value,
        sobrenome: document.getElementById("SOBRENOME").value,
        idade: document.getElementById("IDADE").value,
        email: document.getElementById("EMAIL").value,
        senha: document.getElementById("SENHA").value
    }

    if(usuario.idade >= 18) {
        document.getElementById('output').innerHTML = 'sucesso'
        return;
    }else(!usuario.nome || !usuario.sobrenome || !usuario.idade || !usuario.email || !usuario.senha || usuario.idade < 18); {
        document.getElementById('error').innerHTML = 'erro'
        
    }
}







