---
title: "WAI-ARIA - Acessibilidade na web"
excerpt: "Aprenda a como aumentar a acessibilidade no seu site"
author: "Diego Alessandro"
date: "09-28-2021"
image: "acessibillity.jpg"
duration: 10
---

## Porque devo aprender a criar sites acessiveis?

Pelo menos 45 milhões de brasileiros são portadores de algum tipo de deficiência, isso representa quase 25% da
população brasileira segundo o levatamento feito pelo IBGE em 2019. Logo se você tem um site não acessivel é
basicamente privar 25% dos brasileiros de acessarem e consumirem seu conteúdo seja qual ele for. Tambem sabemos que
pessoas com deficiêcia movimentam cerca de 22 bilhões de dólares por ano. Ainda não está convencido de que ter
um site acessivel trás apenas vantagens? Pois bem então aqui vai uma lista de bons motivos para criar
sites acessiveis:  

1. Vantagem competitiva dentro de negocios.
2. Maior visibilidade em mecanismos de busca(google, firefox e etc).
3. fácilidade no consumo do conteúdo proposto.
4. Um passo a mais para um ambiente online inclusivo e igualitario.
5. Maior relevancia por consequência aumento na receita da empresa.
6. Imagem positiva.

Além disso também não podemos esquecer que a acessibilidade em páginas web é obrigatoria por lei:

> Art. 63 da lei "é obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação
> comercial no País ou por órgãos de governo, para uso da pessoa com deficiência, garantindo-lhe acesso às informações
> disponíveis, conforme as melhores práticas e diretrizes de acessibilidade adotadas internacionalmente"

## O que é WAI-ARIA?

A WAI-ARIA serve para estender o significado das interações do seu site. Hoje em dia as tags HTML faz um trabalho
muito importante de dar significado a estruturas do layout, possibilitando você poder marcar o que é um menu de
navegação, um cabeçalho, um rodapé e etc. Isso ajuda a definir a importância de cada elemento. WAI-ARIA ajuda o leitor de
tela na interação de elementos como um clique avisando o usuário de que ele está sendo movido para outra página por exemplo.

## Semântica

A semântica é dividida em duas partes, os roles que define o tipo do elemento que o usuário está interagindo e states/properties que são
são responsáveis de definir o estado do elemento. Por exemplo você fala que esse elemento é um acordeon com os roles de states e properties
você diz se esse acordeon está aberto ou fechado.

### Roles

São os 3 principais tipos de role. Cada tipo de role é responsavel por um determinado grupo de elementos.

* **Widgets** marcação de elementos soltos, como botões, checkbox, links, tabs etc.
* **Document Structure** para definir a estrutura de organização da página. São estruturas apenas para organizaçao e estruturação
como o header, footer, sidebar, main e etc.
* **Landmarks** são roles específicos para navegação, exemplo: buscas, conteúdo principal, sidebar etc.

#### Role Document Structure

Essa categoria serve para falar que esse elemento faz parte do layout. Exemplo:

```html
<article role="article">
  <p>conteúdo</p>
</article>
```

No caso acima não seria necessário porque a tag article já tem o role como article. Mas suponha que você esteja usando outro elemento
para envolver o texto do artigo:

```html
<div class="post" role="article">
  <p>conteúdo</p>
</div>
```

#### Role Widget

Tabs é um elemento muito comum. Ajuda muito na organização dos conteúdos, mas pode ser um problema pra quem usa leitores de tela. Então
troque isso:  

```html
<ul class="tabs">
   <li>
      <a href="#tab-panel1" class="active" id="tab1">Primeira Aba</a>
      <a href="#tab-panel2" id="tab2">Segunda Aba</a>
      <a href="#tab-panel3" id="tab3">Terceira Aba</a>
   </li>
</ul>

<div class="tab-content" id="tab-panel1">
  Conteúdo primeira aba
</div>
<div class="tab-content" id="tab-panel2">
  Conteúdo segunda aba
</div>
<div class="tab-content" id="tab-panel3">
  Conteúdo terceira aba
</div>
```

Por isso:

``` html
<ul class="tabs">
   <li>
      <a href="#tab-panel1" class="active" id="tab1" role="tab" aria-selected="true">
        Primeira Aba
      </a>
      <a href="#tab-panel2" id="tab2" role="tab">Segunda Aba</a>
      <a href="#tab-panel3" id="tab3" role="tab">Terceira Aba</a>
   </li>
</ul>

<div class="tab-content" id="tab-panel1" role="tabpanel" aria-labelledby="tab1">
  Conteúdo primeira aba
</div>
<div class="tab-content" id="tab-panel2" role="tabpanel" aria-labelledby="tab2">
  Conteúdo segunda aba
</div>
<div class="tab-content" id="tab-panel3" role="tabpanel" aria-labelledby="tab3">
  Conteúdo terceira aba
</div>
```
#### Role Landmarks

As **landmarks** servem para navegar pela página. Com esse tipo de role você vai marcar partes importantes do conteúdo assim fica mais fácil
para que o usuário encontre blocos de informações importantes. Exemplo:

Para componentes que contém links para navegação:

```html
<nav role="navigation"></nav>
```

Para o bloco principal da página:

```html
<main role="main"></main>
```

Você deve estar pensando: "Nossa, mas toda a vez que eu criar uma tag vou precisar colocar o role?", e eu respondo: "não".
Hoje em dia o HTML já faz isso automaticamente, você só vai precisar usar esse tipo de role caso você tenha que marcar algo
sem poder usar a tag correta, mas tente sempre usar as tags relativas. Algumas roles não possuem tags relativas veja
algumas delas e seus usos: 

**banner** Uma região que possui uma imagem ou título em destaque que introduz a página. Pode ser aplicado onde você coloca logos de outras empresas ou marcas, publicidade e etc.

**complementary** Para marcar uma seção complementar algo que agrega informações para o conteúdo principal. Uma sidebar, footer, nav e etc
podem ser identificadas nessa role.

**content info** Usado para marcar informações sobre o site. Como por exemplo rodapé, informações de copyright, links, termos de uso e etc.

## States e Properties

Esse tipo role marca os estado e propriedades do elemento, sendo assim suponha que você esteja criando um acordeon e tenha o seguinte codigo:

```html
<div role="collapse">
  <h1>Como criar um collapse</h1>
  <div class="collapse-box" aria-expanded="false">
</div>
```

Nessa caso o leitor de tela irá informar o usuario que temos um acordeon porém ele está fechado então quando abrir esse acordeon você deve mudar
o `role-expanded="false"` para `role-expanded="true"`. Esse role é o que temos que prestar mais atenção pois caso algo esteja errado podemos
confundir o leitor de tela gerando uma má esperiência para o usuário.

## Dicas e observações

Usar WAI-ARIA é muito simples pois fica muito fácil deixar qualquer página pronta acessivel mas prefira usar as tags relativas, exemplo:

Faça isso:

```html
<article>
  <h1>título</h1>
  <p>conteúdo</p>
</article>
```

Ao invés disso:

```html
<div role="article">
  <h1>título</h1>
  <p>conteúdo</p>
</div>
```

Sempre que possível use a tag relativa assim a marção fica menos redundante.

## Navegação pela página

Todas as interações com WAI-ARIA devem ser usadas via teclado.

Se você cria um formulário o usuário deve ter a possibilidade de preencher esse formulário sem usar o mouse apenas via teclado.

## Resumo

Neste artigo aprendemos a importância da acessibilidade, porque devemos criar sites acessiveis, o que é WAI-ARIA e como criar sites acessiveis.

## Para saber mais

Recomendo fortemente a [documentação da Mozilla](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)