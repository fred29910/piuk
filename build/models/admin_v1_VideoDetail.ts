/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_v1_Category } from './common_v1_Category';
import type { common_v1_UserInfo } from './common_v1_UserInfo';
import type { common_v1_VideoTag } from './common_v1_VideoTag';
/**
 * 视频详情
 */
export type admin_v1_VideoDetail = {
    id?: string;
    userId?: string;
    title?: string;
    description?: string;
    coverUrl?: string;
    videoUrl?: string;
    duration?: number;
    width?: number;
    height?: number;
    size?: string;
    format?: string;
    status?: number;
    reviewStatus?: number;
    reviewRemark?: string;
    reviewerId?: string;
    reviewedAt?: string;
    viewCount?: number;
    likeCount?: number;
    commentCount?: number;
    shareCount?: number;
    collectCount?: number;
    isRecommended?: boolean;
    isTop?: boolean;
    recommendedAt?: string;
    topAt?: string;
    createdAt?: string;
    updatedAt?: string;
    user?: common_v1_UserInfo;
    categories?: Array<common_v1_Category>;
    tags?: Array<common_v1_VideoTag>;
};

