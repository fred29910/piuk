/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_AdjustUserBalanceRequest } from '../models/admin_v1_AdjustUserBalanceRequest';
import type { admin_v1_AuditLog } from '../models/admin_v1_AuditLog';
import type { admin_v1_BatchRefundOrdersRequest } from '../models/admin_v1_BatchRefundOrdersRequest';
import type { admin_v1_BatchRefundOrdersResponse } from '../models/admin_v1_BatchRefundOrdersResponse';
import type { admin_v1_BatchReviewWithdrawalsRequest } from '../models/admin_v1_BatchReviewWithdrawalsRequest';
import type { admin_v1_BatchReviewWithdrawalsResponse } from '../models/admin_v1_BatchReviewWithdrawalsResponse';
import type { admin_v1_CancelOrderRequest } from '../models/admin_v1_CancelOrderRequest';
import type { admin_v1_CashFlowReport } from '../models/admin_v1_CashFlowReport';
import type { admin_v1_ConfirmPaymentRequest } from '../models/admin_v1_ConfirmPaymentRequest';
import type { admin_v1_Coupon } from '../models/admin_v1_Coupon';
import type { admin_v1_CouponStats } from '../models/admin_v1_CouponStats';
import type { admin_v1_CreateAuditLogRequest } from '../models/admin_v1_CreateAuditLogRequest';
import type { admin_v1_CreateCouponRequest } from '../models/admin_v1_CreateCouponRequest';
import type { admin_v1_CreateMembershipPlanRequest } from '../models/admin_v1_CreateMembershipPlanRequest';
import type { admin_v1_CreatePaymentChannelRequest } from '../models/admin_v1_CreatePaymentChannelRequest';
import type { admin_v1_CreateSettlementRequest } from '../models/admin_v1_CreateSettlementRequest';
import type { admin_v1_DistributeCouponRequest } from '../models/admin_v1_DistributeCouponRequest';
import type { admin_v1_DistributeCouponResponse } from '../models/admin_v1_DistributeCouponResponse';
import type { admin_v1_ExpenseReport } from '../models/admin_v1_ExpenseReport';
import type { admin_v1_ExportFinancialReportRequest } from '../models/admin_v1_ExportFinancialReportRequest';
import type { admin_v1_ExportTask } from '../models/admin_v1_ExportTask';
import type { admin_v1_FreezeUserBalanceRequest } from '../models/admin_v1_FreezeUserBalanceRequest';
import type { admin_v1_GetAuditLogsResponse } from '../models/admin_v1_GetAuditLogsResponse';
import type { admin_v1_GetCouponsResponse } from '../models/admin_v1_GetCouponsResponse';
import type { admin_v1_GetMembershipPlansResponse } from '../models/admin_v1_GetMembershipPlansResponse';
import type { admin_v1_GetOrdersResponse } from '../models/admin_v1_GetOrdersResponse';
import type { admin_v1_GetPaymentChannelsResponse } from '../models/admin_v1_GetPaymentChannelsResponse';
import type { admin_v1_GetPaymentsResponse } from '../models/admin_v1_GetPaymentsResponse';
import type { admin_v1_GetRiskTransactionsResponse } from '../models/admin_v1_GetRiskTransactionsResponse';
import type { admin_v1_GetSettlementsResponse } from '../models/admin_v1_GetSettlementsResponse';
import type { admin_v1_GetUserWalletsResponse } from '../models/admin_v1_GetUserWalletsResponse';
import type { admin_v1_GetWalletTransactionsResponse } from '../models/admin_v1_GetWalletTransactionsResponse';
import type { admin_v1_GetWithdrawalsResponse } from '../models/admin_v1_GetWithdrawalsResponse';
import type { admin_v1_MarkRiskTransactionRequest } from '../models/admin_v1_MarkRiskTransactionRequest';
import type { admin_v1_MembershipPlan } from '../models/admin_v1_MembershipPlan';
import type { admin_v1_MembershipStats } from '../models/admin_v1_MembershipStats';
import type { admin_v1_Order } from '../models/admin_v1_Order';
import type { admin_v1_OrderStats } from '../models/admin_v1_OrderStats';
import type { admin_v1_OrderTrend } from '../models/admin_v1_OrderTrend';
import type { admin_v1_Payment } from '../models/admin_v1_Payment';
import type { admin_v1_PaymentChannel } from '../models/admin_v1_PaymentChannel';
import type { admin_v1_PaymentStats } from '../models/admin_v1_PaymentStats';
import type { admin_v1_ProcessRiskTransactionRequest } from '../models/admin_v1_ProcessRiskTransactionRequest';
import type { admin_v1_ProcessSettlementRequest } from '../models/admin_v1_ProcessSettlementRequest';
import type { admin_v1_ProcessWithdrawalRequest } from '../models/admin_v1_ProcessWithdrawalRequest';
import type { admin_v1_ProfitReport } from '../models/admin_v1_ProfitReport';
import type { admin_v1_RefundOrderRequest } from '../models/admin_v1_RefundOrderRequest';
import type { admin_v1_RejectPaymentRequest } from '../models/admin_v1_RejectPaymentRequest';
import type { admin_v1_RevenueReport } from '../models/admin_v1_RevenueReport';
import type { admin_v1_ReviewWithdrawalRequest } from '../models/admin_v1_ReviewWithdrawalRequest';
import type { admin_v1_RiskTransaction } from '../models/admin_v1_RiskTransaction';
import type { admin_v1_Settlement } from '../models/admin_v1_Settlement';
import type { admin_v1_SettlementStats } from '../models/admin_v1_SettlementStats';
import type { admin_v1_TogglePaymentChannelRequest } from '../models/admin_v1_TogglePaymentChannelRequest';
import type { admin_v1_UnfreezeUserBalanceRequest } from '../models/admin_v1_UnfreezeUserBalanceRequest';
import type { admin_v1_UpdateCouponRequest } from '../models/admin_v1_UpdateCouponRequest';
import type { admin_v1_UpdateMembershipPlanRequest } from '../models/admin_v1_UpdateMembershipPlanRequest';
import type { admin_v1_UpdateOrderStatusRequest } from '../models/admin_v1_UpdateOrderStatusRequest';
import type { admin_v1_UpdatePaymentChannelRequest } from '../models/admin_v1_UpdatePaymentChannelRequest';
import type { admin_v1_UserWallet } from '../models/admin_v1_UserWallet';
import type { admin_v1_Withdrawal } from '../models/admin_v1_Withdrawal';
import type { admin_v1_WithdrawalStats } from '../models/admin_v1_WithdrawalStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminFinanceService {
    /**
     * 财务审计
     * 获取审计日志
     * @param page
     * @param pageSize
     * @param action
     * @param adminId
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetAuditLogsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetAuditLogs(
        page?: number,
        pageSize?: number,
        action?: string,
        adminId?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetAuditLogsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/audit-logs',
            query: {
                'page': page,
                'pageSize': pageSize,
                'action': action,
                'adminId': adminId,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 创建审计记录
     * @param requestBody
     * @returns admin_v1_AuditLog OK
     * @throws ApiError
     */
    public static adminFinanceCreateAuditLog(
        requestBody: admin_v1_CreateAuditLogRequest,
    ): CancelablePromise<admin_v1_AuditLog> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/audit-logs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 优惠券管理
     * 获取优惠券列表
     * @param page
     * @param pageSize
     * @param status
     * @param type
     * @returns admin_v1_GetCouponsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetCoupons(
        page?: number,
        pageSize?: number,
        status?: string,
        type?: string,
    ): CancelablePromise<admin_v1_GetCouponsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/coupons',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'type': type,
            },
        });
    }
    /**
     * 创建优惠券
     * @param requestBody
     * @returns admin_v1_Coupon OK
     * @throws ApiError
     */
    public static adminFinanceCreateCoupon(
        requestBody: admin_v1_CreateCouponRequest,
    ): CancelablePromise<admin_v1_Coupon> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/coupons',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 优惠券统计
     * @param couponId
     * @returns admin_v1_CouponStats OK
     * @throws ApiError
     */
    public static adminFinanceGetCouponStats(
        couponId?: string,
    ): CancelablePromise<admin_v1_CouponStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/coupons/stats',
            query: {
                'couponId': couponId,
            },
        });
    }
    /**
     * 更新优惠券
     * @param id
     * @param requestBody
     * @returns admin_v1_Coupon OK
     * @throws ApiError
     */
    public static adminFinanceUpdateCoupon(
        id: string,
        requestBody: admin_v1_UpdateCouponRequest,
    ): CancelablePromise<admin_v1_Coupon> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/finance/coupons/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 删除优惠券
     * @param id
     * @returns any OK
     * @throws ApiError
     */
    public static adminFinanceDeleteCoupon(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/admin/finance/coupons/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 发放优惠券
     * @param id
     * @param requestBody
     * @returns admin_v1_DistributeCouponResponse OK
     * @throws ApiError
     */
    public static adminFinanceDistributeCoupon(
        id: string,
        requestBody: admin_v1_DistributeCouponRequest,
    ): CancelablePromise<admin_v1_DistributeCouponResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/coupons/{id}/distribute',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 会员管理
     * 获取会员套餐
     * @param page
     * @param pageSize
     * @param status
     * @returns admin_v1_GetMembershipPlansResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetMembershipPlans(
        page?: number,
        pageSize?: number,
        status?: string,
    ): CancelablePromise<admin_v1_GetMembershipPlansResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/membership-plans',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
            },
        });
    }
    /**
     * 创建会员套餐
     * @param requestBody
     * @returns admin_v1_MembershipPlan OK
     * @throws ApiError
     */
    public static adminFinanceCreateMembershipPlan(
        requestBody: admin_v1_CreateMembershipPlanRequest,
    ): CancelablePromise<admin_v1_MembershipPlan> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/membership-plans',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新会员套餐
     * @param id
     * @param requestBody
     * @returns admin_v1_MembershipPlan OK
     * @throws ApiError
     */
    public static adminFinanceUpdateMembershipPlan(
        id: string,
        requestBody: admin_v1_UpdateMembershipPlanRequest,
    ): CancelablePromise<admin_v1_MembershipPlan> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/finance/membership-plans/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 会员统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_MembershipStats OK
     * @throws ApiError
     */
    public static adminFinanceGetMembershipStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_MembershipStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/membership/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 订单管理
     * 获取订单列表
     * @param page
     * @param pageSize
     * @param status
     * @param type
     * @param userId
     * @param orderNo
     * @param startDate
     * @param endDate
     * @param keyword
     * @param paymentMethod
     * @returns admin_v1_GetOrdersResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetOrders(
        page?: number,
        pageSize?: number,
        status?: string,
        type?: string,
        userId?: string,
        orderNo?: string,
        startDate?: string,
        endDate?: string,
        keyword?: string,
        paymentMethod?: string,
    ): CancelablePromise<admin_v1_GetOrdersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/orders',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'type': type,
                'userId': userId,
                'orderNo': orderNo,
                'startDate': startDate,
                'endDate': endDate,
                'keyword': keyword,
                'paymentMethod': paymentMethod,
            },
        });
    }
    /**
     * 批量退款
     * @param requestBody
     * @returns admin_v1_BatchRefundOrdersResponse OK
     * @throws ApiError
     */
    public static adminFinanceBatchRefundOrders(
        requestBody: admin_v1_BatchRefundOrdersRequest,
    ): CancelablePromise<admin_v1_BatchRefundOrdersResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/orders/batch/refund',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 订单统计
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_OrderStats OK
     * @throws ApiError
     */
    public static adminFinanceGetOrderStats(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_OrderStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/orders/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 订单趋势
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_OrderTrend OK
     * @throws ApiError
     */
    public static adminFinanceGetOrderTrend(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_OrderTrend> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/orders/trend',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取订单详情
     * @param id
     * @returns admin_v1_Order OK
     * @throws ApiError
     */
    public static adminFinanceGetOrder(
        id: string,
    ): CancelablePromise<admin_v1_Order> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 取消订单
     * @param id
     * @param requestBody
     * @returns admin_v1_Order OK
     * @throws ApiError
     */
    public static adminFinanceCancelOrder(
        id: string,
        requestBody: admin_v1_CancelOrderRequest,
    ): CancelablePromise<admin_v1_Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/orders/{id}/cancel',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 退款订单
     * @param id
     * @param requestBody
     * @returns admin_v1_Order OK
     * @throws ApiError
     */
    public static adminFinanceRefundOrder(
        id: string,
        requestBody: admin_v1_RefundOrderRequest,
    ): CancelablePromise<admin_v1_Order> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/orders/{id}/refund',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新订单状态
     * @param id
     * @param requestBody
     * @returns admin_v1_Order OK
     * @throws ApiError
     */
    public static adminFinanceUpdateOrderStatus(
        id: string,
        requestBody: admin_v1_UpdateOrderStatusRequest,
    ): CancelablePromise<admin_v1_Order> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/finance/orders/{id}/status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 支付渠道管理
     * 获取支付渠道
     * @param page
     * @param pageSize
     * @param type
     * @param enabled
     * @returns admin_v1_GetPaymentChannelsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetPaymentChannels(
        page?: number,
        pageSize?: number,
        type?: string,
        enabled?: boolean,
    ): CancelablePromise<admin_v1_GetPaymentChannelsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/payment-channels',
            query: {
                'page': page,
                'pageSize': pageSize,
                'type': type,
                'enabled': enabled,
            },
        });
    }
    /**
     * 创建支付渠道
     * @param requestBody
     * @returns admin_v1_PaymentChannel OK
     * @throws ApiError
     */
    public static adminFinanceCreatePaymentChannel(
        requestBody: admin_v1_CreatePaymentChannelRequest,
    ): CancelablePromise<admin_v1_PaymentChannel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/payment-channels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 更新支付渠道
     * @param id
     * @param requestBody
     * @returns admin_v1_PaymentChannel OK
     * @throws ApiError
     */
    public static adminFinanceUpdatePaymentChannel(
        id: string,
        requestBody: admin_v1_UpdatePaymentChannelRequest,
    ): CancelablePromise<admin_v1_PaymentChannel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/admin/finance/payment-channels/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 启用/禁用支付渠道
     * @param id
     * @param requestBody
     * @returns admin_v1_PaymentChannel OK
     * @throws ApiError
     */
    public static adminFinanceTogglePaymentChannel(
        id: string,
        requestBody: admin_v1_TogglePaymentChannelRequest,
    ): CancelablePromise<admin_v1_PaymentChannel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/payment-channels/{id}/toggle',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 支付管理
     * 获取支付记录
     * @param page
     * @param pageSize
     * @param status
     * @param method
     * @param userId
     * @param orderNo
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetPaymentsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetPayments(
        page?: number,
        pageSize?: number,
        status?: string,
        method?: string,
        userId?: string,
        orderNo?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetPaymentsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/payments',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'method': method,
                'userId': userId,
                'orderNo': orderNo,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 支付统计
     * @param startDate
     * @param endDate
     * @param period
     * @returns admin_v1_PaymentStats OK
     * @throws ApiError
     */
    public static adminFinanceGetPaymentStats(
        startDate?: string,
        endDate?: string,
        period?: string,
    ): CancelablePromise<admin_v1_PaymentStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/payments/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'period': period,
            },
        });
    }
    /**
     * 获取支付详情
     * @param id
     * @returns admin_v1_Payment OK
     * @throws ApiError
     */
    public static adminFinanceGetPayment(
        id: string,
    ): CancelablePromise<admin_v1_Payment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/payments/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 确认支付
     * @param id
     * @param requestBody
     * @returns admin_v1_Payment OK
     * @throws ApiError
     */
    public static adminFinanceConfirmPayment(
        id: string,
        requestBody: admin_v1_ConfirmPaymentRequest,
    ): CancelablePromise<admin_v1_Payment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/payments/{id}/confirm',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 拒绝支付
     * @param id
     * @param requestBody
     * @returns admin_v1_Payment OK
     * @throws ApiError
     */
    public static adminFinanceRejectPayment(
        id: string,
        requestBody: admin_v1_RejectPaymentRequest,
    ): CancelablePromise<admin_v1_Payment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/payments/{id}/reject',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取现金流报表
     * @param startDate
     * @param endDate
     * @returns admin_v1_CashFlowReport OK
     * @throws ApiError
     */
    public static adminFinanceGetCashFlowReport(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_CashFlowReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/reports/cash-flow',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取支出报表
     * @param startDate
     * @param endDate
     * @param category
     * @returns admin_v1_ExpenseReport OK
     * @throws ApiError
     */
    public static adminFinanceGetExpenseReport(
        startDate?: string,
        endDate?: string,
        category?: string,
    ): CancelablePromise<admin_v1_ExpenseReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/reports/expense',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'category': category,
            },
        });
    }
    /**
     * 导出财务报表
     * @param requestBody
     * @returns admin_v1_ExportTask OK
     * @throws ApiError
     */
    public static adminFinanceExportFinancialReport(
        requestBody: admin_v1_ExportFinancialReportRequest,
    ): CancelablePromise<admin_v1_ExportTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/reports/export',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取利润报表
     * @param startDate
     * @param endDate
     * @returns admin_v1_ProfitReport OK
     * @throws ApiError
     */
    public static adminFinanceGetProfitReport(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_ProfitReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/reports/profit',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 财务报表
     * 获取收入报表
     * @param startDate
     * @param endDate
     * @param groupBy
     * @returns admin_v1_RevenueReport OK
     * @throws ApiError
     */
    public static adminFinanceGetRevenueReport(
        startDate?: string,
        endDate?: string,
        groupBy?: string,
    ): CancelablePromise<admin_v1_RevenueReport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/reports/revenue',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'groupBy': groupBy,
            },
        });
    }
    /**
     * 风险监控
     * 获取风险交易
     * @param page
     * @param pageSize
     * @param riskLevel
     * @param status
     * @returns admin_v1_GetRiskTransactionsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetRiskTransactions(
        page?: number,
        pageSize?: number,
        riskLevel?: string,
        status?: string,
    ): CancelablePromise<admin_v1_GetRiskTransactionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/risk/transactions',
            query: {
                'page': page,
                'pageSize': pageSize,
                'riskLevel': riskLevel,
                'status': status,
            },
        });
    }
    /**
     * 标记风险交易
     * @param id
     * @param requestBody
     * @returns admin_v1_RiskTransaction OK
     * @throws ApiError
     */
    public static adminFinanceMarkRiskTransaction(
        id: string,
        requestBody: admin_v1_MarkRiskTransactionRequest,
    ): CancelablePromise<admin_v1_RiskTransaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/risk/transactions/{id}/mark',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 处理风险交易
     * @param id
     * @param requestBody
     * @returns admin_v1_RiskTransaction OK
     * @throws ApiError
     */
    public static adminFinanceProcessRiskTransaction(
        id: string,
        requestBody: admin_v1_ProcessRiskTransactionRequest,
    ): CancelablePromise<admin_v1_RiskTransaction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/risk/transactions/{id}/process',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 结算管理
     * 获取结算记录
     * @param page
     * @param pageSize
     * @param status
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetSettlementsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetSettlements(
        page?: number,
        pageSize?: number,
        status?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetSettlementsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/settlements',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 创建结算
     * @param requestBody
     * @returns admin_v1_Settlement OK
     * @throws ApiError
     */
    public static adminFinanceCreateSettlement(
        requestBody: admin_v1_CreateSettlementRequest,
    ): CancelablePromise<admin_v1_Settlement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/settlements',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 结算统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_SettlementStats OK
     * @throws ApiError
     */
    public static adminFinanceGetSettlementStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_SettlementStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/settlements/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 处理结算
     * @param id
     * @param requestBody
     * @returns admin_v1_Settlement OK
     * @throws ApiError
     */
    public static adminFinanceProcessSettlement(
        id: string,
        requestBody: admin_v1_ProcessSettlementRequest,
    ): CancelablePromise<admin_v1_Settlement> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/settlements/{id}/process',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 钱包管理
     * 获取用户钱包列表
     * @param page
     * @param pageSize
     * @param userId
     * @param keyword
     * @param status
     * @returns admin_v1_GetUserWalletsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetUserWallets(
        page?: number,
        pageSize?: number,
        userId?: string,
        keyword?: string,
        status?: string,
    ): CancelablePromise<admin_v1_GetUserWalletsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/wallets',
            query: {
                'page': page,
                'pageSize': pageSize,
                'userId': userId,
                'keyword': keyword,
                'status': status,
            },
        });
    }
    /**
     * 获取用户钱包详情
     * @param userId
     * @returns admin_v1_UserWallet OK
     * @throws ApiError
     */
    public static adminFinanceGetUserWallet(
        userId: string,
    ): CancelablePromise<admin_v1_UserWallet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/wallets/{userId}',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * 调整用户余额
     * @param userId
     * @param requestBody
     * @returns admin_v1_UserWallet OK
     * @throws ApiError
     */
    public static adminFinanceAdjustUserBalance(
        userId: string,
        requestBody: admin_v1_AdjustUserBalanceRequest,
    ): CancelablePromise<admin_v1_UserWallet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/wallets/{userId}/adjust',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 冻结用户资金
     * @param userId
     * @param requestBody
     * @returns admin_v1_UserWallet OK
     * @throws ApiError
     */
    public static adminFinanceFreezeUserBalance(
        userId: string,
        requestBody: admin_v1_FreezeUserBalanceRequest,
    ): CancelablePromise<admin_v1_UserWallet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/wallets/{userId}/freeze',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 获取钱包流水
     * @param userId
     * @param page
     * @param pageSize
     * @param type
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetWalletTransactionsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetWalletTransactions(
        userId: string,
        page?: number,
        pageSize?: number,
        type?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetWalletTransactionsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/wallets/{userId}/transactions',
            path: {
                'userId': userId,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'type': type,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 解冻用户资金
     * @param userId
     * @param requestBody
     * @returns admin_v1_UserWallet OK
     * @throws ApiError
     */
    public static adminFinanceUnfreezeUserBalance(
        userId: string,
        requestBody: admin_v1_UnfreezeUserBalanceRequest,
    ): CancelablePromise<admin_v1_UserWallet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/wallets/{userId}/unfreeze',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 提现管理
     * 获取提现申请列表
     * @param page
     * @param pageSize
     * @param status
     * @param userId
     * @param startDate
     * @param endDate
     * @returns admin_v1_GetWithdrawalsResponse OK
     * @throws ApiError
     */
    public static adminFinanceGetWithdrawals(
        page?: number,
        pageSize?: number,
        status?: string,
        userId?: string,
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_GetWithdrawalsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/withdrawals',
            query: {
                'page': page,
                'pageSize': pageSize,
                'status': status,
                'userId': userId,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 批量审核提现
     * @param requestBody
     * @returns admin_v1_BatchReviewWithdrawalsResponse OK
     * @throws ApiError
     */
    public static adminFinanceBatchReviewWithdrawals(
        requestBody: admin_v1_BatchReviewWithdrawalsRequest,
    ): CancelablePromise<admin_v1_BatchReviewWithdrawalsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/withdrawals/batch/review',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 提现统计
     * @param startDate
     * @param endDate
     * @returns admin_v1_WithdrawalStats OK
     * @throws ApiError
     */
    public static adminFinanceGetWithdrawalStats(
        startDate?: string,
        endDate?: string,
    ): CancelablePromise<admin_v1_WithdrawalStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/withdrawals/stats',
            query: {
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * 获取提现详情
     * @param id
     * @returns admin_v1_Withdrawal OK
     * @throws ApiError
     */
    public static adminFinanceGetWithdrawal(
        id: string,
    ): CancelablePromise<admin_v1_Withdrawal> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/admin/finance/withdrawals/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * 处理提现
     * @param id
     * @param requestBody
     * @returns admin_v1_Withdrawal OK
     * @throws ApiError
     */
    public static adminFinanceProcessWithdrawal(
        id: string,
        requestBody: admin_v1_ProcessWithdrawalRequest,
    ): CancelablePromise<admin_v1_Withdrawal> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/withdrawals/{id}/process',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 审核提现申请
     * @param id
     * @param requestBody
     * @returns admin_v1_Withdrawal OK
     * @throws ApiError
     */
    public static adminFinanceReviewWithdrawal(
        id: string,
        requestBody: admin_v1_ReviewWithdrawalRequest,
    ): CancelablePromise<admin_v1_Withdrawal> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/admin/finance/withdrawals/{id}/review',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
