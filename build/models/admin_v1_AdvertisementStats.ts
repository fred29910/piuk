/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_AdPositionStats } from './admin_v1_AdPositionStats';
/**
 * 广告统计
 */
export type admin_v1_AdvertisementStats = {
    totalViews?: string;
    totalClicks?: string;
    clickThroughRate?: number;
    positionStats?: Array<admin_v1_AdPositionStats>;
};

