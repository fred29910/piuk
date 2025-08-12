/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_RowData } from './admin_v1_RowData';
/**
 * 自定义报表结果
 */
export type admin_v1_CustomReportResult = {
    reportId?: string;
    chartType?: string;
    columns?: Array<string>;
    rows?: Array<admin_v1_RowData>;
    executedAt?: string;
};

