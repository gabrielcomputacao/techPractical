// todo => ASSICRONISMO

const syncFunction = () => {
  // Quando coloca o setTimeout essa função vira assincrona, o javascript nao bloqueia o código para esperar ela ser executada, faz as outras tarefas
  // e depois executa essa função e manda a resposta
  setTimeout(() => console.log("gabriel"), 300);
};

/* Quando o javascript encontra uma função que não está pronta ele move ela para um stack a parte continua o codigo e depois quando ela estiver pronta
    chama ela para retornar se foi resolve ou reject
*/

console.log(1);

syncFunction();

console.log(2);

// todo => PROMISES

// Promise é um objeto
// Que recebe um callback como parametro
// Essa callback recebe dois parametros o resolve e reject
// Os dois parametros tambem sao uma callback

let promise = new Promise((resolve, reject) => {
  let teste = 1 + 1;

  if (teste === 2) {
    resolve("Resolvido com sucesso");
  } else {
    reject("Deu Erro!");
  }
});

console.log("teste");

promise.then((data) => console.log(data));

console.log("teste2");

// Uma promise executa uma tarefa de modo assincrono que é levado para a stack fora do codigo sincrono e o javascript processa ela, continuando o fluxo do codigo
// sincrono, quando a promessa estiver pronto o javascript chama ela de volta trazendo o retorno que pode ser reject ou resolve.

// todo => Promise chamada de API fetch

const url = "https://api.github.com/repos/facebook/react";

const callAPIAsync = () => {
  fetch(url)
    .then((data) => console.log(data))
    .catch(() => console.log("deu erro"));
};

console.log("a");

callAPIAsync();

console.log("b");
