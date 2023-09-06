# Pokedex - Projeto de Página da Web

## Descrição
A Pokedex é uma página da web que exibe informações sobre Pokémon. Ela utiliza a [PokeAPI](https://pokeapi.co/) para obter dados sobre os Pokémon e exibi-los em uma interface agradável.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- [PokeAPI](https://pokeapi.co/)

## Estrutura do Projeto
- `index.html`: O arquivo HTML principal que define a estrutura da página.
- `assets/css/`: Pasta contendo os arquivos CSS para estilizar a página.
- `assets/js/`: Pasta contendo os arquivos JavaScript para a lógica da aplicação.
  - `models/`: Contém os modelos de dados para Pokémon e paginação.
  - `services/`: Contém o serviço da Pokedex que interage com a PokeAPI.
  - `repositories/`: Contém o repositório que lida com chamadas à API.
  - `helpers/`: Contém utilitários JavaScript auxiliares.
  - `main.js`: O arquivo JavaScript principal que inicia a aplicação.
- `README.md`: Este arquivo que fornece informações sobre o projeto.

## Como Usar
1. Abra o arquivo `index.html` em um navegador da web para acessar a Pokedex.
2. A Pokedex exibirá uma lista de Pokémon com informações como número, nome, tipos e uma imagem.
3. Você pode clicar no botão "Load More" para carregar mais Pokémon à medida que rola pela lista.
4. Passe o mouse sobre a variante "Shiny" de um Pokémon para ver sua versão brilhante.

## Estilos e Design
- A Pokedex utiliza a fonte "Roboto" para uma aparência moderna e legível.
- Os Pokémon são exibidos em uma grade responsiva, com cores de fundo diferentes para cada tipo de Pokémon.
- Um emoji de estrela brilhante é adicionado ao nome de um Pokémon quando a variante "Shiny" é ativada.

## Autor
Projeto realizado à partir dos estudos de javascript do bootcamp Santander Coders em parceria com a DIO