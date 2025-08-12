/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 分类详情
 */
export type admin_v1_CategoryDetail = {
    id?: string;
    name?: string;
    slug?: string;
    description?: string;
    icon?: string;
    sortOrder?: number;
    status?: number;
    parentId?: string;
    createdAt?: string;
    updatedAt?: string;
    children?: Array<admin_v1_CategoryDetail>;
};

