# desafio-itelios-front-end

Front end - Itelios

Para o desafio, criei a index contendo estilo css e a importação das fonts (Google), 
sem a necessidade de criar outro arquivo css, contendo no body do arquivo a Div responsável
pelo recebimento dos itens #response.

O Tratamento e retorno da api foi criado na pagina api-response.js

que faz a leitura do arquivo products.js em uma requisição new XMLHttpRequest();

caso o retorno status seja OK, um array e criado para receber o tratamento  

var arr = JSON.parse(this.responseText);

o mesmo é passado como parametro para função IteliosJson que é responsavel pelo recebimento

e tratamento dos dados para envio ao front end via JS.

------

As funções para os efetios de transição (dos itens) está logo abaixo 

feito em JS->Jquery movendo a cada 4 segundos

function next() 

é incluida em um setInterval que realiza a ação de auto-click, realiza o efeito de transição dos objetos

retornados, caso os paramentros nextitem == FALSE e nextsop  == null || 0

nextsop recebe como dado o retorno vindo de localstorage session armazedado como 0 por padrão no campo stop a cada novo reflesh.

Abaixo desativada "comentada" esta a função Click que faz com que o autoload dos itens entre em pausa, ativando a nextitem == TRUE 

e adicionado 1 ao localstorage -> stop, setado como 0 por padrão, assim desta forma, não entra no IF de verificação

no proximo ciclo do intervalo de 4 segundos do setInterval responsável por checkar e realizar a ação entre os itens 

deixando o efeito em manual realizado a cada click, voltando ao automatico caso aconteça o reload.

--------

Efeitos de hover, utilizando Jquery para incluir os botões de add ao carrinho + hover via css para transformação 

do background gradient "cinza com branco" ao passar o mouse ou click no item.

-----

Adaptação mobile criando uma lista em bloco, com transição dos itens de baixo para cima, mantendo os feitos hover(click).

