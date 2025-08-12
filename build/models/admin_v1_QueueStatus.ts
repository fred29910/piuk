/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_QueueInfo } from './admin_v1_QueueInfo';
/**
 * 消息队列状态
 */
export type admin_v1_QueueStatus = {
    driver?: string;
    pendingJobs?: string;
    processingJobs?: string;
    failedJobs?: string;
    completedJobs?: string;
    totalJobs?: string;
    queues?: Array<admin_v1_QueueInfo>;
};

