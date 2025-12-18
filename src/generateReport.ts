//geração de insights

import type { RankingEntry } from "./analyseData.ts";

type RankingFormatted = {
  position: number;
  produto: string;
  valor: number;
};

const toBrazilCurrency = new Intl.NumberFormat("pt-BR", {
  currency: "BRL",
  style: "currency",
});

const formatRanking = (data: RankingEntry[]) => {
  const rankingFormatted: RankingFormatted[] = [];
  data.forEach((item, index) => {
    rankingFormatted.push({
      position: index,
      produto: item[0],
      valor: item[1],
    });
  });

  return rankingFormatted;
};

type GenerateInsights = {
  total: number;
  media: number;
  ranking: RankingEntry[];
};

const generateInsights = (data: GenerateInsights) => {
  const totalSalesInsights = `O valor total de vendas foi de ${toBrazilCurrency.format(
    data.total
  )}`;
  const totalSalesMedia = ` A media das vendas foram de ${toBrazilCurrency.format(
    data.media
  )}}`;

  const ranking = formatRanking(data.ranking);

  const rankingInsight = ranking.map((item) => {
    return `O produto ${
      item.produto
    } teve um montante de vendas de ${toBrazilCurrency.format(
      item.valor
    )} e esta na ${item.position + 1} posição no ranking de vendas.`;
  });

  return { totalSalesInsights, totalSalesMedia, rankingInsight };
};

export { generateInsights };
