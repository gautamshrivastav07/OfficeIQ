import { dataSources, loadDatasource } from "../assets/data/JSONDataSource";
import { SYSTEM_PROMPT } from "./Constants";

export function normalizePrompt(prompt: string) {
  return prompt
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

export function extractKeywords(prompt: string) {
  return prompt.split(" ").filter(Boolean);
}

export function findMatchingDatasets(words: string[]) {
  return dataSources.filter(dataSource =>
    dataSource.keywords.some(keyword =>
      words.includes(keyword)
    )
  );
}

export function buildPromptWithContext(prompt: string) {
  const normalized = normalizePrompt(prompt);
  console.log("Normalized Prompt:", normalized);

  const words = extractKeywords(normalized);
  console.log("Extracted Keywords:", words);

  const datasets = findMatchingDatasets(words);
  console.log("Matching Datasets:", JSON.stringify(datasets));

  const jsonContext = loadDatasource(datasets);
  console.log("JSON Context:", JSON.stringify(jsonContext));

  const finalPrompt = SYSTEM_PROMPT(prompt, jsonContext);
  return finalPrompt;
}