/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 自定义报表
 */
export type admin_v1_CustomReport = {
    id?: string;
    name?: string;
    description?: string;
    query?: string;
    chartType?: string;
    dimensions?: Array<string>;
    metrics?: Array<string>;
    schedule?: string;
    createdAt?: string;
    updatedAt?: string;
    lastExecutedAt?: string;
};

