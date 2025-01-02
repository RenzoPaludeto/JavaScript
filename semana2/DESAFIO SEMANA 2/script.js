function GerarTarefa(){
    let TarefaNome = document.getElementById('Tarefa').value
    let TarefaPrioridade = document.getElementById('Prioridade').value
    let TarefaInicio = document.getElementById('Inicio').value
    let TarefaConclusao = document.getElementById('Conclusao').value

    if( !TarefaConclusao || !TarefaInicio || !TarefaNome || !TarefaPrioridade) {
        document.getElementById('output').innerHTML = 'erro'
        output.style.color = 'red'
    }else {
        document.getElementById('output').innerHTML = ''
        output.style.color = ''
    
    let PrazoMS = new Date(TarefaConclusao) - new Date(TarefaInicio)
    let Prazo = Math.ceil(PrazoMS / (1000 * 60 * 60 * 24))

    let lista = document.createElement('li')
    let Tarefa = {
        nome: TarefaNome,
        prioridade: TarefaPrioridade,
        inicio: TarefaInicio,
        conclusao: TarefaConclusao,
        prazo: Prazo
    }
    
    lista.innerHTML = `Tarefa: ${Tarefa.nome}, Prioridade: ${Tarefa.prioridade}, Prazo: ${Tarefa.prazo}`

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.style.marginLeft = "10px";
    botaoExcluir.onclick = function () {
        lista.remove();
    }

    let botaoEditar = document.createElement('button');
    botaoEditar.textContent = "Editar";
    botaoEditar.style.marginLeft = "10px";
    botaoEditar.onclick = function () {
        document.getElementById('Tarefa').value = TarefaNome
        document.getElementById('Prioridade').value = TarefaPrioridade
        document.getElementById('Inicio').value = TarefaInicio
        document.getElementById('Conclusao').value = TarefaConclusao
        lista.remove()
    }

    lista.appendChild(botaoExcluir)
    lista.appendChild(botaoEditar)
    document.getElementById('Lista').appendChild(lista)
}

    document.getElementById('Tarefa').value = ''
    document.getElementById('Prioridade').value = ''
    document.getElementById('Inicio').value = ''
    document.getElementById('Conclusao').value = ''
}

