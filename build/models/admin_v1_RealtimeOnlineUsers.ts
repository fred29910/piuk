/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { admin_v1_OnlineUserData } from './admin_v1_OnlineUserData';
/**
 * 实时在线用户
 */
export type admin_v1_RealtimeOnlineUsers = {
    currentOnline?: string;
    peakOnline?: string;
    data?: Array<admin_v1_OnlineUserData>;
};

