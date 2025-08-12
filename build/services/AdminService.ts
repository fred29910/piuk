/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_Ad } from '../models/admin_v1_Ad';
import type { admin_v1_AdminInfo } from '../models/admin_v1_AdminInfo';
import type { admin_v1_Anchor } from '../models/admin_v1_Anchor';
import type { admin_v1_AnchorVerify } from '../models/admin_v1_AnchorVerify';
import type { admin_v1_BanUserReq } from '../models/admin_v1_BanUserReq';
import type { admin_v1_CreateAdminReq } from '../models/admin_v1_CreateAdminReq';
import type { admin_v1_CreateAdReq } from '../models/admin_v1_CreateAdReq';
import type { admin_v1_CreateAnchorReq } from '../models/admin_v1_CreateAnchorReq';
import type { admin_v1_CreateAnchorVerifyReq } from '../models/admin_v1_CreateAnchorVerifyReq';
import type { admin_v1_CreatePermissionReq } from '../models/admin_v1_CreatePermissionReq';
import type { admin_v1_CreateRoleReq } from '../models/admin_v1_CreateRoleReq';
import type { admin_v1_CreateVideoCategoryReq } from '../models/admin_v1_CreateVideoCategoryReq';
import type { admin_v1_CreateVideoReq } from '../models/admin_v1_CreateVideoReq';
import type { admin_v1_Get2FAStatusReply } from '../models/admin_v1_Get2FAStatusReply';
import type { admin_v1_GetFakeCaptchaReply } from '../models/admin_v1_GetFakeCaptchaReply';
import type { admin_v1_List2FAStatusReply } from '../models/admin_v1_List2FAStatusReply';
import type { admin_v1_ListAdminRolesReply } from '../models/admin_v1_ListAdminRolesReply';
import type { admin_v1_ListAdminsReply } from '../models/admin_v1_ListAdminsReply';
import type { admin_v1_ListAdsReply } from '../models/admin_v1_ListAdsReply';
import type { admin_v1_ListAnchorsReply } from '../models/admin_v1_ListAnchorsReply';
import type { admin_v1_ListAnchorVerifiesReply } from '../models/admin_v1_ListAnchorVerifiesReply';
import type { admin_v1_ListPermissionsReply } from '../models/admin_v1_ListPermissionsReply';
import type { admin_v1_ListRolePermissionsReply } from '../models/admin_v1_ListRolePermissionsReply';
import type { admin_v1_ListRolesReply } from '../models/admin_v1_ListRolesReply';
import type { admin_v1_ListVideoCategoriesReply } from '../models/admin_v1_ListVideoCategoriesReply';
import type { admin_v1_ListVideosReply } from '../models/admin_v1_ListVideosReply';
import type { admin_v1_LoginReply } from '../models/admin_v1_LoginReply';
import type { admin_v1_LoginReq } from '../models/admin_v1_LoginReq';
import type { admin_v1_LogoutReply } from '../models/admin_v1_LogoutReply';
import type { admin_v1_Permission } from '../models/admin_v1_Permission';
import type { admin_v1_RefreshTokenReply } from '../models/admin_v1_RefreshTokenReply';
import type { admin_v1_RefreshTokenReq } from '../models/admin_v1_RefreshTokenReq';
import type { admin_v1_Role } from '../models/admin_v1_Role';
import type { admin_v1_UpdateAdminReq } from '../models/admin_v1_UpdateAdminReq';
import type { admin_v1_UpdateAdminRolesReq } from '../models/admin_v1_UpdateAdminRolesReq';
import type { admin_v1_UpdateAdminStatusReq } from '../models/admin_v1_UpdateAdminStatusReq';
import type { admin_v1_UpdateAdReq } from '../models/admin_v1_UpdateAdReq';
import type { admin_v1_UpdateAnchorReq } from '../models/admin_v1_UpdateAnchorReq';
import type { admin_v1_UpdateAnchorVerifyReq } from '../models/admin_v1_UpdateAnchorVerifyReq';
import type { admin_v1_UpdatePermissionReq } from '../models/admin_v1_UpdatePermissionReq';
import type { admin_v1_UpdateRolePermissionsReq } from '../models/admin_v1_UpdateRolePermissionsReq';
import type { admin_v1_UpdateRoleReq } from '../models/admin_v1_UpdateRoleReq';
import type { admin_v1_UpdateVideoCategoryReq } from '../models/admin_v1_UpdateVideoCategoryReq';
import type { admin_v1_UpdateVideoReq } from '../models/admin_v1_UpdateVideoReq';
import type { admin_v1_VerifyAnchorReq } from '../models/admin_v1_VerifyAnchorReq';
import type { admin_v1_Video } from '../models/admin_v1_Video';
import type { admin_v1_VideoCategory } from '../models/admin_v1_VideoCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * @param adminId
     * @param verificationCode
     * @returns any OK
     * @throws ApiError
     */
    public static adminRemove2Fa(
        adminId?: string,
        verificationCode?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/2fa',
            query: {
                'adminId': adminId,
                'verificationCode': verificationCode,
            },
        });
    }
    /**
     * @param page
     * @param pageSize
     * @param enabled
     * @returns admin_v1_List2FAStatusReply OK
     * @throws ApiError
     */
    public static adminList2FaStatus(
        page?: string,
        pageSize?: string,
        enabled?: boolean,
    ): CancelablePromise<admin_v1_List2FAStatusReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/2fa/list',
            query: {
                'page': page,
                'pageSize': pageSize,
                'enabled': enabled,
            },
        });
    }
    /**
     * 两步验证接口
     * @param adminId
     * @returns admin_v1_Get2FAStatusReply OK
     * @throws ApiError
     */
    public static adminGet2FaStatus(
        adminId?: string,
    ): CancelablePromise<admin_v1_Get2FAStatusReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/2fa/status',
            query: {
                'adminId': adminId,
            },
        });
    }
    /**
     * 管理员管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @returns admin_v1_ListAdminsReply OK
     * @throws ApiError
     */
    public static adminListAdmins(
        page?: string,
        pageSize?: string,
        keyword?: string,
        status?: number,
    ): CancelablePromise<admin_v1_ListAdminsReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/admins',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_AdminInfo OK
     * @throws ApiError
     */
    public static adminCreateAdmin(
        requestBody: admin_v1_CreateAdminReq,
    ): CancelablePromise<admin_v1_AdminInfo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/admins',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 管理员角色关联接口
     * @param adminId
     * @returns admin_v1_ListAdminRolesReply OK
     * @throws ApiError
     */
    public static adminListAdminRoles(
        adminId: string,
    ): CancelablePromise<admin_v1_ListAdminRolesReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/admins/{adminId}/roles',
            path: {
                'adminId': adminId,
            },
        });
    }
    /**
     * @param adminId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateAdminRoles(
        adminId: string,
        requestBody: admin_v1_UpdateAdminRolesReq,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/admins/{adminId}/roles',
            path: {
                'adminId': adminId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_AdminInfo OK
     * @throws ApiError
     */
    public static adminGetAdmin(
        id: string,
    ): CancelablePromise<admin_v1_AdminInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/admins/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_AdminInfo OK
     * @throws ApiError
     */
    public static adminUpdateAdmin(
        id: string,
        requestBody: admin_v1_UpdateAdminReq,
    ): CancelablePromise<admin_v1_AdminInfo> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/admins/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteAdmin(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/admins/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 管理员状态管理接口
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateAdminStatus(
        id: string,
        requestBody: admin_v1_UpdateAdminStatusReq,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/admins/{id}/status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 广告管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param startTime
     * @param endTime
     * @returns admin_v1_ListAdsReply OK
     * @throws ApiError
     */
    public static adminListAds(
        page?: string,
        pageSize?: string,
        keyword?: string,
        status?: number,
        startTime?: string,
        endTime?: string,
    ): CancelablePromise<admin_v1_ListAdsReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/ads',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'startTime': startTime,
                'endTime': endTime,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_Ad OK
     * @throws ApiError
     */
    public static adminCreateAd(
        requestBody: admin_v1_CreateAdReq,
    ): CancelablePromise<admin_v1_Ad> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/ads',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_Ad OK
     * @throws ApiError
     */
    public static adminGetAd(
        id: string,
    ): CancelablePromise<admin_v1_Ad> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/ads/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_Ad OK
     * @throws ApiError
     */
    public static adminUpdateAd(
        id: string,
        requestBody: admin_v1_UpdateAdReq,
    ): CancelablePromise<admin_v1_Ad> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/ads/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteAd(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/ads/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 主播认证信息管理接口
     * @param page
     * @param pageSize
     * @param anchorId
     * @param verifyType
     * @param verifyStatus
     * @returns admin_v1_ListAnchorVerifiesReply OK
     * @throws ApiError
     */
    public static adminListAnchorVerifies(
        page?: string,
        pageSize?: string,
        anchorId?: string,
        verifyType?: number,
        verifyStatus?: number,
    ): CancelablePromise<admin_v1_ListAnchorVerifiesReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/anchor-verifies',
            query: {
                'page': page,
                'pageSize': pageSize,
                'anchorId': anchorId,
                'verifyType': verifyType,
                'verifyStatus': verifyStatus,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_AnchorVerify OK
     * @throws ApiError
     */
    public static adminCreateAnchorVerify(
        requestBody: admin_v1_CreateAnchorVerifyReq,
    ): CancelablePromise<admin_v1_AnchorVerify> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/anchor-verifies',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_AnchorVerify OK
     * @throws ApiError
     */
    public static adminGetAnchorVerify(
        id: string,
    ): CancelablePromise<admin_v1_AnchorVerify> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/anchor-verifies/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_AnchorVerify OK
     * @throws ApiError
     */
    public static adminUpdateAnchorVerify(
        id: string,
        requestBody: admin_v1_UpdateAnchorVerifyReq,
    ): CancelablePromise<admin_v1_AnchorVerify> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/anchor-verifies/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteAnchorVerify(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/anchor-verifies/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 主播认证审核接口
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminVerifyAnchor(
        id: string,
        requestBody: admin_v1_VerifyAnchorReq,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/anchor-verifies/{id}/verify',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 主播管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param level
     * @param gender
     * @returns admin_v1_ListAnchorsReply OK
     * @throws ApiError
     */
    public static adminListAnchors(
        page?: string,
        pageSize?: string,
        keyword?: string,
        status?: number,
        level?: number,
        gender?: number,
    ): CancelablePromise<admin_v1_ListAnchorsReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/anchors',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'level': level,
                'gender': gender,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_Anchor OK
     * @throws ApiError
     */
    public static adminCreateAnchor(
        requestBody: admin_v1_CreateAnchorReq,
    ): CancelablePromise<admin_v1_Anchor> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/anchors',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_Anchor OK
     * @throws ApiError
     */
    public static adminGetAnchor(
        id: string,
    ): CancelablePromise<admin_v1_Anchor> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/anchors/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_Anchor OK
     * @throws ApiError
     */
    public static adminUpdateAnchor(
        id: string,
        requestBody: admin_v1_UpdateAnchorReq,
    ): CancelablePromise<admin_v1_Anchor> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/anchors/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteAnchor(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/anchors/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * getFakeCaptcha
     * @returns admin_v1_GetFakeCaptchaReply OK
     * @throws ApiError
     */
    public static adminGetFakeCaptcha(): CancelablePromise<admin_v1_GetFakeCaptchaReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/captcha',
        });
    }
    /**
     * 管理员登录
     * @param requestBody
     * @returns admin_v1_LoginReply OK
     * @throws ApiError
     */
    public static adminLogin(
        requestBody: admin_v1_LoginReq,
    ): CancelablePromise<admin_v1_LoginReply> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * logout
     * @param requestBody
     * @returns admin_v1_LogoutReply OK
     * @throws ApiError
     */
    public static adminLogout(
        requestBody: any,
    ): CancelablePromise<admin_v1_LogoutReply> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/logout',
            body: requestBody,
        });
    }
    /**
     * 权限管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param permissionType
     * @param status
     * @param parentId
     * @returns admin_v1_ListPermissionsReply OK
     * @throws ApiError
     */
    public static adminListPermissions(
        page?: string,
        pageSize?: string,
        keyword?: string,
        permissionType?: number,
        status?: number,
        parentId?: string,
    ): CancelablePromise<admin_v1_ListPermissionsReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/permissions',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'permissionType': permissionType,
                'status': status,
                'parentId': parentId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_Permission OK
     * @throws ApiError
     */
    public static adminCreatePermission(
        requestBody: admin_v1_CreatePermissionReq,
    ): CancelablePromise<admin_v1_Permission> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/permissions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_Permission OK
     * @throws ApiError
     */
    public static adminGetPermission(
        id: string,
    ): CancelablePromise<admin_v1_Permission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/permissions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_Permission OK
     * @throws ApiError
     */
    public static adminUpdatePermission(
        id: string,
        requestBody: admin_v1_UpdatePermissionReq,
    ): CancelablePromise<admin_v1_Permission> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/permissions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeletePermission(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/permissions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 刷新 token
     * @param requestBody
     * @returns admin_v1_RefreshTokenReply OK
     * @throws ApiError
     */
    public static adminRefreshToken(
        requestBody: admin_v1_RefreshTokenReq,
    ): CancelablePromise<admin_v1_RefreshTokenReply> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 角色管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @returns admin_v1_ListRolesReply OK
     * @throws ApiError
     */
    public static adminListRoles(
        page?: string,
        pageSize?: string,
        keyword?: string,
        status?: number,
    ): CancelablePromise<admin_v1_ListRolesReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/roles',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_Role OK
     * @throws ApiError
     */
    public static adminCreateRole(
        requestBody: admin_v1_CreateRoleReq,
    ): CancelablePromise<admin_v1_Role> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_Role OK
     * @throws ApiError
     */
    public static adminGetRole(
        id: string,
    ): CancelablePromise<admin_v1_Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/roles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_Role OK
     * @throws ApiError
     */
    public static adminUpdateRole(
        id: string,
        requestBody: admin_v1_UpdateRoleReq,
    ): CancelablePromise<admin_v1_Role> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/roles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteRole(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/roles/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 角色权限关联接口
     * @param roleId
     * @returns admin_v1_ListRolePermissionsReply OK
     * @throws ApiError
     */
    public static adminListRolePermissions(
        roleId: string,
    ): CancelablePromise<admin_v1_ListRolePermissionsReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/roles/{roleId}/permissions',
            path: {
                'roleId': roleId,
            },
        });
    }
    /**
     * @param roleId
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminUpdateRolePermissions(
        roleId: string,
        requestBody: admin_v1_UpdateRolePermissionsReq,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/roles/{roleId}/permissions',
            path: {
                'roleId': roleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminBanUser(
        id: string,
        requestBody: admin_v1_BanUserReq,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/users/{id}/ban',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 视频分类管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param parentId
     * @returns admin_v1_ListVideoCategoriesReply OK
     * @throws ApiError
     */
    public static adminListVideoCategories(
        page?: string,
        pageSize?: string,
        keyword?: string,
        status?: number,
        parentId?: string,
    ): CancelablePromise<admin_v1_ListVideoCategoriesReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/video-categories',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'parentId': parentId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_VideoCategory OK
     * @throws ApiError
     */
    public static adminCreateVideoCategory(
        requestBody: admin_v1_CreateVideoCategoryReq,
    ): CancelablePromise<admin_v1_VideoCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/video-categories',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_VideoCategory OK
     * @throws ApiError
     */
    public static adminGetVideoCategory(
        id: string,
    ): CancelablePromise<admin_v1_VideoCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/video-categories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_VideoCategory OK
     * @throws ApiError
     */
    public static adminUpdateVideoCategory(
        id: string,
        requestBody: admin_v1_UpdateVideoCategoryReq,
    ): CancelablePromise<admin_v1_VideoCategory> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/video-categories/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteVideoCategory(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/video-categories/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 视频管理接口
     * @param page
     * @param pageSize
     * @param keyword
     * @param status
     * @param categoryId
     * @param anchorId
     * @returns admin_v1_ListVideosReply OK
     * @throws ApiError
     */
    public static adminListVideos(
        page?: string,
        pageSize?: string,
        keyword?: string,
        status?: number,
        categoryId?: string,
        anchorId?: string,
    ): CancelablePromise<admin_v1_ListVideosReply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/videos',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'status': status,
                'categoryId': categoryId,
                'anchorId': anchorId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns admin_v1_Video OK
     * @throws ApiError
     */
    public static adminCreateVideo(
        requestBody: admin_v1_CreateVideoReq,
    ): CancelablePromise<admin_v1_Video> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/videos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns admin_v1_Video OK
     * @throws ApiError
     */
    public static adminGetVideo(
        id: string,
    ): CancelablePromise<admin_v1_Video> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/videos/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns admin_v1_Video OK
     * @throws ApiError
     */
    public static adminUpdateVideo(
        id: string,
        requestBody: admin_v1_UpdateVideoReq,
    ): CancelablePromise<admin_v1_Video> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/videos/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminDeleteVideo(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/videos/{id}',
            path: {
                'id': id,
            },
        });
    }
}
