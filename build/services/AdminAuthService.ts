/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_AdminInfo } from '../models/admin_v1_AdminInfo';
import type { admin_v1_AdminLoginRequest } from '../models/admin_v1_AdminLoginRequest';
import type { admin_v1_AdminLoginResponse } from '../models/admin_v1_AdminLoginResponse';
import type { admin_v1_AdminLogoutRequest } from '../models/admin_v1_AdminLogoutRequest';
import type { admin_v1_AdminLogoutResponse } from '../models/admin_v1_AdminLogoutResponse';
import type { admin_v1_AdminRefreshTokenRequest } from '../models/admin_v1_AdminRefreshTokenRequest';
import type { admin_v1_AdminRefreshTokenResponse } from '../models/admin_v1_AdminRefreshTokenResponse';
import type { admin_v1_AssignAdminRolesRequest } from '../models/admin_v1_AssignAdminRolesRequest';
import type { admin_v1_AssignRolePermissionsRequest } from '../models/admin_v1_AssignRolePermissionsRequest';
import type { admin_v1_ChangePasswordRequest } from '../models/admin_v1_ChangePasswordRequest';
import type { admin_v1_CreateRoleRequest } from '../models/admin_v1_CreateRoleRequest';
import type { admin_v1_GetAdminRolesResponse } from '../models/admin_v1_GetAdminRolesResponse';
import type { admin_v1_GetPermissionsResponse } from '../models/admin_v1_GetPermissionsResponse';
import type { admin_v1_GetRolesResponse } from '../models/admin_v1_GetRolesResponse';
import type { admin_v1_ResetPasswordRequest } from '../models/admin_v1_ResetPasswordRequest';
import type { admin_v1_Role } from '../models/admin_v1_Role';
import type { admin_v1_UpdateRoleRequest } from '../models/admin_v1_UpdateRoleRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminAuthService {
    /**
     * 获取管理员角色
     * @param id
     * @returns admin_v1_GetAdminRolesResponse OK
     * @throws ApiError
     */
    public static adminAuthGetAdminRoles(
        id: string,
    ): CancelablePromise<admin_v1_GetAdminRolesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/auth/admins/{id}/roles',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 分配管理员角色
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminAuthAssignAdminRoles(
        id: string,
        requestBody: admin_v1_AssignAdminRolesRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/admins/{id}/roles',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 修改密码
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminAuthChangePassword(
        requestBody: admin_v1_ChangePasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取管理员信息
     * @param id
     * @returns admin_v1_AdminInfo OK
     * @throws ApiError
     */
    public static adminAuthGetAdminInfo(
        id?: string,
    ): CancelablePromise<admin_v1_AdminInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/auth/info',
            query: {
                'id': id,
            },
        });
    }
    /**
     * 管理员登录
     * @param requestBody
     * @returns admin_v1_AdminLoginResponse OK
     * @throws ApiError
     */
    public static adminAuthLogin(
        requestBody: admin_v1_AdminLoginRequest,
    ): CancelablePromise<admin_v1_AdminLoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 管理员登出
     * @param requestBody
     * @returns admin_v1_AdminLogoutResponse OK
     * @throws ApiError
     */
    public static adminAuthLogout(
        requestBody: admin_v1_AdminLogoutRequest,
    ): CancelablePromise<admin_v1_AdminLogoutResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/logout',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取权限列表
     * @param page
     * @param pageSize
     * @param keyword
     * @returns admin_v1_GetPermissionsResponse OK
     * @throws ApiError
     */
    public static adminAuthGetPermissions(
        page?: number,
        pageSize?: number,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetPermissionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/auth/permissions',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
            },
        });
    }
    /**
     * 刷新访问令牌
     * @param requestBody
     * @returns admin_v1_AdminRefreshTokenResponse OK
     * @throws ApiError
     */
    public static adminAuthRefreshToken(
        requestBody: admin_v1_AdminRefreshTokenRequest,
    ): CancelablePromise<admin_v1_AdminRefreshTokenResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 重置管理员密码
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminAuthResetPassword(
        requestBody: admin_v1_ResetPasswordRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取角色列表
     * @param page
     * @param pageSize
     * @param keyword
     * @returns admin_v1_GetRolesResponse OK
     * @throws ApiError
     */
    public static adminAuthGetRoles(
        page?: number,
        pageSize?: number,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetRolesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/auth/roles',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
            },
        });
    }
    /**
     * 创建角色
     * @param requestBody
     * @returns admin_v1_Role OK
     * @throws ApiError
     */
    public static adminAuthCreateRole(
        requestBody: admin_v1_CreateRoleRequest,
    ): CancelablePromise<admin_v1_Role> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新角色
     * @param id
     * @param requestBody
     * @returns admin_v1_Role OK
     * @throws ApiError
     */
    public static adminAuthUpdateRole(
        id: string,
        requestBody: admin_v1_UpdateRoleRequest,
    ): CancelablePromise<admin_v1_Role> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/auth/roles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除角色
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminAuthDeleteRole(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/auth/roles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 分配角色权限
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminAuthAssignRolePermissions(
        id: string,
        requestBody: admin_v1_AssignRolePermissionsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/auth/roles/{id}/permissions',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
