/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_DatabaseColumn } from './admin_v1_DatabaseColumn';
import type { admin_v1_DatabaseIndex } from './admin_v1_DatabaseIndex';
import type { admin_v1_DatabaseTable } from './admin_v1_DatabaseTable';
/**
 * 数据库表详情
 */
export type admin_v1_DatabaseTableDetail = {
    table?: admin_v1_DatabaseTable;
    columns?: Array<admin_v1_DatabaseColumn>;
    indexes?: Array<admin_v1_DatabaseIndex>;
};

