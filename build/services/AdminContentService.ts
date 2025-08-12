/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_BatchDeleteCommentsRequest } from '../models/admin_v1_BatchDeleteCommentsRequest';
import type { admin_v1_BatchDeleteVideosRequest } from '../models/admin_v1_BatchDeleteVideosRequest';
import type { admin_v1_BatchReviewContentItemsRequest } from '../models/admin_v1_BatchReviewContentItemsRequest';
import type { admin_v1_CancelRecommendVideoRequest } from '../models/admin_v1_CancelRecommendVideoRequest';
import type { admin_v1_CancelTopVideoRequest } from '../models/admin_v1_CancelTopVideoRequest';
import type { admin_v1_CategoryDetail } from '../models/admin_v1_CategoryDetail';
import type { admin_v1_CommentDetail } from '../models/admin_v1_CommentDetail';
import type { admin_v1_ContentStats } from '../models/admin_v1_ContentStats';
import type { admin_v1_CreateCategoryRequest } from '../models/admin_v1_CreateCategoryRequest';
import type { admin_v1_CreateTopicRequest } from '../models/admin_v1_CreateTopicRequest';
import type { admin_v1_GetCategoriesResponse } from '../models/admin_v1_GetCategoriesResponse';
import type { admin_v1_GetCommentsResponse } from '../models/admin_v1_GetCommentsResponse';
import type { admin_v1_GetContentPendingReviewsResponse } from '../models/admin_v1_GetContentPendingReviewsResponse';
import type { admin_v1_GetReviewRecordsResponse } from '../models/admin_v1_GetReviewRecordsResponse';
import type { admin_v1_GetTopicsResponse } from '../models/admin_v1_GetTopicsResponse';
import type { admin_v1_GetVideosResponse } from '../models/admin_v1_GetVideosResponse';
import type { admin_v1_RecommendTopicRequest } from '../models/admin_v1_RecommendTopicRequest';
import type { admin_v1_RecommendVideoRequest } from '../models/admin_v1_RecommendVideoRequest';
import type { admin_v1_ReplyCommentRequest } from '../models/admin_v1_ReplyCommentRequest';
import type { admin_v1_ReviewCommentRequest } from '../models/admin_v1_ReviewCommentRequest';
import type { admin_v1_ReviewVideoRequest } from '../models/admin_v1_ReviewVideoRequest';
import type { admin_v1_TopicDetail } from '../models/admin_v1_TopicDetail';
import type { admin_v1_TopTopicRequest } from '../models/admin_v1_TopTopicRequest';
import type { admin_v1_TopVideoRequest } from '../models/admin_v1_TopVideoRequest';
import type { admin_v1_UpdateCategoryRequest } from '../models/admin_v1_UpdateCategoryRequest';
import type { admin_v1_UpdateTopicRequest } from '../models/admin_v1_UpdateTopicRequest';
import type { admin_v1_VideoDetail } from '../models/admin_v1_VideoDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminContentService {
    /**
     * 分类管理
     * 获取分类列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param parentId
     * @param sort
     * @param order
     * @returns admin_v1_GetCategoriesResponse OK
     * @throws ApiError
     */
    public static adminContentGetCategories(
        page?: number,
        pageSize?: number,
        keyword?: string,
        status?: number,
        parentId?: string,
        sort?: string,
        order?: string,
    ): CancelablePromise<admin_v1_GetCategoriesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/categories',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'parentId': parentId,
                'sort': sort,
                'order': order,
            },
        });
    }
    /**
     * 创建分类
     * @param requestBody
     * @returns admin_v1_CategoryDetail OK
     * @throws ApiError
     */
    public static adminContentCreateCategory(
        requestBody: admin_v1_CreateCategoryRequest,
    ): CancelablePromise<admin_v1_CategoryDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/categories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取分类详情
     * @param id
     * @returns admin_v1_CategoryDetail OK
     * @throws ApiError
     */
    public static adminContentGetCategory(
        id: string,
    ): CancelablePromise<admin_v1_CategoryDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/categories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新分类
     * @param id
     * @param requestBody
     * @returns admin_v1_CategoryDetail OK
     * @throws ApiError
     */
    public static adminContentUpdateCategory(
        id: string,
        requestBody: admin_v1_UpdateCategoryRequest,
    ): CancelablePromise<admin_v1_CategoryDetail> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/content/categories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除分类
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentDeleteCategory(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/content/categories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 评论管理
     * 获取评论列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param reviewStatus
     * @param videoId
     * @param userId
     * @param startDate
     * @param endDate
     * @param sort
     * @param order
     * @returns admin_v1_GetCommentsResponse OK
     * @throws ApiError
     */
    public static adminContentGetComments(
        page?: number,
        pageSize?: number,
        keyword?: string,
        status?: number,
        reviewStatus?: number,
        videoId?: string,
        userId?: string,
        startDate?: string,
        endDate?: string,
        sort?: string,
        order?: string,
    ): CancelablePromise<admin_v1_GetCommentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/comments',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'reviewStatus': reviewStatus,
                'videoId': videoId,
                'userId': userId,
                'startDate': startDate,
                'endDate': endDate,
                'sort': sort,
                'order': order,
            },
        });
    }
    /**
     * 批量删除评论
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentBatchDeleteComments(
        requestBody: admin_v1_BatchDeleteCommentsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/comments/batch-delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取评论详情
     * @param id
     * @returns admin_v1_CommentDetail OK
     * @throws ApiError
     */
    public static adminContentGetComment(
        id: string,
    ): CancelablePromise<admin_v1_CommentDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/comments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 删除评论
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentDeleteComment(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/content/comments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 回复评论
     * @param id
     * @param requestBody
     * @returns admin_v1_CommentDetail OK
     * @throws ApiError
     */
    public static adminContentReplyComment(
        id: string,
        requestBody: admin_v1_ReplyCommentRequest,
    ): CancelablePromise<admin_v1_CommentDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/comments/{id}/reply',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 审核评论
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentReviewComment(
        id: string,
        requestBody: admin_v1_ReviewCommentRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/comments/{id}/review',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 批量审核内容
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentBatchReviewContent(
        requestBody: admin_v1_BatchReviewContentItemsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/reviews/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 内容审核
     * 获取待审核内容列表
     * @param page
     * @param pageSize
     * @param contentType
     * @param keyword
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetContentPendingReviewsResponse OK
     * @throws ApiError
     */
    public static adminContentGetPendingReviews(
        page?: number,
        pageSize?: number,
        contentType?: string,
        keyword?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetContentPendingReviewsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/reviews/pending',
            query: {
                'page': page,
                'pageSize': pageSize,
                'contentType': contentType,
                'keyword': keyword,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取审核记录
     * @param page
     * @param pageSize
     * @param contentType
     * @param status
     * @param keyword
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetReviewRecordsResponse OK
     * @throws ApiError
     */
    public static adminContentGetReviewRecords(
        page?: number,
        pageSize?: number,
        contentType?: string,
        status?: number,
        keyword?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetReviewRecordsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/reviews/records',
            query: {
                'page': page,
                'pageSize': pageSize,
                'contentType': contentType,
                'status': status,
                'keyword': keyword,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 内容统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_ContentStats OK
     * @throws ApiError
     */
    public static adminContentGetContentStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ContentStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 话题管理
     * 获取话题列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param categoryId
     * @param startDate
     * @param endDate
     * @param sort
     * @param order
     * @param isRecommended
     * @param isTop
     * @returns admin_v1_GetTopicsResponse OK
     * @throws ApiError
     */
    public static adminContentGetTopics(
        page?: number,
        pageSize?: number,
        keyword?: string,
        status?: number,
        categoryId?: string,
        startDate?: string,
        endDate?: string,
        sort?: string,
        order?: string,
        isRecommended?: boolean,
        isTop?: boolean,
    ): CancelablePromise<admin_v1_GetTopicsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/topics',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'categoryId': categoryId,
                'startDate': startDate,
                'endDate': endDate,
                'sort': sort,
                'order': order,
                'isRecommended': isRecommended,
                'isTop': isTop,
            },
        });
    }
    /**
     * 创建话题
     * @param requestBody
     * @returns admin_v1_TopicDetail OK
     * @throws ApiError
     */
    public static adminContentCreateTopic(
        requestBody: admin_v1_CreateTopicRequest,
    ): CancelablePromise<admin_v1_TopicDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/topics',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取话题详情
     * @param id
     * @returns admin_v1_TopicDetail OK
     * @throws ApiError
     */
    public static adminContentGetTopic(
        id: string,
    ): CancelablePromise<admin_v1_TopicDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/topics/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新话题
     * @param id
     * @param requestBody
     * @returns admin_v1_TopicDetail OK
     * @throws ApiError
     */
    public static adminContentUpdateTopic(
        id: string,
        requestBody: admin_v1_UpdateTopicRequest,
    ): CancelablePromise<admin_v1_TopicDetail> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/content/topics/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除话题
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentDeleteTopic(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/content/topics/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 推荐话题
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentRecommendTopic(
        id: string,
        requestBody: admin_v1_RecommendTopicRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/topics/{id}/recommend',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 置顶话题
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentTopTopic(
        id: string,
        requestBody: admin_v1_TopTopicRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/topics/{id}/top',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 视频管理
     * 获取视频列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param reviewStatus
     * @param categoryId
     * @param userId
     * @param startDate
     * @param endDate
     * @param sort
     * @param order
     * @param isRecommended
     * @param isTop
     * @returns admin_v1_GetVideosResponse OK
     * @throws ApiError
     */
    public static adminContentGetVideos(
        page?: number,
        pageSize?: number,
        keyword?: string,
        status?: number,
        reviewStatus?: number,
        categoryId?: string,
        userId?: string,
        startDate?: string,
        endDate?: string,
        sort?: string,
        order?: string,
        isRecommended?: boolean,
        isTop?: boolean,
    ): CancelablePromise<admin_v1_GetVideosResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/videos',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'reviewStatus': reviewStatus,
                'categoryId': categoryId,
                'userId': userId,
                'startDate': startDate,
                'endDate': endDate,
                'sort': sort,
                'order': order,
                'isRecommended': isRecommended,
                'isTop': isTop,
            },
        });
    }
    /**
     * 批量删除视频
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentBatchDeleteVideos(
        requestBody: admin_v1_BatchDeleteVideosRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/videos/batch-delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取视频详情
     * @param id
     * @returns admin_v1_VideoDetail OK
     * @throws ApiError
     */
    public static adminContentGetVideo(
        id: string,
    ): CancelablePromise<admin_v1_VideoDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/content/videos/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 删除视频
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentDeleteVideo(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/content/videos/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 取消推荐视频
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentCancelRecommendVideo(
        id: string,
        requestBody: admin_v1_CancelRecommendVideoRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/videos/{id}/cancel-recommend',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 取消置顶视频
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentCancelTopVideo(
        id: string,
        requestBody: admin_v1_CancelTopVideoRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/videos/{id}/cancel-top',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 推荐视频
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentRecommendVideo(
        id: string,
        requestBody: admin_v1_RecommendVideoRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/videos/{id}/recommend',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 审核视频
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentReviewVideo(
        id: string,
        requestBody: admin_v1_ReviewVideoRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/videos/{id}/review',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 置顶视频
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminContentTopVideo(
        id: string,
        requestBody: admin_v1_TopVideoRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/videos/{id}/top',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
