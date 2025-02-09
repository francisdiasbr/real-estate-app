# Plataforma Inteligente de Busca de Imóveis

[![Status da API](https://img.shields.io/website?url=https://varying-lynde-francisdiasbr-0720cb77.koyeb.app/&style=flat-square&label=Status%20da%20API)](https://varying-lynde-francisdiasbr-0720cb77.koyeb.app/)

Ler em Inglês: [README.md](README.md)

## Descrição

Este é um aplicativo imobiliário que permite aos usuários pesquisar imóveis e visualizar detalhes das propriedades.

A busca por imóveis é feita pelo usuário através de uma barra de pesquisa inteligente que utiliza o chat completion da OpenAI para buscar propriedades, permitindo que o usuário pesquise imóveis por nome, localização, preço, etc. em linguagem natural usando apenas um campo.

A pesquisa é realizada pelo backend, utilizando um banco de dados vetorial para armazenar as propriedades e os embeddings, e então usando o chat completion para buscar as propriedades mais relevantes com base na pesquisa do usuário.

No frontend:
- O usuário pode pesquisar propriedades em linguagem natural usando um campo de entrada;
- Após o usuário enviar o termo de busca, recebe uma lista de propriedades que correspondem à busca, através do endpoint POST /search, criado no backend;
- O usuário pode visualizar os detalhes da propriedade através do endpoint GET /property/:id, criado no backend

## Funcionalidades
- Pesquisa de imóveis em linguagem natural usando um campo de entrada;
- Reconhecimento de voz e transcrição para realizar pesquisas;

## Telas

- Início
- Detalhes da Propriedade

<p align="center">
  <img src="https://github.com/user-attachments/assets/fba16862-ee6c-4156-9d75-805f7477d477" alt="Imagem 1" width="300">
  <img src="https://github.com/user-attachments/assets/76df33e0-ebc8-4a7d-9c6a-f6833996084d" alt="Imagem 2" width="300">
</p>

## Como Executar

### Desenvolvimento

1. Instale as dependências:

```
yarn install
```

2. Inicie o aplicativo:

```
yarn start
```

### Build de Desenvolvimento (dev client):

1. Instale o Expo Application Services CLI (EAS):

```
npm install -g eas-cli
```

2. Configure o ambiente de build:

```
eas build:configure
```

3. Gere o build para:
- Simulador iOS:

```
eas build --profile development-simulator --platform ios
```

- Dispositivo iOS:

```
eas build --profile development --platform ios
```

- Build de Preview

```
eas build --profile preview --platform ios
```

- Build de Produção

```
eas build --platform ios --profile production
```

https://docs.expo.dev/develop/development-builds/create-a-build/

## Tecnologias

Estrutura do App:
- React Native com Typescript em ambiente Expo
- React Navigation (Navegação entre telas)
- Redux (Gerenciamento de Estado)

## Funcionalidades

- Pesquisa de imóveis em linguagem natural usando um campo de entrada;
- Reconhecimento de voz para pesquisar imóveis;

## Visão
Imagine uma plataforma imobiliária que entende exatamente o que você está procurando, mesmo quando você se expressa com suas próprias palavras. Nossa aplicação revoluciona a busca por imóveis substituindo formulários complexos de filtro por uma única barra de pesquisa inteligente que entende consultas em linguagem natural como "mostre-me casas ensolaradas de 3 quartos perto de parques em São Paulo por menos de R$ 800.000" ou "apartamentos pet friendly com academia no centro".

## Como Funciona
No seu núcleo, a plataforma utiliza tecnologia de IA de ponta para transformar a experiência tradicional de busca por imóveis:

- Compreensão de Linguagem Natural: Alimentada pelo chat completion da OpenAI, a barra de pesquisa interpreta consultas humanas complexas e as traduz em correspondências precisas de propriedades.
- Correspondência Inteligente de Propriedades: Nos bastidores, um sofisticado banco de dados vetorial armazena informações de propriedades de uma forma que permite pesquisas semânticas - significando que ele entende o contexto e o significado por trás da sua pesquisa, não apenas palavras-chave.
- Experiência do Usuário Perfeita: Os usuários podem simplesmente digitar o que estão procurando em português simples, e o sistema faz o trabalho pesado de entender os requisitos e encontrar correspondências relevantes.

## Inovação Técnica
A plataforma consiste em dois componentes principais:
- Inteligência Backend

  - Um banco de dados vetorial que armazena detalhes das propriedades e seus embeddings semânticos
  - Um mecanismo de busca alimentado por IA que processa consultas em linguagem natural
  - Endpoints de API RESTful para pesquisa de propriedades e informações detalhadas

- Simplicidade Frontend
  - Uma interface limpa e intuitiva centrada em uma única e poderosa barra de pesquisa
  - Sugestões de propriedades em tempo real conforme os usuários digitam suas consultas
  - Visualizações detalhadas de propriedades com todas as informações relevantes

Esta plataforma preenche a lacuna entre como as pessoas naturalmente pensam sobre seu imóvel ideal e como elas o procuram, tornando todo o processo de busca imobiliária mais intuitivo, eficiente e agradável.

## Tipos de Build

### Build para Simulador de Desenvolvimento (`eas build --profile development-simulator`)
- **Quando usar:** Para testes no simulador iOS
- **Características:**
  - Específico para desenvolvimento no simulador
  - Não requer dispositivo físico
  - Ideal para testes rápidos durante o desenvolvimento

### Build de Desenvolvimento (`eas build --profile development`)
- **Quando usar:** Durante o desenvolvimento ativo do app
- **Características:**
  - Build Ad Hoc (requer registro de dispositivos)
  - Para testes em dispositivos físicos
  - Inclui ferramentas de desenvolvimento e debug
  - Distribuição interna limitada

### Build de Preview (`eas build --profile preview`)
- **Quando usar:** Para testes beta e validação
- **Características:**
  - Distribuição via TestFlight
  - Não requer registro de dispositivos
  - Ideal para testes com usuários beta
  - Permite até 10.000 testadores

### Build de Produção (`eas build --profile production`)
- **Quando usar:** Para lançamento na App Store
- **Características:**
  - Versão otimizada e finalizada
  - Distribuição via App Store
  - Para usuários finais
  - Requer revisão completa da Apple

