import { writeFile } from "fs/promises";

type Insights = {
  totalSalesInsights: string;
  totalSalesMedia: string;
  rankingInsight: string[];
};

export const writeReport = async (data: Insights) => {
  return await writeFile("report.json", JSON.stringify(data, null, 2));
};
