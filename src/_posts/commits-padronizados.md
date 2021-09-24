---
title: "Porque criar commits descritiveis"
excerpt: ""
author: "Diego Alessandro"
date: "09-04-2021"
image: "commits.jpeg"
duration: 2
---

## Introduçao

Você faz commits como:  

> "Feature adicionada", "Correção de bug"  

Você pode não lembrar que bug ou feature foi adicionada até ler codigo por codigo para
verificar o que mudou, imagina a situação de ter que verificar varios commits
"correção de bug" por não lembrar que bug foi corrigido.

## Passo 01: Commits descritiveis

A base de um commit descritivel é que você deve saber com o que está trabalhando apenas
lendo o commit. Normalmente utilizamos palavras imperativas no presente.

Por exemplo:

* alterar a proporção do vídeo do perfil da empresa
* adicionar menu de hambúrguer para celular
* remover importações não utilizadas
* consertar o menu de hambúrguer não abre no celular
* adicionar teste para funções auxiliares
* refactor remove todo logic
* adicionar documentação no menu de hambúrguer
* instalar react-icons

Mesmo sem olhar para as mudanças no codigo você pode saber o que está acontecendo.  
Com poucos segundos podemos decidir qual commit devemos usar assim economizando
tempo no futuro

## Passo 02: Palavras-chave

Vimos que usando commits descritiveis fica muito mais facil a revisão de codigo.  

Na primeira etapa aprendemos a deduzir o que está acontecendo analisando o commit. Mas temos
que ler a frase completa para saber se foi um recurso adicionado ou removido, um bug que foi
corrigido ou um pacote que foi instalado. Não seria mais facil reconher isso por meio de apenas
uma palavra? Talvez até por meio de um emoji?

> Existem varias convenções sobre como usar as palavras-chave normalmente uso o Convencional Commits
> Não me aprofundar em detalhes como se devemos utilizar letras maiúsculas ou não e etc,
> então recomendo que depois pequise mais a fundo.

Digamos que temos essas categorias - isso é apenas um exemplo se necessario você pode adicionar novas
categorias:  

* **feat**, para adição ou remoção de features.
*  **fix**, para remoção de bugs.
* **chore**, para instalar pacotes npm.
* **test**, para adicionar testes.
* **refactor**, para refatorar o fluxo de código, mas não alterar o próprio recurso.
* **style**, para estillizar elementos, componemtes e etc.

Exemplos:  

* **feat** adicionando menu lateral.
* **feat** removendo menu lateral.
* **style** removendo importações não utilizadas.
* **fix** conteudo da pagina inicial não carregava.
* **test** adicionar teste para funçãoes auxiliares.
* **refactor** removendo logica do todo
* **chore** install react-icons  

Nesta etapa, podemos ser mais eficazes para diferenciar o commit. Agora temos que ler apenas os commits da
categoria que estamos procurando.

## Passo 03: Changelogs ou registro de mudanças

Digamos que você estaja criando criando um pacote npm ou um app, nesse caso podemos criar um changelog para
que o cliente esteja ciente das alterações. Lembra que eu disse que palavras-chave era essenciais para economizar
tempo pois é o que você tem que fazer agora é apenas pegar os commits das categorias **feat** e **fix** sendo assim
você ja tem o conteudo do changelog agora basta criar um arquivo README.md e escrever seu changelog.  

Exemplo:

![exemplo de changelog](/changelog-example.png)

Aqui está o relatório que é gerado apenas usando nosso commit, também podemos especificar quais categorias queremos incluir.

## Resumo

Aprendemos que devemos usar commits mais descritiveis e porque, adicionar categoria a ele, usar regras do Convencional Commits
como um guia para que caso necessario possamos criar um changelog de forma mais facil e rapida.