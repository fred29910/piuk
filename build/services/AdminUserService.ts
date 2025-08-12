/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_AddUserTagsRequest } from '../models/admin_v1_AddUserTagsRequest';
import type { admin_v1_BatchDeleteUsersRequest } from '../models/admin_v1_BatchDeleteUsersRequest';
import type { admin_v1_CreateUserRequest } from '../models/admin_v1_CreateUserRequest';
import type { admin_v1_ExportUsersRequest } from '../models/admin_v1_ExportUsersRequest';
import type { admin_v1_ExportUsersResponse } from '../models/admin_v1_ExportUsersResponse';
import type { admin_v1_FreezeUserRequest } from '../models/admin_v1_FreezeUserRequest';
import type { admin_v1_GetUserLogsResponse } from '../models/admin_v1_GetUserLogsResponse';
import type { admin_v1_GetUsersResponse } from '../models/admin_v1_GetUsersResponse';
import type { admin_v1_GetUserTagsResponse } from '../models/admin_v1_GetUserTagsResponse';
import type { admin_v1_ImportUsersRequest } from '../models/admin_v1_ImportUsersRequest';
import type { admin_v1_ImportUsersResponse } from '../models/admin_v1_ImportUsersResponse';
import type { admin_v1_RemoveUserTagsRequest } from '../models/admin_v1_RemoveUserTagsRequest';
import type { admin_v1_UnfreezeUserRequest } from '../models/admin_v1_UnfreezeUserRequest';
import type { admin_v1_UpdateUserRequest } from '../models/admin_v1_UpdateUserRequest';
import type { admin_v1_UserDetail } from '../models/admin_v1_UserDetail';
import type { admin_v1_UserStats } from '../models/admin_v1_UserStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminUserService {
    /**
     * 获取用户列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param startDate
     * @param endDate
     * @param sort
     * @param order
     * @param tagIds
     * @returns admin_v1_GetUsersResponse OK
     * @throws ApiError
     */
    public static adminUserGetUsers(
        page?: number,
        pageSize?: number,
        keyword?: string,
        status?: number,
        startDate?: string,
        endDate?: string,
        sort?: string,
        order?: string,
        tagIds?: Array<string>,
    ): CancelablePromise<admin_v1_GetUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'startDate': startDate,
                'endDate': endDate,
                'sort': sort,
                'order': order,
                'tagIds': tagIds,
            },
        });
    }
    /**
     * 创建用户
     * @param requestBody
     * @returns admin_v1_UserDetail OK
     * @throws ApiError
     */
    public static adminUserCreateUser(
        requestBody: admin_v1_CreateUserRequest,
    ): CancelablePromise<admin_v1_UserDetail> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 批量删除用户
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUserBatchDeleteUsers(
        requestBody: admin_v1_BatchDeleteUsersRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/batch-delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 导出用户数据
     * @param requestBody
     * @returns admin_v1_ExportUsersResponse OK
     * @throws ApiError
     */
    public static adminUserExportUsers(
        requestBody: admin_v1_ExportUsersRequest,
    ): CancelablePromise<admin_v1_ExportUsersResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/export',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 导入用户数据
     * @param requestBody
     * @returns admin_v1_ImportUsersResponse OK
     * @throws ApiError
     */
    public static adminUserImportUsers(
        requestBody: admin_v1_ImportUsersRequest,
    ): CancelablePromise<admin_v1_ImportUsersResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/import',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取用户统计信息
     * @param startDate
     * @param endDate
     * @returns admin_v1_UserStats OK
     * @throws ApiError
     */
    public static adminUserGetUserStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_UserStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取用户详情
     * @param id
     * @returns admin_v1_UserDetail OK
     * @throws ApiError
     */
    public static adminUserGetUser(
        id: string,
    ): CancelablePromise<admin_v1_UserDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新用户
     * @param id
     * @param requestBody
     * @returns admin_v1_UserDetail OK
     * @throws ApiError
     */
    public static adminUserUpdateUser(
        id: string,
        requestBody: admin_v1_UpdateUserRequest,
    ): CancelablePromise<admin_v1_UserDetail> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除用户
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminUserDeleteUser(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 冻结用户
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUserFreezeUser(
        id: string,
        requestBody: admin_v1_FreezeUserRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{id}/freeze',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取用户操作日志
     * @param id
     * @param page
     * @param pageSize
     * @param action
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetUserLogsResponse OK
     * @throws ApiError
     */
    public static adminUserGetUserLogs(
        id: string,
        page?: number,
        pageSize?: number,
        action?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetUserLogsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}/logs',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'action': action,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取用户标签
     * @param id
     * @returns admin_v1_GetUserTagsResponse OK
     * @throws ApiError
     */
    public static adminUserGetUserTags(
        id: string,
    ): CancelablePromise<admin_v1_GetUserTagsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/users/{id}/tags',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 添加用户标签
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUserAddUserTags(
        id: string,
        requestBody: admin_v1_AddUserTagsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{id}/tags',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 移除用户标签
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUserRemoveUserTags(
        id: string,
        requestBody: admin_v1_RemoveUserTagsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/users/{id}/tags',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 解冻用户
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUserUnfreezeUser(
        id: string,
        requestBody: admin_v1_UnfreezeUserRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{id}/unfreeze',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
