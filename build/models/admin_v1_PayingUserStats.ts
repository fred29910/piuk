/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_PayingUserData } from './admin_v1_PayingUserData';
/**
 * 付费用户统计
 */
export type admin_v1_PayingUserStats = {
    totalPayingUsers?: string;
    newPayingUsers?: string;
    payingRate?: number;
    avgRevenuePerUser?: number;
    data?: Array<admin_v1_PayingUserData>;
};

