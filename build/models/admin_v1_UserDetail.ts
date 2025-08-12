/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_UserStats } from './admin_v1_UserStats';
import type { admin_v1_UserTag } from './admin_v1_UserTag';
/**
 * 用户详情
 */
export type admin_v1_UserDetail = {
    id?: string;
    username?: string;
    email?: string;
    phone?: string;
    nickname?: string;
    avatar?: string;
    gender?: number;
    birthday?: string;
    location?: string;
    bio?: string;
    status?: number;
    level?: number;
    points?: string;
    registerIp?: string;
    lastLoginIp?: string;
    lastLoginAt?: string;
    createdAt?: string;
    updatedAt?: string;
    tags?: Array<admin_v1_UserTag>;
    stats?: admin_v1_UserStats;
};

