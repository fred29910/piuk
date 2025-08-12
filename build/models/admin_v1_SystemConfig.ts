/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 系统配置
 */
export type admin_v1_SystemConfig = {
    siteName?: string;
    siteDescription?: string;
    siteLogo?: string;
    siteFavicon?: string;
    siteKeywords?: string;
    siteIcp?: string;
    siteAnalytics?: string;
    maintenanceMode?: boolean;
    maintenanceMessage?: string;
    maxUploadSize?: string;
    maxAvatarSize?: string;
    maxLoginAttempts?: number;
    sessionTimeout?: number;
    emailVerification?: boolean;
    phoneVerification?: boolean;
    captchaEnabled?: boolean;
    passwordMinLength?: number;
    passwordComplexity?: number;
    allowRegistration?: boolean;
    allowComments?: boolean;
    allowUploads?: boolean;
    defaultLanguage?: string;
    defaultTimezone?: string;
    dateFormat?: string;
    timeFormat?: string;
    itemsPerPage?: number;
    maxItemsPerPage?: number;
    enableCdn?: boolean;
    cdnUrl?: string;
    enableCache?: boolean;
    cacheTtl?: number;
    enableCompression?: boolean;
    enableHttps?: boolean;
    sslCertPath?: string;
    sslKeyPath?: string;
    adminEmail?: string;
    supportEmail?: string;
    notificationEmail?: string;
    smtpHost?: string;
    smtpPort?: number;
    smtpUsername?: string;
    smtpPassword?: string;
    smsProvider?: string;
    smsAccessKey?: string;
    smsSecretKey?: string;
    smsSignName?: string;
    ossProvider?: string;
    ossAccessKey?: string;
    ossSecretKey?: string;
    ossBucket?: string;
    ossEndpoint?: string;
    ossDomain?: string;
    pushProvider?: string;
    pushAccessKey?: string;
    pushSecretKey?: string;
    paymentProvider?: string;
    paymentAccessKey?: string;
    paymentSecretKey?: string;
    paymentWebhookUrl?: string;
    analyticsProvider?: string;
    analyticsTrackingId?: string;
    searchProvider?: string;
    searchApiKey?: string;
    searchIndexName?: string;
    aiProvider?: string;
    aiApiKey?: string;
    aiModel?: string;
};

