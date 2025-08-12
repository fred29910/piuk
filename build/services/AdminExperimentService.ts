/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_CalculateExperimentSignificanceRequest } from '../models/admin_v1_CalculateExperimentSignificanceRequest';
import type { admin_v1_CreateExperimentMetricRequest } from '../models/admin_v1_CreateExperimentMetricRequest';
import type { admin_v1_CreateExperimentRequest } from '../models/admin_v1_CreateExperimentRequest';
import type { admin_v1_CreateExperimentVariantRequest } from '../models/admin_v1_CreateExperimentVariantRequest';
import type { admin_v1_Experiment } from '../models/admin_v1_Experiment';
import type { admin_v1_ExperimentMetric } from '../models/admin_v1_ExperimentMetric';
import type { admin_v1_ExperimentReport } from '../models/admin_v1_ExperimentReport';
import type { admin_v1_ExperimentResults } from '../models/admin_v1_ExperimentResults';
import type { admin_v1_ExperimentSignificanceResult } from '../models/admin_v1_ExperimentSignificanceResult';
import type { admin_v1_ExperimentStatistics } from '../models/admin_v1_ExperimentStatistics';
import type { admin_v1_ExperimentVariant } from '../models/admin_v1_ExperimentVariant';
import type { admin_v1_ExportExperimentDataRequest } from '../models/admin_v1_ExportExperimentDataRequest';
import type { admin_v1_ExportTask } from '../models/admin_v1_ExportTask';
import type { admin_v1_GenerateExperimentReportRequest } from '../models/admin_v1_GenerateExperimentReportRequest';
import type { admin_v1_GetExperimentDataResponse } from '../models/admin_v1_GetExperimentDataResponse';
import type { admin_v1_GetExperimentMetricsResponse } from '../models/admin_v1_GetExperimentMetricsResponse';
import type { admin_v1_GetExperimentsResponse } from '../models/admin_v1_GetExperimentsResponse';
import type { admin_v1_GetExperimentVariantsResponse } from '../models/admin_v1_GetExperimentVariantsResponse';
import type { admin_v1_PauseExperimentRequest } from '../models/admin_v1_PauseExperimentRequest';
import type { admin_v1_StartExperimentRequest } from '../models/admin_v1_StartExperimentRequest';
import type { admin_v1_StopExperimentRequest } from '../models/admin_v1_StopExperimentRequest';
import type { admin_v1_UpdateExperimentMetricRequest } from '../models/admin_v1_UpdateExperimentMetricRequest';
import type { admin_v1_UpdateExperimentRequest } from '../models/admin_v1_UpdateExperimentRequest';
import type { admin_v1_UpdateExperimentVariantRequest } from '../models/admin_v1_UpdateExperimentVariantRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminExperimentService {
    /**
     * A/B测试管理
     * 获取实验列表
     * @param page
     * @param pageSize
     * @param status
     * @param type
     * @param keyword
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetExperimentsResponse OK
     * @throws ApiError
     */
    public static adminExperimentGetExperiments(
        page?: number,
        pageSize?: number,
        status?: string,
        type?: string,
        keyword?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetExperimentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'type': type,
                'keyword': keyword,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 创建实验
     * @param requestBody
     * @returns admin_v1_Experiment OK
     * @throws ApiError
     */
    public static adminExperimentCreateExperiment(
        requestBody: admin_v1_CreateExperimentRequest,
    ): CancelablePromise<admin_v1_Experiment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新实验指标
     * @param experimentId
     * @param metricId
     * @param requestBody
     * @returns admin_v1_ExperimentMetric OK
     * @throws ApiError
     */
    public static adminExperimentUpdateExperimentMetric(
        experimentId: string,
        metricId: string,
        requestBody: admin_v1_UpdateExperimentMetricRequest,
    ): CancelablePromise<admin_v1_ExperimentMetric> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/experiments/{experimentId}/metrics/{metricId}',
            path: {
                'experimentId': experimentId,
                'metricId': metricId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除实验指标
     * @param experimentId
     * @param metricId
     * @returns any OK
     * @throws ApiError
     */
    public static adminExperimentDeleteExperimentMetric(
        experimentId: string,
        metricId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/experiments/{experimentId}/metrics/{metricId}',
            path: {
                'experimentId': experimentId,
                'metricId': metricId,
            },
        });
    }
    /**
     * 更新实验变体
     * @param experimentId
     * @param variantId
     * @param requestBody
     * @returns admin_v1_ExperimentVariant OK
     * @throws ApiError
     */
    public static adminExperimentUpdateExperimentVariant(
        experimentId: string,
        variantId: string,
        requestBody: admin_v1_UpdateExperimentVariantRequest,
    ): CancelablePromise<admin_v1_ExperimentVariant> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/experiments/{experimentId}/variants/{variantId}',
            path: {
                'experimentId': experimentId,
                'variantId': variantId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除实验变体
     * @param experimentId
     * @param variantId
     * @returns any OK
     * @throws ApiError
     */
    public static adminExperimentDeleteExperimentVariant(
        experimentId: string,
        variantId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/experiments/{experimentId}/variants/{variantId}',
            path: {
                'experimentId': experimentId,
                'variantId': variantId,
            },
        });
    }
    /**
     * 获取实验详情
     * @param id
     * @returns admin_v1_Experiment OK
     * @throws ApiError
     */
    public static adminExperimentGetExperiment(
        id: string,
    ): CancelablePromise<admin_v1_Experiment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新实验
     * @param id
     * @param requestBody
     * @returns admin_v1_Experiment OK
     * @throws ApiError
     */
    public static adminExperimentUpdateExperiment(
        id: string,
        requestBody: admin_v1_UpdateExperimentRequest,
    ): CancelablePromise<admin_v1_Experiment> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/experiments/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除实验
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminExperimentDeleteExperiment(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/experiments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 计算实验显著性
     * @param id
     * @param requestBody
     * @returns admin_v1_ExperimentSignificanceResult OK
     * @throws ApiError
     */
    public static adminExperimentCalculateExperimentSignificance(
        id: string,
        requestBody: admin_v1_CalculateExperimentSignificanceRequest,
    ): CancelablePromise<admin_v1_ExperimentSignificanceResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/calculate-significance',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 实验数据收集
     * 获取实验数据
     * @param id
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetExperimentDataResponse OK
     * @throws ApiError
     */
    public static adminExperimentGetExperimentData(
        id: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetExperimentDataResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}/data',
            path: {
                'id': id,
            },
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 导出实验数据
     * @param id
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminExperimentExportExperimentData(
        id: string,
        requestBody: admin_v1_ExportExperimentDataRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/export',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 实验指标管理
     * 获取实验指标
     * @param id
     * @returns admin_v1_GetExperimentMetricsResponse OK
     * @throws ApiError
     */
    public static adminExperimentGetExperimentMetrics(
        id: string,
    ): CancelablePromise<admin_v1_GetExperimentMetricsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}/metrics',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 创建实验指标
     * @param id
     * @param requestBody
     * @returns admin_v1_ExperimentMetric OK
     * @throws ApiError
     */
    public static adminExperimentCreateExperimentMetric(
        id: string,
        requestBody: admin_v1_CreateExperimentMetricRequest,
    ): CancelablePromise<admin_v1_ExperimentMetric> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/metrics',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 暂停实验
     * @param id
     * @param requestBody
     * @returns admin_v1_Experiment OK
     * @throws ApiError
     */
    public static adminExperimentPauseExperiment(
        id: string,
        requestBody: admin_v1_PauseExperimentRequest,
    ): CancelablePromise<admin_v1_Experiment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/pause',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取实验报告
     * @param id
     * @returns admin_v1_ExperimentReport OK
     * @throws ApiError
     */
    public static adminExperimentGetExperimentReport(
        id: string,
    ): CancelablePromise<admin_v1_ExperimentReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}/report',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 实验报告
     * 生成实验报告
     * @param id
     * @param requestBody
     * @returns admin_v1_ExperimentReport OK
     * @throws ApiError
     */
    public static adminExperimentGenerateExperimentReport(
        id: string,
        requestBody: admin_v1_GenerateExperimentReportRequest,
    ): CancelablePromise<admin_v1_ExperimentReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/report',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取实验结果
     * @param id
     * @param metric
     * @returns admin_v1_ExperimentResults OK
     * @throws ApiError
     */
    public static adminExperimentGetExperimentResults(
        id: string,
        metric?: string,
    ): CancelablePromise<admin_v1_ExperimentResults> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}/results',
            path: {
                'id': id,
            },
            query: {
                'metric': metric,
            },
        });
    }
    /**
     * 启动实验
     * @param id
     * @param requestBody
     * @returns admin_v1_Experiment OK
     * @throws ApiError
     */
    public static adminExperimentStartExperiment(
        id: string,
        requestBody: admin_v1_StartExperimentRequest,
    ): CancelablePromise<admin_v1_Experiment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/start',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 实验统计分析
     * 获取实验统计
     * @param id
     * @returns admin_v1_ExperimentStatistics OK
     * @throws ApiError
     */
    public static adminExperimentGetExperimentStatistics(
        id: string,
    ): CancelablePromise<admin_v1_ExperimentStatistics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}/statistics',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 停止实验
     * @param id
     * @param requestBody
     * @returns admin_v1_Experiment OK
     * @throws ApiError
     */
    public static adminExperimentStopExperiment(
        id: string,
        requestBody: admin_v1_StopExperimentRequest,
    ): CancelablePromise<admin_v1_Experiment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/stop',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 实验变体管理
     * 获取实验变体
     * @param id
     * @returns admin_v1_GetExperimentVariantsResponse OK
     * @throws ApiError
     */
    public static adminExperimentGetExperimentVariants(
        id: string,
    ): CancelablePromise<admin_v1_GetExperimentVariantsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/experiments/{id}/variants',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 创建实验变体
     * @param id
     * @param requestBody
     * @returns admin_v1_ExperimentVariant OK
     * @throws ApiError
     */
    public static adminExperimentCreateExperimentVariant(
        id: string,
        requestBody: admin_v1_CreateExperimentVariantRequest,
    ): CancelablePromise<admin_v1_ExperimentVariant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/experiments/{id}/variants',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
