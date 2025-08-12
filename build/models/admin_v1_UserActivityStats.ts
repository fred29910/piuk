/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_ActivityData } from './admin_v1_ActivityData';
/**
 * 用户活跃度统计
 */
export type admin_v1_UserActivityStats = {
    data?: Array<admin_v1_ActivityData>;
    avgDailyActiveUsers?: number;
    avgWeeklyActiveUsers?: number;
    avgMonthlyActiveUsers?: number;
};

