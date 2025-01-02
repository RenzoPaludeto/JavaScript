

function Adicionar(){
    let texto = document.getElementById('ToDoTEXTO').value
    //const CriarLi = document.createElement('li')
    //const position = document.getElementById('Lista')
    //position.appendChild(CriarLi)
    //Lista.appendChild(CriarLi)

    document.getElementById('Alerta').innerHTML = 'Sucesso'
    document.getElementById('Lista').innerHTML = `${texto}`
}