/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_Permission } from './admin_v1_Permission';
/**
 * 角色信息
 */
export type admin_v1_Role = {
    id?: string;
    name?: string;
    slug?: string;
    description?: string;
    permissions?: Array<admin_v1_Permission>;
    createdAt?: string;
    updatedAt?: string;
};

