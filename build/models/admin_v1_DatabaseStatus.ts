/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_TableStatus } from './admin_v1_TableStatus';
/**
 * 数据库状态
 */
export type admin_v1_DatabaseStatus = {
    driver?: string;
    version?: string;
    connections?: string;
    maxConnections?: string;
    connectionUsage?: number;
    queriesPerSecond?: string;
    avgQueryTime?: number;
    slowQueries?: string;
    totalQueries?: string;
    tables?: Array<admin_v1_TableStatus>;
};

