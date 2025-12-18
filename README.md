# simple-ts-report-automation


# 📊 Data Insights Automation

Pequena automação em **TypeScript** para gerar **relatórios simples de vendas** a partir de um arquivo JSON.

O objetivo do projeto é estudar e praticar:

* Manipulação de dados
* Tipagem com TypeScript
* Organização de código
* Geração de relatórios automatizados

---

## 🧠 Visão Geral

A aplicação lê um arquivo de vendas (`vendas.json`), processa os dados, gera análises básicas (total, média e ranking) e escreve um relatório final em arquivo.

Fluxo simplificado:

```
JSON → leitura → análise → geração de relatório → escrita em arquivo
```

---

## 📁 Estrutura do Projeto

```
src/
├── analyseData.ts      # Trata e analisa os dados (total, média, ranking)
├── generateReport.ts   # Gera textos/insights a partir dos dados analisados
├── index.ts            # Arquivo principal (entry point)
├── loadData.ts         # Carrega os dados do JSON
├── writeReport.ts      # Escreve o relatório em arquivo

 data/
 └── vendas.json        # Dados de entrada (vendas)
```

---

## 📦 Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **ES Modules**

Dependências de desenvolvimento:

* `@types/node`

---

## 🧾 Formato dos Dados (`vendas.json`)

Exemplo de estrutura esperada:

```json
[
  {
    "produto": "Produto A",
    "valor": 100
  },
  {
    "produto": "Produto B",
    "valor": 50
  }
]
```

---

## ⚙️ O que o sistema faz

* Soma o valor total das vendas
* Calcula a média de vendas
* Gera um ranking de produtos por valor
* Formata valores em moeda brasileira (BRL)
* Gera um relatório simples em texto

---

## ▶️ Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto (exemplo):

```bash
node src/index.ts
```

> ⚠️ É necessário ter uma versão do Node compatível com ES Modules.

---

## 📝 Exemplo de Saída em JSON

```
{
  "totalSalesInsights": "O valor total de vendas foi de R$ 598,00",
  "totalSalesMedia": " A media das vendas foram de R$ 119,60}",
  "rankingInsight": [
    "O produto Bone teve um montante de vendas de R$ 284,00 e esta na 1 posição no ranking de vendas.",
    "O produto Camiseta teve um montante de vendas de R$ 254,00 e esta na 2 posição no ranking de vendas.",
    "O produto Meia teve um montante de vendas de R$ 60,00 e esta na 3 posição no ranking de vendas."
  ]
}
```

---

## 🎯 Objetivo do Projeto

Este projeto foi criado com foco em **aprendizado**, servindo como base para:

* Automações simples
* Scripts de análise de dados
* Estudos de TypeScript no backend

---


