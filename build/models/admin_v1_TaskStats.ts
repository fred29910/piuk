/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_TaskCompletionStats } from './admin_v1_TaskCompletionStats';
/**
 * 任务统计
 */
export type admin_v1_TaskStats = {
    totalCompletions?: string;
    totalRewards?: string;
    taskStats?: Array<admin_v1_TaskCompletionStats>;
};

