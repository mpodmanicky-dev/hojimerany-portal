export type WoundCategory = "burn" | "abrasion" | "surgical" | "chronic";

export interface Pharmacy {
  id: string;
  name: string;
  note: string;
  searchUrl: (productQuery: string) => string;
}

export interface TriageProduct {
  id: string;
  name: string;
  brand: string;
  role: "Dezinfekcia a výplach" | "Hojenie a regenerácia" | "Sekundárne krytie";
  description: string;
  whyThisProduct: string; // Educational justification
  usage: string;
  searchQuery: string;
}

export interface TriageOption {
  id: string;
  label: string;
  sublabel?: string;
  isRedFlag?: boolean;
  redFlagReason?: string;
  nextStepId?: string;
  resultId?: string;
}

export interface TriageStep {
  id: string;
  stepNumber: number;
  totalSteps: number;
  category?: WoundCategory;
  title: string;
  description: string;
  educationalTip?: string;
  options: TriageOption[];
}

export interface ProtocolAction {
  phase: string;
  title: string;
  instruction: string;
  productKey?: "aqvitox" | "mesitran-soft" | "mesitran-ointment" | "aqvidine";
  educationalNote?: string;
}

export interface TriageResult {
  id: string;
  category: WoundCategory;
  categoryTitle: string;
  title: string;
  summary: string;
  actions: ProtocolAction[];
  mistakesToAvoid: string[];
  productIds: string[];
}
