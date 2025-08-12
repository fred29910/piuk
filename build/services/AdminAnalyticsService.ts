/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_ContentGrowthStats } from '../models/admin_v1_ContentGrowthStats';
import type { admin_v1_ContentInteractionStats } from '../models/admin_v1_ContentInteractionStats';
import type { admin_v1_ContentQualityStats } from '../models/admin_v1_ContentQualityStats';
import type { admin_v1_CreateCustomReportRequest } from '../models/admin_v1_CreateCustomReportRequest';
import type { admin_v1_CustomReport } from '../models/admin_v1_CustomReport';
import type { admin_v1_CustomReportResult } from '../models/admin_v1_CustomReportResult';
import type { admin_v1_ExecuteCustomReportRequest } from '../models/admin_v1_ExecuteCustomReportRequest';
import type { admin_v1_ExportContentDataRequest } from '../models/admin_v1_ExportContentDataRequest';
import type { admin_v1_ExportRevenueDataRequest } from '../models/admin_v1_ExportRevenueDataRequest';
import type { admin_v1_ExportTask } from '../models/admin_v1_ExportTask';
import type { admin_v1_ExportTrafficDataRequest } from '../models/admin_v1_ExportTrafficDataRequest';
import type { admin_v1_ExportUserDataRequest } from '../models/admin_v1_ExportUserDataRequest';
import type { admin_v1_GetCustomReportsResponse } from '../models/admin_v1_GetCustomReportsResponse';
import type { admin_v1_HotContentStats } from '../models/admin_v1_HotContentStats';
import type { admin_v1_PageViewStats } from '../models/admin_v1_PageViewStats';
import type { admin_v1_PayingUserStats } from '../models/admin_v1_PayingUserStats';
import type { admin_v1_ProductSalesStats } from '../models/admin_v1_ProductSalesStats';
import type { admin_v1_RealtimeContentPublish } from '../models/admin_v1_RealtimeContentPublish';
import type { admin_v1_RealtimeInteraction } from '../models/admin_v1_RealtimeInteraction';
import type { admin_v1_RealtimeOnlineUsers } from '../models/admin_v1_RealtimeOnlineUsers';
import type { admin_v1_RealtimeTraffic } from '../models/admin_v1_RealtimeTraffic';
import type { admin_v1_RevenueOverview } from '../models/admin_v1_RevenueOverview';
import type { admin_v1_RevenueTrend } from '../models/admin_v1_RevenueTrend';
import type { admin_v1_TrafficOverview } from '../models/admin_v1_TrafficOverview';
import type { admin_v1_TrafficSourceStats } from '../models/admin_v1_TrafficSourceStats';
import type { admin_v1_UpdateCustomReportRequest } from '../models/admin_v1_UpdateCustomReportRequest';
import type { admin_v1_UserActivityStats } from '../models/admin_v1_UserActivityStats';
import type { admin_v1_UserBehaviorPath } from '../models/admin_v1_UserBehaviorPath';
import type { admin_v1_UserDistributionStats } from '../models/admin_v1_UserDistributionStats';
import type { admin_v1_UserGrowthStats } from '../models/admin_v1_UserGrowthStats';
import type { admin_v1_UserRetentionStats } from '../models/admin_v1_UserRetentionStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminAnalyticsService {
    /**
     * 内容分析
     * 获取内容增长统计
     * @param startDate
     * @param endDate
     * @param period
     * @param contentType
     * @returns admin_v1_ContentGrowthStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetContentGrowthStats(
        startDate?: string,
        endDate?: string,
        period?: string,
        contentType?: string,
    ): CancelablePromise<admin_v1_ContentGrowthStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/content/growth',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
                'contentType': contentType,
            },
        });
    }
    /**
     * 获取热门内容统计
     * @param startDate
     * @param endDate
     * @param contentType
     * @param metric
     * @param limit
     * @returns admin_v1_HotContentStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetHotContentStats(
        startDate?: string,
        endDate?: string,
        contentType?: string,
        metric?: string,
        limit?: number,
    ): CancelablePromise<admin_v1_HotContentStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/content/hot',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'contentType': contentType,
                'metric': metric,
                'limit': limit,
            },
        });
    }
    /**
     * 获取内容互动统计
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_ContentInteractionStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetContentInteractionStats(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_ContentInteractionStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/content/interaction',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取内容质量统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_ContentQualityStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetContentQualityStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ContentQualityStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/content/quality',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 导出内容数据
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminAnalyticsExportContentData(
        requestBody: admin_v1_ExportContentDataRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/analytics/export/content',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 下载导出文件
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminAnalyticsDownloadExportFile(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/export/download/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 导出收入数据
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminAnalyticsExportRevenueData(
        requestBody: admin_v1_ExportRevenueDataRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/analytics/export/revenue',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取导出任务状态
     * @param id
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminAnalyticsGetExportTask(
        id: string,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/export/tasks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 导出流量数据
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminAnalyticsExportTrafficData(
        requestBody: admin_v1_ExportTrafficDataRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/analytics/export/traffic',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 导出数据
     * 导出用户数据
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminAnalyticsExportUserData(
        requestBody: admin_v1_ExportUserDataRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/analytics/export/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取实时内容发布
     * @param duration
     * @returns admin_v1_RealtimeContentPublish OK
     * @throws ApiError
     */
    public static adminAnalyticsGetRealtimeContentPublish(
        duration?: number,
    ): CancelablePromise<admin_v1_RealtimeContentPublish> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/realtime/content-publish',
            query: {
                'duration': duration,
            },
        });
    }
    /**
     * 获取实时互动数据
     * @param duration
     * @returns admin_v1_RealtimeInteraction OK
     * @throws ApiError
     */
    public static adminAnalyticsGetRealtimeInteraction(
        duration?: number,
    ): CancelablePromise<admin_v1_RealtimeInteraction> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/realtime/interaction',
            query: {
                'duration': duration,
            },
        });
    }
    /**
     * 实时数据
     * 获取实时在线用户
     * @param duration
     * @returns admin_v1_RealtimeOnlineUsers OK
     * @throws ApiError
     */
    public static adminAnalyticsGetRealtimeOnlineUsers(
        duration?: number,
    ): CancelablePromise<admin_v1_RealtimeOnlineUsers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/realtime/online-users',
            query: {
                'duration': duration,
            },
        });
    }
    /**
     * 获取实时流量数据
     * @param duration
     * @returns admin_v1_RealtimeTraffic OK
     * @throws ApiError
     */
    public static adminAnalyticsGetRealtimeTraffic(
        duration?: number,
    ): CancelablePromise<admin_v1_RealtimeTraffic> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/realtime/traffic',
            query: {
                'duration': duration,
            },
        });
    }
    /**
     * 获取自定义报表列表
     * @param page
     * @param pageSize
     * @param keyword
     * @returns admin_v1_GetCustomReportsResponse OK
     * @throws ApiError
     */
    public static adminAnalyticsGetCustomReports(
        page?: number,
        pageSize?: number,
        keyword?: string,
    ): CancelablePromise<admin_v1_GetCustomReportsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/reports',
            query: {
                'page': page,
                'pageSize': pageSize,
                'keyword': keyword,
            },
        });
    }
    /**
     * 自定义报表
     * 创建自定义报表
     * @param requestBody
     * @returns admin_v1_CustomReport OK
     * @throws ApiError
     */
    public static adminAnalyticsCreateCustomReport(
        requestBody: admin_v1_CreateCustomReportRequest,
    ): CancelablePromise<admin_v1_CustomReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/analytics/reports',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取自定义报表详情
     * @param id
     * @returns admin_v1_CustomReport OK
     * @throws ApiError
     */
    public static adminAnalyticsGetCustomReport(
        id: string,
    ): CancelablePromise<admin_v1_CustomReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/reports/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新自定义报表
     * @param id
     * @param requestBody
     * @returns admin_v1_CustomReport OK
     * @throws ApiError
     */
    public static adminAnalyticsUpdateCustomReport(
        id: string,
        requestBody: admin_v1_UpdateCustomReportRequest,
    ): CancelablePromise<admin_v1_CustomReport> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/analytics/reports/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除自定义报表
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminAnalyticsDeleteCustomReport(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/analytics/reports/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 执行自定义报表
     * @param id
     * @param requestBody
     * @returns admin_v1_CustomReportResult OK
     * @throws ApiError
     */
    public static adminAnalyticsExecuteCustomReport(
        id: string,
        requestBody: admin_v1_ExecuteCustomReportRequest,
    ): CancelablePromise<admin_v1_CustomReportResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/analytics/reports/{id}/execute',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 商业分析
     * 获取收入概览
     * @param startDate
     * @param endDate
     * @returns admin_v1_RevenueOverview OK
     * @throws ApiError
     */
    public static adminAnalyticsGetRevenueOverview(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_RevenueOverview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/revenue/overview',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取付费用户统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_PayingUserStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetPayingUserStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_PayingUserStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/revenue/paying-users',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取商品销售统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_ProductSalesStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetProductSalesStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ProductSalesStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/revenue/product-sales',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取收入趋势
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_RevenueTrend OK
     * @throws ApiError
     */
    public static adminAnalyticsGetRevenueTrend(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_RevenueTrend> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/revenue/trend',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取用户行为路径
     * @param startDate
     * @param endDate
     * @returns admin_v1_UserBehaviorPath OK
     * @throws ApiError
     */
    public static adminAnalyticsGetUserBehaviorPath(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_UserBehaviorPath> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/traffic/behavior-path',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 流量分析
     * 获取流量概览
     * @param startDate
     * @param endDate
     * @returns admin_v1_TrafficOverview OK
     * @throws ApiError
     */
    public static adminAnalyticsGetTrafficOverview(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_TrafficOverview> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/traffic/overview',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取页面访问统计
     * @param startDate
     * @param endDate
     * @param page
     * @returns admin_v1_PageViewStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetPageViewStats(
        startDate?: string,
        endDate?: string,
        page?: string,
    ): CancelablePromise<admin_v1_PageViewStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/traffic/pages',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'page': page,
            },
        });
    }
    /**
     * 获取流量来源统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_TrafficSourceStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetTrafficSourceStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_TrafficSourceStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/traffic/sources',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取用户活跃度统计
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_UserActivityStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetUserActivityStats(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_UserActivityStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/users/activity',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取用户分布统计
     * @param dimension
     * @returns admin_v1_UserDistributionStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetUserDistributionStats(
        dimension?: string,
    ): CancelablePromise<admin_v1_UserDistributionStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/users/distribution',
            query: {
                'dimension': dimension,
            },
        });
    }
    /**
     * 用户分析
     * 获取用户增长统计
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_UserGrowthStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetUserGrowthStats(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_UserGrowthStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/users/growth',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取用户留存率统计
     * @param startDate
     * @param endDate
     * @param days
     * @returns admin_v1_UserRetentionStats OK
     * @throws ApiError
     */
    public static adminAnalyticsGetUserRetentionStats(
        startDate?: string,
        endDate?: string,
        days?: number,
    ): CancelablePromise<admin_v1_UserRetentionStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/analytics/users/retention',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'days': days,
            },
        });
    }
}
