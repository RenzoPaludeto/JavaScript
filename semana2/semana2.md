<!--
! -ESTRUTURAS DE LOOP: 
-->

<!--
? FOR:
-->
 O for é um loop que geralmente usamos quando sabemos o número exato de repetições necessárias
 Ele possui três partes principais: inicialização, condição e incremento.
<!--
*EXEMPLO:
* for (let i = 0; i < 5; i++) {
*     console.log("Repetição número " + i);
* }
-->

<!--
? WHILE:
-->
O while é usado quando não sabemos exatamente quantas vezes o loop deve rodar, mas sabemos a condição que deve ser verdadeira para ele continuar.
<!--
*EXEMPLO:
* let contador = 0;
* while (contador < 5) {
*   console.log("Contador é " + contador);
*   contador++;
* }
-->
No exemplo, o loop while continua enquanto contador < 5. A variável contador é incrementada a cada iteração, impedindo o loop infinito.

<!--
? DO WHILE:
-->
O do while é semelhante ao while, mas a diferença é que ele garante que o código dentro do loop seja executado pelo menos uma vez
mesmo se a condição for false no início.
<!--
*EXEMPLO:
* let contador = 0;
* do {
*  console.log("Contador é " + contador);
*  contador++;
* } while (contador < 5);
-->
Aqui, o loop executa primeiro o bloco e depois verifica a condição. Mesmo que contador já fosse maior que 5
o código dentro do do seria executado uma vez antes da verificação.


<!--
! -ARRAYS E OBJETOS: 
-->

<!--
? ARRAYS:
-->
Estrutura de dados que armazena uma coleção de elementos em uma única variável.
Criar um array: `const lista = [1, 2, 3];`.
Acessar elementos: `lista[0]` (acessa o primeiro elemento).
Métodos úteis:
  `push()`: Adiciona elemento ao final do array.
  `pop()`: Remove o último elemento.
  `map()`, `filter()`, `reduce()`: Métodos para transformar, filtrar e reduzir elementos do array.

<!--
? OBJETOS:
-->
Estrutura de dados que armazena pares chave-valor.
Criar um objeto: `const usuario = { nome: "João", idade: 25 };`.
Acessar/modificar propriedades: `usuario.nome` ou `usuario["nome"]`.
Objetos são essenciais para JSON, o formato comum para troca de dados em APIs.


<!--
? -OPERACOES EM ARRAYS E OBJETOS: 
-->

<!--
* ARRAYS:
-->
Principais operações em arrays:
    - Acessar elementos: array[0].
    - Adicionar elementos: array.push(valor) ou array.unshift(valor).
    - Remover elementos: array.pop() ou array.shift().
    - Iterar pelos elementos: array.forEach(item => console.log(item)).
    - Filtrar, transformar e buscar:
        - array.filter(item => item > 10).
        - array.map(item => item * 2).
        - array.find(item => item === 5).
    - Ordenar elementos: array.sort()

<!--
* OBJETOS:
-->
Principais operações em objetos:
    - Criar um objeto: 
        const usuario = { nome: "João", idade: 25 };
    - Acessar/modificar propriedades:
        usuario.nome 
        ou 
        usuario["nome"];
    - Adicionar ou atualizar propriedades:
        usuario.email = "joao@email.com";
    - Remover propriedades:
        delete usuario.idade;
    - Iterar pelas propriedades:
        for (let chave in usuario) { console.log(usuario[chave]); }
        ou 
        Object.keys(usuario).forEach(chave => console.log(usuario[chave]));
    - Verificar a existência de uma chave:
        "nome" in usuario.


<!--
! -TEMPORIZADORES: 
-->




<!--
! -CALLBACKS E PROMISE: 
-->




<!--
! -ASYNC - AWAIT: 
-->