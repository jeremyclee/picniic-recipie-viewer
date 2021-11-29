export type RecipieDetails = {
  source: string;
  provider: number;
  ingredientLines: Array<string>;
  directionLines: Array<string>;
  notes: string;
  totalTime: number;
  date: number;
  label: string;
  tags: Array<string>;
  url: string;
};
