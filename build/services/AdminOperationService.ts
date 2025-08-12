/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_Activity } from '../models/admin_v1_Activity';
import type { admin_v1_ActivityStats } from '../models/admin_v1_ActivityStats';
import type { admin_v1_Advertisement } from '../models/admin_v1_Advertisement';
import type { admin_v1_AdvertisementStats } from '../models/admin_v1_AdvertisementStats';
import type { admin_v1_Announcement } from '../models/admin_v1_Announcement';
import type { admin_v1_CreateActivityRequest } from '../models/admin_v1_CreateActivityRequest';
import type { admin_v1_CreateAdvertisementRequest } from '../models/admin_v1_CreateAdvertisementRequest';
import type { admin_v1_CreateAnnouncementRequest } from '../models/admin_v1_CreateAnnouncementRequest';
import type { admin_v1_CreateHelpDocumentRequest } from '../models/admin_v1_CreateHelpDocumentRequest';
import type { admin_v1_CreateMallItemRequest } from '../models/admin_v1_CreateMallItemRequest';
import type { admin_v1_CreatePushNotificationRequest } from '../models/admin_v1_CreatePushNotificationRequest';
import type { admin_v1_CreateTaskRequest } from '../models/admin_v1_CreateTaskRequest';
import type { admin_v1_Feedback } from '../models/admin_v1_Feedback';
import type { admin_v1_FeedbackStats } from '../models/admin_v1_FeedbackStats';
import type { admin_v1_GetActivitiesResponse } from '../models/admin_v1_GetActivitiesResponse';
import type { admin_v1_GetAdvertisementsResponse } from '../models/admin_v1_GetAdvertisementsResponse';
import type { admin_v1_GetAnnouncementsResponse } from '../models/admin_v1_GetAnnouncementsResponse';
import type { admin_v1_GetFeedbacksResponse } from '../models/admin_v1_GetFeedbacksResponse';
import type { admin_v1_GetHelpDocumentsResponse } from '../models/admin_v1_GetHelpDocumentsResponse';
import type { admin_v1_GetMallItemsResponse } from '../models/admin_v1_GetMallItemsResponse';
import type { admin_v1_GetMallRedemptionsResponse } from '../models/admin_v1_GetMallRedemptionsResponse';
import type { admin_v1_GetPushNotificationsResponse } from '../models/admin_v1_GetPushNotificationsResponse';
import type { admin_v1_GetTasksResponse } from '../models/admin_v1_GetTasksResponse';
import type { admin_v1_HelpDocument } from '../models/admin_v1_HelpDocument';
import type { admin_v1_MallItem } from '../models/admin_v1_MallItem';
import type { admin_v1_MallStats } from '../models/admin_v1_MallStats';
import type { admin_v1_ProcessFeedbackRequest } from '../models/admin_v1_ProcessFeedbackRequest';
import type { admin_v1_PublishAnnouncementRequest } from '../models/admin_v1_PublishAnnouncementRequest';
import type { admin_v1_PushNotification } from '../models/admin_v1_PushNotification';
import type { admin_v1_PushNotificationStats } from '../models/admin_v1_PushNotificationStats';
import type { admin_v1_SendPushNotificationRequest } from '../models/admin_v1_SendPushNotificationRequest';
import type { admin_v1_Task } from '../models/admin_v1_Task';
import type { admin_v1_TaskStats } from '../models/admin_v1_TaskStats';
import type { admin_v1_UpdateActivityRequest } from '../models/admin_v1_UpdateActivityRequest';
import type { admin_v1_UpdateAdvertisementRequest } from '../models/admin_v1_UpdateAdvertisementRequest';
import type { admin_v1_UpdateAnnouncementRequest } from '../models/admin_v1_UpdateAnnouncementRequest';
import type { admin_v1_UpdateHelpDocumentRequest } from '../models/admin_v1_UpdateHelpDocumentRequest';
import type { admin_v1_UpdateMallItemRequest } from '../models/admin_v1_UpdateMallItemRequest';
import type { admin_v1_UpdateTaskRequest } from '../models/admin_v1_UpdateTaskRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminOperationService {
    /**
     * 活动管理
     * 获取活动列表
     * @param page
     * @param pageSize
     * @param status
     * @param keyword
     * @returns admin_v1_GetActivitiesResponse OK
     * @throws ApiError
     */
    public static adminOperationGetActivities(
        page?: number,
        pageSize?: number,
        status?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetActivitiesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/activities',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'keyword': keyword,
            },
        });
    }
    /**
     * 创建活动
     * @param requestBody
     * @returns admin_v1_Activity OK
     * @throws ApiError
     */
    public static adminOperationCreateActivity(
        requestBody: admin_v1_CreateActivityRequest,
    ): CancelablePromise<admin_v1_Activity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/activities',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 活动统计
     * @param id
     * @returns admin_v1_ActivityStats OK
     * @throws ApiError
     */
    public static adminOperationGetActivityStats(
        id?: string,
    ): CancelablePromise<admin_v1_ActivityStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/activities/stats',
            query: {
                'id': id,
            },
        });
    }
    /**
     * 更新活动
     * @param id
     * @param requestBody
     * @returns admin_v1_Activity OK
     * @throws ApiError
     */
    public static adminOperationUpdateActivity(
        id: string,
        requestBody: admin_v1_UpdateActivityRequest,
    ): CancelablePromise<admin_v1_Activity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/operation/activities/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 广告管理
     * 获取广告列表
     * @param page
     * @param pageSize
     * @param position
     * @param status
     * @param keyword
     * @returns admin_v1_GetAdvertisementsResponse OK
     * @throws ApiError
     */
    public static adminOperationGetAdvertisements(
        page?: number,
        pageSize?: number,
        position?: string,
        status?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetAdvertisementsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/advertisements',
            query: {
                'page': page,
                'pageSize': pageSize,
                'position': position,
                'status': status,
                'keyword': keyword,
            },
        });
    }
    /**
     * 创建广告
     * @param requestBody
     * @returns admin_v1_Advertisement OK
     * @throws ApiError
     */
    public static adminOperationCreateAdvertisement(
        requestBody: admin_v1_CreateAdvertisementRequest,
    ): CancelablePromise<admin_v1_Advertisement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/advertisements',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 广告统计
     * @param startDate
     * @param endDate
     * @param position
     * @returns admin_v1_AdvertisementStats OK
     * @throws ApiError
     */
    public static adminOperationGetAdvertisementStats(
        startDate?: string,
        endDate?: string,
        position?: string,
    ): CancelablePromise<admin_v1_AdvertisementStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/advertisements/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'position': position,
            },
        });
    }
    /**
     * 更新广告
     * @param id
     * @param requestBody
     * @returns admin_v1_Advertisement OK
     * @throws ApiError
     */
    public static adminOperationUpdateAdvertisement(
        id: string,
        requestBody: admin_v1_UpdateAdvertisementRequest,
    ): CancelablePromise<admin_v1_Advertisement> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/operation/advertisements/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除广告
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminOperationDeleteAdvertisement(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/operation/advertisements/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 公告管理
     * 获取公告列表
     * @param page
     * @param pageSize
     * @param status
     * @param keyword
     * @returns admin_v1_GetAnnouncementsResponse OK
     * @throws ApiError
     */
    public static adminOperationGetAnnouncements(
        page?: number,
        pageSize?: number,
        status?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetAnnouncementsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/announcements',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'keyword': keyword,
            },
        });
    }
    /**
     * 创建公告
     * @param requestBody
     * @returns admin_v1_Announcement OK
     * @throws ApiError
     */
    public static adminOperationCreateAnnouncement(
        requestBody: admin_v1_CreateAnnouncementRequest,
    ): CancelablePromise<admin_v1_Announcement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/announcements',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新公告
     * @param id
     * @param requestBody
     * @returns admin_v1_Announcement OK
     * @throws ApiError
     */
    public static adminOperationUpdateAnnouncement(
        id: string,
        requestBody: admin_v1_UpdateAnnouncementRequest,
    ): CancelablePromise<admin_v1_Announcement> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/operation/announcements/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除公告
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminOperationDeleteAnnouncement(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/operation/announcements/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 发布公告
     * @param id
     * @param requestBody
     * @returns admin_v1_Announcement OK
     * @throws ApiError
     */
    public static adminOperationPublishAnnouncement(
        id: string,
        requestBody: admin_v1_PublishAnnouncementRequest,
    ): CancelablePromise<admin_v1_Announcement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/announcements/{id}/publish',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 意见反馈
     * 获取意见反馈列表
     * @param page
     * @param pageSize
     * @param status
     * @param category
     * @param userId
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetFeedbacksResponse OK
     * @throws ApiError
     */
    public static adminOperationGetFeedbacks(
        page?: number,
        pageSize?: number,
        status?: string,
        category?: string,
        userId?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetFeedbacksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/feedbacks',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'category': category,
                'userId': userId,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 意见反馈统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_FeedbackStats OK
     * @throws ApiError
     */
    public static adminOperationGetFeedbackStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_FeedbackStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/feedbacks/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 处理意见反馈
     * @param id
     * @param requestBody
     * @returns admin_v1_Feedback OK
     * @throws ApiError
     */
    public static adminOperationProcessFeedback(
        id: string,
        requestBody: admin_v1_ProcessFeedbackRequest,
    ): CancelablePromise<admin_v1_Feedback> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/feedbacks/{id}/process',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 帮助中心
     * 获取帮助文档列表
     * @param page
     * @param pageSize
     * @param category
     * @param keyword
     * @returns admin_v1_GetHelpDocumentsResponse OK
     * @throws ApiError
     */
    public static adminOperationGetHelpDocuments(
        page?: number,
        pageSize?: number,
        category?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetHelpDocumentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/help-documents',
            query: {
                'page': page,
                'pageSize': pageSize,
                'category': category,
                'keyword': keyword,
            },
        });
    }
    /**
     * 创建帮助文档
     * @param requestBody
     * @returns admin_v1_HelpDocument OK
     * @throws ApiError
     */
    public static adminOperationCreateHelpDocument(
        requestBody: admin_v1_CreateHelpDocumentRequest,
    ): CancelablePromise<admin_v1_HelpDocument> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/help-documents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新帮助文档
     * @param id
     * @param requestBody
     * @returns admin_v1_HelpDocument OK
     * @throws ApiError
     */
    public static adminOperationUpdateHelpDocument(
        id: string,
        requestBody: admin_v1_UpdateHelpDocumentRequest,
    ): CancelablePromise<admin_v1_HelpDocument> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/operation/help-documents/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除帮助文档
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminOperationDeleteHelpDocument(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/operation/help-documents/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 积分商城
     * 获取商品列表
     * @param page
     * @param pageSize
     * @param category
     * @param status
     * @returns admin_v1_GetMallItemsResponse OK
     * @throws ApiError
     */
    public static adminOperationGetMallItems(
        page?: number,
        pageSize?: number,
        category?: string,
        status?: string,
    ): CancelablePromise<admin_v1_GetMallItemsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/mall/items',
            query: {
                'page': page,
                'pageSize': pageSize,
                'category': category,
                'status': status,
            },
        });
    }
    /**
     * 创建商品
     * @param requestBody
     * @returns admin_v1_MallItem OK
     * @throws ApiError
     */
    public static adminOperationCreateMallItem(
        requestBody: admin_v1_CreateMallItemRequest,
    ): CancelablePromise<admin_v1_MallItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/mall/items',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新商品
     * @param id
     * @param requestBody
     * @returns admin_v1_MallItem OK
     * @throws ApiError
     */
    public static adminOperationUpdateMallItem(
        id: string,
        requestBody: admin_v1_UpdateMallItemRequest,
    ): CancelablePromise<admin_v1_MallItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/operation/mall/items/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取兑换记录
     * @param page
     * @param pageSize
     * @param userId
     * @param itemId
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetMallRedemptionsResponse OK
     * @throws ApiError
     */
    public static adminOperationGetMallRedemptions(
        page?: number,
        pageSize?: number,
        userId?: string,
        itemId?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetMallRedemptionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/mall/redemptions',
            query: {
                'page': page,
                'pageSize': pageSize,
                'userId': userId,
                'itemId': itemId,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 积分商城统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_MallStats OK
     * @throws ApiError
     */
    public static adminOperationGetMallStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_MallStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/mall/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 消息推送
     * 获取推送列表
     * @param page
     * @param pageSize
     * @param status
     * @param targetType
     * @param keyword
     * @returns admin_v1_GetPushNotificationsResponse OK
     * @throws ApiError
     */
    public static adminOperationGetPushNotifications(
        page?: number,
        pageSize?: number,
        status?: string,
        targetType?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetPushNotificationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/push-notifications',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'targetType': targetType,
                'keyword': keyword,
            },
        });
    }
    /**
     * 创建推送
     * @param requestBody
     * @returns admin_v1_PushNotification OK
     * @throws ApiError
     */
    public static adminOperationCreatePushNotification(
        requestBody: admin_v1_CreatePushNotificationRequest,
    ): CancelablePromise<admin_v1_PushNotification> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/push-notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 推送统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_PushNotificationStats OK
     * @throws ApiError
     */
    public static adminOperationGetPushNotificationStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_PushNotificationStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/push-notifications/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 发送推送
     * @param id
     * @param requestBody
     * @returns admin_v1_PushNotification OK
     * @throws ApiError
     */
    public static adminOperationSendPushNotification(
        id: string,
        requestBody: admin_v1_SendPushNotificationRequest,
    ): CancelablePromise<admin_v1_PushNotification> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/push-notifications/{id}/send',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 任务管理
     * 获取任务列表
     * @param page
     * @param pageSize
     * @param type
     * @param status
     * @returns admin_v1_GetTasksResponse OK
     * @throws ApiError
     */
    public static adminOperationGetTasks(
        page?: number,
        pageSize?: number,
        type?: string,
        status?: string,
    ): CancelablePromise<admin_v1_GetTasksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/tasks',
            query: {
                'page': page,
                'pageSize': pageSize,
                'type': type,
                'status': status,
            },
        });
    }
    /**
     * 创建任务
     * @param requestBody
     * @returns admin_v1_Task OK
     * @throws ApiError
     */
    public static adminOperationCreateTask(
        requestBody: admin_v1_CreateTaskRequest,
    ): CancelablePromise<admin_v1_Task> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/operation/tasks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 任务统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_TaskStats OK
     * @throws ApiError
     */
    public static adminOperationGetTaskStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_TaskStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/operation/tasks/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 更新任务
     * @param id
     * @param requestBody
     * @returns admin_v1_Task OK
     * @throws ApiError
     */
    public static adminOperationUpdateTask(
        id: string,
        requestBody: admin_v1_UpdateTaskRequest,
    ): CancelablePromise<admin_v1_Task> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/operation/tasks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
