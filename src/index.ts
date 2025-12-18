import { analyseData } from "./analyseData.ts";
import { loadData } from "./loadData.ts";
import { generateInsights } from "./generateReport.ts";
import { writeReport } from "./writeReport.ts";

const dataAnalysis = analyseData(loadData()) 

await writeReport(generateInsights(dataAnalysis))


