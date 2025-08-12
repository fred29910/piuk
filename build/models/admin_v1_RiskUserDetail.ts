/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_Report } from './admin_v1_Report';
import type { admin_v1_RiskRecord } from './admin_v1_RiskRecord';
import type { admin_v1_RiskUser } from './admin_v1_RiskUser';
/**
 * 风险用户详情
 */
export type admin_v1_RiskUserDetail = {
    user?: admin_v1_RiskUser;
    records?: Array<admin_v1_RiskRecord>;
    recentReports?: Array<admin_v1_Report>;
};

