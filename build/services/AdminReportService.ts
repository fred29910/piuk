/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_Appeal } from '../models/admin_v1_Appeal';
import type { admin_v1_BatchDetectContentRequest } from '../models/admin_v1_BatchDetectContentRequest';
import type { admin_v1_BatchDetectContentResponse } from '../models/admin_v1_BatchDetectContentResponse';
import type { admin_v1_BatchProcessAppealsRequest } from '../models/admin_v1_BatchProcessAppealsRequest';
import type { admin_v1_BatchProcessAppealsResponse } from '../models/admin_v1_BatchProcessAppealsResponse';
import type { admin_v1_BatchProcessReportsRequest } from '../models/admin_v1_BatchProcessReportsRequest';
import type { admin_v1_BatchProcessReportsResponse } from '../models/admin_v1_BatchProcessReportsResponse';
import type { admin_v1_BatchReviewContentRequest } from '../models/admin_v1_BatchReviewContentRequest';
import type { admin_v1_BatchReviewContentResponse } from '../models/admin_v1_BatchReviewContentResponse';
import type { admin_v1_CloseReportRequest } from '../models/admin_v1_CloseReportRequest';
import type { admin_v1_ContentDetectionResult } from '../models/admin_v1_ContentDetectionResult';
import type { admin_v1_CreateReportTypeRequest } from '../models/admin_v1_CreateReportTypeRequest';
import type { admin_v1_CreateReviewRuleRequest } from '../models/admin_v1_CreateReviewRuleRequest';
import type { admin_v1_CreateSensitiveWordRequest } from '../models/admin_v1_CreateSensitiveWordRequest';
import type { admin_v1_DetectImageContentRequest } from '../models/admin_v1_DetectImageContentRequest';
import type { admin_v1_DetectTextContentRequest } from '../models/admin_v1_DetectTextContentRequest';
import type { admin_v1_DetectVideoContentRequest } from '../models/admin_v1_DetectVideoContentRequest';
import type { admin_v1_ExportSensitiveWordsRequest } from '../models/admin_v1_ExportSensitiveWordsRequest';
import type { admin_v1_ExportTask } from '../models/admin_v1_ExportTask';
import type { admin_v1_GetAppealsResponse } from '../models/admin_v1_GetAppealsResponse';
import type { admin_v1_GetPendingReviewsResponse } from '../models/admin_v1_GetPendingReviewsResponse';
import type { admin_v1_GetReportsResponse } from '../models/admin_v1_GetReportsResponse';
import type { admin_v1_GetReportTypesResponse } from '../models/admin_v1_GetReportTypesResponse';
import type { admin_v1_GetReviewHistoryResponse } from '../models/admin_v1_GetReviewHistoryResponse';
import type { admin_v1_GetReviewRulesResponse } from '../models/admin_v1_GetReviewRulesResponse';
import type { admin_v1_GetRiskUsersResponse } from '../models/admin_v1_GetRiskUsersResponse';
import type { admin_v1_GetSensitiveWordsResponse } from '../models/admin_v1_GetSensitiveWordsResponse';
import type { admin_v1_GetUserRiskRecordsResponse } from '../models/admin_v1_GetUserRiskRecordsResponse';
import type { admin_v1_IgnoreReportRequest } from '../models/admin_v1_IgnoreReportRequest';
import type { admin_v1_ImportSensitiveWordsRequest } from '../models/admin_v1_ImportSensitiveWordsRequest';
import type { admin_v1_ImportSensitiveWordsResponse } from '../models/admin_v1_ImportSensitiveWordsResponse';
import type { admin_v1_MarkRiskUserRequest } from '../models/admin_v1_MarkRiskUserRequest';
import type { admin_v1_ProcessAppealRequest } from '../models/admin_v1_ProcessAppealRequest';
import type { admin_v1_ProcessReportRequest } from '../models/admin_v1_ProcessReportRequest';
import type { admin_v1_RejectAppealRequest } from '../models/admin_v1_RejectAppealRequest';
import type { admin_v1_Report } from '../models/admin_v1_Report';
import type { admin_v1_ReportProcessStats } from '../models/admin_v1_ReportProcessStats';
import type { admin_v1_ReportStats } from '../models/admin_v1_ReportStats';
import type { admin_v1_ReportTrend } from '../models/admin_v1_ReportTrend';
import type { admin_v1_ReportType } from '../models/admin_v1_ReportType';
import type { admin_v1_ReportTypeStats } from '../models/admin_v1_ReportTypeStats';
import type { admin_v1_ReviewContentRequest } from '../models/admin_v1_ReviewContentRequest';
import type { admin_v1_ReviewDetail } from '../models/admin_v1_ReviewDetail';
import type { admin_v1_ReviewResult } from '../models/admin_v1_ReviewResult';
import type { admin_v1_ReviewRule } from '../models/admin_v1_ReviewRule';
import type { admin_v1_RiskUser } from '../models/admin_v1_RiskUser';
import type { admin_v1_RiskUserDetail } from '../models/admin_v1_RiskUserDetail';
import type { admin_v1_SensitiveWord } from '../models/admin_v1_SensitiveWord';
import type { admin_v1_ToggleReviewRuleRequest } from '../models/admin_v1_ToggleReviewRuleRequest';
import type { admin_v1_UnmarkRiskUserRequest } from '../models/admin_v1_UnmarkRiskUserRequest';
import type { admin_v1_UpdateReportTypeRequest } from '../models/admin_v1_UpdateReportTypeRequest';
import type { admin_v1_UpdateReviewRuleRequest } from '../models/admin_v1_UpdateReviewRuleRequest';
import type { admin_v1_UpdateSensitiveWordRequest } from '../models/admin_v1_UpdateSensitiveWordRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminReportService {
    /**
     * 申诉处理
     * 获取申诉列表
     * @param page
     * @param pageSize
     * @param status
     * @param type
     * @param userId
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetAppealsResponse OK
     * @throws ApiError
     */
    public static adminReportGetAppeals(
        page?: number,
        pageSize?: number,
        status?: string,
        type?: string,
        userId?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetAppealsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/appeals',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'type': type,
                'userId': userId,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 批量处理申诉
     * @param requestBody
     * @returns admin_v1_BatchProcessAppealsResponse OK
     * @throws ApiError
     */
    public static adminReportBatchProcessAppeals(
        requestBody: admin_v1_BatchProcessAppealsRequest,
    ): CancelablePromise<admin_v1_BatchProcessAppealsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/appeals/batch/process',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取申诉详情
     * @param id
     * @returns admin_v1_Appeal OK
     * @throws ApiError
     */
    public static adminReportGetAppeal(
        id: string,
    ): CancelablePromise<admin_v1_Appeal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/appeals/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 处理申诉
     * @param id
     * @param requestBody
     * @returns admin_v1_Appeal OK
     * @throws ApiError
     */
    public static adminReportProcessAppeal(
        id: string,
        requestBody: admin_v1_ProcessAppealRequest,
    ): CancelablePromise<admin_v1_Appeal> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/appeals/{id}/process',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 拒绝申诉
     * @param id
     * @param requestBody
     * @returns admin_v1_Appeal OK
     * @throws ApiError
     */
    public static adminReportRejectAppeal(
        id: string,
        requestBody: admin_v1_RejectAppealRequest,
    ): CancelablePromise<admin_v1_Appeal> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/appeals/{id}/reject',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 批量检测内容
     * @param requestBody
     * @returns admin_v1_BatchDetectContentResponse OK
     * @throws ApiError
     */
    public static adminReportBatchDetectContent(
        requestBody: admin_v1_BatchDetectContentRequest,
    ): CancelablePromise<admin_v1_BatchDetectContentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/detect/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 检测图片内容
     * @param requestBody
     * @returns admin_v1_ContentDetectionResult OK
     * @throws ApiError
     */
    public static adminReportDetectImageContent(
        requestBody: admin_v1_DetectImageContentRequest,
    ): CancelablePromise<admin_v1_ContentDetectionResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/detect/image',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 内容检测
     * 检测文本内容
     * @param requestBody
     * @returns admin_v1_ContentDetectionResult OK
     * @throws ApiError
     */
    public static adminReportDetectTextContent(
        requestBody: admin_v1_DetectTextContentRequest,
    ): CancelablePromise<admin_v1_ContentDetectionResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/detect/text',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 检测视频内容
     * @param requestBody
     * @returns admin_v1_ContentDetectionResult OK
     * @throws ApiError
     */
    public static adminReportDetectVideoContent(
        requestBody: admin_v1_DetectVideoContentRequest,
    ): CancelablePromise<admin_v1_ContentDetectionResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/content/detect/video',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 举报处理
     * 获取举报列表
     * @param page
     * @param pageSize
     * @param status
     * @param type
     * @param category
     * @param reporterId
     * @param targetId
     * @param startDate
     * @param endDate
     * @param keyword
     * @returns admin_v1_GetReportsResponse OK
     * @throws ApiError
     */
    public static adminReportGetReports(
        page?: number,
        pageSize?: number,
        status?: string,
        type?: string,
        category?: string,
        reporterId?: string,
        targetId?: string,
        startDate?: string,
        endDate?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetReportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'type': type,
                'category': category,
                'reporterId': reporterId,
                'targetId': targetId,
                'startDate': startDate,
                'endDate': endDate,
                'keyword': keyword,
            },
        });
    }
    /**
     * 批量处理举报
     * @param requestBody
     * @returns admin_v1_BatchProcessReportsResponse OK
     * @throws ApiError
     */
    public static adminReportBatchProcessReports(
        requestBody: admin_v1_BatchProcessReportsRequest,
    ): CancelablePromise<admin_v1_BatchProcessReportsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reports/batch/process',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 举报统计
     * 获取举报统计概览
     * @param startDate
     * @param endDate
     * @returns admin_v1_ReportStats OK
     * @throws ApiError
     */
    public static adminReportGetReportStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ReportStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取举报处理统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_ReportProcessStats OK
     * @throws ApiError
     */
    public static adminReportGetReportProcessStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ReportProcessStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports/stats/process',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取举报趋势
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_ReportTrend OK
     * @throws ApiError
     */
    public static adminReportGetReportTrend(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_ReportTrend> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports/stats/trend',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取举报类型统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_ReportTypeStats OK
     * @throws ApiError
     */
    public static adminReportGetReportTypeStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ReportTypeStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports/stats/types',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 举报类型管理
     * 获取举报类型列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param enabled
     * @returns admin_v1_GetReportTypesResponse OK
     * @throws ApiError
     */
    public static adminReportGetReportTypes(
        page?: number,
        pageSize?: number,
        keyword?: string,
        enabled?: boolean,
    ): CancelablePromise<admin_v1_GetReportTypesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports/types',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'enabled': enabled,
            },
        });
    }
    /**
     * 创建举报类型
     * @param requestBody
     * @returns admin_v1_ReportType OK
     * @throws ApiError
     */
    public static adminReportCreateReportType(
        requestBody: admin_v1_CreateReportTypeRequest,
    ): CancelablePromise<admin_v1_ReportType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reports/types',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新举报类型
     * @param id
     * @param requestBody
     * @returns admin_v1_ReportType OK
     * @throws ApiError
     */
    public static adminReportUpdateReportType(
        id: string,
        requestBody: admin_v1_UpdateReportTypeRequest,
    ): CancelablePromise<admin_v1_ReportType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/reports/types/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除举报类型
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminReportDeleteReportType(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/reports/types/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取举报详情
     * @param id
     * @returns admin_v1_Report OK
     * @throws ApiError
     */
    public static adminReportGetReport(
        id: string,
    ): CancelablePromise<admin_v1_Report> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reports/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 关闭举报
     * @param id
     * @param requestBody
     * @returns admin_v1_Report OK
     * @throws ApiError
     */
    public static adminReportCloseReport(
        id: string,
        requestBody: admin_v1_CloseReportRequest,
    ): CancelablePromise<admin_v1_Report> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reports/{id}/close',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 忽略举报
     * @param id
     * @param requestBody
     * @returns admin_v1_Report OK
     * @throws ApiError
     */
    public static adminReportIgnoreReport(
        id: string,
        requestBody: admin_v1_IgnoreReportRequest,
    ): CancelablePromise<admin_v1_Report> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reports/{id}/ignore',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 处理举报
     * @param id
     * @param requestBody
     * @returns admin_v1_Report OK
     * @throws ApiError
     */
    public static adminReportProcessReport(
        id: string,
        requestBody: admin_v1_ProcessReportRequest,
    ): CancelablePromise<admin_v1_Report> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reports/{id}/process',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 规则管理
     * 获取审核规则列表
     * @param page
     * @param pageSize
     * @param contentType
     * @param enabled
     * @returns admin_v1_GetReviewRulesResponse OK
     * @throws ApiError
     */
    public static adminReportGetReviewRules(
        page?: number,
        pageSize?: number,
        contentType?: string,
        enabled?: boolean,
    ): CancelablePromise<admin_v1_GetReviewRulesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/review-rules',
            query: {
                'page': page,
                'pageSize': pageSize,
                'contentType': contentType,
                'enabled': enabled,
            },
        });
    }
    /**
     * 创建审核规则
     * @param requestBody
     * @returns admin_v1_ReviewRule OK
     * @throws ApiError
     */
    public static adminReportCreateReviewRule(
        requestBody: admin_v1_CreateReviewRuleRequest,
    ): CancelablePromise<admin_v1_ReviewRule> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/review-rules',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新审核规则
     * @param id
     * @param requestBody
     * @returns admin_v1_ReviewRule OK
     * @throws ApiError
     */
    public static adminReportUpdateReviewRule(
        id: string,
        requestBody: admin_v1_UpdateReviewRuleRequest,
    ): CancelablePromise<admin_v1_ReviewRule> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/review-rules/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除审核规则
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminReportDeleteReviewRule(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/review-rules/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 启用/禁用审核规则
     * @param id
     * @param requestBody
     * @returns admin_v1_ReviewRule OK
     * @throws ApiError
     */
    public static adminReportToggleReviewRule(
        id: string,
        requestBody: admin_v1_ToggleReviewRuleRequest,
    ): CancelablePromise<admin_v1_ReviewRule> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/review-rules/{id}/toggle',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 批量审核内容
     * @param requestBody
     * @returns admin_v1_BatchReviewContentResponse OK
     * @throws ApiError
     */
    public static adminReportBatchReviewContent(
        requestBody: admin_v1_BatchReviewContentRequest,
    ): CancelablePromise<admin_v1_BatchReviewContentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reviews/content/batch',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 审核内容
     * @param id
     * @param requestBody
     * @returns admin_v1_ReviewResult OK
     * @throws ApiError
     */
    public static adminReportReviewContent(
        id: string,
        requestBody: admin_v1_ReviewContentRequest,
    ): CancelablePromise<admin_v1_ReviewResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/reviews/content/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取审核历史
     * @param page
     * @param pageSize
     * @param contentType
     * @param action
     * @param reviewerId
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetReviewHistoryResponse OK
     * @throws ApiError
     */
    public static adminReportGetReviewHistory(
        page?: number,
        pageSize?: number,
        contentType?: string,
        action?: string,
        reviewerId?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetReviewHistoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reviews/history',
            query: {
                'page': page,
                'pageSize': pageSize,
                'contentType': contentType,
                'action': action,
                'reviewerId': reviewerId,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 内容审核
     * 获取待审核内容列表
     * @param page
     * @param pageSize
     * @param contentType
     * @param priority
     * @param keyword
     * @returns admin_v1_GetPendingReviewsResponse OK
     * @throws ApiError
     */
    public static adminReportGetPendingReviews(
        page?: number,
        pageSize?: number,
        contentType?: string,
        priority?: string,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetPendingReviewsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reviews/pending',
            query: {
                'page': page,
                'pageSize': pageSize,
                'contentType': contentType,
                'priority': priority,
                'keyword': keyword,
            },
        });
    }
    /**
     * 获取审核详情
     * @param id
     * @returns admin_v1_ReviewDetail OK
     * @throws ApiError
     */
    public static adminReportGetReviewDetail(
        id: string,
    ): CancelablePromise<admin_v1_ReviewDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/reviews/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 风险用户管理
     * 获取风险用户列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param riskLevel
     * @returns admin_v1_GetRiskUsersResponse OK
     * @throws ApiError
     */
    public static adminReportGetRiskUsers(
        page?: number,
        pageSize?: number,
        keyword?: string,
        riskLevel?: string,
    ): CancelablePromise<admin_v1_GetRiskUsersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/risk-users',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'riskLevel': riskLevel,
            },
        });
    }
    /**
     * 标记风险用户
     * @param requestBody
     * @returns admin_v1_RiskUser OK
     * @throws ApiError
     */
    public static adminReportMarkRiskUser(
        requestBody: admin_v1_MarkRiskUserRequest,
    ): CancelablePromise<admin_v1_RiskUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/risk-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取风险用户详情
     * @param id
     * @returns admin_v1_RiskUserDetail OK
     * @throws ApiError
     */
    public static adminReportGetRiskUserDetail(
        id: string,
    ): CancelablePromise<admin_v1_RiskUserDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/risk-users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取用户风险记录
     * @param id
     * @param page
     * @param pageSize
     * @returns admin_v1_GetUserRiskRecordsResponse OK
     * @throws ApiError
     */
    public static adminReportGetUserRiskRecords(
        id: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetUserRiskRecordsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/risk-users/{id}/records',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 解除风险标记
     * @param id
     * @param requestBody
     * @returns admin_v1_RiskUser OK
     * @throws ApiError
     */
    public static adminReportUnmarkRiskUser(
        id: string,
        requestBody: admin_v1_UnmarkRiskUserRequest,
    ): CancelablePromise<admin_v1_RiskUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/risk-users/{id}/unmark',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 敏感词管理
     * 获取敏感词列表
     * @param page
     * @param pageSize
     * @param keyword
     * @param category
     * @param enabled
     * @returns admin_v1_GetSensitiveWordsResponse OK
     * @throws ApiError
     */
    public static adminReportGetSensitiveWords(
        page?: number,
        pageSize?: number,
        keyword?: string,
        category?: string,
        enabled?: boolean,
    ): CancelablePromise<admin_v1_GetSensitiveWordsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/sensitive-words',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
                'category': category,
                'enabled': enabled,
            },
        });
    }
    /**
     * 创建敏感词
     * @param requestBody
     * @returns admin_v1_SensitiveWord OK
     * @throws ApiError
     */
    public static adminReportCreateSensitiveWord(
        requestBody: admin_v1_CreateSensitiveWordRequest,
    ): CancelablePromise<admin_v1_SensitiveWord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sensitive-words',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 导出敏感词
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminReportExportSensitiveWords(
        requestBody: admin_v1_ExportSensitiveWordsRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sensitive-words/export',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 批量导入敏感词
     * @param requestBody
     * @returns admin_v1_ImportSensitiveWordsResponse OK
     * @throws ApiError
     */
    public static adminReportImportSensitiveWords(
        requestBody: admin_v1_ImportSensitiveWordsRequest,
    ): CancelablePromise<admin_v1_ImportSensitiveWordsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/sensitive-words/import',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新敏感词
     * @param id
     * @param requestBody
     * @returns admin_v1_SensitiveWord OK
     * @throws ApiError
     */
    public static adminReportUpdateSensitiveWord(
        id: string,
        requestBody: admin_v1_UpdateSensitiveWordRequest,
    ): CancelablePromise<admin_v1_SensitiveWord> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/sensitive-words/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除敏感词
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminReportDeleteSensitiveWord(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/sensitive-words/{id}',
            path: {
                'id': id,
            },
        });
    }
}
