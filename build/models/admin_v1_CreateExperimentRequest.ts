/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 创建实验请求
 */
export type admin_v1_CreateExperimentRequest = {
    name?: string;
    description?: string;
    type?: string;
    hypothesis?: string;
    startTime?: string;
    endTime?: string;
    sampleSize?: number;
    confidenceLevel?: number;
    trafficAllocation?: string;
};

