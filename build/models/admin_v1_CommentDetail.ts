/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { common_v1_UserInfo } from './common_v1_UserInfo';
/**
 * 评论详情
 */
export type admin_v1_CommentDetail = {
    id?: string;
    videoId?: string;
    userId?: string;
    parentId?: string;
    content?: string;
    likeCount?: number;
    replyCount?: number;
    status?: number;
    reviewStatus?: number;
    reviewRemark?: string;
    reviewerId?: string;
    reviewedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    user?: common_v1_UserInfo;
    replies?: Array<admin_v1_CommentDetail>;
};

