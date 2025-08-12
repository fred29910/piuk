/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_OrderStatusStats } from './admin_v1_OrderStatusStats';
import type { admin_v1_OrderTypeStats } from './admin_v1_OrderTypeStats';
/**
 * 订单统计
 */
export type admin_v1_OrderStats = {
    totalOrders?: string;
    totalAmount?: string;
    pendingOrders?: string;
    completedOrders?: string;
    cancelledOrders?: string;
    refundedOrders?: string;
    typeStats?: Array<admin_v1_OrderTypeStats>;
    statusStats?: Array<admin_v1_OrderStatusStats>;
};

