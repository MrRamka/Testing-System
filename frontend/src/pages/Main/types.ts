export interface CardTestItem {
  id: number;
  name: string;
  description?: string;
  questionCount?: number;
  created_at: string;
  updated_at: string;
  random_order?: boolean;
  isActive?: boolean;
}
