/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 更新自定义报表请求
 */
export type admin_v1_UpdateCustomReportRequest = {
    id?: string;
    name?: string;
    description?: string;
    query?: string;
    chartType?: string;
    dimensions?: Array<string>;
    metrics?: Array<string>;
    schedule?: string;
};

