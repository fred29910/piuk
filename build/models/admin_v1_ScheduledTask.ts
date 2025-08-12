/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 定时任务
 */
export type admin_v1_ScheduledTask = {
    id?: string;
    name?: string;
    description?: string;
    cron?: string;
    command?: string;
    status?: string;
    enabled?: boolean;
    lastRun?: string;
    nextRun?: string;
};

