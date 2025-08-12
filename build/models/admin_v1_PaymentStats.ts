/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_PaymentMethodStats } from './admin_v1_PaymentMethodStats';
/**
 * 支付统计
 */
export type admin_v1_PaymentStats = {
    totalPayments?: string;
    totalAmount?: string;
    successPayments?: string;
    failedPayments?: string;
    methodStats?: Array<admin_v1_PaymentMethodStats>;
};

