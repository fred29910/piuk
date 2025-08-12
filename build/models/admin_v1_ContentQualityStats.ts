/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_QualityDistribution } from './admin_v1_QualityDistribution';
/**
 * 内容质量统计
 */
export type admin_v1_ContentQualityStats = {
    avgCompletionRate?: number;
    avgEngagementRate?: number;
    highQualityContent?: string;
    lowQualityContent?: string;
    qualityDistribution?: Array<admin_v1_QualityDistribution>;
};

