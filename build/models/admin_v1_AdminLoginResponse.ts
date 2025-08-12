/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_AdminInfo } from './admin_v1_AdminInfo';
/**
 * 管理员登录响应
 */
export type admin_v1_AdminLoginResponse = {
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: string;
    adminInfo?: admin_v1_AdminInfo;
};

