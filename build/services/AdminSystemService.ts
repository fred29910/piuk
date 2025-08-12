/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_Backup } from '../models/admin_v1_Backup';
import type { admin_v1_BackupTask } from '../models/admin_v1_BackupTask';
import type { admin_v1_CacheStats } from '../models/admin_v1_CacheStats';
import type { admin_v1_CacheStatus } from '../models/admin_v1_CacheStatus';
import type { admin_v1_CleanLogsRequest } from '../models/admin_v1_CleanLogsRequest';
import type { admin_v1_ClearCacheRequest } from '../models/admin_v1_ClearCacheRequest';
import type { admin_v1_ConfigItem } from '../models/admin_v1_ConfigItem';
import type { admin_v1_CreateBackupRequest } from '../models/admin_v1_CreateBackupRequest';
import type { admin_v1_DatabaseStatus } from '../models/admin_v1_DatabaseStatus';
import type { admin_v1_DatabaseTableDetail } from '../models/admin_v1_DatabaseTableDetail';
import type { admin_v1_DatabaseTables } from '../models/admin_v1_DatabaseTables';
import type { admin_v1_EnterMaintenanceModeRequest } from '../models/admin_v1_EnterMaintenanceModeRequest';
import type { admin_v1_ExecuteDatabaseQueryRequest } from '../models/admin_v1_ExecuteDatabaseQueryRequest';
import type { admin_v1_ExecuteScheduledTaskRequest } from '../models/admin_v1_ExecuteScheduledTaskRequest';
import type { admin_v1_GetAccessLogsResponse } from '../models/admin_v1_GetAccessLogsResponse';
import type { admin_v1_GetAllServiceHealthResponse } from '../models/admin_v1_GetAllServiceHealthResponse';
import type { admin_v1_GetBackupsResponse } from '../models/admin_v1_GetBackupsResponse';
import type { admin_v1_GetConfigItemsResponse } from '../models/admin_v1_GetConfigItemsResponse';
import type { admin_v1_GetErrorLogsResponse } from '../models/admin_v1_GetErrorLogsResponse';
import type { admin_v1_GetScheduledTasksResponse } from '../models/admin_v1_GetScheduledTasksResponse';
import type { admin_v1_GetSystemLogsResponse } from '../models/admin_v1_GetSystemLogsResponse';
import type { admin_v1_GetSystemNotificationsResponse } from '../models/admin_v1_GetSystemNotificationsResponse';
import type { admin_v1_GetSystemSettingsResponse } from '../models/admin_v1_GetSystemSettingsResponse';
import type { admin_v1_GetTaskHistoryResponse } from '../models/admin_v1_GetTaskHistoryResponse';
import type { admin_v1_MaintenanceModeStatus } from '../models/admin_v1_MaintenanceModeStatus';
import type { admin_v1_OptimizeDatabaseRequest } from '../models/admin_v1_OptimizeDatabaseRequest';
import type { admin_v1_QueryResult } from '../models/admin_v1_QueryResult';
import type { admin_v1_QueueStatus } from '../models/admin_v1_QueueStatus';
import type { admin_v1_RepairDatabaseRequest } from '../models/admin_v1_RepairDatabaseRequest';
import type { admin_v1_ResetSystemSettingsRequest } from '../models/admin_v1_ResetSystemSettingsRequest';
import type { admin_v1_RestoreBackupRequest } from '../models/admin_v1_RestoreBackupRequest';
import type { admin_v1_SendSystemNotificationRequest } from '../models/admin_v1_SendSystemNotificationRequest';
import type { admin_v1_ServiceHealth } from '../models/admin_v1_ServiceHealth';
import type { admin_v1_SystemConfig } from '../models/admin_v1_SystemConfig';
import type { admin_v1_SystemNotification } from '../models/admin_v1_SystemNotification';
import type { admin_v1_SystemResources } from '../models/admin_v1_SystemResources';
import type { admin_v1_SystemSettings } from '../models/admin_v1_SystemSettings';
import type { admin_v1_SystemStatus } from '../models/admin_v1_SystemStatus';
import type { admin_v1_TaskDetail } from '../models/admin_v1_TaskDetail';
import type { admin_v1_TaskResult } from '../models/admin_v1_TaskResult';
import type { admin_v1_UpdateConfigItemRequest } from '../models/admin_v1_UpdateConfigItemRequest';
import type { admin_v1_UpdateSystemConfigRequest } from '../models/admin_v1_UpdateSystemConfigRequest';
import type { admin_v1_UpdateSystemNotificationRequest } from '../models/admin_v1_UpdateSystemNotificationRequest';
import type { admin_v1_UpdateSystemSettingsRequest } from '../models/admin_v1_UpdateSystemSettingsRequest';
import type { admin_v1_WarmCacheRequest } from '../models/admin_v1_WarmCacheRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminSystemService {
    /**
     * 获取备份列表
     * @param type
     * @param page
     * @param pageSize
     * @returns admin_v1_GetBackupsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetBackups(
        type?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetBackupsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/backups',
            query: {
                'type': type,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 备份管理
     * 创建备份
     * @param requestBody
     * @returns admin_v1_BackupTask OK
     * @throws ApiError
     */
    public static adminSystemCreateBackup(
        requestBody: admin_v1_CreateBackupRequest,
    ): CancelablePromise<admin_v1_BackupTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/backups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 下载备份文件
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemDownloadBackup(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/backups/download/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取备份详情
     * @param id
     * @returns admin_v1_Backup OK
     * @throws ApiError
     */
    public static adminSystemGetBackup(
        id: string,
    ): CancelablePromise<admin_v1_Backup> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/backups/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 删除备份
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemDeleteBackup(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/system/backups/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 恢复备份
     * @param id
     * @param requestBody
     * @returns admin_v1_BackupTask OK
     * @throws ApiError
     */
    public static adminSystemRestoreBackup(
        id: string,
        requestBody: admin_v1_RestoreBackupRequest,
    ): CancelablePromise<admin_v1_BackupTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/backups/{id}/restore',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取缓存状态
     * @returns admin_v1_CacheStatus OK
     * @throws ApiError
     */
    public static adminSystemGetCacheStatus(): CancelablePromise<admin_v1_CacheStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/cache',
        });
    }
    /**
     * 缓存管理
     * 清理缓存
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemClearCache(
        requestBody: admin_v1_ClearCacheRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/cache/clear',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取缓存统计
     * @returns admin_v1_CacheStats OK
     * @throws ApiError
     */
    public static adminSystemGetCacheStats(): CancelablePromise<admin_v1_CacheStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/cache/stats',
        });
    }
    /**
     * 预热缓存
     * @param requestBody
     * @returns admin_v1_TaskResult OK
     * @throws ApiError
     */
    public static adminSystemWarmCache(
        requestBody: admin_v1_WarmCacheRequest,
    ): CancelablePromise<admin_v1_TaskResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/cache/warm',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 系统配置管理
     * 获取系统配置
     * @param category
     * @returns admin_v1_SystemConfig OK
     * @throws ApiError
     */
    public static adminSystemGetSystemConfig(
        category?: string,
    ): CancelablePromise<admin_v1_SystemConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/config',
            query: {
                'category': category,
            },
        });
    }
    /**
     * 更新系统配置
     * @param requestBody
     * @returns admin_v1_SystemConfig OK
     * @throws ApiError
     */
    public static adminSystemUpdateSystemConfig(
        requestBody: admin_v1_UpdateSystemConfigRequest,
    ): CancelablePromise<admin_v1_SystemConfig> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/system/config',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取配置项列表
     * @param category
     * @param page
     * @param pageSize
     * @returns admin_v1_GetConfigItemsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetConfigItems(
        category?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetConfigItemsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/config/items',
            query: {
                'category': category,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 更新配置项
     * @param key
     * @param requestBody
     * @returns admin_v1_ConfigItem OK
     * @throws ApiError
     */
    public static adminSystemUpdateConfigItem(
        key: string,
        requestBody: admin_v1_UpdateConfigItemRequest,
    ): CancelablePromise<admin_v1_ConfigItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/system/config/items/{key}',
            path: {
                'key': key,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取数据库状态
     * @returns admin_v1_DatabaseStatus OK
     * @throws ApiError
     */
    public static adminSystemGetDatabaseStatus(): CancelablePromise<admin_v1_DatabaseStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/database',
        });
    }
    /**
     * 优化数据库
     * @param requestBody
     * @returns admin_v1_TaskResult OK
     * @throws ApiError
     */
    public static adminSystemOptimizeDatabase(
        requestBody: admin_v1_OptimizeDatabaseRequest,
    ): CancelablePromise<admin_v1_TaskResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/database/optimize',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 数据库管理
     * 执行数据库查询
     * @param requestBody
     * @returns admin_v1_QueryResult OK
     * @throws ApiError
     */
    public static adminSystemExecuteDatabaseQuery(
        requestBody: admin_v1_ExecuteDatabaseQueryRequest,
    ): CancelablePromise<admin_v1_QueryResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/database/query',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 修复数据库
     * @param requestBody
     * @returns admin_v1_TaskResult OK
     * @throws ApiError
     */
    public static adminSystemRepairDatabase(
        requestBody: admin_v1_RepairDatabaseRequest,
    ): CancelablePromise<admin_v1_TaskResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/database/repair',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取数据库表信息
     * @returns admin_v1_DatabaseTables OK
     * @throws ApiError
     */
    public static adminSystemGetDatabaseTables(): CancelablePromise<admin_v1_DatabaseTables> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/database/tables',
        });
    }
    /**
     * 获取数据库表详情
     * @param table
     * @returns admin_v1_DatabaseTableDetail OK
     * @throws ApiError
     */
    public static adminSystemGetDatabaseTableDetail(
        table: string,
    ): CancelablePromise<admin_v1_DatabaseTableDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/database/tables/{table}',
            path: {
                'table': table,
            },
        });
    }
    /**
     * 获取所有服务健康状态
     * @returns admin_v1_GetAllServiceHealthResponse OK
     * @throws ApiError
     */
    public static adminSystemGetAllServiceHealth(): CancelablePromise<admin_v1_GetAllServiceHealthResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/health',
        });
    }
    /**
     * 获取服务健康状态
     * @param service
     * @returns admin_v1_ServiceHealth OK
     * @throws ApiError
     */
    public static adminSystemGetServiceHealth(
        service: string,
    ): CancelablePromise<admin_v1_ServiceHealth> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/health/{service}',
            path: {
                'service': service,
            },
        });
    }
    /**
     * 日志管理
     * 获取系统日志
     * @param level
     * @param service
     * @param startTime
     * @param endTime
     * @param page
     * @param pageSize
     * @returns admin_v1_GetSystemLogsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetSystemLogs(
        level?: string,
        service?: string,
        startTime?: string,
        endTime?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetSystemLogsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/logs',
            query: {
                'level': level,
                'service': service,
                'startTime': startTime,
                'endTime': endTime,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 获取访问日志
     * @param userId
     * @param ip
     * @param startTime
     * @param endTime
     * @param page
     * @param pageSize
     * @returns admin_v1_GetAccessLogsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetAccessLogs(
        userId?: string,
        ip?: string,
        startTime?: string,
        endTime?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetAccessLogsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/logs/access',
            query: {
                'userId': userId,
                'ip': ip,
                'startTime': startTime,
                'endTime': endTime,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 清理日志
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemCleanLogs(
        requestBody: admin_v1_CleanLogsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/logs/clean',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 下载日志文件
     * @param filename
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemDownloadLogFile(
        filename: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/logs/download/{filename}',
            path: {
                'filename': filename,
            },
        });
    }
    /**
     * 获取错误日志
     * @param service
     * @param startTime
     * @param endTime
     * @param page
     * @param pageSize
     * @returns admin_v1_GetErrorLogsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetErrorLogs(
        service?: string,
        startTime?: string,
        endTime?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetErrorLogsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/logs/errors',
            query: {
                'service': service,
                'startTime': startTime,
                'endTime': endTime,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 获取维护模式状态
     * @returns admin_v1_MaintenanceModeStatus OK
     * @throws ApiError
     */
    public static adminSystemGetMaintenanceModeStatus(): CancelablePromise<admin_v1_MaintenanceModeStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/maintenance',
        });
    }
    /**
     * 系统维护
     * 进入维护模式
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemEnterMaintenanceMode(
        requestBody: admin_v1_EnterMaintenanceModeRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/maintenance/enter',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 退出维护模式
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemExitMaintenanceMode(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/maintenance/exit',
        });
    }
    /**
     * 获取系统通知列表
     * @param page
     * @param pageSize
     * @param type
     * @param target
     * @returns admin_v1_GetSystemNotificationsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetSystemNotifications(
        page?: number,
        pageSize?: number,
        type?: string,
        target?: string,
    ): CancelablePromise<admin_v1_GetSystemNotificationsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/notifications',
            query: {
                'page': page,
                'pageSize': pageSize,
                'type': type,
                'target': target,
            },
        });
    }
    /**
     * 系统通知
     * 发送系统通知
     * @param requestBody
     * @returns admin_v1_SystemNotification OK
     * @throws ApiError
     */
    public static adminSystemSendSystemNotification(
        requestBody: admin_v1_SendSystemNotificationRequest,
    ): CancelablePromise<admin_v1_SystemNotification> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取系统通知详情
     * @param id
     * @returns admin_v1_SystemNotification OK
     * @throws ApiError
     */
    public static adminSystemGetSystemNotification(
        id: string,
    ): CancelablePromise<admin_v1_SystemNotification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/notifications/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 更新系统通知
     * @param id
     * @param requestBody
     * @returns admin_v1_SystemNotification OK
     * @throws ApiError
     */
    public static adminSystemUpdateSystemNotification(
        id: string,
        requestBody: admin_v1_UpdateSystemNotificationRequest,
    ): CancelablePromise<admin_v1_SystemNotification> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/system/notifications/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除系统通知
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemDeleteSystemNotification(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/system/notifications/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 获取消息队列状态
     * @returns admin_v1_QueueStatus OK
     * @throws ApiError
     */
    public static adminSystemGetQueueStatus(): CancelablePromise<admin_v1_QueueStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/queue',
        });
    }
    /**
     * 获取系统资源使用情况
     * @returns admin_v1_SystemResources OK
     * @throws ApiError
     */
    public static adminSystemGetSystemResources(): CancelablePromise<admin_v1_SystemResources> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/resources',
        });
    }
    /**
     * 系统设置
     * 获取系统设置
     * @param category
     * @returns admin_v1_GetSystemSettingsResponse OK
     * @throws ApiError
     */
    public static adminSystemGetSystemSettings(
        category?: string,
    ): CancelablePromise<admin_v1_GetSystemSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/settings',
            query: {
                'category': category,
            },
        });
    }
    /**
     * 更新系统设置
     * @param requestBody
     * @returns admin_v1_SystemSettings OK
     * @throws ApiError
     */
    public static adminSystemUpdateSystemSettings(
        requestBody: admin_v1_UpdateSystemSettingsRequest,
    ): CancelablePromise<admin_v1_SystemSettings> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/system/settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 重置系统设置
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemResetSystemSettings(
        requestBody: admin_v1_ResetSystemSettingsRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/settings/reset',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 系统监控
     * 获取系统状态
     * @returns admin_v1_SystemStatus OK
     * @throws ApiError
     */
    public static adminSystemGetSystemStatus(): CancelablePromise<admin_v1_SystemStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/status',
        });
    }
    /**
     * 获取任务执行历史
     * @param taskName
     * @param startTime
     * @param endTime
     * @param page
     * @param pageSize
     * @returns admin_v1_GetTaskHistoryResponse OK
     * @throws ApiError
     */
    public static adminSystemGetTaskHistory(
        taskName?: string,
        startTime?: string,
        endTime?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetTaskHistoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/tasks/history',
            query: {
                'taskName': taskName,
                'startTime': startTime,
                'endTime': endTime,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 任务管理
     * 获取定时任务列表
     * @param status
     * @param page
     * @param pageSize
     * @returns admin_v1_GetScheduledTasksResponse OK
     * @throws ApiError
     */
    public static adminSystemGetScheduledTasks(
        status?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<admin_v1_GetScheduledTasksResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/tasks/scheduled',
            query: {
                'status': status,
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * 执行定时任务
     * @param id
     * @param requestBody
     * @returns admin_v1_TaskResult OK
     * @throws ApiError
     */
    public static adminSystemExecuteScheduledTask(
        id: string,
        requestBody: admin_v1_ExecuteScheduledTaskRequest,
    ): CancelablePromise<admin_v1_TaskResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/tasks/scheduled/{id}/execute',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取任务详情
     * @param id
     * @returns admin_v1_TaskDetail OK
     * @throws ApiError
     */
    public static adminSystemGetTaskDetail(
        id: string,
    ): CancelablePromise<admin_v1_TaskDetail> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/system/tasks/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 取消任务
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminSystemCancelTask(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/system/tasks/{id}/cancel',
            path: {
                'id': id,
            },
        });
    }
}
