/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_TaskExecution } from './admin_v1_TaskExecution';
/**
 * 获取任务执行历史响应
 */
export type admin_v1_GetTaskHistoryResponse = {
    history?: Array<admin_v1_TaskExecution>;
    total?: string;
};

