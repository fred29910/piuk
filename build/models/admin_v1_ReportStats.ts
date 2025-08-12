/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_ReportStatusStats } from './admin_v1_ReportStatusStats';
import type { admin_v1_ReportTypeStats } from './admin_v1_ReportTypeStats';
/**
 * 举报统计
 */
export type admin_v1_ReportStats = {
    totalReports?: string;
    pendingReports?: string;
    processingReports?: string;
    resolvedReports?: string;
    ignoredReports?: string;
    closedReports?: string;
    typeStats?: Array<admin_v1_ReportTypeStats>;
    statusStats?: Array<admin_v1_ReportStatusStats>;
};

