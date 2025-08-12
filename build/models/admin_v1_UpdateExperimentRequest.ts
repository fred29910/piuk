/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 更新实验请求
 */
export type admin_v1_UpdateExperimentRequest = {
    id?: string;
    name?: string;
    description?: string;
    hypothesis?: string;
    startTime?: string;
    endTime?: string;
    sampleSize?: number;
    confidenceLevel?: number;
    trafficAllocation?: string;
};

