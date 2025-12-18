//Tratamento e analise

import type { Venda } from "./loadData.ts";

type PreRanking = Record<string, number>;
export type RankingEntry = [string, number]

export const analyseData = (data: Venda[]) => {
  let total = 0;
  for (const item of data) {
    total += item.valor;
  }

  const media = total / data.length;
  const preRanking: PreRanking = {};

  data.forEach((item) => {
    preRanking[item.produto] = (preRanking[item.produto] || 0) + item.valor;
  });

  const ranking: RankingEntry[] = Object.entries(preRanking);

  ranking.sort((a, b) => b[1] - a[1]);

  return { total, media, ranking };
};
