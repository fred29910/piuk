/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_CacheKeyStats } from './admin_v1_CacheKeyStats';
/**
 * 缓存统计
 */
export type admin_v1_CacheStats = {
    totalKeys?: string;
    usedMemory?: string;
    hitRate?: string;
    missRate?: string;
    keyStats?: Array<admin_v1_CacheKeyStats>;
};

