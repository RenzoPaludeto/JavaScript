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
Sao funcoes que permitem executar alguma parte do codigo apos um determinado periodo de tempo 
POdendo ser definido entre intervalos unicos ou repetidos

<!--
? SetTimeout:
-->
Executa uma funcao apos um determinado intervalo de tempo 
E um temporizador unico (e executado somente uma vez) 

<!--
* setTimeout(() => {
*    console.log("Executado após 2 segundos!");
* }, 2000);
-->

<!--
? SetInterval:
-->
Executa uma funcao repetidas vezes em intervalos regulares de tempo 

<!--
* setInterval(() => {
*    console.log("Executado a cada 2 segundos!");
* }, 2000);
-->

<!--
? clearTimeout:
-->
Cancela um temporizador criado com SetTimeout

<!--
* const TimeoutID = setTimeout(() => {
*    console.log("Executado após 2 segundos!");
* }, 2000);
* clearTimeout(TimeoutID)
-->


<!--
? clearInterval:
-->
Cancela um temporizador criado com SetInterval

<!--
* const IntervalID = setInterval(() => {
*    console.log("Executado a cada 2 segundos!");
* }, 2000);
* clearInterval(IntervalID)
-->


<!--
! -CALLBACKS E PROMISE: 
--> 

<!--
? CALLBACK:
-->
Um callback e uma fucao passada como argumento para outra funcao
Ele é executado após a conclusão de uma operação
permitindo controlar o que acontece depois que algo assíncrono é realizado.

<!--
* function fetchData(callback) {
*     setTimeout(() => {
*         const data = "Dados carregados";
*         callback(data);
*     }, 2000);
* }

* fetchData((result) => {
*     console.log(result); // "Dados carregados" (após 2 segundos)
* });
-->

Callbacks podem ficar confusos quando há muitas operações assíncronas encadeadas, resultando em código difícil de ler e manter.

<!--
? PROMISE: 
-->
Uma Promise é um objeto que representa um valor que pode estar disponível agora, no futuro ou nunca
Ela resolve os problemas dos callbacks, tornando o código mais legível e fácil de gerenciar.

<!--
* function fetchData() {
*     return new Promise((resolve, reject) => {
*         setTimeout(() => {
*             const success = true; // Simula sucesso ou falha
*             if (success) {
*                 resolve("Dados carregados");
*             } else {
*                 reject("Erro ao carregar os dados");
*             }
*         }, 2000);
*     });
* }
*
* fetchData()
*     .then((result) => {
*         console.log(result); // "Dados carregados"
*     })
*     .catch((error) => {
*         console.error(error); // "Erro ao carregar os dados"
*     });
-->

<!--
* .then:
-->
O método .then é usado para executar uma função quando a Promise é resolvida (estado Fulfilled)

<!--
* .catch
-->
O método .catch é usado para tratar erros ou rejeições na Promise (estado Rejected)


<!--
! -ASYNC/AWAIT: 
-->

<!--
? ASYNC:
-->
Declara uma função assíncrona.
Sempre retorna uma Promise.
O valor retornado pela função é automaticamente encapsulado em uma Promise.

<!--
? AWAIT:
-->
Pausa a execução da função assíncrona até que a Promise seja resolvida.
Só pode ser usado dentro de funções declaradas com async.
 
 
 <!--
 * EXEMPLO:
* const fetchData = () => {
*    return new Promise((resolve, reject) => {
*        setTimeout(() => {
*            resolve("Dados carregados com sucesso!");
*        }, 2000);
*    });
* };
*
* async function loadData() {
*     const result = await fetchData(); // Aguarda a resolução da Promise
*     console.log(result); // "Dados carregados com sucesso!"
* }
*
* loadData();
-->

A palavra-chave await faz com que a execução de loadData() pause até que fetchData() seja resolvida.
Quando a Promise é resolvida, o valor dela é atribuído à variável result.
O restante da função é executado após a Promise ser resolvida.


<!--
* TRY-CATCH:
-->
try-catch é uma estrutura de controle no JavaScript usada para tratar erros que ocorrem durante a execução de um bloco de código
Ele permite que você lide com exceções de forma elegante, sem interromper a execução completa do programa.

<!--
 *EXEMPLO:
* function dividir(a, b) {
*     try {
*         if (b === 0) {
*             throw new Error("Não é possível dividir por zero.");
*         }
*         console.log("Resultado:", a / b);
*     } catch (error) {
*         console.error("Erro capturado:", error.message);
*     }
* }
*
* dividir(10, 2); // Resultado: 5
* dividir(10, 0); // Erro capturado: Não é possível dividir por zero.
-->

<!--
* FINALLY:
-->
O bloco finally é opcional e sempre será executado, independentemente de ter ocorrido um erro ou não

<!--
* try {
*      Código que pode gerar um erro
* } catch (error) {
*      Código para tratar o erro
* } finally {
*      Código que será executado sempre
* }

-->

<!--
* PROMISE.ALL:
-->
Se múltiplas operações podem ser executadas em paralelo, use Promise.all para otimizar o desempenho.

<!--
 *EXEMPLO:
* const task1 = () => new Promise((resolve) => setTimeout(() => resolve("Tarefa 1 concluída"), 2000));
* const task2 = () => new Promise((resolve) => setTimeout(() => resolve("Tarefa 2 concluída"), 1000));
*
* async function executeTasks() {
*    const [result1, result2] = await Promise.all([task1(), task2()]); // Executa ambas em paralelo
*    console.log(result1); // "Tarefa 1 concluída"
*    console.log(result2); // "Tarefa 2 concluída"
* }
*
* executeTasks();
-->