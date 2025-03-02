# Projeto React Native Consumindo API dummyjson

Este projeto é relecionado a Atividade 04 da disciplina Desenvolvimento Multiplataforma com React Native do curso de pós em desenvolvimento mobile da Faculdade Unyleya, a atividade consiste em criar um aplicativo React Native que consome a API [dummyjson](https://dummyjson.com/docs) para exibir uma lista de itens e seus detalhes. 

## Funcionalidades

* **Listagem de Itens:** Exibe uma lista de itens obtidos da API dummyjson.
* **Detalhes do Item:** Ao clicar em um item da lista, exibe os detalhes completos do item selecionado.

## Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* Axios

## Instalação

1.  Clone este repositório:

    ```bash
    git clone URL_DO_SEU_REPOSITORIO
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd NomeDoProjeto
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4.  Inicie o servidor de desenvolvimento:

    ```bash
    npx expo start
    ```

## Estrutura de Pastas

```
api-consumer/
├── App.js
└── src/
    └── navigacao/
    └── NavegadorPrincipal.js
└── componentes/
    └── Lista.js
    └── Detalhes.js
└── servicos/
    └── api.js
```

## Explicação do Código

* **`App.js`:** Ponto de entrada do aplicativo. Configura a navegação principal usando `NavigationContainer` e `MainStackNavigator`.
* **`src/navigation/MainStackNavigator.js`:** Define as rotas de navegação usando `createStackNavigator`. As rotas incluem a tela de listagem (`Lista`) e a tela de detalhes (`Detalhes`).
* **`src/components/Lista.js`:** Componente que exibe a lista de itens obtidos da API. Utiliza `useEffect` para buscar os dados e `FlatList` para renderizar a lista.
* **`src/components/Detalhes.js`:** Componente que exibe os detalhes de um item específico. Utiliza `useEffect` para buscar os dados do item com base no ID passado como parâmetro.
* **`src/services/api.js`:** Configura o cliente Axios para fazer requisições à API dummyjson.

## Considerações Finais

Este projeto foi desenvolvido como parte de um exercício para consumir uma API externa usando React Native. As principais funcionalidades foram implementadas com sucesso, e o aplicativo está pronto para ser executado em um dispositivo móvel ou emulador.
