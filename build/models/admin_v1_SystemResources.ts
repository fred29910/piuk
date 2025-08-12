/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_ProcessInfo } from './admin_v1_ProcessInfo';
/**
 * 系统资源
 */
export type admin_v1_SystemResources = {
    totalMemory?: string;
    usedMemory?: string;
    freeMemory?: string;
    memoryUsagePercent?: number;
    totalDisk?: string;
    usedDisk?: string;
    freeDisk?: string;
    diskUsagePercent?: number;
    cpuCores?: string;
    cpuUsagePercent?: number;
    networkIn?: string;
    networkOut?: string;
    processes?: Array<admin_v1_ProcessInfo>;
};

