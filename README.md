
# Itelios Frontend Challenge | Andrey Koens

## About

Olá pessoal da Itelios!

Gostaria de apresentar aqui a minha solução para o desafio de front-end de vocês, que enquanto visualmente sucinto foi realmente um desafio! Apesar de trabalhar como front-ender há uns 7 anos, sempre fui muito voltado à parte visual das aplicações, nunca havia feito nada assim sem nenhum framework mesmo tendo experiência com projetos desse tipo (normalmente pego em vue, react). Mas como quem gosta de topar um desafio, acabei fazendo até o slider sem plugins. Por fim acabei me extendendo um pouco, levei cerca de 10h. [Aqui tem o timesheet completo](https://github.com/andreykoens/itelios-frontend-challenge/blob/master/timesheet.pdf) pra vocês verem pra onde foi esse tempo todo :)

Features:
- [Uma playlist bacana que fiz enquanto batia a cabeça no teclado, só lançamento!](https://open.spotify.com/user/insertkoens/playlist/7vKPXIAHTN4y0WezfqmmLl)
- Webpack com laravel-mix. Encurtei esse setup pra abrir caminho mais rápido
- Animações são todas gerenciadas por css, inclusive as do slider.
- Sass
- Css reutilizável feito no padrão BEM, o único código externo é o normalize.
- Fontes utilizadas direto do repositório do google pra aproveitar o cache das máquinas.
- As imagens do .card-product se redimensionam sozinhas à area disponível, independente das proporções.
- Layout responsivo.
- Layout executado com grande precisão.
- Slider em javascript sem adição de plugins externos.

Um grande abraço!
AK

---

## Dependências e setup

**dependências**
- nodejs lts
- php lts

**Setup**
- npm install

**Start**
- npm run watch
- cd dist
- sudo php -S localhost:3000

---

![Itelios](http://www.itelios.com.br/images/logo_itelios_orange@2x.png)

# Itelios Frontend Challenge

Bem-vindo ao desafio de admissão de front-end da Itelios! O que preparamos para este desafio é um pedacinho do que você irá fazer aqui na Itelios, caso seja admitido.

O objetivo do desafio é simples: Consumir uma json via xhttp e, com o resultado dele, montar um widget de prateleira de cross-sell. Na resposta deste request você receberá uma lista de produtos. Esta lista servirá para montar um pequeno carrossel de produtos.

## Design

- A prateleira apresentada deve seguir o [seguinte design](desafio-front-end-itelios.jpg)
- Baseado neste layout, faça uma adaptação responsiva para celulares.

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Adicione ao Readme uma descrição de como executar seu projeto
- Descreva as funcionalidades do seu desafio, venda seu peixe! Por exemplo, se fez a prateleira com javascript puro, porém utilizou uma biblioteca para o carrossel, deixe isso no Readme. Se usou ES6 com um transpiler, conte isso pra gente.
- Não há um limite de tempo, porém consideramos ideal não gastar mais que 8h neste desafio
- Faça commits parciais, para que possamos acompanhar o seu desenvolvimento.
- Em caso de dúvidas, entre em contato com flora.braz@itelios.com

## Dicas

- O ícone do botão é o add-shopping-plus, do Material Design. https://material.io/icons/
- A fontes utilizadas são Roboto Condensed Bold (títulos), Roboto Regular (texto corrido) e Roboto Bold (preço e preço parcelado).
- We **<3** Vanilla Javascript. Tente executar este teste usando javascript puro. Só utilize bibliotecas como último recurso.
- We **<3** CSS responsivo, organizado, modular e feito com pré-processadores. Sinta-se livre para usar a arquitetura CSS que achar mais adequada.
- Trabalhamos com clientes perfeccionistas, portanto tenha atenção com espaçamentos, tamanhos e estilos de fonte.

## Critérios de avaliação

- Alcançar os objetivos propostos
- Qualidade de código
- Commits parciais, mostrando a linha de desenvolvimento
- Boa descrição das funcionalidades do desafio
- Não utilização de bibliotecas ou frameworks
- Fidelidade ao design proposto
- Adaptação mobile
