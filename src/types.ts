export interface Product {
  id: number;
  name: string;
  description: string;
  dimensions: string;
  image: string;
  features: string[];
}

export interface ProductionStep {
  title: string;
  description: string;
  image: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  description: string;
}

export interface OrderFormData {
  name: string;
  phone: string;
  message: string;
}