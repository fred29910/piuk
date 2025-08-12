/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_FeedbackCategoryStats } from './admin_v1_FeedbackCategoryStats';
/**
 * 意见反馈统计
 */
export type admin_v1_FeedbackStats = {
    totalFeedbacks?: string;
    pendingFeedbacks?: string;
    processedFeedbacks?: string;
    ignoredFeedbacks?: string;
    categoryStats?: Array<admin_v1_FeedbackCategoryStats>;
};

