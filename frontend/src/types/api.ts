import type { Geometry } from "geojson";

export type CropClass = "Paddy" | "Banana" | "Other";

export type ReviewStatus =
  | "Broadly Consistent"
  | "Discrepancy for Review"
  | "Insufficient Evidence / Uncertain";

export type EvidenceQuality =
  | "High"
  | "Medium"
  | "Low"
  | "Insufficient Evidence";

export interface StudyArea {
  district: string;
  taluks: string[];
  areaKm2: number;
}

export interface AnalysisMetadata {
  satellite: string;
  analysisPeriodStart: string;
  analysisPeriodEnd: string;
  runVersion: string;
}

export interface AgriculturalStatistics {
  agriculturalAreaHa: number;
  paddyAreaHa: number;
  bananaAreaHa: number;
  otherAreaHa: number;
  fieldObjectCount: number;
}

export interface FieldObject {
  id: string;
  geometry: Geometry;
  areaHa: number;
  cropClass: CropClass;
  classifierAgreement: number | null;
  evidenceQuality: EvidenceQuality;
}

export interface ValidationMetrics {
  overallAccuracy: number | null;
  paddyPrecision: number | null;
  paddyRecall: number | null;
  paddyF1: number | null;
  bananaPrecision: number | null;
  bananaRecall: number | null;
  bananaF1: number | null;
  otherPrecision: number | null;
  otherRecall: number | null;
  otherF1: number | null;
}

export interface DeclarationComparison {
  declaredAreaHa: number | null;
  mappedAreaHa: number | null;
  differenceHa: number | null;
  relativeDifferencePercent: number | null;
  reviewStatus: ReviewStatus;
}

export interface AgriculturalMapResponse {
  studyArea: StudyArea;
  analysis: AnalysisMetadata;
  statistics: AgriculturalStatistics;
  fieldObjects: FieldObject[];
  validation: ValidationMetrics;
  evidenceQuality: EvidenceQuality;
  declarationComparison: DeclarationComparison | null;
}