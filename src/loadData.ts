// Coleta de Dados

import fs from "fs";

export type Venda = {
  produto: string;
  valor: number;
};

export const loadData = (): Venda[] => {
  const raw = fs.readFileSync("./data/vendas.json", "utf-8");

  return JSON.parse(raw);
};
