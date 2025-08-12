/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_v1_Category } from './common_v1_Category';
import type { common_v1_UserInfo } from './common_v1_UserInfo';
/**
 * 话题详情
 */
export type admin_v1_TopicDetail = {
    id?: string;
    title?: string;
    description?: string;
    coverUrl?: string;
    status?: number;
    viewCount?: number;
    videoCount?: number;
    followerCount?: number;
    isRecommended?: boolean;
    isTop?: boolean;
    recommendedAt?: string;
    topAt?: string;
    createdAt?: string;
    updatedAt?: string;
    creator?: common_v1_UserInfo;
    categories?: Array<common_v1_Category>;
};

