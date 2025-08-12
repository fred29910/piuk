/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 内容检测结果
 */
export type admin_v1_ContentDetectionResult = {
    contentId?: string;
    contentType?: string;
    isSafe?: boolean;
    confidence?: number;
    detectedCategories?: Array<string>;
    sensitiveWords?: Array<string>;
    suggestion?: string;
    details?: string;
};

