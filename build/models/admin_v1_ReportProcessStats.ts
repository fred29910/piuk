/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_ActionCount } from './admin_v1_ActionCount';
import type { admin_v1_AdminStats } from './admin_v1_AdminStats';
/**
 * 举报处理统计
 */
export type admin_v1_ReportProcessStats = {
    totalProcessed?: string;
    avgProcessTime?: string;
    actionStats?: Array<admin_v1_ActionCount>;
    adminStats?: Array<admin_v1_AdminStats>;
};

