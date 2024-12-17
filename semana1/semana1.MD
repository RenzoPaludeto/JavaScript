<!--
! -VARIAVEIS: 
-->

<!--
* Servem para amrmazenar dados que podem ser manipulados e reutilizados futuramente ao longo do programa 
-->


<!--
? LET:
--> 
Funciona somente no bloco em que foi declarado 
Permite reatribuicoes de seus valores
(Uso para variaveis que precisam ser reatribuidas)

<!--
? CONST:
-->
Funciona somente no bloco em que foi declarado
Nao permite reatribuicoes, porem blocos e arrays conseguem ter seus conteudos modificados
(uso em geral para valores que nao precisam ser mudados)

<!--
? VAR:
-->
Global
Permite reatribuicoes
(Evitar usar, pois e desatualizado e pode gerar problemas de escopo)


<!--
! -TIPOS DE DADOS:
-->


<!--
? STRINGS:
-->
Sao textos, ('Hello World!'), que podem ser escrito sempre entre (" ") ou ('')

<!--
? NUMBERS:
-->
Sao Numeros, (10), (3,14)

<!--
? BOOLEANS:
-->
E o que indica se algo e verdadeiro ou falso, (true/false)

<!--
? NULL:
-->
Ausencia de valor 

<!--
? UNDEFINED:
-->
Variavel declarada, porem sem nenhum valor atribuido a ela 


<!--
! -OPERADORES:
-->


<!--
? ARITIMETICOS:
-->  

(+) = soma 
(-) = subtracao 
(*) = multiplicacao 
(/) = divisao 
 
<!--
? COMPARACAO:
--> 

(==) = igual
(===) = igualdade estrita
<!--
* EXEMPLO: 5 === '5'; ira retornar false, pois 5 e um number e '5' uma string 
-->


(!=) = diferenca 
(!==) = diferenca estrita 
<!--
* EXEMPLO: 5 !== '5', retorna true pois sao de tipos diferentes 
-->

(>) = maior que
(<) = menor que 

<!--
? LOGICA:
--> 

&&(AND) = Retorna TRUE se ambas expressoes forem verdadeiras
<!--
* EXEMPLO:
* console.log(true && true);    // true
* console.log(true && false);   // false
-->

||(OR) = Retorna TRUE se pelo menos uma expressao for verdadeira
<!--
* EXEMPLO:
* console.log(true || false);   // true
* console.log(false || false);  // false
-->

!(NOT) = Inverte o valor booleano, transforma TRUE em FALSE e vise versa
<!--
* EXEMPLO:
* console.log(!true);   // false
* console.log(!false);  // true
-->  

??(NULLISH COALESCING) = Retorna o valor da direita caso o da esquerda seja NULL ou UNDEFINED 
<!--
* EXEMPLO:
* let valor = null;
* let resultado = valor ?? "Valor padrão";
* console.log(resultado); // "Valor padrão"
-->

<!--
? OPERADOR TERNARIO:
-->

?(If true)
:(If false)



<!--
! -CONDICIONAIS:
-->
<!--
* Sao usadas para controlar a sequência em que o código é executado, permitindo tomar decisões ou repetir ações
-->


<!--
? IF:
-->
if avalia uma condição, e se for true, o bloco de código associado a ela é executado.
<!--
* EXEMPLO:
* let idade = 18;
* if (idade >= 18) {
*    console.log('Voce e maior de idade')
* }
-->

<!--
? ELSE:
-->
O else é usado para executar um bloco de código alternativo, caso a condição do if seja false.
<!--
* let idade = 16

* if (idade >= 18) {
*     console.log('acesso liberado')
* } else {
*     console.log('acesso restrito')
* }
-->


<!--
? SWITCH:
-->
O switch em JavaScript é uma estrutura de controle usada para tomar decisões com base no valor de uma expressão  
Ele é especialmente útil quando se precisa verificar múltiplos casos
<!--
* let fruta = "maçã";

* switch (fruta) {
*     case "banana":
*         console.log("Você escolheu banana!");
*         break;
*     case "laranja":
*         console.log("Você escolheu laranja!");
*         break;
*     default:
*         console.log("Fruta não disponível.");
* }
-->


<!--
! -FUNCOES
-->

<!--
? FUNCTION:
-->
E DEFINIDA PELA SINTAXE (FUNCTION)
<!--
* EXEMPLO:
* function saudacao(nome) {
*     console.log(`Olá, ${nome}!`);
* }

* saudacao("João"); // Olá, João!
-->

<!--
? ARROW FUNCTION
-->
E EXECUTADA PELA SINTAXE ( () => {})
<!--
* EXEMPLO:
* const saudacao = nome => `Olá, ${nome}!`
* console.log(saudacao("Maria")); // Olá, Maria!
-->