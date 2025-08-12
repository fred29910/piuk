/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_MetricResult } from './admin_v1_MetricResult';
import type { admin_v1_VariantResult } from './admin_v1_VariantResult';
/**
 * 实验结果
 */
export type admin_v1_ExperimentResults = {
    experimentId?: string;
    variantResults?: Array<admin_v1_VariantResult>;
    metricResults?: Array<admin_v1_MetricResult>;
    status?: string;
    lastUpdated?: string;
};

