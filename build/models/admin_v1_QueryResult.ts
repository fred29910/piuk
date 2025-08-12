/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_QueryRow } from './admin_v1_QueryRow';
/**
 * 查询结果
 */
export type admin_v1_QueryResult = {
    columns?: Array<string>;
    rows?: Array<admin_v1_QueryRow>;
    affectedRows?: string;
    executionTime?: string;
};

