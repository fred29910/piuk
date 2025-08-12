/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_VariantStatistics } from './admin_v1_VariantStatistics';
/**
 * 实验统计
 */
export type admin_v1_ExperimentStatistics = {
    totalUsers?: string;
    totalSessions?: string;
    totalEvents?: string;
    variantStats?: Array<admin_v1_VariantStatistics>;
};

