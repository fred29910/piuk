/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** 访问日志 */
export interface AdminV1AccessLog {
  id?: string;
  ip?: string;
  method?: string;
  responseTime?: string;
  /** @format int32 */
  statusCode?: number;
  timestamp?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
  username?: string;
}

/** 操作统计 */
export interface AdminV1ActionCount {
  action?: string;
  count?: string;
  /** @format double */
  percentage?: number;
}

export interface AdminV1Activity {
  bannerUrl?: string;
  createdAt?: string;
  description?: string;
  enabled?: boolean;
  endTime?: string;
  id?: string;
  name?: string;
  rules?: string;
  startTime?: string;
  status?: string;
  updatedAt?: string;
}

/** 活跃度数据 */
export interface AdminV1ActivityData {
  dailyActiveUsers?: string;
  date?: string;
  monthlyActiveUsers?: string;
  weeklyActiveUsers?: string;
}

/** 活动统计 */
export interface AdminV1ActivityStats {
  participants?: string;
  shares?: string;
  views?: string;
}

/** 广告相关消息定义 */
export interface AdminV1Ad {
  clickCount?: string;
  /** @format double */
  clickRate?: number;
  coverPath?: string;
  createTime?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  endTime?: string;
  filePath?: string;
  fileSize?: string;
  id?: string;
  startTime?: string;
  /** @format int32 */
  status?: number;
  title?: string;
  updateTime?: string;
  viewCount?: string;
  /** @format double */
  viewRate?: number;
}

export interface AdminV1AdPositionStats {
  clicks?: string;
  position?: string;
  views?: string;
}

/** 添加用户标签请求 */
export interface AdminV1AddUserTagsRequest {
  id?: string;
  tagIds?: Array<string>;
}

/** 调整用户余额请求 */
export interface AdminV1AdjustUserBalanceRequest {
  amount?: string;
  note?: string;
  reason?: string;
  type?: string;
  userId?: string;
}

export interface AdminV1Admin2FAStatus {
  adminId?: string;
  createdAt?: string;
  enabled?: boolean;
  lastUsedAt?: string;
  username?: string;
}

/** 管理员信息 */
export interface AdminV1AdminInfo {
  avatar?: string;
  createdAt?: string;
  email?: string;
  id?: string;
  nickname?: string;
  permissions?: Array<string>;
  phone?: string;
  roles?: Array<string>;
  /** @format int32 */
  status?: number;
  updatedAt?: string;
  username?: string;
}

/** 管理员登录请求 */
export interface AdminV1AdminLoginRequest {
  captchaAnswer?: string;
  captchaId?: string;
  password?: string;
  username?: string;
}

/** 管理员登录响应 */
export interface AdminV1AdminLoginResponse {
  accessToken?: string;
  /** 管理员信息 */
  adminInfo?: AdminV1AdminInfo;
  expiresIn?: string;
  refreshToken?: string;
}

/** 管理员登出请求 */
export interface AdminV1AdminLogoutRequest {
  refreshToken?: string;
}

/** 管理员登出响应 */
export interface AdminV1AdminLogoutResponse {
  success?: boolean;
}

/** 刷新令牌请求 */
export interface AdminV1AdminRefreshTokenRequest {
  refreshToken?: string;
}

/** 刷新令牌响应 */
export interface AdminV1AdminRefreshTokenResponse {
  accessToken?: string;
  expiresIn?: string;
  refreshToken?: string;
}

/** 管理员统计 */
export interface AdminV1AdminStats {
  adminId?: string;
  adminName?: string;
  avgProcessTime?: string;
  processedCount?: string;
}

export interface AdminV1Advertisement {
  createdAt?: string;
  enabled?: boolean;
  endTime?: string;
  id?: string;
  imageUrl?: string;
  linkUrl?: string;
  position?: string;
  /** @format int32 */
  sortOrder?: number;
  startTime?: string;
  title?: string;
  updatedAt?: string;
}

/** 广告统计 */
export interface AdminV1AdvertisementStats {
  /** @format double */
  clickThroughRate?: number;
  positionStats?: Array<AdminV1AdPositionStats>;
  totalClicks?: string;
  totalViews?: string;
}

/** 主播相关消息定义 */
export interface AdminV1Anchor {
  address?: string;
  avatar?: string;
  bio?: string;
  birthday?: string;
  createTime?: string;
  email?: string;
  fansCount?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  idCard?: string;
  /** @format int32 */
  level?: number;
  nickname?: string;
  phone?: string;
  realName?: string;
  /** @format int32 */
  status?: number;
  totalViews?: string;
  updateTime?: string;
  userId?: string;
  videoCount?: string;
}

/** 主播认证相关消息定义 */
export interface AdminV1AnchorVerify {
  anchorId?: string;
  createTime?: string;
  id?: string;
  idCardBack?: string;
  idCardFront?: string;
  updateTime?: string;
  verifyRemark?: string;
  /** @format int32 */
  verifyStatus?: number;
  verifyTime?: string;
  /** @format int32 */
  verifyType?: number;
}

export interface AdminV1Announcement {
  author?: string;
  content?: string;
  createdAt?: string;
  id?: string;
  isPinned?: boolean;
  /** @format int32 */
  priority?: number;
  publishedAt?: string;
  status?: string;
  title?: string;
  updatedAt?: string;
}

/** 申诉 */
export interface AdminV1Appeal {
  contentId?: string;
  contentType?: string;
  createdAt?: string;
  description?: string;
  evidenceUrls?: string;
  id?: string;
  processedAt?: string;
  processedBy?: string;
  processedReason?: string;
  reason?: string;
  reportId?: string;
  status?: string;
  userId?: string;
  userName?: string;
}

/** 分配管理员角色请求 */
export interface AdminV1AssignAdminRolesRequest {
  id?: string;
  roleIds?: Array<string>;
}

/** 分配角色权限请求 */
export interface AdminV1AssignRolePermissionsRequest {
  id?: string;
  permissionIds?: Array<string>;
}

export interface AdminV1AuditLog {
  action?: string;
  adminId?: string;
  adminName?: string;
  createdAt?: string;
  details?: string;
  id?: string;
  ipAddress?: string;
  resource?: string;
  resourceId?: string;
  userAgent?: string;
}

/** 备份 */
export interface AdminV1Backup {
  checksum?: string;
  completedAt?: string;
  createdAt?: string;
  description?: string;
  errorMessage?: string;
  fileSize?: string;
  filename?: string;
  id?: string;
  status?: string;
  type?: string;
}

/** 备份任务 */
export interface AdminV1BackupTask {
  estimatedCompletion?: string;
  id?: string;
  message?: string;
  progress?: string;
  startedAt?: string;
  status?: string;
  type?: string;
}

export interface AdminV1BanUserReq {
  banUntil?: string;
  id?: string;
  reason?: string;
}

/** 批量删除评论请求 */
export interface AdminV1BatchDeleteCommentsRequest {
  ids?: Array<string>;
}

/** 批量删除用户请求 */
export interface AdminV1BatchDeleteUsersRequest {
  ids?: Array<string>;
}

/** 批量删除视频请求 */
export interface AdminV1BatchDeleteVideosRequest {
  ids?: Array<string>;
}

/** 批量检测内容请求 */
export interface AdminV1BatchDetectContentRequest {
  items?: Array<AdminV1ContentItem>;
}

/** 批量检测内容响应 */
export interface AdminV1BatchDetectContentResponse {
  results?: Array<AdminV1ContentDetectionResult>;
}

/** 批量处理申诉请求 */
export interface AdminV1BatchProcessAppealsRequest {
  action?: string;
  ids?: Array<string>;
  note?: string;
  reason?: string;
}

/** 批量处理申诉响应 */
export interface AdminV1BatchProcessAppealsResponse {
  errors?: Array<string>;
  failedCount?: string;
  processedCount?: string;
  successCount?: string;
}

/** 批量处理举报请求 */
export interface AdminV1BatchProcessReportsRequest {
  action?: string;
  /** @format int32 */
  duration?: number;
  ids?: Array<string>;
  note?: string;
  reason?: string;
}

/** 批量处理举报响应 */
export interface AdminV1BatchProcessReportsResponse {
  errors?: Array<string>;
  failedCount?: string;
  processedCount?: string;
  successCount?: string;
}

/** 批量退款请求 */
export interface AdminV1BatchRefundOrdersRequest {
  ids?: Array<string>;
  reason?: string;
  refundMethod?: string;
}

/** 批量退款响应 */
export interface AdminV1BatchRefundOrdersResponse {
  errors?: Array<string>;
  failedCount?: string;
  processedCount?: string;
  successCount?: string;
}

/** 批量审核内容请求 */
export interface AdminV1BatchReviewContentItemsRequest {
  items?: Array<AdminV1ReviewItem>;
}

/** 批量审核内容请求 */
export interface AdminV1BatchReviewContentRequest {
  action?: string;
  ids?: Array<string>;
  note?: string;
  reason?: string;
}

/** 批量审核内容响应 */
export interface AdminV1BatchReviewContentResponse {
  errors?: Array<string>;
  failedCount?: string;
  processedCount?: string;
  successCount?: string;
}

export interface AdminV1BatchReviewWithdrawalsRequest {
  action?: string;
  ids?: Array<string>;
  reason?: string;
}

export interface AdminV1BatchReviewWithdrawalsResponse {
  errors?: Array<string>;
  failedCount?: string;
  successCount?: string;
}

/** 缓存键统计 */
export interface AdminV1CacheKeyStats {
  count?: string;
  memoryUsage?: string;
  pattern?: string;
}

/** 缓存统计 */
export interface AdminV1CacheStats {
  hitRate?: string;
  keyStats?: Array<AdminV1CacheKeyStats>;
  missRate?: string;
  totalKeys?: string;
  usedMemory?: string;
}

/** 缓存状态 */
export interface AdminV1CacheStatus {
  driver?: string;
  evictions?: string;
  expirations?: string;
  /** @format double */
  hitRate?: number;
  hits?: string;
  items?: string;
  memoryUsage?: string;
  misses?: string;
}

/** 计算实验显著性请求 */
export interface AdminV1CalculateExperimentSignificanceRequest {
  id?: string;
  metric?: string;
}

/** 取消订单请求 */
export interface AdminV1CancelOrderRequest {
  id?: string;
  reason?: string;
}

/** 取消推荐视频请求 */
export interface AdminV1CancelRecommendVideoRequest {
  id?: string;
}

/** 取消置顶视频请求 */
export interface AdminV1CancelTopVideoRequest {
  id?: string;
}

export interface AdminV1CashFlowData {
  date?: string;
  inflow?: string;
  netFlow?: string;
  outflow?: string;
}

export interface AdminV1CashFlowReport {
  items?: Array<AdminV1CashFlowData>;
  netCashFlow?: string;
}

/** 分类详情 */
export interface AdminV1CategoryDetail {
  children?: Array<AdminV1CategoryDetail>;
  createdAt?: string;
  description?: string;
  icon?: string;
  id?: string;
  name?: string;
  parentId?: string;
  slug?: string;
  /** @format int32 */
  sortOrder?: number;
  /** @format int32 */
  status?: number;
  updatedAt?: string;
}

/** 修改密码请求 */
export interface AdminV1ChangePasswordRequest {
  newPassword?: string;
  oldPassword?: string;
}

/** 清理日志请求 */
export interface AdminV1CleanLogsRequest {
  beforeDate?: string;
  logType?: string;
}

/** 清理缓存请求 */
export interface AdminV1ClearCacheRequest {
  cacheType?: string;
  pattern?: string;
}

/** 关闭举报请求 */
export interface AdminV1CloseReportRequest {
  id?: string;
  reason?: string;
}

/** 评论详情 */
export interface AdminV1CommentDetail {
  content?: string;
  createdAt?: string;
  id?: string;
  /** @format int32 */
  likeCount?: number;
  parentId?: string;
  replies?: Array<AdminV1CommentDetail>;
  /** @format int32 */
  replyCount?: number;
  reviewRemark?: string;
  /** @format int32 */
  reviewStatus?: number;
  reviewedAt?: string;
  reviewerId?: string;
  /** @format int32 */
  status?: number;
  updatedAt?: string;
  /** 通用用户信息 */
  user?: CommonV1UserInfo;
  userId?: string;
  videoId?: string;
}

/** 配置项 */
export interface AdminV1ConfigItem {
  description?: string;
  editable?: boolean;
  key?: string;
  type?: string;
  updatedAt?: string;
  value?: string;
}

/** 确认支付请求 */
export interface AdminV1ConfirmPaymentRequest {
  id?: string;
  paidAt?: string;
  transactionId?: string;
}

/** 内容检测结果 */
export interface AdminV1ContentDetectionResult {
  /** @format double */
  confidence?: number;
  contentId?: string;
  contentType?: string;
  details?: string;
  detectedCategories?: Array<string>;
  isSafe?: boolean;
  sensitiveWords?: Array<string>;
  suggestion?: string;
}

/** 内容增长数据 */
export interface AdminV1ContentGrowthData {
  date?: string;
  newContent?: string;
  totalContent?: string;
}

/** 内容增长统计 */
export interface AdminV1ContentGrowthStats {
  data?: Array<AdminV1ContentGrowthData>;
  newContent?: string;
  totalContent?: string;
}

/** 内容互动统计 */
export interface AdminV1ContentInteractionStats {
  data?: Array<AdminV1InteractionData>;
  totalCollects?: string;
  totalComments?: string;
  totalLikes?: string;
  totalShares?: string;
}

/** 内容项 */
export interface AdminV1ContentItem {
  contentId?: string;
  contentType?: string;
  imageUrl?: string;
  text?: string;
  videoUrl?: string;
}

/** 待审核内容 */
export interface AdminV1ContentPendingReview {
  content?: string;
  contentType?: string;
  createdAt?: string;
  id?: string;
  title?: string;
  userId?: string;
  username?: string;
}

/** 内容发布数据 */
export interface AdminV1ContentPublishData {
  contentType?: string;
  count?: string;
  timestamp?: string;
}

/** 内容质量统计 */
export interface AdminV1ContentQualityStats {
  /** @format double */
  avgCompletionRate?: number;
  /** @format double */
  avgEngagementRate?: number;
  highQualityContent?: string;
  lowQualityContent?: string;
  qualityDistribution?: Array<AdminV1QualityDistribution>;
}

/** 内容统计 */
export interface AdminV1ContentStats {
  pendingReviews?: string;
  totalComments?: string;
  totalTopics?: string;
  totalVideos?: string;
}

export interface AdminV1Coupon {
  code?: string;
  createdAt?: string;
  discountAmount?: string;
  /** @format float */
  discountRate?: number;
  endTime?: string;
  id?: string;
  maxDiscount?: string;
  minAmount?: string;
  name?: string;
  startTime?: string;
  status?: string;
  /** @format int32 */
  totalCount?: number;
  type?: string;
  /** @format int32 */
  usedCount?: number;
}

export interface AdminV1CouponStats {
  totalDistributed?: string;
  totalSaved?: string;
  totalUsed?: string;
  /** @format float */
  usageRate?: number;
}

/** 创建活动请求 */
export interface AdminV1CreateActivityRequest {
  bannerUrl?: string;
  description?: string;
  enabled?: boolean;
  endTime?: string;
  name?: string;
  rules?: string;
  startTime?: string;
}

export interface AdminV1CreateAdReq {
  coverPath?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  endTime?: string;
  filePath?: string;
  fileSize?: string;
  startTime?: string;
  /** @format int32 */
  status?: number;
  title?: string;
}

export interface AdminV1CreateAdminReq {
  avatar?: string;
  email?: string;
  nickname?: string;
  password?: string;
  phone?: string;
  /** @format int32 */
  status?: number;
  username?: string;
}

/** 创建广告请求 */
export interface AdminV1CreateAdvertisementRequest {
  enabled?: boolean;
  endTime?: string;
  imageUrl?: string;
  linkUrl?: string;
  position?: string;
  /** @format int32 */
  sortOrder?: number;
  startTime?: string;
  title?: string;
}

export interface AdminV1CreateAnchorReq {
  address?: string;
  avatar?: string;
  bio?: string;
  birthday?: string;
  email?: string;
  /** @format int32 */
  gender?: number;
  idCard?: string;
  /** @format int32 */
  level?: number;
  nickname?: string;
  phone?: string;
  realName?: string;
  /** @format int32 */
  status?: number;
  userId?: string;
}

export interface AdminV1CreateAnchorVerifyReq {
  anchorId?: string;
  idCardBack?: string;
  idCardFront?: string;
  verifyRemark?: string;
  /** @format int32 */
  verifyType?: number;
}

/** 创建公告请求 */
export interface AdminV1CreateAnnouncementRequest {
  author?: string;
  content?: string;
  isPinned?: boolean;
  /** @format int32 */
  priority?: number;
  title?: string;
}

export interface AdminV1CreateAuditLogRequest {
  action?: string;
  details?: string;
  resource?: string;
  resourceId?: string;
}

/** 创建备份请求 */
export interface AdminV1CreateBackupRequest {
  compress?: boolean;
  description?: string;
  type?: string;
}

/** 创建分类请求 */
export interface AdminV1CreateCategoryRequest {
  description?: string;
  icon?: string;
  name?: string;
  parentId?: string;
  slug?: string;
  /** @format int32 */
  sortOrder?: number;
}

export interface AdminV1CreateCouponRequest {
  discountAmount?: string;
  /** @format float */
  discountRate?: number;
  endTime?: string;
  minAmount?: string;
  name?: string;
  startTime?: string;
  /** @format int32 */
  totalCount?: number;
  type?: string;
}

/** 创建自定义报表请求 */
export interface AdminV1CreateCustomReportRequest {
  chartType?: string;
  description?: string;
  dimensions?: Array<string>;
  metrics?: Array<string>;
  name?: string;
  query?: string;
  schedule?: string;
}

/** 创建实验指标请求 */
export interface AdminV1CreateExperimentMetricRequest {
  calculationMethod?: string;
  description?: string;
  eventName?: string;
  id?: string;
  name?: string;
  successCriteria?: string;
  type?: string;
}

/** 创建实验请求 */
export interface AdminV1CreateExperimentRequest {
  /** @format double */
  confidenceLevel?: number;
  description?: string;
  endTime?: string;
  hypothesis?: string;
  name?: string;
  /** @format int32 */
  sampleSize?: number;
  startTime?: string;
  trafficAllocation?: string;
  type?: string;
}

/** 创建实验变体请求 */
export interface AdminV1CreateExperimentVariantRequest {
  configuration?: string;
  description?: string;
  id?: string;
  name?: string;
  /** @format double */
  trafficWeight?: number;
}

/** 创建帮助文档请求 */
export interface AdminV1CreateHelpDocumentRequest {
  category?: string;
  content?: string;
  enabled?: boolean;
  /** @format int32 */
  sortOrder?: number;
  title?: string;
}

/** 创建商品请求 */
export interface AdminV1CreateMallItemRequest {
  category?: string;
  description?: string;
  enabled?: boolean;
  imageUrl?: string;
  name?: string;
  /** @format int32 */
  pricePoints?: number;
  /** @format int32 */
  stock?: number;
}

export interface AdminV1CreateMembershipPlanRequest {
  description?: string;
  /** @format int32 */
  durationDays?: number;
  features?: string;
  name?: string;
  price?: string;
}

/** 创建支付渠道请求 */
export interface AdminV1CreatePaymentChannelRequest {
  config?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  /** @format int32 */
  sortOrder?: number;
  type?: string;
}

export interface AdminV1CreatePermissionReq {
  component?: string;
  icon?: string;
  parentId?: string;
  path?: string;
  permissionCode?: string;
  permissionName?: string;
  /** @format int32 */
  permissionType?: number;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
}

/** 创建推送请求 */
export interface AdminV1CreatePushNotificationRequest {
  content?: string;
  linkUrl?: string;
  sendTime?: string;
  targetType?: string;
  targetValues?: Array<string>;
  title?: string;
}

/** 创建举报类型请求 */
export interface AdminV1CreateReportTypeRequest {
  category?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  /** @format int32 */
  priority?: number;
}

/** 创建审核规则请求 */
export interface AdminV1CreateReviewRuleRequest {
  action?: string;
  contentType?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  /** @format int32 */
  priority?: number;
  ruleContent?: string;
  ruleType?: string;
}

export interface AdminV1CreateRoleReq {
  description?: string;
  roleCode?: string;
  roleName?: string;
  /** @format int32 */
  status?: number;
}

/** 创建角色请求 */
export interface AdminV1CreateRoleRequest {
  description?: string;
  name?: string;
  permissionIds?: Array<string>;
  slug?: string;
}

/** 创建敏感词请求 */
export interface AdminV1CreateSensitiveWordRequest {
  category?: string;
  enabled?: boolean;
  /** @format int32 */
  level?: number;
  note?: string;
  replacement?: string;
  word?: string;
}

export interface AdminV1CreateSettlementRequest {
  amount?: string;
  description?: string;
  merchantId?: string;
}

/** 创建任务请求 */
export interface AdminV1CreateTaskRequest {
  action?: string;
  /** @format int32 */
  completionCount?: number;
  description?: string;
  enabled?: boolean;
  name?: string;
  /** @format int32 */
  rewardPoints?: number;
  type?: string;
}

/** 创建话题请求 */
export interface AdminV1CreateTopicRequest {
  categoryId?: string;
  coverUrl?: string;
  description?: string;
  tagIds?: Array<string>;
  title?: string;
}

export interface AdminV1CreateUserReq {
  email?: string;
  password?: string;
  phone?: string;
  username?: string;
}

/** 创建用户请求 */
export interface AdminV1CreateUserRequest {
  avatar?: string;
  bio?: string;
  birthday?: string;
  email?: string;
  /** @format int32 */
  gender?: number;
  location?: string;
  nickname?: string;
  password?: string;
  phone?: string;
  /** @format int32 */
  status?: number;
  tagIds?: Array<string>;
  username?: string;
}

export interface AdminV1CreateVideoCategoryReq {
  name?: string;
  parentId?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
}

export interface AdminV1CreateVideoReq {
  anchorId?: string;
  categoryId?: string;
  coverPath?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  filePath?: string;
  fileSize?: string;
  format?: string;
  resolution?: string;
  /** @format int32 */
  status?: number;
  tags?: string;
  title?: string;
}

/** 自定义报表 */
export interface AdminV1CustomReport {
  chartType?: string;
  createdAt?: string;
  description?: string;
  dimensions?: Array<string>;
  id?: string;
  lastExecutedAt?: string;
  metrics?: Array<string>;
  name?: string;
  query?: string;
  schedule?: string;
  updatedAt?: string;
}

/** 自定义报表结果 */
export interface AdminV1CustomReportResult {
  chartType?: string;
  columns?: Array<string>;
  executedAt?: string;
  reportId?: string;
  rows?: Array<AdminV1RowData>;
}

/** 数据库列 */
export interface AdminV1DatabaseColumn {
  comment?: string;
  defaultValue?: string;
  isNullable?: boolean;
  isPrimary?: boolean;
  isUnique?: boolean;
  name?: string;
  type?: string;
}

/** 数据库索引 */
export interface AdminV1DatabaseIndex {
  columns?: Array<string>;
  isUnique?: boolean;
  name?: string;
  type?: string;
}

/** 数据库状态 */
export interface AdminV1DatabaseStatus {
  /** @format double */
  avgQueryTime?: number;
  /** @format double */
  connectionUsage?: number;
  connections?: string;
  driver?: string;
  maxConnections?: string;
  queriesPerSecond?: string;
  slowQueries?: string;
  tables?: Array<AdminV1TableStatus>;
  totalQueries?: string;
  version?: string;
}

/** 数据库表 */
export interface AdminV1DatabaseTable {
  collation?: string;
  comment?: string;
  dataLength?: string;
  engine?: string;
  indexLength?: string;
  name?: string;
  rows?: string;
}

/** 数据库表详情 */
export interface AdminV1DatabaseTableDetail {
  columns?: Array<AdminV1DatabaseColumn>;
  indexes?: Array<AdminV1DatabaseIndex>;
  /** 数据库表 */
  table?: AdminV1DatabaseTable;
}

/** 数据库表信息 */
export interface AdminV1DatabaseTables {
  tables?: Array<AdminV1DatabaseTable>;
}

/** 检测图片内容请求 */
export interface AdminV1DetectImageContentRequest {
  contentType?: string;
  imageUrl?: string;
}

/** 检测文本内容请求 */
export interface AdminV1DetectTextContentRequest {
  contentType?: string;
  text?: string;
}

/** 检测视频内容请求 */
export interface AdminV1DetectVideoContentRequest {
  coverUrl?: string;
  videoUrl?: string;
}

export interface AdminV1DistributeCouponRequest {
  id?: string;
  userIds?: Array<string>;
}

export interface AdminV1DistributeCouponResponse {
  failedCount?: string;
  successCount?: string;
}

/** 分布数据 */
export interface AdminV1DistributionData {
  name?: string;
  /** @format double */
  percentage?: number;
  value?: string;
}

/** 进入维护模式请求 */
export interface AdminV1EnterMaintenanceModeRequest {
  expectedDuration?: string;
  reason?: string;
}

/** 错误日志 */
export interface AdminV1ErrorLog {
  id?: string;
  ip?: string;
  level?: string;
  message?: string;
  method?: string;
  requestId?: string;
  stackTrace?: string;
  timestamp?: string;
  url?: string;
  userAgent?: string;
  userId?: string;
}

/** 执行自定义报表请求 */
export interface AdminV1ExecuteCustomReportRequest {
  endDate?: string;
  id?: string;
  startDate?: string;
}

/** 执行数据库查询请求 */
export interface AdminV1ExecuteDatabaseQueryRequest {
  query?: string;
  readOnly?: boolean;
}

/** 执行定时任务请求 */
export interface AdminV1ExecuteScheduledTaskRequest {
  id?: string;
}

export interface AdminV1ExpenseData {
  amount?: string;
  category?: string;
  description?: string;
}

export interface AdminV1ExpenseReport {
  items?: Array<AdminV1ExpenseData>;
  totalExpense?: string;
}

export interface AdminV1Experiment {
  /** @format double */
  confidenceLevel?: number;
  createdAt?: string;
  description?: string;
  endTime?: string;
  hypothesis?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  sampleSize?: number;
  startTime?: string;
  status?: string;
  trafficAllocation?: string;
  type?: string;
  updatedAt?: string;
}

export interface AdminV1ExperimentDataPoint {
  eventName?: string;
  timestamp?: string;
  userId?: string;
  /** @format double */
  value?: number;
  variantId?: string;
}

export interface AdminV1ExperimentMetric {
  calculationMethod?: string;
  createdAt?: string;
  description?: string;
  eventName?: string;
  experimentId?: string;
  id?: string;
  name?: string;
  successCriteria?: string;
  type?: string;
}

export interface AdminV1ExperimentReport {
  content?: string;
  experimentId?: string;
  generatedAt?: string;
  id?: string;
  reportType?: string;
}

/** 实验结果 */
export interface AdminV1ExperimentResults {
  experimentId?: string;
  lastUpdated?: string;
  metricResults?: Array<AdminV1MetricResult>;
  status?: string;
  variantResults?: Array<AdminV1VariantResult>;
}

/** 实验显著性结果 */
export interface AdminV1ExperimentSignificanceResult {
  /** @format double */
  confidenceInterval?: number;
  isSignificant?: boolean;
  /** @format double */
  pValue?: number;
  recommendation?: string;
}

/** 实验统计 */
export interface AdminV1ExperimentStatistics {
  totalEvents?: string;
  totalSessions?: string;
  totalUsers?: string;
  variantStats?: Array<AdminV1VariantStatistics>;
}

export interface AdminV1ExperimentVariant {
  configuration?: string;
  createdAt?: string;
  description?: string;
  experimentId?: string;
  id?: string;
  name?: string;
  /** @format double */
  trafficWeight?: number;
  updatedAt?: string;
}

/** 导出内容数据请求 */
export interface AdminV1ExportContentDataRequest {
  contentType?: string;
  endDate?: string;
  fields?: Array<string>;
  format?: string;
  startDate?: string;
}

/** 导出实验数据请求 */
export interface AdminV1ExportExperimentDataRequest {
  endDate?: string;
  format?: string;
  id?: string;
  startDate?: string;
}

export interface AdminV1ExportFinancialReportRequest {
  endDate?: string;
  format?: string;
  reportType?: string;
  startDate?: string;
}

/** 导出收入数据请求 */
export interface AdminV1ExportRevenueDataRequest {
  endDate?: string;
  fields?: Array<string>;
  format?: string;
  startDate?: string;
}

/** 导出敏感词请求 */
export interface AdminV1ExportSensitiveWordsRequest {
  category?: string;
  format?: string;
}

export interface AdminV1ExportTask {
  createdAt?: string;
  downloadUrl?: string;
  status?: string;
  taskId?: string;
}

/** 导出流量数据请求 */
export interface AdminV1ExportTrafficDataRequest {
  endDate?: string;
  fields?: Array<string>;
  format?: string;
  startDate?: string;
}

/** 导出用户数据请求 */
export interface AdminV1ExportUserDataRequest {
  endDate?: string;
  fields?: Array<string>;
  format?: string;
  startDate?: string;
}

/** 导出用户数据请求 */
export interface AdminV1ExportUsersRequest {
  endDate?: string;
  fields?: Array<string>;
  keyword?: string;
  startDate?: string;
  /** @format int32 */
  status?: number;
  tagIds?: Array<string>;
}

/** 导出用户数据响应 */
export interface AdminV1ExportUsersResponse {
  downloadUrl?: string;
  fileName?: string;
  fileSize?: string;
}

export interface AdminV1Feedback {
  category?: string;
  contact?: string;
  content?: string;
  createdAt?: string;
  id?: string;
  images?: Array<string>;
  repliedAt?: string;
  reply?: string;
  status?: string;
  userId?: string;
}

export interface AdminV1FeedbackCategoryStats {
  category?: string;
  count?: string;
}

/** 意见反馈统计 */
export interface AdminV1FeedbackStats {
  categoryStats?: Array<AdminV1FeedbackCategoryStats>;
  ignoredFeedbacks?: string;
  pendingFeedbacks?: string;
  processedFeedbacks?: string;
  totalFeedbacks?: string;
}

/** 冻结用户资金请求 */
export interface AdminV1FreezeUserBalanceRequest {
  amount?: string;
  userId?: string;
}

/** 冻结用户请求 */
export interface AdminV1FreezeUserRequest {
  duration?: string;
  id?: string;
  reason?: string;
}

/** 生成实验报告请求 */
export interface AdminV1GenerateExperimentReportRequest {
  id?: string;
  reportType?: string;
}

export interface AdminV1Get2FAStatusReply {
  createdAt?: string;
  enabled?: boolean;
  qrCode?: string;
  secretKey?: string;
}

/** 获取访问日志响应 */
export interface AdminV1GetAccessLogsResponse {
  logs?: Array<AdminV1AccessLog>;
  total?: string;
}

/** 获取活动列表响应 */
export interface AdminV1GetActivitiesResponse {
  activities?: Array<AdminV1Activity>;
  total?: string;
}

/** 获取管理员角色响应 */
export interface AdminV1GetAdminRolesResponse {
  roles?: Array<AdminV1Role>;
}

/** 获取广告列表响应 */
export interface AdminV1GetAdvertisementsResponse {
  advertisements?: Array<AdminV1Advertisement>;
  total?: string;
}

/** 获取所有服务健康状态响应 */
export interface AdminV1GetAllServiceHealthResponse {
  services?: Array<AdminV1ServiceHealth>;
}

/** 获取公告列表响应 */
export interface AdminV1GetAnnouncementsResponse {
  announcements?: Array<AdminV1Announcement>;
  total?: string;
}

/** 获取申诉列表响应 */
export interface AdminV1GetAppealsResponse {
  appeals?: Array<AdminV1Appeal>;
  total?: string;
}

export interface AdminV1GetAuditLogsResponse {
  items?: Array<AdminV1AuditLog>;
  total?: string;
}

/** 获取备份列表响应 */
export interface AdminV1GetBackupsResponse {
  backups?: Array<AdminV1Backup>;
  total?: string;
}

/** 获取分类列表响应 */
export interface AdminV1GetCategoriesResponse {
  categories?: Array<AdminV1CategoryDetail>;
  total?: string;
}

/** 获取评论列表响应 */
export interface AdminV1GetCommentsResponse {
  comments?: Array<AdminV1CommentDetail>;
  total?: string;
}

/** 获取配置项列表响应 */
export interface AdminV1GetConfigItemsResponse {
  items?: Array<AdminV1ConfigItem>;
  total?: string;
}

/** 获取待审核内容列表响应 */
export interface AdminV1GetContentPendingReviewsResponse {
  items?: Array<AdminV1ContentPendingReview>;
  total?: string;
}

export interface AdminV1GetCouponsResponse {
  items?: Array<AdminV1Coupon>;
  total?: string;
}

/** 获取自定义报表列表响应 */
export interface AdminV1GetCustomReportsResponse {
  reports?: Array<AdminV1CustomReport>;
  total?: string;
}

/** 获取错误日志响应 */
export interface AdminV1GetErrorLogsResponse {
  logs?: Array<AdminV1ErrorLog>;
  total?: string;
}

/** 获取实验数据响应 */
export interface AdminV1GetExperimentDataResponse {
  dataPoints?: Array<AdminV1ExperimentDataPoint>;
}

/** 获取实验指标响应 */
export interface AdminV1GetExperimentMetricsResponse {
  metrics?: Array<AdminV1ExperimentMetric>;
}

/** 获取实验变体响应 */
export interface AdminV1GetExperimentVariantsResponse {
  variants?: Array<AdminV1ExperimentVariant>;
}

/** 获取实验列表响应 */
export interface AdminV1GetExperimentsResponse {
  experiments?: Array<AdminV1Experiment>;
  total?: string;
}

/** 验证码相关消息定义 */
export interface AdminV1GetFakeCaptchaReply {
  captchaId?: string;
  captchaImage?: string;
  expireTime?: string;
}

/** 获取意见反馈列表响应 */
export interface AdminV1GetFeedbacksResponse {
  feedbacks?: Array<AdminV1Feedback>;
  total?: string;
}

/** 获取帮助文档列表响应 */
export interface AdminV1GetHelpDocumentsResponse {
  documents?: Array<AdminV1HelpDocument>;
  total?: string;
}

/** 获取商品列表响应 */
export interface AdminV1GetMallItemsResponse {
  items?: Array<AdminV1MallItem>;
  total?: string;
}

/** 获取兑换记录响应 */
export interface AdminV1GetMallRedemptionsResponse {
  redemptions?: Array<AdminV1MallRedemption>;
  total?: string;
}

export interface AdminV1GetMembershipPlansResponse {
  items?: Array<AdminV1MembershipPlan>;
  total?: string;
}

/** 获取订单列表响应 */
export interface AdminV1GetOrdersResponse {
  orders?: Array<AdminV1Order>;
  total?: string;
}

/** 获取支付渠道响应 */
export interface AdminV1GetPaymentChannelsResponse {
  channels?: Array<AdminV1PaymentChannel>;
  total?: string;
}

/** 获取支付记录响应 */
export interface AdminV1GetPaymentsResponse {
  payments?: Array<AdminV1Payment>;
  total?: string;
}

/** 获取待审核内容列表响应 */
export interface AdminV1GetPendingReviewsResponse {
  items?: Array<AdminV1PendingReview>;
  total?: string;
}

/** 获取权限列表响应 */
export interface AdminV1GetPermissionsResponse {
  permissions?: Array<AdminV1Permission>;
  total?: string;
}

/** 获取推送列表响应 */
export interface AdminV1GetPushNotificationsResponse {
  notifications?: Array<AdminV1PushNotification>;
  total?: string;
}

/** 获取举报类型列表响应 */
export interface AdminV1GetReportTypesResponse {
  total?: string;
  types?: Array<AdminV1ReportType>;
}

/** 获取举报列表响应 */
export interface AdminV1GetReportsResponse {
  reports?: Array<AdminV1Report>;
  total?: string;
}

/** 获取审核历史响应 */
export interface AdminV1GetReviewHistoryResponse {
  history?: Array<AdminV1ReviewHistory>;
  total?: string;
}

/** 获取审核记录响应 */
export interface AdminV1GetReviewRecordsResponse {
  records?: Array<AdminV1ReviewRecord>;
  total?: string;
}

/** 获取审核规则列表响应 */
export interface AdminV1GetReviewRulesResponse {
  rules?: Array<AdminV1ReviewRule>;
  total?: string;
}

export interface AdminV1GetRiskTransactionsResponse {
  items?: Array<AdminV1RiskTransaction>;
  total?: string;
}

/** 获取风险用户响应 */
export interface AdminV1GetRiskUsersResponse {
  total?: string;
  users?: Array<AdminV1RiskUser>;
}

/** 获取角色列表响应 */
export interface AdminV1GetRolesResponse {
  roles?: Array<AdminV1Role>;
  total?: string;
}

/** 获取定时任务列表响应 */
export interface AdminV1GetScheduledTasksResponse {
  tasks?: Array<AdminV1ScheduledTask>;
  total?: string;
}

/** 获取敏感词列表响应 */
export interface AdminV1GetSensitiveWordsResponse {
  total?: string;
  words?: Array<AdminV1SensitiveWord>;
}

export interface AdminV1GetSettlementsResponse {
  items?: Array<AdminV1Settlement>;
  total?: string;
}

/** 获取系统日志响应 */
export interface AdminV1GetSystemLogsResponse {
  logs?: Array<AdminV1LogEntry>;
  total?: string;
}

/** 获取系统通知列表响应 */
export interface AdminV1GetSystemNotificationsResponse {
  items?: Array<AdminV1SystemNotification>;
  total?: string;
}

/** 获取系统设置响应 */
export interface AdminV1GetSystemSettingsResponse {
  settings?: Array<AdminV1SystemSettings>;
}

/** 获取任务执行历史响应 */
export interface AdminV1GetTaskHistoryResponse {
  history?: Array<AdminV1TaskExecution>;
  total?: string;
}

/** 获取任务列表响应 */
export interface AdminV1GetTasksResponse {
  tasks?: Array<AdminV1Task>;
  total?: string;
}

/** 获取话题列表响应 */
export interface AdminV1GetTopicsResponse {
  topics?: Array<AdminV1TopicDetail>;
  total?: string;
}

/** 获取用户操作日志响应 */
export interface AdminV1GetUserLogsResponse {
  logs?: Array<AdminV1UserLog>;
  total?: string;
}

/** 获取用户风险记录响应 */
export interface AdminV1GetUserRiskRecordsResponse {
  records?: Array<AdminV1RiskRecord>;
  total?: string;
}

/** 获取用户标签响应 */
export interface AdminV1GetUserTagsResponse {
  tags?: Array<AdminV1UserTag>;
}

/** 获取用户钱包列表响应 */
export interface AdminV1GetUserWalletsResponse {
  total?: string;
  wallets?: Array<AdminV1UserWallet>;
}

/** 获取用户列表响应 */
export interface AdminV1GetUsersResponse {
  total?: string;
  users?: Array<AdminV1UserDetail>;
}

/** 获取视频列表响应 */
export interface AdminV1GetVideosResponse {
  total?: string;
  videos?: Array<AdminV1VideoDetail>;
}

/** 获取钱包交易记录响应 */
export interface AdminV1GetWalletTransactionsResponse {
  items?: Array<AdminV1WalletTransaction>;
  total?: string;
}

export interface AdminV1GetWithdrawalsResponse {
  items?: Array<AdminV1Withdrawal>;
  total?: string;
}

/** 增长数据 */
export interface AdminV1GrowthData {
  activeUsers?: string;
  date?: string;
  newUsers?: string;
  totalUsers?: string;
}

export interface AdminV1HelpDocument {
  category?: string;
  content?: string;
  createdAt?: string;
  enabled?: boolean;
  id?: string;
  /** @format int32 */
  sortOrder?: number;
  title?: string;
  updatedAt?: string;
}

/** 热门内容 */
export interface AdminV1HotContent {
  comments?: string;
  contentType?: string;
  /** @format double */
  engagementRate?: number;
  id?: string;
  likes?: string;
  shares?: string;
  title?: string;
  userId?: string;
  username?: string;
  views?: string;
}

/** 热门内容统计 */
export interface AdminV1HotContentStats {
  data?: Array<AdminV1HotContent>;
}

/** 忽略举报请求 */
export interface AdminV1IgnoreReportRequest {
  id?: string;
  reason?: string;
}

/** 导入敏感词请求 */
export interface AdminV1ImportSensitiveWordsRequest {
  fileUrl?: string;
  overwrite?: boolean;
}

/** 导入敏感词响应 */
export interface AdminV1ImportSensitiveWordsResponse {
  errors?: Array<string>;
  importedCount?: string;
  skippedCount?: string;
  updatedCount?: string;
}

/** 导入用户数据请求 */
export interface AdminV1ImportUsersRequest {
  fileUrl?: string;
  updateExisting?: boolean;
}

/** 导入用户数据响应 */
export interface AdminV1ImportUsersResponse {
  errors?: Array<string>;
  failureCount?: string;
  successCount?: string;
  totalCount?: string;
}

/** 互动数据 */
export interface AdminV1InteractionData {
  collects?: string;
  comments?: string;
  date?: string;
  likes?: string;
  shares?: string;
}

export interface AdminV1List2FAStatusReply {
  items?: Array<AdminV1Admin2FAStatus>;
  total?: string;
}

export interface AdminV1ListAdminRolesReply {
  roles?: Array<AdminV1Role>;
}

export interface AdminV1ListAdminsReply {
  admins?: Array<AdminV1AdminInfo>;
  total?: string;
}

export interface AdminV1ListAdsReply {
  ads?: Array<AdminV1Ad>;
  total?: string;
}

export interface AdminV1ListAnchorVerifiesReply {
  total?: string;
  verifies?: Array<AdminV1AnchorVerify>;
}

export interface AdminV1ListAnchorsReply {
  anchors?: Array<AdminV1Anchor>;
  total?: string;
}

export interface AdminV1ListPermissionsReply {
  permissions?: Array<AdminV1Permission>;
  total?: string;
}

export interface AdminV1ListRolePermissionsReply {
  permissions?: Array<AdminV1Permission>;
}

export interface AdminV1ListRolesReply {
  roles?: Array<AdminV1Role>;
  total?: string;
}

export interface AdminV1ListUsersReply {
  total?: string;
  users?: Array<AdminV1User>;
}

export interface AdminV1ListVideoCategoriesReply {
  categories?: Array<AdminV1VideoCategory>;
  total?: string;
}

export interface AdminV1ListVideosReply {
  total?: string;
  videos?: Array<AdminV1Video>;
}

/** 日志条目 */
export interface AdminV1LogEntry {
  context?: string;
  file?: string;
  id?: string;
  level?: string;
  line?: string;
  message?: string;
  module?: string;
  service?: string;
  timestamp?: string;
}

/** 登录响应 */
export interface AdminV1LoginReply {
  refreshToken?: string;
  token?: string;
}

/** 登录请求 */
export interface AdminV1LoginReq {
  password?: string;
  username?: string;
}

export interface AdminV1LogoutReply {
  message?: string;
}

/** 维护模式状态 */
export interface AdminV1MaintenanceModeStatus {
  enabled?: boolean;
  reason?: string;
  startedAt?: string;
}

export interface AdminV1MallItem {
  category?: string;
  createdAt?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  imageUrl?: string;
  name?: string;
  /** @format int32 */
  pricePoints?: number;
  /** @format int32 */
  stock?: number;
  updatedAt?: string;
}

export interface AdminV1MallItemStats {
  itemId?: string;
  itemName?: string;
  redemptions?: string;
}

export interface AdminV1MallRedemption {
  createdAt?: string;
  id?: string;
  itemId?: string;
  itemName?: string;
  /** @format int32 */
  pointsSpent?: number;
  userId?: string;
}

/** 积分商城统计 */
export interface AdminV1MallStats {
  itemStats?: Array<AdminV1MallItemStats>;
  totalPointsSpent?: string;
  totalRedemptions?: string;
}

export interface AdminV1MarkRiskTransactionRequest {
  id?: string;
  riskLevel?: string;
  riskReason?: string;
}

/** 标记风险用户请求 */
export interface AdminV1MarkRiskUserRequest {
  reason?: string;
  riskLevel?: string;
  userId?: string;
}

export interface AdminV1MembershipPlan {
  createdAt?: string;
  description?: string;
  /** @format int32 */
  durationDays?: number;
  features?: string;
  id?: string;
  name?: string;
  price?: string;
  status?: string;
  updatedAt?: string;
}

export interface AdminV1MembershipStats {
  expiredMembers?: string;
  newMembers?: string;
  totalMembers?: string;
  totalRevenue?: string;
}

export interface AdminV1MetricResult {
  metricId?: string;
  metricName?: string;
  variantMetrics?: Array<AdminV1VariantMetric>;
}

export interface AdminV1MetricValue {
  count?: string;
  metricName?: string;
  /** @format double */
  value?: number;
}

/** 在线用户数据 */
export interface AdminV1OnlineUserData {
  count?: string;
  timestamp?: string;
}

/** 优化数据库请求 */
export interface AdminV1OptimizeDatabaseRequest {
  analyze?: boolean;
  table?: string;
}

/** 订单信息 */
export interface AdminV1Order {
  amount?: string;
  createdAt?: string;
  currency?: string;
  id?: string;
  orderNo?: string;
  paidAt?: string;
  paymentMethod?: string;
  productId?: string;
  productType?: string;
  status?: string;
  updatedAt?: string;
  userId?: string;
}

/** 订单统计 */
export interface AdminV1OrderStats {
  cancelledOrders?: string;
  completedOrders?: string;
  pendingOrders?: string;
  refundedOrders?: string;
  statusStats?: Array<AdminV1OrderStatusStats>;
  totalAmount?: string;
  totalOrders?: string;
  typeStats?: Array<AdminV1OrderTypeStats>;
}

/** 订单状态统计 */
export interface AdminV1OrderStatusStats {
  amount?: string;
  count?: string;
  status?: string;
}

/** 订单趋势 */
export interface AdminV1OrderTrend {
  data?: Array<AdminV1TrendData>;
}

/** 订单类型统计 */
export interface AdminV1OrderTypeStats {
  amount?: string;
  count?: string;
  type?: string;
}

/** 页面访问数据 */
export interface AdminV1PageViewData {
  /** @format double */
  avgTimeOnPage?: number;
  /** @format double */
  bounceRate?: number;
  page?: string;
  uniqueVisitors?: string;
  views?: string;
}

/** 页面访问统计 */
export interface AdminV1PageViewStats {
  pages?: Array<AdminV1PageViewData>;
}

/** 路径节点 */
export interface AdminV1PathNode {
  /** @format double */
  dropOffRate?: number;
  nextNodes?: Array<AdminV1PathNode>;
  page?: string;
  visits?: string;
}

/** 暂停实验请求 */
export interface AdminV1PauseExperimentRequest {
  id?: string;
}

/** 付费用户数据 */
export interface AdminV1PayingUserData {
  date?: string;
  payingUsers?: string;
  /** @format double */
  revenue?: number;
}

/** 付费用户统计 */
export interface AdminV1PayingUserStats {
  /** @format double */
  avgRevenuePerUser?: number;
  data?: Array<AdminV1PayingUserData>;
  newPayingUsers?: string;
  /** @format double */
  payingRate?: number;
  totalPayingUsers?: string;
}

/** 支付信息 */
export interface AdminV1Payment {
  amount?: string;
  channel?: string;
  createdAt?: string;
  currency?: string;
  id?: string;
  method?: string;
  orderId?: string;
  paidAt?: string;
  paymentNo?: string;
  status?: string;
  transactionId?: string;
  updatedAt?: string;
  userId?: string;
}

/** 支付渠道 */
export interface AdminV1PaymentChannel {
  code?: string;
  config?: string;
  createdAt?: string;
  id?: string;
  isEnabled?: boolean;
  name?: string;
  type?: string;
  updatedAt?: string;
}

/** 支付方式统计 */
export interface AdminV1PaymentMethodStats {
  amount?: string;
  count?: string;
  method?: string;
  /** @format float */
  percentage?: number;
}

/** 支付统计 */
export interface AdminV1PaymentStats {
  failedPayments?: string;
  methodStats?: Array<AdminV1PaymentMethodStats>;
  successPayments?: string;
  totalAmount?: string;
  totalPayments?: string;
}

/** 待审核内容 */
export interface AdminV1PendingReview {
  authorName?: string;
  contentId?: string;
  contentType?: string;
  createdAt?: string;
  description?: string;
  id?: string;
  priority?: string;
  reason?: string;
  reportedCount?: string;
  title?: string;
}

/** 权限信息 */
export interface AdminV1Permission {
  createdAt?: string;
  description?: string;
  id?: string;
  module?: string;
  name?: string;
  slug?: string;
  updatedAt?: string;
}

/** 处理申诉请求 */
export interface AdminV1ProcessAppealRequest {
  action?: string;
  id?: string;
  note?: string;
  reason?: string;
}

/** 处理意见反馈请求 */
export interface AdminV1ProcessFeedbackRequest {
  id?: string;
  note?: string;
  reply?: string;
  status?: string;
}

/** 进程信息 */
export interface AdminV1ProcessInfo {
  /** @format double */
  cpuUsage?: number;
  memoryUsage?: string;
  name?: string;
  pid?: string;
  status?: string;
}

/** 处理举报请求 */
export interface AdminV1ProcessReportRequest {
  action?: string;
  /** @format int32 */
  duration?: number;
  id?: string;
  note?: string;
  reason?: string;
}

export interface AdminV1ProcessRiskTransactionRequest {
  action?: string;
  id?: string;
  reason?: string;
}

export interface AdminV1ProcessSettlementRequest {
  action?: string;
  id?: string;
  reason?: string;
}

export interface AdminV1ProcessWithdrawalRequest {
  id?: string;
  transactionId?: string;
}

/** 商品销售数据 */
export interface AdminV1ProductSalesData {
  /** @format double */
  avgPrice?: number;
  productId?: string;
  productName?: string;
  /** @format double */
  revenue?: number;
  sales?: string;
}

/** 商品销售统计 */
export interface AdminV1ProductSalesStats {
  products?: Array<AdminV1ProductSalesData>;
}

export interface AdminV1ProfitReport {
  netProfit?: string;
  /** @format float */
  profitMargin?: number;
  totalExpense?: string;
  totalRevenue?: string;
}

/** 发布公告请求 */
export interface AdminV1PublishAnnouncementRequest {
  id?: string;
}

export interface AdminV1PushNotification {
  content?: string;
  createdAt?: string;
  id?: string;
  linkUrl?: string;
  sendTime?: string;
  status?: string;
  targetType?: string;
  targetValues?: Array<string>;
  title?: string;
}

/** 推送统计 */
export interface AdminV1PushNotificationStats {
  /** @format double */
  openRate?: number;
  totalDelivered?: string;
  totalOpened?: string;
  totalSent?: string;
}

/** 质量分布 */
export interface AdminV1QualityDistribution {
  count?: string;
  /** @format double */
  percentage?: number;
  qualityLevel?: string;
}

/** 查询结果 */
export interface AdminV1QueryResult {
  affectedRows?: string;
  columns?: Array<string>;
  executionTime?: string;
  rows?: Array<AdminV1QueryRow>;
}

/** 查询行 */
export interface AdminV1QueryRow {
  values?: Array<string>;
}

/** 队列信息 */
export interface AdminV1QueueInfo {
  completed?: string;
  failed?: string;
  name?: string;
  pending?: string;
  processing?: string;
}

/** 消息队列状态 */
export interface AdminV1QueueStatus {
  completedJobs?: string;
  driver?: string;
  failedJobs?: string;
  pendingJobs?: string;
  processingJobs?: string;
  queues?: Array<AdminV1QueueInfo>;
  totalJobs?: string;
}

/** 实时内容发布 */
export interface AdminV1RealtimeContentPublish {
  data?: Array<AdminV1ContentPublishData>;
  totalPublished?: string;
}

/** 实时互动数据 */
export interface AdminV1RealtimeInteraction {
  data?: Array<AdminV1InteractionData>;
  totalComments?: string;
  totalLikes?: string;
  totalShares?: string;
}

/** 实时在线用户 */
export interface AdminV1RealtimeOnlineUsers {
  currentOnline?: string;
  data?: Array<AdminV1OnlineUserData>;
  peakOnline?: string;
}

/** 实时流量数据 */
export interface AdminV1RealtimeTraffic {
  currentPageViews?: string;
  currentVisits?: string;
  data?: Array<AdminV1TrafficData>;
}

/** 推荐话题请求 */
export interface AdminV1RecommendTopicRequest {
  duration?: string;
  id?: string;
}

/** 推荐视频请求 */
export interface AdminV1RecommendVideoRequest {
  duration?: string;
  id?: string;
}

/** 刷新 token 响应 */
export interface AdminV1RefreshTokenReply {
  refreshToken?: string;
  token?: string;
}

/** 刷新 token 请求 */
export interface AdminV1RefreshTokenReq {
  refreshToken?: string;
}

/** 退款订单请求 */
export interface AdminV1RefundOrderRequest {
  id?: string;
  reason?: string;
  refundAmount?: string;
  refundMethod?: string;
}

/** 拒绝申诉请求 */
export interface AdminV1RejectAppealRequest {
  id?: string;
  note?: string;
  reason?: string;
}

/** 拒绝支付请求 */
export interface AdminV1RejectPaymentRequest {
  id?: string;
  reason?: string;
}

/** 移除用户标签请求 */
export interface AdminV1RemoveUserTagsRequest {
  id?: string;
  tagIds?: Array<string>;
}

/** 修复数据库请求 */
export interface AdminV1RepairDatabaseRequest {
  table?: string;
}

/** 回复评论请求 */
export interface AdminV1ReplyCommentRequest {
  content?: string;
  id?: string;
}

/** 举报 */
export interface AdminV1Report {
  createdAt?: string;
  description?: string;
  evidenceUrls?: string;
  id?: string;
  processedAction?: string;
  processedAt?: string;
  processedBy?: string;
  processedReason?: string;
  reason?: string;
  reportTypeId?: string;
  reportTypeName?: string;
  reporterId?: string;
  reporterName?: string;
  status?: string;
  targetId?: string;
  targetTitle?: string;
  targetType?: string;
  updatedAt?: string;
}

/** 举报处理统计 */
export interface AdminV1ReportProcessStats {
  actionStats?: Array<AdminV1ActionCount>;
  adminStats?: Array<AdminV1AdminStats>;
  avgProcessTime?: string;
  totalProcessed?: string;
}

/** 举报统计 */
export interface AdminV1ReportStats {
  closedReports?: string;
  ignoredReports?: string;
  pendingReports?: string;
  processingReports?: string;
  resolvedReports?: string;
  statusStats?: Array<AdminV1ReportStatusStats>;
  totalReports?: string;
  typeStats?: Array<AdminV1ReportTypeStats>;
}

/** 举报状态统计 */
export interface AdminV1ReportStatusStats {
  count?: string;
  /** @format double */
  percentage?: number;
  status?: string;
}

/** 举报趋势 */
export interface AdminV1ReportTrend {
  data?: Array<AdminV1TrendData>;
}

/** 举报类型 */
export interface AdminV1ReportType {
  category?: string;
  createdAt?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  name?: string;
  /** @format int32 */
  priority?: number;
  updatedAt?: string;
}

/** 举报类型统计 */
export interface AdminV1ReportTypeStats {
  data?: Array<AdminV1TypeCount>;
}

/** 重置密码请求 */
export interface AdminV1ResetPasswordRequest {
  adminId?: string;
  newPassword?: string;
}

/** 重置系统设置请求 */
export interface AdminV1ResetSystemSettingsRequest {
  category?: string;
}

/** 恢复备份请求 */
export interface AdminV1RestoreBackupRequest {
  id?: string;
  overwrite?: boolean;
}

/** 留存数据 */
export interface AdminV1RetentionData {
  date?: string;
  newUsers?: string;
  retainedUsers?: string;
  /** @format double */
  retentionRate?: number;
}

/** 收入数据 */
export interface AdminV1RevenueData {
  date?: string;
  orders?: string;
  /** @format double */
  revenue?: number;
}

/** 收入概览 */
export interface AdminV1RevenueOverview {
  /** @format double */
  avgOrderValue?: number;
  /** @format double */
  conversionRate?: number;
  /** @format double */
  customerLifetimeValue?: number;
  totalCustomers?: string;
  /** @format double */
  totalOrders?: number;
  /** @format double */
  totalRevenue?: number;
}

export interface AdminV1RevenueReport {
  /** @format float */
  growthRate?: number;
  items?: Array<AdminV1RevenueData>;
  totalRevenue?: string;
}

/** 收入趋势 */
export interface AdminV1RevenueTrend {
  data?: Array<AdminV1RevenueData>;
  /** @format double */
  growthRate?: number;
}

/** 审核评论请求 */
export interface AdminV1ReviewCommentRequest {
  id?: string;
  remark?: string;
  /** @format int32 */
  status?: number;
}

/** 审核内容请求 */
export interface AdminV1ReviewContentRequest {
  action?: string;
  id?: string;
  note?: string;
  reason?: string;
}

/** 审核详情 */
export interface AdminV1ReviewDetail {
  authorName?: string;
  content?: string;
  contentId?: string;
  contentType?: string;
  createdAt?: string;
  evidenceUrls?: Array<string>;
  id?: string;
  reason?: string;
  reviewedAt?: string;
  reviewerId?: string;
  reviewerName?: string;
  status?: string;
  title?: string;
}

/** 审核历史 */
export interface AdminV1ReviewHistory {
  action?: string;
  contentId?: string;
  contentType?: string;
  id?: string;
  reason?: string;
  reviewedAt?: string;
  reviewerId?: string;
  reviewerName?: string;
  title?: string;
}

/** 审核项 */
export interface AdminV1ReviewItem {
  contentType?: string;
  id?: string;
  remark?: string;
  /** @format int32 */
  status?: number;
}

/** 审核记录 */
export interface AdminV1ReviewRecord {
  contentId?: string;
  contentTitle?: string;
  contentType?: string;
  id?: string;
  remark?: string;
  reviewedAt?: string;
  reviewerId?: string;
  reviewerName?: string;
  /** @format int32 */
  status?: number;
}

/** 审核结果 */
export interface AdminV1ReviewResult {
  action?: string;
  id?: string;
  reviewedAt?: string;
  reviewedBy?: string;
  status?: string;
}

/** 审核规则 */
export interface AdminV1ReviewRule {
  action?: string;
  contentType?: string;
  createdAt?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  name?: string;
  /** @format int32 */
  priority?: number;
  ruleContent?: string;
  ruleType?: string;
  updatedAt?: string;
}

/** 审核视频请求 */
export interface AdminV1ReviewVideoRequest {
  id?: string;
  remark?: string;
  /** @format int32 */
  status?: number;
}

export interface AdminV1ReviewWithdrawalRequest {
  action?: string;
  id?: string;
  reason?: string;
}

/** 风险记录 */
export interface AdminV1RiskRecord {
  action?: string;
  createdAt?: string;
  id?: string;
  operatorId?: string;
  operatorName?: string;
  reason?: string;
  riskLevel?: string;
  userId?: string;
}

export interface AdminV1RiskTransaction {
  amount?: string;
  createdAt?: string;
  id?: string;
  riskLevel?: string;
  riskReason?: string;
  status?: string;
  transactionId?: string;
  updatedAt?: string;
  userId?: string;
}

/** 风险用户 */
export interface AdminV1RiskUser {
  avatar?: string;
  markedAt?: string;
  markedBy?: string;
  markerName?: string;
  reason?: string;
  reportCount?: string;
  riskLevel?: string;
  userId?: string;
  username?: string;
  violationCount?: string;
}

/** 风险用户详情 */
export interface AdminV1RiskUserDetail {
  recentReports?: Array<AdminV1Report>;
  records?: Array<AdminV1RiskRecord>;
  /** 风险用户 */
  user?: AdminV1RiskUser;
}

/** 角色信息 */
export interface AdminV1Role {
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  permissions?: Array<AdminV1Permission>;
  slug?: string;
  updatedAt?: string;
}

/** 行数据 */
export interface AdminV1RowData {
  values?: Array<string>;
}

/** 定时任务 */
export interface AdminV1ScheduledTask {
  command?: string;
  cron?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  lastRun?: string;
  name?: string;
  nextRun?: string;
  status?: string;
}

/** 发送推送请求 */
export interface AdminV1SendPushNotificationRequest {
  id?: string;
}

/** 发送系统通知请求 */
export interface AdminV1SendSystemNotificationRequest {
  content?: string;
  target?: string;
  title?: string;
  type?: string;
}

/** 敏感词 */
export interface AdminV1SensitiveWord {
  category?: string;
  createdAt?: string;
  enabled?: boolean;
  id?: string;
  /** @format int32 */
  level?: number;
  note?: string;
  replacement?: string;
  updatedAt?: string;
  word?: string;
}

/** 服务健康状态 */
export interface AdminV1ServiceHealth {
  lastCheck?: string;
  message?: string;
  name?: string;
  responseTime?: string;
  status?: string;
}

export interface AdminV1Settlement {
  amount?: string;
  createdAt?: string;
  fee?: string;
  id?: string;
  merchantId?: string;
  processedAt?: string;
  settlementNo?: string;
  status?: string;
  updatedAt?: string;
}

export interface AdminV1SettlementStats {
  pendingAmount?: string;
  pendingCount?: string;
  totalAmount?: string;
  totalCount?: string;
}

/** 来源数据 */
export interface AdminV1SourceData {
  /** @format double */
  conversionRate?: number;
  /** @format double */
  percentage?: number;
  source?: string;
  visits?: string;
}

/** 启动实验请求 */
export interface AdminV1StartExperimentRequest {
  id?: string;
}

/** 停止实验请求 */
export interface AdminV1StopExperimentRequest {
  id?: string;
  reason?: string;
}

/** 系统配置 */
export interface AdminV1SystemConfig {
  adminEmail?: string;
  aiApiKey?: string;
  aiModel?: string;
  aiProvider?: string;
  allowComments?: boolean;
  allowRegistration?: boolean;
  allowUploads?: boolean;
  analyticsProvider?: string;
  analyticsTrackingId?: string;
  /** @format int32 */
  cacheTtl?: number;
  captchaEnabled?: boolean;
  cdnUrl?: string;
  dateFormat?: string;
  defaultLanguage?: string;
  defaultTimezone?: string;
  emailVerification?: boolean;
  enableCache?: boolean;
  enableCdn?: boolean;
  enableCompression?: boolean;
  enableHttps?: boolean;
  /** @format int32 */
  itemsPerPage?: number;
  maintenanceMessage?: string;
  maintenanceMode?: boolean;
  maxAvatarSize?: string;
  /** @format int32 */
  maxItemsPerPage?: number;
  /** @format int32 */
  maxLoginAttempts?: number;
  maxUploadSize?: string;
  notificationEmail?: string;
  ossAccessKey?: string;
  ossBucket?: string;
  ossDomain?: string;
  ossEndpoint?: string;
  ossProvider?: string;
  ossSecretKey?: string;
  /** @format int32 */
  passwordComplexity?: number;
  /** @format int32 */
  passwordMinLength?: number;
  paymentAccessKey?: string;
  paymentProvider?: string;
  paymentSecretKey?: string;
  paymentWebhookUrl?: string;
  phoneVerification?: boolean;
  pushAccessKey?: string;
  pushProvider?: string;
  pushSecretKey?: string;
  searchApiKey?: string;
  searchIndexName?: string;
  searchProvider?: string;
  /** @format int32 */
  sessionTimeout?: number;
  siteAnalytics?: string;
  siteDescription?: string;
  siteFavicon?: string;
  siteIcp?: string;
  siteKeywords?: string;
  siteLogo?: string;
  siteName?: string;
  smsAccessKey?: string;
  smsProvider?: string;
  smsSecretKey?: string;
  smsSignName?: string;
  smtpHost?: string;
  smtpPassword?: string;
  /** @format int32 */
  smtpPort?: number;
  smtpUsername?: string;
  sslCertPath?: string;
  sslKeyPath?: string;
  supportEmail?: string;
  timeFormat?: string;
}

/** 系统通知 */
export interface AdminV1SystemNotification {
  content?: string;
  createdAt?: string;
  id?: string;
  isRead?: boolean;
  target?: string;
  title?: string;
  type?: string;
  updatedAt?: string;
}

/** 系统资源 */
export interface AdminV1SystemResources {
  cpuCores?: string;
  /** @format double */
  cpuUsagePercent?: number;
  /** @format double */
  diskUsagePercent?: number;
  freeDisk?: string;
  freeMemory?: string;
  /** @format double */
  memoryUsagePercent?: number;
  networkIn?: string;
  networkOut?: string;
  processes?: Array<AdminV1ProcessInfo>;
  totalDisk?: string;
  totalMemory?: string;
  usedDisk?: string;
  usedMemory?: string;
}

/** 系统设置 */
export interface AdminV1SystemSettings {
  category?: string;
  createdAt?: string;
  description?: string;
  isPublic?: boolean;
  key?: string;
  type?: string;
  updatedAt?: string;
  value?: string;
}

/** 系统状态 */
export interface AdminV1SystemStatus {
  connections?: string;
  cpuUsage?: string;
  diskUsage?: string;
  environment?: string;
  goVersion?: string;
  goroutines?: string;
  healthy?: boolean;
  memoryUsage?: string;
  startTime?: string;
  uptime?: string;
  version?: string;
}

/** 表状态 */
export interface AdminV1TableStatus {
  collation?: string;
  dataLength?: string;
  engine?: string;
  indexLength?: string;
  name?: string;
  rows?: string;
}

export interface AdminV1Task {
  action?: string;
  /** @format int32 */
  completionCount?: number;
  createdAt?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  name?: string;
  /** @format int32 */
  rewardPoints?: number;
  type?: string;
  updatedAt?: string;
}

export interface AdminV1TaskCompletionStats {
  completions?: string;
  taskId?: string;
  taskName?: string;
}

/** 任务详情 */
export interface AdminV1TaskDetail {
  completedAt?: string;
  createdAt?: string;
  estimatedCompletion?: string;
  id?: string;
  message?: string;
  name?: string;
  progress?: string;
  startedAt?: string;
  status?: string;
  type?: string;
}

/** 任务执行 */
export interface AdminV1TaskExecution {
  completedAt?: string;
  duration?: string;
  error?: string;
  id?: string;
  output?: string;
  startedAt?: string;
  status?: string;
  taskName?: string;
}

/** 任务结果 */
export interface AdminV1TaskResult {
  data?: string;
  message?: string;
  success?: boolean;
}

/** 任务统计 */
export interface AdminV1TaskStats {
  taskStats?: Array<AdminV1TaskCompletionStats>;
  totalCompletions?: string;
  totalRewards?: string;
}

/** 启用/禁用支付渠道请求 */
export interface AdminV1TogglePaymentChannelRequest {
  enabled?: boolean;
  id?: string;
}

/** 切换审核规则请求 */
export interface AdminV1ToggleReviewRuleRequest {
  enabled?: boolean;
  id?: string;
}

/** 置顶话题请求 */
export interface AdminV1TopTopicRequest {
  duration?: string;
  id?: string;
}

/** 置顶视频请求 */
export interface AdminV1TopVideoRequest {
  duration?: string;
  id?: string;
}

/** 话题详情 */
export interface AdminV1TopicDetail {
  categories?: Array<CommonV1Category>;
  coverUrl?: string;
  createdAt?: string;
  /** 通用用户信息 */
  creator?: CommonV1UserInfo;
  description?: string;
  /** @format int32 */
  followerCount?: number;
  id?: string;
  isRecommended?: boolean;
  isTop?: boolean;
  recommendedAt?: string;
  /** @format int32 */
  status?: number;
  title?: string;
  topAt?: string;
  updatedAt?: string;
  /** @format int32 */
  videoCount?: number;
  /** @format int32 */
  viewCount?: number;
}

/** 流量数据 */
export interface AdminV1TrafficData {
  pageViews?: string;
  timestamp?: string;
  visits?: string;
}

/** 流量概览 */
export interface AdminV1TrafficOverview {
  /** @format double */
  avgSessionDuration?: number;
  /** @format double */
  bounceRate?: number;
  newVisitors?: string;
  returningVisitors?: string;
  totalPageViews?: string;
  totalVisits?: string;
  uniqueVisitors?: string;
}

/** 流量来源统计 */
export interface AdminV1TrafficSourceStats {
  sources?: Array<AdminV1SourceData>;
}

/** 趋势数据 */
export interface AdminV1TrendData {
  count?: string;
  date?: string;
  label?: string;
}

/** 类型统计 */
export interface AdminV1TypeCount {
  count?: string;
  /** @format double */
  percentage?: number;
  type?: string;
}

/** 解冻用户资金请求 */
export interface AdminV1UnfreezeUserBalanceRequest {
  amount?: string;
  reason?: string;
  userId?: string;
}

/** 解冻用户请求 */
export interface AdminV1UnfreezeUserRequest {
  id?: string;
  reason?: string;
}

/** 取消标记风险用户请求 */
export interface AdminV1UnmarkRiskUserRequest {
  id?: string;
  reason?: string;
}

/** 更新活动请求 */
export interface AdminV1UpdateActivityRequest {
  bannerUrl?: string;
  description?: string;
  enabled?: boolean;
  endTime?: string;
  id?: string;
  name?: string;
  rules?: string;
  startTime?: string;
}

export interface AdminV1UpdateAdReq {
  coverPath?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  endTime?: string;
  filePath?: string;
  fileSize?: string;
  id?: string;
  startTime?: string;
  /** @format int32 */
  status?: number;
  title?: string;
}

export interface AdminV1UpdateAdminReq {
  avatar?: string;
  email?: string;
  id?: string;
  nickname?: string;
  password?: string;
  phone?: string;
}

export interface AdminV1UpdateAdminRolesReq {
  adminId?: string;
  roleIds?: Array<string>;
}

export interface AdminV1UpdateAdminStatusReq {
  id?: string;
  /** @format int32 */
  status?: number;
}

/** 更新广告请求 */
export interface AdminV1UpdateAdvertisementRequest {
  enabled?: boolean;
  endTime?: string;
  id?: string;
  imageUrl?: string;
  linkUrl?: string;
  position?: string;
  /** @format int32 */
  sortOrder?: number;
  startTime?: string;
  title?: string;
}

export interface AdminV1UpdateAnchorReq {
  address?: string;
  avatar?: string;
  bio?: string;
  birthday?: string;
  email?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  idCard?: string;
  /** @format int32 */
  level?: number;
  nickname?: string;
  phone?: string;
  realName?: string;
  /** @format int32 */
  status?: number;
}

export interface AdminV1UpdateAnchorVerifyReq {
  id?: string;
  idCardBack?: string;
  idCardFront?: string;
  verifyRemark?: string;
  /** @format int32 */
  verifyType?: number;
}

/** 更新公告请求 */
export interface AdminV1UpdateAnnouncementRequest {
  content?: string;
  id?: string;
  isPinned?: boolean;
  /** @format int32 */
  priority?: number;
  title?: string;
}

/** 更新分类请求 */
export interface AdminV1UpdateCategoryRequest {
  description?: string;
  icon?: string;
  id?: string;
  name?: string;
  parentId?: string;
  slug?: string;
  /** @format int32 */
  sortOrder?: number;
  /** @format int32 */
  status?: number;
}

/** 更新配置项请求 */
export interface AdminV1UpdateConfigItemRequest {
  description?: string;
  key?: string;
  value?: string;
}

export interface AdminV1UpdateCouponRequest {
  endTime?: string;
  id?: string;
  name?: string;
  startTime?: string;
  status?: string;
}

/** 更新自定义报表请求 */
export interface AdminV1UpdateCustomReportRequest {
  chartType?: string;
  description?: string;
  dimensions?: Array<string>;
  id?: string;
  metrics?: Array<string>;
  name?: string;
  query?: string;
  schedule?: string;
}

/** 更新实验指标请求 */
export interface AdminV1UpdateExperimentMetricRequest {
  calculationMethod?: string;
  description?: string;
  eventName?: string;
  experimentId?: string;
  metricId?: string;
  name?: string;
  successCriteria?: string;
  type?: string;
}

/** 更新实验请求 */
export interface AdminV1UpdateExperimentRequest {
  /** @format double */
  confidenceLevel?: number;
  description?: string;
  endTime?: string;
  hypothesis?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  sampleSize?: number;
  startTime?: string;
  trafficAllocation?: string;
}

/** 更新实验变体请求 */
export interface AdminV1UpdateExperimentVariantRequest {
  configuration?: string;
  description?: string;
  experimentId?: string;
  name?: string;
  /** @format double */
  trafficWeight?: number;
  variantId?: string;
}

/** 更新帮助文档请求 */
export interface AdminV1UpdateHelpDocumentRequest {
  category?: string;
  content?: string;
  enabled?: boolean;
  id?: string;
  /** @format int32 */
  sortOrder?: number;
  title?: string;
}

/** 更新商品请求 */
export interface AdminV1UpdateMallItemRequest {
  category?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  imageUrl?: string;
  name?: string;
  /** @format int32 */
  pricePoints?: number;
  /** @format int32 */
  stock?: number;
}

export interface AdminV1UpdateMembershipPlanRequest {
  description?: string;
  /** @format int32 */
  durationDays?: number;
  features?: string;
  id?: string;
  name?: string;
  price?: string;
  status?: string;
}

/** 更新订单状态请求 */
export interface AdminV1UpdateOrderStatusRequest {
  id?: string;
  note?: string;
  status?: string;
}

/** 更新支付渠道请求 */
export interface AdminV1UpdatePaymentChannelRequest {
  config?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  name?: string;
  /** @format int32 */
  sortOrder?: number;
}

export interface AdminV1UpdatePermissionReq {
  component?: string;
  icon?: string;
  id?: string;
  parentId?: string;
  path?: string;
  permissionCode?: string;
  permissionName?: string;
  /** @format int32 */
  permissionType?: number;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
}

/** 更新举报类型请求 */
export interface AdminV1UpdateReportTypeRequest {
  category?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  name?: string;
  /** @format int32 */
  priority?: number;
}

/** 更新审核规则请求 */
export interface AdminV1UpdateReviewRuleRequest {
  action?: string;
  contentType?: string;
  description?: string;
  enabled?: boolean;
  id?: string;
  keywords?: Array<string>;
  name?: string;
  /** @format int32 */
  severity?: number;
}

export interface AdminV1UpdateRolePermissionsReq {
  permissionIds?: Array<string>;
  roleId?: string;
}

export interface AdminV1UpdateRoleReq {
  description?: string;
  id?: string;
  roleCode?: string;
  roleName?: string;
  /** @format int32 */
  status?: number;
}

/** 更新角色请求 */
export interface AdminV1UpdateRoleRequest {
  description?: string;
  id?: string;
  name?: string;
  permissionIds?: Array<string>;
  slug?: string;
}

/** 更新敏感词请求 */
export interface AdminV1UpdateSensitiveWordRequest {
  category?: string;
  enabled?: boolean;
  id?: string;
  /** @format int32 */
  level?: number;
  note?: string;
  replacement?: string;
  word?: string;
}

/** 更新系统配置请求 */
export interface AdminV1UpdateSystemConfigRequest {
  /** 系统配置 */
  config?: AdminV1SystemConfig;
}

/** 更新系统通知请求 */
export interface AdminV1UpdateSystemNotificationRequest {
  content?: string;
  id?: string;
  target?: string;
  title?: string;
  type?: string;
}

/** 更新系统设置请求 */
export interface AdminV1UpdateSystemSettingsRequest {
  /** 系统设置 */
  settings?: AdminV1SystemSettings;
}

/** 更新任务请求 */
export interface AdminV1UpdateTaskRequest {
  action?: string;
  /** @format int32 */
  completionCount?: number;
  description?: string;
  enabled?: boolean;
  id?: string;
  name?: string;
  /** @format int32 */
  rewardPoints?: number;
  type?: string;
}

/** 更新话题请求 */
export interface AdminV1UpdateTopicRequest {
  coverUrl?: string;
  description?: string;
  id?: string;
  /** @format int32 */
  status?: number;
  tagIds?: Array<string>;
  title?: string;
}

export interface AdminV1UpdateUserReq {
  email?: string;
  id?: string;
  phone?: string;
  username?: string;
}

/** 更新用户请求 */
export interface AdminV1UpdateUserRequest {
  avatar?: string;
  bio?: string;
  birthday?: string;
  email?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  /** @format int32 */
  level?: number;
  location?: string;
  nickname?: string;
  phone?: string;
  points?: string;
  /** @format int32 */
  status?: number;
}

export interface AdminV1UpdateVideoCategoryReq {
  id?: string;
  name?: string;
  parentId?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
}

export interface AdminV1UpdateVideoReq {
  anchorId?: string;
  categoryId?: string;
  coverPath?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  filePath?: string;
  fileSize?: string;
  format?: string;
  id?: string;
  resolution?: string;
  /** @format int32 */
  status?: number;
  tags?: string;
  title?: string;
}

/** 用户相关消息定义 */
export interface AdminV1User {
  createdAt?: string;
  email?: string;
  id?: string;
  isBanned?: boolean;
  phone?: string;
  updatedAt?: string;
  username?: string;
}

/** 用户活跃度统计 */
export interface AdminV1UserActivityStats {
  /** @format double */
  avgDailyActiveUsers?: number;
  /** @format double */
  avgMonthlyActiveUsers?: number;
  /** @format double */
  avgWeeklyActiveUsers?: number;
  data?: Array<AdminV1ActivityData>;
}

/** 用户行为路径 */
export interface AdminV1UserBehaviorPath {
  nodes?: Array<AdminV1PathNode>;
}

/** 用户详情 */
export interface AdminV1UserDetail {
  avatar?: string;
  bio?: string;
  birthday?: string;
  createdAt?: string;
  email?: string;
  /** @format int32 */
  gender?: number;
  id?: string;
  lastLoginAt?: string;
  lastLoginIp?: string;
  /** @format int32 */
  level?: number;
  location?: string;
  nickname?: string;
  phone?: string;
  points?: string;
  registerIp?: string;
  /** 用户统计信息 */
  stats?: AdminV1UserStats;
  /** @format int32 */
  status?: number;
  tags?: Array<AdminV1UserTag>;
  updatedAt?: string;
  username?: string;
}

/** 用户分布统计 */
export interface AdminV1UserDistributionStats {
  data?: Array<AdminV1DistributionData>;
}

/** 用户增长统计 */
export interface AdminV1UserGrowthStats {
  activeUsers?: string;
  data?: Array<AdminV1GrowthData>;
  newUsers?: string;
  totalUsers?: string;
}

/** 用户操作日志 */
export interface AdminV1UserLog {
  action?: string;
  createdAt?: string;
  description?: string;
  id?: string;
  ip?: string;
  userAgent?: string;
  userId?: string;
}

/** 用户留存率统计 */
export interface AdminV1UserRetentionStats {
  /** @format double */
  avgRetentionRate?: number;
  data?: Array<AdminV1RetentionData>;
}

/** 用户统计信息 */
export interface AdminV1UserStats {
  activeUsers?: string;
  dailyStats?: Record<string, string>;
  deletedUsers?: string;
  frozenUsers?: string;
  newUsers?: string;
  totalUsers?: string;
}

/** 用户标签 */
export interface AdminV1UserTag {
  color?: string;
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  updatedAt?: string;
}

/** 用户钱包 */
export interface AdminV1UserWallet {
  balance?: string;
  createdAt?: string;
  currency?: string;
  frozenBalance?: string;
  id?: string;
  updatedAt?: string;
  userId?: string;
}

export interface AdminV1VariantMetric {
  /** @format double */
  confidenceInterval?: number;
  /** @format double */
  pValue?: number;
  /** @format double */
  value?: number;
  variantId?: string;
  variantName?: string;
}

export interface AdminV1VariantResult {
  metrics?: Array<AdminV1MetricValue>;
  sessions?: string;
  users?: string;
  variantId?: string;
  variantName?: string;
}

export interface AdminV1VariantStatistics {
  events?: string;
  sessions?: string;
  users?: string;
  variantId?: string;
  variantName?: string;
}

export interface AdminV1VerifyAnchorReq {
  id?: string;
  verifyRemark?: string;
  /** @format int32 */
  verifyStatus?: number;
}

/** 视频相关消息定义 */
export interface AdminV1Video {
  anchorId?: string;
  categoryId?: string;
  coverPath?: string;
  createBy?: string;
  createTime?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  filePath?: string;
  fileSize?: string;
  format?: string;
  id?: string;
  resolution?: string;
  /** @format int32 */
  status?: number;
  tags?: string;
  title?: string;
  updateTime?: string;
  viewCount?: string;
}

/** 视频分类相关消息定义 */
export interface AdminV1VideoCategory {
  createTime?: string;
  id?: string;
  name?: string;
  parentId?: string;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  status?: number;
  updateTime?: string;
}

/** 视频详情 */
export interface AdminV1VideoDetail {
  categories?: Array<CommonV1Category>;
  /** @format int32 */
  collectCount?: number;
  /** @format int32 */
  commentCount?: number;
  coverUrl?: string;
  createdAt?: string;
  description?: string;
  /** @format int32 */
  duration?: number;
  format?: string;
  /** @format int32 */
  height?: number;
  id?: string;
  isRecommended?: boolean;
  isTop?: boolean;
  /** @format int32 */
  likeCount?: number;
  recommendedAt?: string;
  reviewRemark?: string;
  /** @format int32 */
  reviewStatus?: number;
  reviewedAt?: string;
  reviewerId?: string;
  /** @format int32 */
  shareCount?: number;
  size?: string;
  /** @format int32 */
  status?: number;
  tags?: Array<CommonV1VideoTag>;
  title?: string;
  topAt?: string;
  updatedAt?: string;
  /** 通用用户信息 */
  user?: CommonV1UserInfo;
  userId?: string;
  videoUrl?: string;
  /** @format int32 */
  viewCount?: number;
  /** @format int32 */
  width?: number;
}

/** 钱包交易记录 */
export interface AdminV1WalletTransaction {
  amount?: string;
  balanceAfter?: string;
  balanceBefore?: string;
  createdAt?: string;
  description?: string;
  id?: string;
  referenceId?: string;
  type?: string;
  userId?: string;
}

/** 预热缓存请求 */
export interface AdminV1WarmCacheRequest {
  cacheType?: string;
  keys?: Array<string>;
}

export interface AdminV1Withdrawal {
  amount?: string;
  bankAccount?: string;
  createdAt?: string;
  fee?: string;
  id?: string;
  processedAt?: string;
  reason?: string;
  status?: string;
  updatedAt?: string;
  userId?: string;
}

export interface AdminV1WithdrawalStats {
  approvedAmount?: string;
  approvedCount?: string;
  pendingAmount?: string;
  pendingCount?: string;
  rejectedAmount?: string;
  rejectedCount?: string;
  totalAmount?: string;
  totalCount?: string;
}

/** 通用分类信息 */
export interface CommonV1Category {
  createdAt?: string;
  description?: string;
  icon?: string;
  id?: string;
  name?: string;
  parentId?: string;
  slug?: string;
  /** @format int32 */
  sortOrder?: number;
  /** @format int32 */
  status?: number;
  updatedAt?: string;
}

/** 通用用户信息 */
export interface CommonV1UserInfo {
  avatar?: string;
  email?: string;
  id?: string;
  nickname?: string;
  phone?: string;
  username?: string;
}

/** 视频标签 */
export interface CommonV1VideoTag {
  color?: string;
  createdAt?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  sortOrder?: number;
  /** @format int32 */
  status?: number;
  updatedAt?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title No title
 * @version 0.0.1
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @description 自定义报表 创建自定义报表
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsCreateCustomReport
     * @request POST:/admin/analytics/reports
     */
    adminAnalyticsCreateCustomReport: (
      data: AdminV1CreateCustomReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CustomReport, any>({
        path: `/admin/analytics/reports`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除自定义报表
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsDeleteCustomReport
     * @request DELETE:/admin/analytics/reports/{id}
     */
    adminAnalyticsDeleteCustomReport: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/analytics/reports/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 下载导出文件
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsDownloadExportFile
     * @request GET:/admin/analytics/export/download/{id}
     */
    adminAnalyticsDownloadExportFile: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/analytics/export/download/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 执行自定义报表
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsExecuteCustomReport
     * @request POST:/admin/analytics/reports/{id}/execute
     */
    adminAnalyticsExecuteCustomReport: (
      id: string,
      data: AdminV1ExecuteCustomReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CustomReportResult, any>({
        path: `/admin/analytics/reports/${id}/execute`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 导出内容数据
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsExportContentData
     * @request POST:/admin/analytics/export/content
     */
    adminAnalyticsExportContentData: (
      data: AdminV1ExportContentDataRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/analytics/export/content`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 导出收入数据
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsExportRevenueData
     * @request POST:/admin/analytics/export/revenue
     */
    adminAnalyticsExportRevenueData: (
      data: AdminV1ExportRevenueDataRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/analytics/export/revenue`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 导出流量数据
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsExportTrafficData
     * @request POST:/admin/analytics/export/traffic
     */
    adminAnalyticsExportTrafficData: (
      data: AdminV1ExportTrafficDataRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/analytics/export/traffic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 导出数据 导出用户数据
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsExportUserData
     * @request POST:/admin/analytics/export/users
     */
    adminAnalyticsExportUserData: (
      data: AdminV1ExportUserDataRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/analytics/export/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 内容分析 获取内容增长统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetContentGrowthStats
     * @request GET:/admin/analytics/content/growth
     */
    adminAnalyticsGetContentGrowthStats: (
      query?: {
        contentType?: string;
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentGrowthStats, any>({
        path: `/admin/analytics/content/growth`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取内容互动统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetContentInteractionStats
     * @request GET:/admin/analytics/content/interaction
     */
    adminAnalyticsGetContentInteractionStats: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentInteractionStats, any>({
        path: `/admin/analytics/content/interaction`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取内容质量统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetContentQualityStats
     * @request GET:/admin/analytics/content/quality
     */
    adminAnalyticsGetContentQualityStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentQualityStats, any>({
        path: `/admin/analytics/content/quality`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取自定义报表详情
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetCustomReport
     * @request GET:/admin/analytics/reports/{id}
     */
    adminAnalyticsGetCustomReport: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1CustomReport, any>({
        path: `/admin/analytics/reports/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取自定义报表列表
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetCustomReports
     * @request GET:/admin/analytics/reports
     */
    adminAnalyticsGetCustomReports: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetCustomReportsResponse, any>({
        path: `/admin/analytics/reports`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取导出任务状态
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetExportTask
     * @request GET:/admin/analytics/export/tasks/{id}
     */
    adminAnalyticsGetExportTask: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/analytics/export/tasks/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取热门内容统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetHotContentStats
     * @request GET:/admin/analytics/content/hot
     */
    adminAnalyticsGetHotContentStats: (
      query?: {
        contentType?: string;
        endDate?: string;
        /** @format int32 */
        limit?: number;
        metric?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1HotContentStats, any>({
        path: `/admin/analytics/content/hot`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取页面访问统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetPageViewStats
     * @request GET:/admin/analytics/traffic/pages
     */
    adminAnalyticsGetPageViewStats: (
      query?: {
        endDate?: string;
        page?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PageViewStats, any>({
        path: `/admin/analytics/traffic/pages`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取付费用户统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetPayingUserStats
     * @request GET:/admin/analytics/revenue/paying-users
     */
    adminAnalyticsGetPayingUserStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PayingUserStats, any>({
        path: `/admin/analytics/revenue/paying-users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取商品销售统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetProductSalesStats
     * @request GET:/admin/analytics/revenue/product-sales
     */
    adminAnalyticsGetProductSalesStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ProductSalesStats, any>({
        path: `/admin/analytics/revenue/product-sales`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取实时内容发布
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetRealtimeContentPublish
     * @request GET:/admin/analytics/realtime/content-publish
     */
    adminAnalyticsGetRealtimeContentPublish: (
      query?: {
        /** @format int32 */
        duration?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RealtimeContentPublish, any>({
        path: `/admin/analytics/realtime/content-publish`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取实时互动数据
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetRealtimeInteraction
     * @request GET:/admin/analytics/realtime/interaction
     */
    adminAnalyticsGetRealtimeInteraction: (
      query?: {
        /** @format int32 */
        duration?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RealtimeInteraction, any>({
        path: `/admin/analytics/realtime/interaction`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 实时数据 获取实时在线用户
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetRealtimeOnlineUsers
     * @request GET:/admin/analytics/realtime/online-users
     */
    adminAnalyticsGetRealtimeOnlineUsers: (
      query?: {
        /** @format int32 */
        duration?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RealtimeOnlineUsers, any>({
        path: `/admin/analytics/realtime/online-users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取实时流量数据
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetRealtimeTraffic
     * @request GET:/admin/analytics/realtime/traffic
     */
    adminAnalyticsGetRealtimeTraffic: (
      query?: {
        /** @format int32 */
        duration?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RealtimeTraffic, any>({
        path: `/admin/analytics/realtime/traffic`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 商业分析 获取收入概览
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetRevenueOverview
     * @request GET:/admin/analytics/revenue/overview
     */
    adminAnalyticsGetRevenueOverview: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RevenueOverview, any>({
        path: `/admin/analytics/revenue/overview`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取收入趋势
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetRevenueTrend
     * @request GET:/admin/analytics/revenue/trend
     */
    adminAnalyticsGetRevenueTrend: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RevenueTrend, any>({
        path: `/admin/analytics/revenue/trend`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 流量分析 获取流量概览
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetTrafficOverview
     * @request GET:/admin/analytics/traffic/overview
     */
    adminAnalyticsGetTrafficOverview: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TrafficOverview, any>({
        path: `/admin/analytics/traffic/overview`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取流量来源统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetTrafficSourceStats
     * @request GET:/admin/analytics/traffic/sources
     */
    adminAnalyticsGetTrafficSourceStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TrafficSourceStats, any>({
        path: `/admin/analytics/traffic/sources`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户活跃度统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetUserActivityStats
     * @request GET:/admin/analytics/users/activity
     */
    adminAnalyticsGetUserActivityStats: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserActivityStats, any>({
        path: `/admin/analytics/users/activity`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户行为路径
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetUserBehaviorPath
     * @request GET:/admin/analytics/traffic/behavior-path
     */
    adminAnalyticsGetUserBehaviorPath: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserBehaviorPath, any>({
        path: `/admin/analytics/traffic/behavior-path`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户分布统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetUserDistributionStats
     * @request GET:/admin/analytics/users/distribution
     */
    adminAnalyticsGetUserDistributionStats: (
      query?: {
        dimension?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserDistributionStats, any>({
        path: `/admin/analytics/users/distribution`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 用户分析 获取用户增长统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetUserGrowthStats
     * @request GET:/admin/analytics/users/growth
     */
    adminAnalyticsGetUserGrowthStats: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserGrowthStats, any>({
        path: `/admin/analytics/users/growth`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户留存率统计
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsGetUserRetentionStats
     * @request GET:/admin/analytics/users/retention
     */
    adminAnalyticsGetUserRetentionStats: (
      query?: {
        /** @format int32 */
        days?: number;
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserRetentionStats, any>({
        path: `/admin/analytics/users/retention`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新自定义报表
     *
     * @tags AdminAnalytics
     * @name AdminAnalyticsUpdateCustomReport
     * @request PUT:/admin/analytics/reports/{id}
     */
    adminAnalyticsUpdateCustomReport: (
      id: string,
      data: AdminV1UpdateCustomReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CustomReport, any>({
        path: `/admin/analytics/reports/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 分配管理员角色
     *
     * @tags AdminAuth
     * @name AdminAuthAssignAdminRoles
     * @request POST:/admin/auth/admins/{id}/roles
     */
    adminAuthAssignAdminRoles: (
      id: string,
      data: AdminV1AssignAdminRolesRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/auth/admins/${id}/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 分配角色权限
     *
     * @tags AdminAuth
     * @name AdminAuthAssignRolePermissions
     * @request POST:/admin/auth/roles/{id}/permissions
     */
    adminAuthAssignRolePermissions: (
      id: string,
      data: AdminV1AssignRolePermissionsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/auth/roles/${id}/permissions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 修改密码
     *
     * @tags AdminAuth
     * @name AdminAuthChangePassword
     * @request POST:/admin/auth/change-password
     */
    adminAuthChangePassword: (
      data: AdminV1ChangePasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/auth/change-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 创建角色
     *
     * @tags AdminAuth
     * @name AdminAuthCreateRole
     * @request POST:/admin/auth/roles
     */
    adminAuthCreateRole: (
      data: AdminV1CreateRoleRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Role, any>({
        path: `/admin/auth/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除角色
     *
     * @tags AdminAuth
     * @name AdminAuthDeleteRole
     * @request DELETE:/admin/auth/roles/{id}
     */
    adminAuthDeleteRole: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/auth/roles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 获取管理员信息
     *
     * @tags AdminAuth
     * @name AdminAuthGetAdminInfo
     * @request GET:/admin/auth/info
     */
    adminAuthGetAdminInfo: (
      query?: {
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdminInfo, any>({
        path: `/admin/auth/info`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取管理员角色
     *
     * @tags AdminAuth
     * @name AdminAuthGetAdminRoles
     * @request GET:/admin/auth/admins/{id}/roles
     */
    adminAuthGetAdminRoles: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1GetAdminRolesResponse, any>({
        path: `/admin/auth/admins/${id}/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取权限列表
     *
     * @tags AdminAuth
     * @name AdminAuthGetPermissions
     * @request GET:/admin/auth/permissions
     */
    adminAuthGetPermissions: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetPermissionsResponse, any>({
        path: `/admin/auth/permissions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取角色列表
     *
     * @tags AdminAuth
     * @name AdminAuthGetRoles
     * @request GET:/admin/auth/roles
     */
    adminAuthGetRoles: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetRolesResponse, any>({
        path: `/admin/auth/roles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员登录
     *
     * @tags AdminAuth
     * @name AdminAuthLogin
     * @request POST:/admin/auth/login
     */
    adminAuthLogin: (
      data: AdminV1AdminLoginRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdminLoginResponse, any>({
        path: `/admin/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员登出
     *
     * @tags AdminAuth
     * @name AdminAuthLogout
     * @request POST:/admin/auth/logout
     */
    adminAuthLogout: (
      data: AdminV1AdminLogoutRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdminLogoutResponse, any>({
        path: `/admin/auth/logout`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 刷新访问令牌
     *
     * @tags AdminAuth
     * @name AdminAuthRefreshToken
     * @request POST:/admin/auth/refresh
     */
    adminAuthRefreshToken: (
      data: AdminV1AdminRefreshTokenRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdminRefreshTokenResponse, any>({
        path: `/admin/auth/refresh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 重置管理员密码
     *
     * @tags AdminAuth
     * @name AdminAuthResetPassword
     * @request POST:/admin/auth/reset-password
     */
    adminAuthResetPassword: (
      data: AdminV1ResetPasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/auth/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 更新角色
     *
     * @tags AdminAuth
     * @name AdminAuthUpdateRole
     * @request PUT:/admin/auth/roles/{id}
     */
    adminAuthUpdateRole: (
      id: string,
      data: AdminV1UpdateRoleRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Role, any>({
        path: `/admin/auth/roles/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminBanUser
     * @request POST:/admin/users/{id}/ban
     */
    adminBanUser: (
      id: string,
      data: AdminV1BanUserReq,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/users/${id}/ban`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 批量删除评论
     *
     * @tags AdminContent
     * @name AdminContentBatchDeleteComments
     * @request POST:/admin/content/comments/batch-delete
     */
    adminContentBatchDeleteComments: (
      data: AdminV1BatchDeleteCommentsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/comments/batch-delete`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 批量删除视频
     *
     * @tags AdminContent
     * @name AdminContentBatchDeleteVideos
     * @request POST:/admin/content/videos/batch-delete
     */
    adminContentBatchDeleteVideos: (
      data: AdminV1BatchDeleteVideosRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/videos/batch-delete`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 批量审核内容
     *
     * @tags AdminContent
     * @name AdminContentBatchReviewContent
     * @request POST:/admin/content/reviews/batch
     */
    adminContentBatchReviewContent: (
      data: AdminV1BatchReviewContentItemsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/reviews/batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 取消推荐视频
     *
     * @tags AdminContent
     * @name AdminContentCancelRecommendVideo
     * @request POST:/admin/content/videos/{id}/cancel-recommend
     */
    adminContentCancelRecommendVideo: (
      id: string,
      data: AdminV1CancelRecommendVideoRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/videos/${id}/cancel-recommend`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 取消置顶视频
     *
     * @tags AdminContent
     * @name AdminContentCancelTopVideo
     * @request POST:/admin/content/videos/{id}/cancel-top
     */
    adminContentCancelTopVideo: (
      id: string,
      data: AdminV1CancelTopVideoRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/videos/${id}/cancel-top`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 创建分类
     *
     * @tags AdminContent
     * @name AdminContentCreateCategory
     * @request POST:/admin/content/categories
     */
    adminContentCreateCategory: (
      data: AdminV1CreateCategoryRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CategoryDetail, any>({
        path: `/admin/content/categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建话题
     *
     * @tags AdminContent
     * @name AdminContentCreateTopic
     * @request POST:/admin/content/topics
     */
    adminContentCreateTopic: (
      data: AdminV1CreateTopicRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TopicDetail, any>({
        path: `/admin/content/topics`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除分类
     *
     * @tags AdminContent
     * @name AdminContentDeleteCategory
     * @request DELETE:/admin/content/categories/{id}
     */
    adminContentDeleteCategory: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/content/categories/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除评论
     *
     * @tags AdminContent
     * @name AdminContentDeleteComment
     * @request DELETE:/admin/content/comments/{id}
     */
    adminContentDeleteComment: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/content/comments/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除话题
     *
     * @tags AdminContent
     * @name AdminContentDeleteTopic
     * @request DELETE:/admin/content/topics/{id}
     */
    adminContentDeleteTopic: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/content/topics/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除视频
     *
     * @tags AdminContent
     * @name AdminContentDeleteVideo
     * @request DELETE:/admin/content/videos/{id}
     */
    adminContentDeleteVideo: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/content/videos/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 分类管理 获取分类列表
     *
     * @tags AdminContent
     * @name AdminContentGetCategories
     * @request GET:/admin/content/categories
     */
    adminContentGetCategories: (
      query?: {
        keyword?: string;
        order?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        parentId?: string;
        sort?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetCategoriesResponse, any>({
        path: `/admin/content/categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取分类详情
     *
     * @tags AdminContent
     * @name AdminContentGetCategory
     * @request GET:/admin/content/categories/{id}
     */
    adminContentGetCategory: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1CategoryDetail, any>({
        path: `/admin/content/categories/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取评论详情
     *
     * @tags AdminContent
     * @name AdminContentGetComment
     * @request GET:/admin/content/comments/{id}
     */
    adminContentGetComment: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1CommentDetail, any>({
        path: `/admin/content/comments/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 评论管理 获取评论列表
     *
     * @tags AdminContent
     * @name AdminContentGetComments
     * @request GET:/admin/content/comments
     */
    adminContentGetComments: (
      query?: {
        endDate?: string;
        keyword?: string;
        order?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        reviewStatus?: number;
        sort?: string;
        startDate?: string;
        /** @format int32 */
        status?: number;
        userId?: string;
        videoId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetCommentsResponse, any>({
        path: `/admin/content/comments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 内容统计
     *
     * @tags AdminContent
     * @name AdminContentGetContentStats
     * @request GET:/admin/content/stats
     */
    adminContentGetContentStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentStats, any>({
        path: `/admin/content/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 内容审核 获取待审核内容列表
     *
     * @tags AdminContent
     * @name AdminContentGetPendingReviews
     * @request GET:/admin/content/reviews/pending
     */
    adminContentGetPendingReviews: (
      query?: {
        contentType?: string;
        endDate?: string;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetContentPendingReviewsResponse, any>({
        path: `/admin/content/reviews/pending`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取审核记录
     *
     * @tags AdminContent
     * @name AdminContentGetReviewRecords
     * @request GET:/admin/content/reviews/records
     */
    adminContentGetReviewRecords: (
      query?: {
        contentType?: string;
        endDate?: string;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetReviewRecordsResponse, any>({
        path: `/admin/content/reviews/records`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取话题详情
     *
     * @tags AdminContent
     * @name AdminContentGetTopic
     * @request GET:/admin/content/topics/{id}
     */
    adminContentGetTopic: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1TopicDetail, any>({
        path: `/admin/content/topics/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 话题管理 获取话题列表
     *
     * @tags AdminContent
     * @name AdminContentGetTopics
     * @request GET:/admin/content/topics
     */
    adminContentGetTopics: (
      query?: {
        categoryId?: string;
        endDate?: string;
        isRecommended?: boolean;
        isTop?: boolean;
        keyword?: string;
        order?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        sort?: string;
        startDate?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetTopicsResponse, any>({
        path: `/admin/content/topics`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取视频详情
     *
     * @tags AdminContent
     * @name AdminContentGetVideo
     * @request GET:/admin/content/videos/{id}
     */
    adminContentGetVideo: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1VideoDetail, any>({
        path: `/admin/content/videos/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 视频管理 获取视频列表
     *
     * @tags AdminContent
     * @name AdminContentGetVideos
     * @request GET:/admin/content/videos
     */
    adminContentGetVideos: (
      query?: {
        categoryId?: string;
        endDate?: string;
        isRecommended?: boolean;
        isTop?: boolean;
        keyword?: string;
        order?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        /** @format int32 */
        reviewStatus?: number;
        sort?: string;
        startDate?: string;
        /** @format int32 */
        status?: number;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetVideosResponse, any>({
        path: `/admin/content/videos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 推荐话题
     *
     * @tags AdminContent
     * @name AdminContentRecommendTopic
     * @request POST:/admin/content/topics/{id}/recommend
     */
    adminContentRecommendTopic: (
      id: string,
      data: AdminV1RecommendTopicRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/topics/${id}/recommend`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 推荐视频
     *
     * @tags AdminContent
     * @name AdminContentRecommendVideo
     * @request POST:/admin/content/videos/{id}/recommend
     */
    adminContentRecommendVideo: (
      id: string,
      data: AdminV1RecommendVideoRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/videos/${id}/recommend`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 回复评论
     *
     * @tags AdminContent
     * @name AdminContentReplyComment
     * @request POST:/admin/content/comments/{id}/reply
     */
    adminContentReplyComment: (
      id: string,
      data: AdminV1ReplyCommentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CommentDetail, any>({
        path: `/admin/content/comments/${id}/reply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 审核评论
     *
     * @tags AdminContent
     * @name AdminContentReviewComment
     * @request POST:/admin/content/comments/{id}/review
     */
    adminContentReviewComment: (
      id: string,
      data: AdminV1ReviewCommentRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/comments/${id}/review`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 审核视频
     *
     * @tags AdminContent
     * @name AdminContentReviewVideo
     * @request POST:/admin/content/videos/{id}/review
     */
    adminContentReviewVideo: (
      id: string,
      data: AdminV1ReviewVideoRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/videos/${id}/review`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 置顶话题
     *
     * @tags AdminContent
     * @name AdminContentTopTopic
     * @request POST:/admin/content/topics/{id}/top
     */
    adminContentTopTopic: (
      id: string,
      data: AdminV1TopTopicRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/topics/${id}/top`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 置顶视频
     *
     * @tags AdminContent
     * @name AdminContentTopVideo
     * @request POST:/admin/content/videos/{id}/top
     */
    adminContentTopVideo: (
      id: string,
      data: AdminV1TopVideoRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/content/videos/${id}/top`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 更新分类
     *
     * @tags AdminContent
     * @name AdminContentUpdateCategory
     * @request PUT:/admin/content/categories/{id}
     */
    adminContentUpdateCategory: (
      id: string,
      data: AdminV1UpdateCategoryRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CategoryDetail, any>({
        path: `/admin/content/categories/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新话题
     *
     * @tags AdminContent
     * @name AdminContentUpdateTopic
     * @request PUT:/admin/content/topics/{id}
     */
    adminContentUpdateTopic: (
      id: string,
      data: AdminV1UpdateTopicRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TopicDetail, any>({
        path: `/admin/content/topics/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateAd
     * @request POST:/admin/ads
     */
    adminCreateAd: (data: AdminV1CreateAdReq, params: RequestParams = {}) =>
      this.request<AdminV1Ad, any>({
        path: `/admin/ads`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateAdmin
     * @request POST:/admin/admins
     */
    adminCreateAdmin: (
      data: AdminV1CreateAdminReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdminInfo, any>({
        path: `/admin/admins`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateAnchor
     * @request POST:/admin/anchors
     */
    adminCreateAnchor: (
      data: AdminV1CreateAnchorReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Anchor, any>({
        path: `/admin/anchors`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateAnchorVerify
     * @request POST:/admin/anchor-verifies
     */
    adminCreateAnchorVerify: (
      data: AdminV1CreateAnchorVerifyReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AnchorVerify, any>({
        path: `/admin/anchor-verifies`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreatePermission
     * @request POST:/admin/permissions
     */
    adminCreatePermission: (
      data: AdminV1CreatePermissionReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Permission, any>({
        path: `/admin/permissions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateRole
     * @request POST:/admin/roles
     */
    adminCreateRole: (data: AdminV1CreateRoleReq, params: RequestParams = {}) =>
      this.request<AdminV1Role, any>({
        path: `/admin/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateVideo
     * @request POST:/admin/videos
     */
    adminCreateVideo: (
      data: AdminV1CreateVideoReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Video, any>({
        path: `/admin/videos`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminCreateVideoCategory
     * @request POST:/admin/video-categories
     */
    adminCreateVideoCategory: (
      data: AdminV1CreateVideoCategoryReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1VideoCategory, any>({
        path: `/admin/video-categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteAd
     * @request DELETE:/admin/ads/{id}
     */
    adminDeleteAd: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/ads/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteAdmin
     * @request DELETE:/admin/admins/{id}
     */
    adminDeleteAdmin: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/admins/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteAnchor
     * @request DELETE:/admin/anchors/{id}
     */
    adminDeleteAnchor: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/anchors/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteAnchorVerify
     * @request DELETE:/admin/anchor-verifies/{id}
     */
    adminDeleteAnchorVerify: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/anchor-verifies/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeletePermission
     * @request DELETE:/admin/permissions/{id}
     */
    adminDeletePermission: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/permissions/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteRole
     * @request DELETE:/admin/roles/{id}
     */
    adminDeleteRole: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/roles/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteVideo
     * @request DELETE:/admin/videos/{id}
     */
    adminDeleteVideo: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/videos/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminDeleteVideoCategory
     * @request DELETE:/admin/video-categories/{id}
     */
    adminDeleteVideoCategory: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/video-categories/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 计算实验显著性
     *
     * @tags AdminExperiment
     * @name AdminExperimentCalculateExperimentSignificance
     * @request POST:/admin/experiments/{id}/calculate-significance
     */
    adminExperimentCalculateExperimentSignificance: (
      id: string,
      data: AdminV1CalculateExperimentSignificanceRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentSignificanceResult, any>({
        path: `/admin/experiments/${id}/calculate-significance`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建实验
     *
     * @tags AdminExperiment
     * @name AdminExperimentCreateExperiment
     * @request POST:/admin/experiments
     */
    adminExperimentCreateExperiment: (
      data: AdminV1CreateExperimentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Experiment, any>({
        path: `/admin/experiments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建实验指标
     *
     * @tags AdminExperiment
     * @name AdminExperimentCreateExperimentMetric
     * @request POST:/admin/experiments/{id}/metrics
     */
    adminExperimentCreateExperimentMetric: (
      id: string,
      data: AdminV1CreateExperimentMetricRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentMetric, any>({
        path: `/admin/experiments/${id}/metrics`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建实验变体
     *
     * @tags AdminExperiment
     * @name AdminExperimentCreateExperimentVariant
     * @request POST:/admin/experiments/{id}/variants
     */
    adminExperimentCreateExperimentVariant: (
      id: string,
      data: AdminV1CreateExperimentVariantRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentVariant, any>({
        path: `/admin/experiments/${id}/variants`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除实验
     *
     * @tags AdminExperiment
     * @name AdminExperimentDeleteExperiment
     * @request DELETE:/admin/experiments/{id}
     */
    adminExperimentDeleteExperiment: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/experiments/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除实验指标
     *
     * @tags AdminExperiment
     * @name AdminExperimentDeleteExperimentMetric
     * @request DELETE:/admin/experiments/{experimentId}/metrics/{metricId}
     */
    adminExperimentDeleteExperimentMetric: (
      experimentId: string,
      metricId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/experiments/${experimentId}/metrics/${metricId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除实验变体
     *
     * @tags AdminExperiment
     * @name AdminExperimentDeleteExperimentVariant
     * @request DELETE:/admin/experiments/{experimentId}/variants/{variantId}
     */
    adminExperimentDeleteExperimentVariant: (
      experimentId: string,
      variantId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/experiments/${experimentId}/variants/${variantId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 导出实验数据
     *
     * @tags AdminExperiment
     * @name AdminExperimentExportExperimentData
     * @request POST:/admin/experiments/{id}/export
     */
    adminExperimentExportExperimentData: (
      id: string,
      data: AdminV1ExportExperimentDataRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/experiments/${id}/export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 实验报告 生成实验报告
     *
     * @tags AdminExperiment
     * @name AdminExperimentGenerateExperimentReport
     * @request POST:/admin/experiments/{id}/report
     */
    adminExperimentGenerateExperimentReport: (
      id: string,
      data: AdminV1GenerateExperimentReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentReport, any>({
        path: `/admin/experiments/${id}/report`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取实验详情
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperiment
     * @request GET:/admin/experiments/{id}
     */
    adminExperimentGetExperiment: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Experiment, any>({
        path: `/admin/experiments/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 实验数据收集 获取实验数据
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperimentData
     * @request GET:/admin/experiments/{id}/data
     */
    adminExperimentGetExperimentData: (
      id: string,
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetExperimentDataResponse, any>({
        path: `/admin/experiments/${id}/data`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 实验指标管理 获取实验指标
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperimentMetrics
     * @request GET:/admin/experiments/{id}/metrics
     */
    adminExperimentGetExperimentMetrics: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetExperimentMetricsResponse, any>({
        path: `/admin/experiments/${id}/metrics`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取实验报告
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperimentReport
     * @request GET:/admin/experiments/{id}/report
     */
    adminExperimentGetExperimentReport: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentReport, any>({
        path: `/admin/experiments/${id}/report`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取实验结果
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperimentResults
     * @request GET:/admin/experiments/{id}/results
     */
    adminExperimentGetExperimentResults: (
      id: string,
      query?: {
        metric?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentResults, any>({
        path: `/admin/experiments/${id}/results`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description A/B测试管理 获取实验列表
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperiments
     * @request GET:/admin/experiments
     */
    adminExperimentGetExperiments: (
      query?: {
        endDate?: string;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        status?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetExperimentsResponse, any>({
        path: `/admin/experiments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 实验统计分析 获取实验统计
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperimentStatistics
     * @request GET:/admin/experiments/{id}/statistics
     */
    adminExperimentGetExperimentStatistics: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentStatistics, any>({
        path: `/admin/experiments/${id}/statistics`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 实验变体管理 获取实验变体
     *
     * @tags AdminExperiment
     * @name AdminExperimentGetExperimentVariants
     * @request GET:/admin/experiments/{id}/variants
     */
    adminExperimentGetExperimentVariants: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetExperimentVariantsResponse, any>({
        path: `/admin/experiments/${id}/variants`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 暂停实验
     *
     * @tags AdminExperiment
     * @name AdminExperimentPauseExperiment
     * @request POST:/admin/experiments/{id}/pause
     */
    adminExperimentPauseExperiment: (
      id: string,
      data: AdminV1PauseExperimentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Experiment, any>({
        path: `/admin/experiments/${id}/pause`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 启动实验
     *
     * @tags AdminExperiment
     * @name AdminExperimentStartExperiment
     * @request POST:/admin/experiments/{id}/start
     */
    adminExperimentStartExperiment: (
      id: string,
      data: AdminV1StartExperimentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Experiment, any>({
        path: `/admin/experiments/${id}/start`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 停止实验
     *
     * @tags AdminExperiment
     * @name AdminExperimentStopExperiment
     * @request POST:/admin/experiments/{id}/stop
     */
    adminExperimentStopExperiment: (
      id: string,
      data: AdminV1StopExperimentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Experiment, any>({
        path: `/admin/experiments/${id}/stop`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新实验
     *
     * @tags AdminExperiment
     * @name AdminExperimentUpdateExperiment
     * @request PUT:/admin/experiments/{id}
     */
    adminExperimentUpdateExperiment: (
      id: string,
      data: AdminV1UpdateExperimentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Experiment, any>({
        path: `/admin/experiments/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新实验指标
     *
     * @tags AdminExperiment
     * @name AdminExperimentUpdateExperimentMetric
     * @request PUT:/admin/experiments/{experimentId}/metrics/{metricId}
     */
    adminExperimentUpdateExperimentMetric: (
      experimentId: string,
      metricId: string,
      data: AdminV1UpdateExperimentMetricRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentMetric, any>({
        path: `/admin/experiments/${experimentId}/metrics/${metricId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新实验变体
     *
     * @tags AdminExperiment
     * @name AdminExperimentUpdateExperimentVariant
     * @request PUT:/admin/experiments/{experimentId}/variants/{variantId}
     */
    adminExperimentUpdateExperimentVariant: (
      experimentId: string,
      variantId: string,
      data: AdminV1UpdateExperimentVariantRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExperimentVariant, any>({
        path: `/admin/experiments/${experimentId}/variants/${variantId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 调整用户余额
     *
     * @tags AdminFinance
     * @name AdminFinanceAdjustUserBalance
     * @request POST:/admin/finance/wallets/{userId}/adjust
     */
    adminFinanceAdjustUserBalance: (
      userId: string,
      data: AdminV1AdjustUserBalanceRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserWallet, any>({
        path: `/admin/finance/wallets/${userId}/adjust`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 批量退款
     *
     * @tags AdminFinance
     * @name AdminFinanceBatchRefundOrders
     * @request POST:/admin/finance/orders/batch/refund
     */
    adminFinanceBatchRefundOrders: (
      data: AdminV1BatchRefundOrdersRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BatchRefundOrdersResponse, any>({
        path: `/admin/finance/orders/batch/refund`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 批量审核提现
     *
     * @tags AdminFinance
     * @name AdminFinanceBatchReviewWithdrawals
     * @request POST:/admin/finance/withdrawals/batch/review
     */
    adminFinanceBatchReviewWithdrawals: (
      data: AdminV1BatchReviewWithdrawalsRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BatchReviewWithdrawalsResponse, any>({
        path: `/admin/finance/withdrawals/batch/review`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 取消订单
     *
     * @tags AdminFinance
     * @name AdminFinanceCancelOrder
     * @request POST:/admin/finance/orders/{id}/cancel
     */
    adminFinanceCancelOrder: (
      id: string,
      data: AdminV1CancelOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Order, any>({
        path: `/admin/finance/orders/${id}/cancel`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 确认支付
     *
     * @tags AdminFinance
     * @name AdminFinanceConfirmPayment
     * @request POST:/admin/finance/payments/{id}/confirm
     */
    adminFinanceConfirmPayment: (
      id: string,
      data: AdminV1ConfirmPaymentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Payment, any>({
        path: `/admin/finance/payments/${id}/confirm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建审计记录
     *
     * @tags AdminFinance
     * @name AdminFinanceCreateAuditLog
     * @request POST:/admin/finance/audit-logs
     */
    adminFinanceCreateAuditLog: (
      data: AdminV1CreateAuditLogRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AuditLog, any>({
        path: `/admin/finance/audit-logs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建优惠券
     *
     * @tags AdminFinance
     * @name AdminFinanceCreateCoupon
     * @request POST:/admin/finance/coupons
     */
    adminFinanceCreateCoupon: (
      data: AdminV1CreateCouponRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Coupon, any>({
        path: `/admin/finance/coupons`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建会员套餐
     *
     * @tags AdminFinance
     * @name AdminFinanceCreateMembershipPlan
     * @request POST:/admin/finance/membership-plans
     */
    adminFinanceCreateMembershipPlan: (
      data: AdminV1CreateMembershipPlanRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1MembershipPlan, any>({
        path: `/admin/finance/membership-plans`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建支付渠道
     *
     * @tags AdminFinance
     * @name AdminFinanceCreatePaymentChannel
     * @request POST:/admin/finance/payment-channels
     */
    adminFinanceCreatePaymentChannel: (
      data: AdminV1CreatePaymentChannelRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PaymentChannel, any>({
        path: `/admin/finance/payment-channels`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建结算
     *
     * @tags AdminFinance
     * @name AdminFinanceCreateSettlement
     * @request POST:/admin/finance/settlements
     */
    adminFinanceCreateSettlement: (
      data: AdminV1CreateSettlementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Settlement, any>({
        path: `/admin/finance/settlements`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除优惠券
     *
     * @tags AdminFinance
     * @name AdminFinanceDeleteCoupon
     * @request DELETE:/admin/finance/coupons/{id}
     */
    adminFinanceDeleteCoupon: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/finance/coupons/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 发放优惠券
     *
     * @tags AdminFinance
     * @name AdminFinanceDistributeCoupon
     * @request POST:/admin/finance/coupons/{id}/distribute
     */
    adminFinanceDistributeCoupon: (
      id: string,
      data: AdminV1DistributeCouponRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1DistributeCouponResponse, any>({
        path: `/admin/finance/coupons/${id}/distribute`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 导出财务报表
     *
     * @tags AdminFinance
     * @name AdminFinanceExportFinancialReport
     * @request POST:/admin/finance/reports/export
     */
    adminFinanceExportFinancialReport: (
      data: AdminV1ExportFinancialReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/finance/reports/export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 冻结用户资金
     *
     * @tags AdminFinance
     * @name AdminFinanceFreezeUserBalance
     * @request POST:/admin/finance/wallets/{userId}/freeze
     */
    adminFinanceFreezeUserBalance: (
      userId: string,
      data: AdminV1FreezeUserBalanceRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserWallet, any>({
        path: `/admin/finance/wallets/${userId}/freeze`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 财务审计 获取审计日志
     *
     * @tags AdminFinance
     * @name AdminFinanceGetAuditLogs
     * @request GET:/admin/finance/audit-logs
     */
    adminFinanceGetAuditLogs: (
      query?: {
        action?: string;
        adminId?: string;
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetAuditLogsResponse, any>({
        path: `/admin/finance/audit-logs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取现金流报表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetCashFlowReport
     * @request GET:/admin/finance/reports/cash-flow
     */
    adminFinanceGetCashFlowReport: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CashFlowReport, any>({
        path: `/admin/finance/reports/cash-flow`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 优惠券管理 获取优惠券列表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetCoupons
     * @request GET:/admin/finance/coupons
     */
    adminFinanceGetCoupons: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetCouponsResponse, any>({
        path: `/admin/finance/coupons`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 优惠券统计
     *
     * @tags AdminFinance
     * @name AdminFinanceGetCouponStats
     * @request GET:/admin/finance/coupons/stats
     */
    adminFinanceGetCouponStats: (
      query?: {
        couponId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1CouponStats, any>({
        path: `/admin/finance/coupons/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取支出报表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetExpenseReport
     * @request GET:/admin/finance/reports/expense
     */
    adminFinanceGetExpenseReport: (
      query?: {
        category?: string;
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExpenseReport, any>({
        path: `/admin/finance/reports/expense`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 会员管理 获取会员套餐
     *
     * @tags AdminFinance
     * @name AdminFinanceGetMembershipPlans
     * @request GET:/admin/finance/membership-plans
     */
    adminFinanceGetMembershipPlans: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetMembershipPlansResponse, any>({
        path: `/admin/finance/membership-plans`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 会员统计
     *
     * @tags AdminFinance
     * @name AdminFinanceGetMembershipStats
     * @request GET:/admin/finance/membership/stats
     */
    adminFinanceGetMembershipStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1MembershipStats, any>({
        path: `/admin/finance/membership/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取订单详情
     *
     * @tags AdminFinance
     * @name AdminFinanceGetOrder
     * @request GET:/admin/finance/orders/{id}
     */
    adminFinanceGetOrder: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Order, any>({
        path: `/admin/finance/orders/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 订单管理 获取订单列表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetOrders
     * @request GET:/admin/finance/orders
     */
    adminFinanceGetOrders: (
      query?: {
        endDate?: string;
        keyword?: string;
        orderNo?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        paymentMethod?: string;
        startDate?: string;
        status?: string;
        type?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetOrdersResponse, any>({
        path: `/admin/finance/orders`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单统计
     *
     * @tags AdminFinance
     * @name AdminFinanceGetOrderStats
     * @request GET:/admin/finance/orders/stats
     */
    adminFinanceGetOrderStats: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1OrderStats, any>({
        path: `/admin/finance/orders/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 订单趋势
     *
     * @tags AdminFinance
     * @name AdminFinanceGetOrderTrend
     * @request GET:/admin/finance/orders/trend
     */
    adminFinanceGetOrderTrend: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1OrderTrend, any>({
        path: `/admin/finance/orders/trend`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取支付详情
     *
     * @tags AdminFinance
     * @name AdminFinanceGetPayment
     * @request GET:/admin/finance/payments/{id}
     */
    adminFinanceGetPayment: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Payment, any>({
        path: `/admin/finance/payments/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 支付渠道管理 获取支付渠道
     *
     * @tags AdminFinance
     * @name AdminFinanceGetPaymentChannels
     * @request GET:/admin/finance/payment-channels
     */
    adminFinanceGetPaymentChannels: (
      query?: {
        enabled?: boolean;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetPaymentChannelsResponse, any>({
        path: `/admin/finance/payment-channels`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 支付管理 获取支付记录
     *
     * @tags AdminFinance
     * @name AdminFinanceGetPayments
     * @request GET:/admin/finance/payments
     */
    adminFinanceGetPayments: (
      query?: {
        endDate?: string;
        method?: string;
        orderNo?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        status?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetPaymentsResponse, any>({
        path: `/admin/finance/payments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 支付统计
     *
     * @tags AdminFinance
     * @name AdminFinanceGetPaymentStats
     * @request GET:/admin/finance/payments/stats
     */
    adminFinanceGetPaymentStats: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PaymentStats, any>({
        path: `/admin/finance/payments/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取利润报表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetProfitReport
     * @request GET:/admin/finance/reports/profit
     */
    adminFinanceGetProfitReport: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ProfitReport, any>({
        path: `/admin/finance/reports/profit`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 财务报表 获取收入报表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetRevenueReport
     * @request GET:/admin/finance/reports/revenue
     */
    adminFinanceGetRevenueReport: (
      query?: {
        endDate?: string;
        groupBy?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RevenueReport, any>({
        path: `/admin/finance/reports/revenue`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 风险监控 获取风险交易
     *
     * @tags AdminFinance
     * @name AdminFinanceGetRiskTransactions
     * @request GET:/admin/finance/risk/transactions
     */
    adminFinanceGetRiskTransactions: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        riskLevel?: string;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetRiskTransactionsResponse, any>({
        path: `/admin/finance/risk/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 结算管理 获取结算记录
     *
     * @tags AdminFinance
     * @name AdminFinanceGetSettlements
     * @request GET:/admin/finance/settlements
     */
    adminFinanceGetSettlements: (
      query?: {
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetSettlementsResponse, any>({
        path: `/admin/finance/settlements`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 结算统计
     *
     * @tags AdminFinance
     * @name AdminFinanceGetSettlementStats
     * @request GET:/admin/finance/settlements/stats
     */
    adminFinanceGetSettlementStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SettlementStats, any>({
        path: `/admin/finance/settlements/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户钱包详情
     *
     * @tags AdminFinance
     * @name AdminFinanceGetUserWallet
     * @request GET:/admin/finance/wallets/{userId}
     */
    adminFinanceGetUserWallet: (userId: string, params: RequestParams = {}) =>
      this.request<AdminV1UserWallet, any>({
        path: `/admin/finance/wallets/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 钱包管理 获取用户钱包列表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetUserWallets
     * @request GET:/admin/finance/wallets
     */
    adminFinanceGetUserWallets: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetUserWalletsResponse, any>({
        path: `/admin/finance/wallets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取钱包流水
     *
     * @tags AdminFinance
     * @name AdminFinanceGetWalletTransactions
     * @request GET:/admin/finance/wallets/{userId}/transactions
     */
    adminFinanceGetWalletTransactions: (
      userId: string,
      query?: {
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetWalletTransactionsResponse, any>({
        path: `/admin/finance/wallets/${userId}/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取提现详情
     *
     * @tags AdminFinance
     * @name AdminFinanceGetWithdrawal
     * @request GET:/admin/finance/withdrawals/{id}
     */
    adminFinanceGetWithdrawal: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Withdrawal, any>({
        path: `/admin/finance/withdrawals/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 提现管理 获取提现申请列表
     *
     * @tags AdminFinance
     * @name AdminFinanceGetWithdrawals
     * @request GET:/admin/finance/withdrawals
     */
    adminFinanceGetWithdrawals: (
      query?: {
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        status?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetWithdrawalsResponse, any>({
        path: `/admin/finance/withdrawals`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 提现统计
     *
     * @tags AdminFinance
     * @name AdminFinanceGetWithdrawalStats
     * @request GET:/admin/finance/withdrawals/stats
     */
    adminFinanceGetWithdrawalStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1WithdrawalStats, any>({
        path: `/admin/finance/withdrawals/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 标记风险交易
     *
     * @tags AdminFinance
     * @name AdminFinanceMarkRiskTransaction
     * @request POST:/admin/finance/risk/transactions/{id}/mark
     */
    adminFinanceMarkRiskTransaction: (
      id: string,
      data: AdminV1MarkRiskTransactionRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RiskTransaction, any>({
        path: `/admin/finance/risk/transactions/${id}/mark`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 处理风险交易
     *
     * @tags AdminFinance
     * @name AdminFinanceProcessRiskTransaction
     * @request POST:/admin/finance/risk/transactions/{id}/process
     */
    adminFinanceProcessRiskTransaction: (
      id: string,
      data: AdminV1ProcessRiskTransactionRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RiskTransaction, any>({
        path: `/admin/finance/risk/transactions/${id}/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 处理结算
     *
     * @tags AdminFinance
     * @name AdminFinanceProcessSettlement
     * @request POST:/admin/finance/settlements/{id}/process
     */
    adminFinanceProcessSettlement: (
      id: string,
      data: AdminV1ProcessSettlementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Settlement, any>({
        path: `/admin/finance/settlements/${id}/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 处理提现
     *
     * @tags AdminFinance
     * @name AdminFinanceProcessWithdrawal
     * @request POST:/admin/finance/withdrawals/{id}/process
     */
    adminFinanceProcessWithdrawal: (
      id: string,
      data: AdminV1ProcessWithdrawalRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Withdrawal, any>({
        path: `/admin/finance/withdrawals/${id}/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 退款订单
     *
     * @tags AdminFinance
     * @name AdminFinanceRefundOrder
     * @request POST:/admin/finance/orders/{id}/refund
     */
    adminFinanceRefundOrder: (
      id: string,
      data: AdminV1RefundOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Order, any>({
        path: `/admin/finance/orders/${id}/refund`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 拒绝支付
     *
     * @tags AdminFinance
     * @name AdminFinanceRejectPayment
     * @request POST:/admin/finance/payments/{id}/reject
     */
    adminFinanceRejectPayment: (
      id: string,
      data: AdminV1RejectPaymentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Payment, any>({
        path: `/admin/finance/payments/${id}/reject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 审核提现申请
     *
     * @tags AdminFinance
     * @name AdminFinanceReviewWithdrawal
     * @request POST:/admin/finance/withdrawals/{id}/review
     */
    adminFinanceReviewWithdrawal: (
      id: string,
      data: AdminV1ReviewWithdrawalRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Withdrawal, any>({
        path: `/admin/finance/withdrawals/${id}/review`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 启用/禁用支付渠道
     *
     * @tags AdminFinance
     * @name AdminFinanceTogglePaymentChannel
     * @request POST:/admin/finance/payment-channels/{id}/toggle
     */
    adminFinanceTogglePaymentChannel: (
      id: string,
      data: AdminV1TogglePaymentChannelRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PaymentChannel, any>({
        path: `/admin/finance/payment-channels/${id}/toggle`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 解冻用户资金
     *
     * @tags AdminFinance
     * @name AdminFinanceUnfreezeUserBalance
     * @request POST:/admin/finance/wallets/{userId}/unfreeze
     */
    adminFinanceUnfreezeUserBalance: (
      userId: string,
      data: AdminV1UnfreezeUserBalanceRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserWallet, any>({
        path: `/admin/finance/wallets/${userId}/unfreeze`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新优惠券
     *
     * @tags AdminFinance
     * @name AdminFinanceUpdateCoupon
     * @request PUT:/admin/finance/coupons/{id}
     */
    adminFinanceUpdateCoupon: (
      id: string,
      data: AdminV1UpdateCouponRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Coupon, any>({
        path: `/admin/finance/coupons/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新会员套餐
     *
     * @tags AdminFinance
     * @name AdminFinanceUpdateMembershipPlan
     * @request PUT:/admin/finance/membership-plans/{id}
     */
    adminFinanceUpdateMembershipPlan: (
      id: string,
      data: AdminV1UpdateMembershipPlanRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1MembershipPlan, any>({
        path: `/admin/finance/membership-plans/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新订单状态
     *
     * @tags AdminFinance
     * @name AdminFinanceUpdateOrderStatus
     * @request PUT:/admin/finance/orders/{id}/status
     */
    adminFinanceUpdateOrderStatus: (
      id: string,
      data: AdminV1UpdateOrderStatusRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Order, any>({
        path: `/admin/finance/orders/${id}/status`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新支付渠道
     *
     * @tags AdminFinance
     * @name AdminFinanceUpdatePaymentChannel
     * @request PUT:/admin/finance/payment-channels/{id}
     */
    adminFinanceUpdatePaymentChannel: (
      id: string,
      data: AdminV1UpdatePaymentChannelRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PaymentChannel, any>({
        path: `/admin/finance/payment-channels/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 两步验证接口
     *
     * @tags Admin
     * @name AdminGet2FaStatus
     * @request GET:/admin/2fa/status
     */
    adminGet2FaStatus: (
      query?: {
        adminId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Get2FAStatusReply, any>({
        path: `/admin/2fa/status`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetAd
     * @request GET:/admin/ads/{id}
     */
    adminGetAd: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Ad, any>({
        path: `/admin/ads/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetAdmin
     * @request GET:/admin/admins/{id}
     */
    adminGetAdmin: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1AdminInfo, any>({
        path: `/admin/admins/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetAnchor
     * @request GET:/admin/anchors/{id}
     */
    adminGetAnchor: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Anchor, any>({
        path: `/admin/anchors/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetAnchorVerify
     * @request GET:/admin/anchor-verifies/{id}
     */
    adminGetAnchorVerify: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1AnchorVerify, any>({
        path: `/admin/anchor-verifies/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description getFakeCaptcha
     *
     * @tags Admin
     * @name AdminGetFakeCaptcha
     * @request GET:/admin/captcha
     */
    adminGetFakeCaptcha: (params: RequestParams = {}) =>
      this.request<AdminV1GetFakeCaptchaReply, any>({
        path: `/admin/captcha`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetPermission
     * @request GET:/admin/permissions/{id}
     */
    adminGetPermission: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Permission, any>({
        path: `/admin/permissions/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetRole
     * @request GET:/admin/roles/{id}
     */
    adminGetRole: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Role, any>({
        path: `/admin/roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetVideo
     * @request GET:/admin/videos/{id}
     */
    adminGetVideo: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Video, any>({
        path: `/admin/videos/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminGetVideoCategory
     * @request GET:/admin/video-categories/{id}
     */
    adminGetVideoCategory: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1VideoCategory, any>({
        path: `/admin/video-categories/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminList2FaStatus
     * @request GET:/admin/2fa/list
     */
    adminList2FaStatus: (
      query?: {
        enabled?: boolean;
        page?: string;
        pageSize?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1List2FAStatusReply, any>({
        path: `/admin/2fa/list`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员角色关联接口
     *
     * @tags Admin
     * @name AdminListAdminRoles
     * @request GET:/admin/admins/{adminId}/roles
     */
    adminListAdminRoles: (adminId: string, params: RequestParams = {}) =>
      this.request<AdminV1ListAdminRolesReply, any>({
        path: `/admin/admins/${adminId}/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员管理接口
     *
     * @tags Admin
     * @name AdminListAdmins
     * @request GET:/admin/admins
     */
    adminListAdmins: (
      query?: {
        keyword?: string;
        page?: string;
        pageSize?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListAdminsReply, any>({
        path: `/admin/admins`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 广告管理接口
     *
     * @tags Admin
     * @name AdminListAds
     * @request GET:/admin/ads
     */
    adminListAds: (
      query?: {
        endTime?: string;
        keyword?: string;
        page?: string;
        pageSize?: string;
        startTime?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListAdsReply, any>({
        path: `/admin/ads`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 主播管理接口
     *
     * @tags Admin
     * @name AdminListAnchors
     * @request GET:/admin/anchors
     */
    adminListAnchors: (
      query?: {
        /** @format int32 */
        gender?: number;
        keyword?: string;
        /** @format int32 */
        level?: number;
        page?: string;
        pageSize?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListAnchorsReply, any>({
        path: `/admin/anchors`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 主播认证信息管理接口
     *
     * @tags Admin
     * @name AdminListAnchorVerifies
     * @request GET:/admin/anchor-verifies
     */
    adminListAnchorVerifies: (
      query?: {
        anchorId?: string;
        page?: string;
        pageSize?: string;
        /** @format int32 */
        verifyStatus?: number;
        /** @format int32 */
        verifyType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListAnchorVerifiesReply, any>({
        path: `/admin/anchor-verifies`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 权限管理接口
     *
     * @tags Admin
     * @name AdminListPermissions
     * @request GET:/admin/permissions
     */
    adminListPermissions: (
      query?: {
        keyword?: string;
        page?: string;
        pageSize?: string;
        parentId?: string;
        /** @format int32 */
        permissionType?: number;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListPermissionsReply, any>({
        path: `/admin/permissions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 角色权限关联接口
     *
     * @tags Admin
     * @name AdminListRolePermissions
     * @request GET:/admin/roles/{roleId}/permissions
     */
    adminListRolePermissions: (roleId: string, params: RequestParams = {}) =>
      this.request<AdminV1ListRolePermissionsReply, any>({
        path: `/admin/roles/${roleId}/permissions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 角色管理接口
     *
     * @tags Admin
     * @name AdminListRoles
     * @request GET:/admin/roles
     */
    adminListRoles: (
      query?: {
        keyword?: string;
        page?: string;
        pageSize?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListRolesReply, any>({
        path: `/admin/roles`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 视频分类管理接口
     *
     * @tags Admin
     * @name AdminListVideoCategories
     * @request GET:/admin/video-categories
     */
    adminListVideoCategories: (
      query?: {
        keyword?: string;
        page?: string;
        pageSize?: string;
        parentId?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListVideoCategoriesReply, any>({
        path: `/admin/video-categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 视频管理接口
     *
     * @tags Admin
     * @name AdminListVideos
     * @request GET:/admin/videos
     */
    adminListVideos: (
      query?: {
        anchorId?: string;
        categoryId?: string;
        keyword?: string;
        page?: string;
        pageSize?: string;
        /** @format int32 */
        status?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ListVideosReply, any>({
        path: `/admin/videos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 管理员登录
     *
     * @tags Admin
     * @name AdminLogin
     * @request POST:/admin/login
     */
    adminLogin: (data: AdminV1LoginReq, params: RequestParams = {}) =>
      this.request<AdminV1LoginReply, any>({
        path: `/admin/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description logout
     *
     * @tags Admin
     * @name AdminLogout
     * @request POST:/admin/logout
     */
    adminLogout: (data: any, params: RequestParams = {}) =>
      this.request<AdminV1LogoutReply, any>({
        path: `/admin/logout`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建活动
     *
     * @tags AdminOperation
     * @name AdminOperationCreateActivity
     * @request POST:/admin/operation/activities
     */
    adminOperationCreateActivity: (
      data: AdminV1CreateActivityRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Activity, any>({
        path: `/admin/operation/activities`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建广告
     *
     * @tags AdminOperation
     * @name AdminOperationCreateAdvertisement
     * @request POST:/admin/operation/advertisements
     */
    adminOperationCreateAdvertisement: (
      data: AdminV1CreateAdvertisementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Advertisement, any>({
        path: `/admin/operation/advertisements`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建公告
     *
     * @tags AdminOperation
     * @name AdminOperationCreateAnnouncement
     * @request POST:/admin/operation/announcements
     */
    adminOperationCreateAnnouncement: (
      data: AdminV1CreateAnnouncementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Announcement, any>({
        path: `/admin/operation/announcements`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建帮助文档
     *
     * @tags AdminOperation
     * @name AdminOperationCreateHelpDocument
     * @request POST:/admin/operation/help-documents
     */
    adminOperationCreateHelpDocument: (
      data: AdminV1CreateHelpDocumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1HelpDocument, any>({
        path: `/admin/operation/help-documents`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建商品
     *
     * @tags AdminOperation
     * @name AdminOperationCreateMallItem
     * @request POST:/admin/operation/mall/items
     */
    adminOperationCreateMallItem: (
      data: AdminV1CreateMallItemRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1MallItem, any>({
        path: `/admin/operation/mall/items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建推送
     *
     * @tags AdminOperation
     * @name AdminOperationCreatePushNotification
     * @request POST:/admin/operation/push-notifications
     */
    adminOperationCreatePushNotification: (
      data: AdminV1CreatePushNotificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PushNotification, any>({
        path: `/admin/operation/push-notifications`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建任务
     *
     * @tags AdminOperation
     * @name AdminOperationCreateTask
     * @request POST:/admin/operation/tasks
     */
    adminOperationCreateTask: (
      data: AdminV1CreateTaskRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Task, any>({
        path: `/admin/operation/tasks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除广告
     *
     * @tags AdminOperation
     * @name AdminOperationDeleteAdvertisement
     * @request DELETE:/admin/operation/advertisements/{id}
     */
    adminOperationDeleteAdvertisement: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/operation/advertisements/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除公告
     *
     * @tags AdminOperation
     * @name AdminOperationDeleteAnnouncement
     * @request DELETE:/admin/operation/announcements/{id}
     */
    adminOperationDeleteAnnouncement: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/operation/announcements/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除帮助文档
     *
     * @tags AdminOperation
     * @name AdminOperationDeleteHelpDocument
     * @request DELETE:/admin/operation/help-documents/{id}
     */
    adminOperationDeleteHelpDocument: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/operation/help-documents/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 活动管理 获取活动列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetActivities
     * @request GET:/admin/operation/activities
     */
    adminOperationGetActivities: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetActivitiesResponse, any>({
        path: `/admin/operation/activities`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 活动统计
     *
     * @tags AdminOperation
     * @name AdminOperationGetActivityStats
     * @request GET:/admin/operation/activities/stats
     */
    adminOperationGetActivityStats: (
      query?: {
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ActivityStats, any>({
        path: `/admin/operation/activities/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 广告管理 获取广告列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetAdvertisements
     * @request GET:/admin/operation/advertisements
     */
    adminOperationGetAdvertisements: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        position?: string;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetAdvertisementsResponse, any>({
        path: `/admin/operation/advertisements`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 广告统计
     *
     * @tags AdminOperation
     * @name AdminOperationGetAdvertisementStats
     * @request GET:/admin/operation/advertisements/stats
     */
    adminOperationGetAdvertisementStats: (
      query?: {
        endDate?: string;
        position?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdvertisementStats, any>({
        path: `/admin/operation/advertisements/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 公告管理 获取公告列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetAnnouncements
     * @request GET:/admin/operation/announcements
     */
    adminOperationGetAnnouncements: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetAnnouncementsResponse, any>({
        path: `/admin/operation/announcements`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 意见反馈 获取意见反馈列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetFeedbacks
     * @request GET:/admin/operation/feedbacks
     */
    adminOperationGetFeedbacks: (
      query?: {
        category?: string;
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        status?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetFeedbacksResponse, any>({
        path: `/admin/operation/feedbacks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 意见反馈统计
     *
     * @tags AdminOperation
     * @name AdminOperationGetFeedbackStats
     * @request GET:/admin/operation/feedbacks/stats
     */
    adminOperationGetFeedbackStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1FeedbackStats, any>({
        path: `/admin/operation/feedbacks/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 帮助中心 获取帮助文档列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetHelpDocuments
     * @request GET:/admin/operation/help-documents
     */
    adminOperationGetHelpDocuments: (
      query?: {
        category?: string;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetHelpDocumentsResponse, any>({
        path: `/admin/operation/help-documents`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 积分商城 获取商品列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetMallItems
     * @request GET:/admin/operation/mall/items
     */
    adminOperationGetMallItems: (
      query?: {
        category?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetMallItemsResponse, any>({
        path: `/admin/operation/mall/items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取兑换记录
     *
     * @tags AdminOperation
     * @name AdminOperationGetMallRedemptions
     * @request GET:/admin/operation/mall/redemptions
     */
    adminOperationGetMallRedemptions: (
      query?: {
        endDate?: string;
        itemId?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetMallRedemptionsResponse, any>({
        path: `/admin/operation/mall/redemptions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 积分商城统计
     *
     * @tags AdminOperation
     * @name AdminOperationGetMallStats
     * @request GET:/admin/operation/mall/stats
     */
    adminOperationGetMallStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1MallStats, any>({
        path: `/admin/operation/mall/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 消息推送 获取推送列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetPushNotifications
     * @request GET:/admin/operation/push-notifications
     */
    adminOperationGetPushNotifications: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
        targetType?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetPushNotificationsResponse, any>({
        path: `/admin/operation/push-notifications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 推送统计
     *
     * @tags AdminOperation
     * @name AdminOperationGetPushNotificationStats
     * @request GET:/admin/operation/push-notifications/stats
     */
    adminOperationGetPushNotificationStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PushNotificationStats, any>({
        path: `/admin/operation/push-notifications/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 任务管理 获取任务列表
     *
     * @tags AdminOperation
     * @name AdminOperationGetTasks
     * @request GET:/admin/operation/tasks
     */
    adminOperationGetTasks: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetTasksResponse, any>({
        path: `/admin/operation/tasks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 任务统计
     *
     * @tags AdminOperation
     * @name AdminOperationGetTaskStats
     * @request GET:/admin/operation/tasks/stats
     */
    adminOperationGetTaskStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TaskStats, any>({
        path: `/admin/operation/tasks/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 处理意见反馈
     *
     * @tags AdminOperation
     * @name AdminOperationProcessFeedback
     * @request POST:/admin/operation/feedbacks/{id}/process
     */
    adminOperationProcessFeedback: (
      id: string,
      data: AdminV1ProcessFeedbackRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Feedback, any>({
        path: `/admin/operation/feedbacks/${id}/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 发布公告
     *
     * @tags AdminOperation
     * @name AdminOperationPublishAnnouncement
     * @request POST:/admin/operation/announcements/{id}/publish
     */
    adminOperationPublishAnnouncement: (
      id: string,
      data: AdminV1PublishAnnouncementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Announcement, any>({
        path: `/admin/operation/announcements/${id}/publish`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 发送推送
     *
     * @tags AdminOperation
     * @name AdminOperationSendPushNotification
     * @request POST:/admin/operation/push-notifications/{id}/send
     */
    adminOperationSendPushNotification: (
      id: string,
      data: AdminV1SendPushNotificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1PushNotification, any>({
        path: `/admin/operation/push-notifications/${id}/send`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新活动
     *
     * @tags AdminOperation
     * @name AdminOperationUpdateActivity
     * @request PUT:/admin/operation/activities/{id}
     */
    adminOperationUpdateActivity: (
      id: string,
      data: AdminV1UpdateActivityRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Activity, any>({
        path: `/admin/operation/activities/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新广告
     *
     * @tags AdminOperation
     * @name AdminOperationUpdateAdvertisement
     * @request PUT:/admin/operation/advertisements/{id}
     */
    adminOperationUpdateAdvertisement: (
      id: string,
      data: AdminV1UpdateAdvertisementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Advertisement, any>({
        path: `/admin/operation/advertisements/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新公告
     *
     * @tags AdminOperation
     * @name AdminOperationUpdateAnnouncement
     * @request PUT:/admin/operation/announcements/{id}
     */
    adminOperationUpdateAnnouncement: (
      id: string,
      data: AdminV1UpdateAnnouncementRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Announcement, any>({
        path: `/admin/operation/announcements/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新帮助文档
     *
     * @tags AdminOperation
     * @name AdminOperationUpdateHelpDocument
     * @request PUT:/admin/operation/help-documents/{id}
     */
    adminOperationUpdateHelpDocument: (
      id: string,
      data: AdminV1UpdateHelpDocumentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1HelpDocument, any>({
        path: `/admin/operation/help-documents/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新商品
     *
     * @tags AdminOperation
     * @name AdminOperationUpdateMallItem
     * @request PUT:/admin/operation/mall/items/{id}
     */
    adminOperationUpdateMallItem: (
      id: string,
      data: AdminV1UpdateMallItemRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1MallItem, any>({
        path: `/admin/operation/mall/items/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新任务
     *
     * @tags AdminOperation
     * @name AdminOperationUpdateTask
     * @request PUT:/admin/operation/tasks/{id}
     */
    adminOperationUpdateTask: (
      id: string,
      data: AdminV1UpdateTaskRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Task, any>({
        path: `/admin/operation/tasks/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 刷新 token
     *
     * @tags Admin
     * @name AdminRefreshToken
     * @request POST:/admin/refresh-token
     */
    adminRefreshToken: (
      data: AdminV1RefreshTokenReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RefreshTokenReply, any>({
        path: `/admin/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminRemove2Fa
     * @request DELETE:/admin/2fa
     */
    adminRemove2Fa: (
      query?: {
        adminId?: string;
        verificationCode?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/2fa`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * @description 批量检测内容
     *
     * @tags AdminReport
     * @name AdminReportBatchDetectContent
     * @request POST:/admin/content/detect/batch
     */
    adminReportBatchDetectContent: (
      data: AdminV1BatchDetectContentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BatchDetectContentResponse, any>({
        path: `/admin/content/detect/batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 批量处理申诉
     *
     * @tags AdminReport
     * @name AdminReportBatchProcessAppeals
     * @request POST:/admin/appeals/batch/process
     */
    adminReportBatchProcessAppeals: (
      data: AdminV1BatchProcessAppealsRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BatchProcessAppealsResponse, any>({
        path: `/admin/appeals/batch/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 批量处理举报
     *
     * @tags AdminReport
     * @name AdminReportBatchProcessReports
     * @request POST:/admin/reports/batch/process
     */
    adminReportBatchProcessReports: (
      data: AdminV1BatchProcessReportsRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BatchProcessReportsResponse, any>({
        path: `/admin/reports/batch/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 批量审核内容
     *
     * @tags AdminReport
     * @name AdminReportBatchReviewContent
     * @request POST:/admin/reviews/content/batch
     */
    adminReportBatchReviewContent: (
      data: AdminV1BatchReviewContentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BatchReviewContentResponse, any>({
        path: `/admin/reviews/content/batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 关闭举报
     *
     * @tags AdminReport
     * @name AdminReportCloseReport
     * @request POST:/admin/reports/{id}/close
     */
    adminReportCloseReport: (
      id: string,
      data: AdminV1CloseReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Report, any>({
        path: `/admin/reports/${id}/close`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建举报类型
     *
     * @tags AdminReport
     * @name AdminReportCreateReportType
     * @request POST:/admin/reports/types
     */
    adminReportCreateReportType: (
      data: AdminV1CreateReportTypeRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReportType, any>({
        path: `/admin/reports/types`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建审核规则
     *
     * @tags AdminReport
     * @name AdminReportCreateReviewRule
     * @request POST:/admin/review-rules
     */
    adminReportCreateReviewRule: (
      data: AdminV1CreateReviewRuleRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReviewRule, any>({
        path: `/admin/review-rules`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 创建敏感词
     *
     * @tags AdminReport
     * @name AdminReportCreateSensitiveWord
     * @request POST:/admin/sensitive-words
     */
    adminReportCreateSensitiveWord: (
      data: AdminV1CreateSensitiveWordRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SensitiveWord, any>({
        path: `/admin/sensitive-words`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除举报类型
     *
     * @tags AdminReport
     * @name AdminReportDeleteReportType
     * @request DELETE:/admin/reports/types/{id}
     */
    adminReportDeleteReportType: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/reports/types/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除审核规则
     *
     * @tags AdminReport
     * @name AdminReportDeleteReviewRule
     * @request DELETE:/admin/review-rules/{id}
     */
    adminReportDeleteReviewRule: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/review-rules/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除敏感词
     *
     * @tags AdminReport
     * @name AdminReportDeleteSensitiveWord
     * @request DELETE:/admin/sensitive-words/{id}
     */
    adminReportDeleteSensitiveWord: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/sensitive-words/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 检测图片内容
     *
     * @tags AdminReport
     * @name AdminReportDetectImageContent
     * @request POST:/admin/content/detect/image
     */
    adminReportDetectImageContent: (
      data: AdminV1DetectImageContentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentDetectionResult, any>({
        path: `/admin/content/detect/image`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 内容检测 检测文本内容
     *
     * @tags AdminReport
     * @name AdminReportDetectTextContent
     * @request POST:/admin/content/detect/text
     */
    adminReportDetectTextContent: (
      data: AdminV1DetectTextContentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentDetectionResult, any>({
        path: `/admin/content/detect/text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 检测视频内容
     *
     * @tags AdminReport
     * @name AdminReportDetectVideoContent
     * @request POST:/admin/content/detect/video
     */
    adminReportDetectVideoContent: (
      data: AdminV1DetectVideoContentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ContentDetectionResult, any>({
        path: `/admin/content/detect/video`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 导出敏感词
     *
     * @tags AdminReport
     * @name AdminReportExportSensitiveWords
     * @request POST:/admin/sensitive-words/export
     */
    adminReportExportSensitiveWords: (
      data: AdminV1ExportSensitiveWordsRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportTask, any>({
        path: `/admin/sensitive-words/export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取申诉详情
     *
     * @tags AdminReport
     * @name AdminReportGetAppeal
     * @request GET:/admin/appeals/{id}
     */
    adminReportGetAppeal: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Appeal, any>({
        path: `/admin/appeals/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 申诉处理 获取申诉列表
     *
     * @tags AdminReport
     * @name AdminReportGetAppeals
     * @request GET:/admin/appeals
     */
    adminReportGetAppeals: (
      query?: {
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
        status?: string;
        type?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetAppealsResponse, any>({
        path: `/admin/appeals`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 内容审核 获取待审核内容列表
     *
     * @tags AdminReport
     * @name AdminReportGetPendingReviews
     * @request GET:/admin/reviews/pending
     */
    adminReportGetPendingReviews: (
      query?: {
        contentType?: string;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        priority?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetPendingReviewsResponse, any>({
        path: `/admin/reviews/pending`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取举报详情
     *
     * @tags AdminReport
     * @name AdminReportGetReport
     * @request GET:/admin/reports/{id}
     */
    adminReportGetReport: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Report, any>({
        path: `/admin/reports/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取举报处理统计
     *
     * @tags AdminReport
     * @name AdminReportGetReportProcessStats
     * @request GET:/admin/reports/stats/process
     */
    adminReportGetReportProcessStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReportProcessStats, any>({
        path: `/admin/reports/stats/process`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 举报处理 获取举报列表
     *
     * @tags AdminReport
     * @name AdminReportGetReports
     * @request GET:/admin/reports
     */
    adminReportGetReports: (
      query?: {
        category?: string;
        endDate?: string;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        reporterId?: string;
        startDate?: string;
        status?: string;
        targetId?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetReportsResponse, any>({
        path: `/admin/reports`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 举报统计 获取举报统计概览
     *
     * @tags AdminReport
     * @name AdminReportGetReportStats
     * @request GET:/admin/reports/stats
     */
    adminReportGetReportStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReportStats, any>({
        path: `/admin/reports/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取举报趋势
     *
     * @tags AdminReport
     * @name AdminReportGetReportTrend
     * @request GET:/admin/reports/stats/trend
     */
    adminReportGetReportTrend: (
      query?: {
        endDate?: string;
        period?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReportTrend, any>({
        path: `/admin/reports/stats/trend`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 举报类型管理 获取举报类型列表
     *
     * @tags AdminReport
     * @name AdminReportGetReportTypes
     * @request GET:/admin/reports/types
     */
    adminReportGetReportTypes: (
      query?: {
        enabled?: boolean;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetReportTypesResponse, any>({
        path: `/admin/reports/types`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取举报类型统计
     *
     * @tags AdminReport
     * @name AdminReportGetReportTypeStats
     * @request GET:/admin/reports/stats/types
     */
    adminReportGetReportTypeStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReportTypeStats, any>({
        path: `/admin/reports/stats/types`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取审核详情
     *
     * @tags AdminReport
     * @name AdminReportGetReviewDetail
     * @request GET:/admin/reviews/{id}
     */
    adminReportGetReviewDetail: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1ReviewDetail, any>({
        path: `/admin/reviews/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取审核历史
     *
     * @tags AdminReport
     * @name AdminReportGetReviewHistory
     * @request GET:/admin/reviews/history
     */
    adminReportGetReviewHistory: (
      query?: {
        action?: string;
        contentType?: string;
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        reviewerId?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetReviewHistoryResponse, any>({
        path: `/admin/reviews/history`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 规则管理 获取审核规则列表
     *
     * @tags AdminReport
     * @name AdminReportGetReviewRules
     * @request GET:/admin/review-rules
     */
    adminReportGetReviewRules: (
      query?: {
        contentType?: string;
        enabled?: boolean;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetReviewRulesResponse, any>({
        path: `/admin/review-rules`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取风险用户详情
     *
     * @tags AdminReport
     * @name AdminReportGetRiskUserDetail
     * @request GET:/admin/risk-users/{id}
     */
    adminReportGetRiskUserDetail: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1RiskUserDetail, any>({
        path: `/admin/risk-users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 风险用户管理 获取风险用户列表
     *
     * @tags AdminReport
     * @name AdminReportGetRiskUsers
     * @request GET:/admin/risk-users
     */
    adminReportGetRiskUsers: (
      query?: {
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        riskLevel?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetRiskUsersResponse, any>({
        path: `/admin/risk-users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 敏感词管理 获取敏感词列表
     *
     * @tags AdminReport
     * @name AdminReportGetSensitiveWords
     * @request GET:/admin/sensitive-words
     */
    adminReportGetSensitiveWords: (
      query?: {
        category?: string;
        enabled?: boolean;
        keyword?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetSensitiveWordsResponse, any>({
        path: `/admin/sensitive-words`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户风险记录
     *
     * @tags AdminReport
     * @name AdminReportGetUserRiskRecords
     * @request GET:/admin/risk-users/{id}/records
     */
    adminReportGetUserRiskRecords: (
      id: string,
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetUserRiskRecordsResponse, any>({
        path: `/admin/risk-users/${id}/records`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 忽略举报
     *
     * @tags AdminReport
     * @name AdminReportIgnoreReport
     * @request POST:/admin/reports/{id}/ignore
     */
    adminReportIgnoreReport: (
      id: string,
      data: AdminV1IgnoreReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Report, any>({
        path: `/admin/reports/${id}/ignore`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 批量导入敏感词
     *
     * @tags AdminReport
     * @name AdminReportImportSensitiveWords
     * @request POST:/admin/sensitive-words/import
     */
    adminReportImportSensitiveWords: (
      data: AdminV1ImportSensitiveWordsRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ImportSensitiveWordsResponse, any>({
        path: `/admin/sensitive-words/import`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 标记风险用户
     *
     * @tags AdminReport
     * @name AdminReportMarkRiskUser
     * @request POST:/admin/risk-users
     */
    adminReportMarkRiskUser: (
      data: AdminV1MarkRiskUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RiskUser, any>({
        path: `/admin/risk-users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 处理申诉
     *
     * @tags AdminReport
     * @name AdminReportProcessAppeal
     * @request POST:/admin/appeals/{id}/process
     */
    adminReportProcessAppeal: (
      id: string,
      data: AdminV1ProcessAppealRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Appeal, any>({
        path: `/admin/appeals/${id}/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 处理举报
     *
     * @tags AdminReport
     * @name AdminReportProcessReport
     * @request POST:/admin/reports/{id}/process
     */
    adminReportProcessReport: (
      id: string,
      data: AdminV1ProcessReportRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Report, any>({
        path: `/admin/reports/${id}/process`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 拒绝申诉
     *
     * @tags AdminReport
     * @name AdminReportRejectAppeal
     * @request POST:/admin/appeals/{id}/reject
     */
    adminReportRejectAppeal: (
      id: string,
      data: AdminV1RejectAppealRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Appeal, any>({
        path: `/admin/appeals/${id}/reject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 审核内容
     *
     * @tags AdminReport
     * @name AdminReportReviewContent
     * @request POST:/admin/reviews/content/{id}
     */
    adminReportReviewContent: (
      id: string,
      data: AdminV1ReviewContentRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReviewResult, any>({
        path: `/admin/reviews/content/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 启用/禁用审核规则
     *
     * @tags AdminReport
     * @name AdminReportToggleReviewRule
     * @request POST:/admin/review-rules/{id}/toggle
     */
    adminReportToggleReviewRule: (
      id: string,
      data: AdminV1ToggleReviewRuleRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReviewRule, any>({
        path: `/admin/review-rules/${id}/toggle`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 解除风险标记
     *
     * @tags AdminReport
     * @name AdminReportUnmarkRiskUser
     * @request POST:/admin/risk-users/{id}/unmark
     */
    adminReportUnmarkRiskUser: (
      id: string,
      data: AdminV1UnmarkRiskUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1RiskUser, any>({
        path: `/admin/risk-users/${id}/unmark`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新举报类型
     *
     * @tags AdminReport
     * @name AdminReportUpdateReportType
     * @request PUT:/admin/reports/types/{id}
     */
    adminReportUpdateReportType: (
      id: string,
      data: AdminV1UpdateReportTypeRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReportType, any>({
        path: `/admin/reports/types/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新审核规则
     *
     * @tags AdminReport
     * @name AdminReportUpdateReviewRule
     * @request PUT:/admin/review-rules/{id}
     */
    adminReportUpdateReviewRule: (
      id: string,
      data: AdminV1UpdateReviewRuleRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ReviewRule, any>({
        path: `/admin/review-rules/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新敏感词
     *
     * @tags AdminReport
     * @name AdminReportUpdateSensitiveWord
     * @request PUT:/admin/sensitive-words/{id}
     */
    adminReportUpdateSensitiveWord: (
      id: string,
      data: AdminV1UpdateSensitiveWordRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SensitiveWord, any>({
        path: `/admin/sensitive-words/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 取消任务
     *
     * @tags AdminSystem
     * @name AdminSystemCancelTask
     * @request POST:/admin/system/tasks/{id}/cancel
     */
    adminSystemCancelTask: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/system/tasks/${id}/cancel`,
        method: "POST",
        ...params,
      }),

    /**
     * @description 清理日志
     *
     * @tags AdminSystem
     * @name AdminSystemCleanLogs
     * @request POST:/admin/system/logs/clean
     */
    adminSystemCleanLogs: (
      data: AdminV1CleanLogsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/system/logs/clean`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 缓存管理 清理缓存
     *
     * @tags AdminSystem
     * @name AdminSystemClearCache
     * @request POST:/admin/system/cache/clear
     */
    adminSystemClearCache: (
      data: AdminV1ClearCacheRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/system/cache/clear`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 备份管理 创建备份
     *
     * @tags AdminSystem
     * @name AdminSystemCreateBackup
     * @request POST:/admin/system/backups
     */
    adminSystemCreateBackup: (
      data: AdminV1CreateBackupRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BackupTask, any>({
        path: `/admin/system/backups`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除备份
     *
     * @tags AdminSystem
     * @name AdminSystemDeleteBackup
     * @request DELETE:/admin/system/backups/{id}
     */
    adminSystemDeleteBackup: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/system/backups/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 删除系统通知
     *
     * @tags AdminSystem
     * @name AdminSystemDeleteSystemNotification
     * @request DELETE:/admin/system/notifications/{id}
     */
    adminSystemDeleteSystemNotification: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/system/notifications/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 下载备份文件
     *
     * @tags AdminSystem
     * @name AdminSystemDownloadBackup
     * @request GET:/admin/system/backups/download/{id}
     */
    adminSystemDownloadBackup: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/system/backups/download/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 下载日志文件
     *
     * @tags AdminSystem
     * @name AdminSystemDownloadLogFile
     * @request GET:/admin/system/logs/download/{filename}
     */
    adminSystemDownloadLogFile: (
      filename: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/system/logs/download/${filename}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 系统维护 进入维护模式
     *
     * @tags AdminSystem
     * @name AdminSystemEnterMaintenanceMode
     * @request POST:/admin/system/maintenance/enter
     */
    adminSystemEnterMaintenanceMode: (
      data: AdminV1EnterMaintenanceModeRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/system/maintenance/enter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 数据库管理 执行数据库查询
     *
     * @tags AdminSystem
     * @name AdminSystemExecuteDatabaseQuery
     * @request POST:/admin/system/database/query
     */
    adminSystemExecuteDatabaseQuery: (
      data: AdminV1ExecuteDatabaseQueryRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1QueryResult, any>({
        path: `/admin/system/database/query`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 执行定时任务
     *
     * @tags AdminSystem
     * @name AdminSystemExecuteScheduledTask
     * @request POST:/admin/system/tasks/scheduled/{id}/execute
     */
    adminSystemExecuteScheduledTask: (
      id: string,
      data: AdminV1ExecuteScheduledTaskRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TaskResult, any>({
        path: `/admin/system/tasks/scheduled/${id}/execute`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 退出维护模式
     *
     * @tags AdminSystem
     * @name AdminSystemExitMaintenanceMode
     * @request POST:/admin/system/maintenance/exit
     */
    adminSystemExitMaintenanceMode: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/system/maintenance/exit`,
        method: "POST",
        ...params,
      }),

    /**
     * @description 获取访问日志
     *
     * @tags AdminSystem
     * @name AdminSystemGetAccessLogs
     * @request GET:/admin/system/logs/access
     */
    adminSystemGetAccessLogs: (
      query?: {
        endTime?: string;
        ip?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startTime?: string;
        userId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetAccessLogsResponse, any>({
        path: `/admin/system/logs/access`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取所有服务健康状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetAllServiceHealth
     * @request GET:/admin/system/health
     */
    adminSystemGetAllServiceHealth: (params: RequestParams = {}) =>
      this.request<AdminV1GetAllServiceHealthResponse, any>({
        path: `/admin/system/health`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取备份详情
     *
     * @tags AdminSystem
     * @name AdminSystemGetBackup
     * @request GET:/admin/system/backups/{id}
     */
    adminSystemGetBackup: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1Backup, any>({
        path: `/admin/system/backups/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取备份列表
     *
     * @tags AdminSystem
     * @name AdminSystemGetBackups
     * @request GET:/admin/system/backups
     */
    adminSystemGetBackups: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetBackupsResponse, any>({
        path: `/admin/system/backups`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取缓存统计
     *
     * @tags AdminSystem
     * @name AdminSystemGetCacheStats
     * @request GET:/admin/system/cache/stats
     */
    adminSystemGetCacheStats: (params: RequestParams = {}) =>
      this.request<AdminV1CacheStats, any>({
        path: `/admin/system/cache/stats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取缓存状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetCacheStatus
     * @request GET:/admin/system/cache
     */
    adminSystemGetCacheStatus: (params: RequestParams = {}) =>
      this.request<AdminV1CacheStatus, any>({
        path: `/admin/system/cache`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取配置项列表
     *
     * @tags AdminSystem
     * @name AdminSystemGetConfigItems
     * @request GET:/admin/system/config/items
     */
    adminSystemGetConfigItems: (
      query?: {
        category?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetConfigItemsResponse, any>({
        path: `/admin/system/config/items`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取数据库状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetDatabaseStatus
     * @request GET:/admin/system/database
     */
    adminSystemGetDatabaseStatus: (params: RequestParams = {}) =>
      this.request<AdminV1DatabaseStatus, any>({
        path: `/admin/system/database`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取数据库表详情
     *
     * @tags AdminSystem
     * @name AdminSystemGetDatabaseTableDetail
     * @request GET:/admin/system/database/tables/{table}
     */
    adminSystemGetDatabaseTableDetail: (
      table: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1DatabaseTableDetail, any>({
        path: `/admin/system/database/tables/${table}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取数据库表信息
     *
     * @tags AdminSystem
     * @name AdminSystemGetDatabaseTables
     * @request GET:/admin/system/database/tables
     */
    adminSystemGetDatabaseTables: (params: RequestParams = {}) =>
      this.request<AdminV1DatabaseTables, any>({
        path: `/admin/system/database/tables`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取错误日志
     *
     * @tags AdminSystem
     * @name AdminSystemGetErrorLogs
     * @request GET:/admin/system/logs/errors
     */
    adminSystemGetErrorLogs: (
      query?: {
        endTime?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        service?: string;
        startTime?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetErrorLogsResponse, any>({
        path: `/admin/system/logs/errors`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取维护模式状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetMaintenanceModeStatus
     * @request GET:/admin/system/maintenance
     */
    adminSystemGetMaintenanceModeStatus: (params: RequestParams = {}) =>
      this.request<AdminV1MaintenanceModeStatus, any>({
        path: `/admin/system/maintenance`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取消息队列状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetQueueStatus
     * @request GET:/admin/system/queue
     */
    adminSystemGetQueueStatus: (params: RequestParams = {}) =>
      this.request<AdminV1QueueStatus, any>({
        path: `/admin/system/queue`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 任务管理 获取定时任务列表
     *
     * @tags AdminSystem
     * @name AdminSystemGetScheduledTasks
     * @request GET:/admin/system/tasks/scheduled
     */
    adminSystemGetScheduledTasks: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetScheduledTasksResponse, any>({
        path: `/admin/system/tasks/scheduled`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取服务健康状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetServiceHealth
     * @request GET:/admin/system/health/{service}
     */
    adminSystemGetServiceHealth: (
      service: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ServiceHealth, any>({
        path: `/admin/system/health/${service}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 系统配置管理 获取系统配置
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemConfig
     * @request GET:/admin/system/config
     */
    adminSystemGetSystemConfig: (
      query?: {
        category?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SystemConfig, any>({
        path: `/admin/system/config`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 日志管理 获取系统日志
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemLogs
     * @request GET:/admin/system/logs
     */
    adminSystemGetSystemLogs: (
      query?: {
        endTime?: string;
        level?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        service?: string;
        startTime?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetSystemLogsResponse, any>({
        path: `/admin/system/logs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取系统通知详情
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemNotification
     * @request GET:/admin/system/notifications/{id}
     */
    adminSystemGetSystemNotification: (
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SystemNotification, any>({
        path: `/admin/system/notifications/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取系统通知列表
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemNotifications
     * @request GET:/admin/system/notifications
     */
    adminSystemGetSystemNotifications: (
      query?: {
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        target?: string;
        type?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetSystemNotificationsResponse, any>({
        path: `/admin/system/notifications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取系统资源使用情况
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemResources
     * @request GET:/admin/system/resources
     */
    adminSystemGetSystemResources: (params: RequestParams = {}) =>
      this.request<AdminV1SystemResources, any>({
        path: `/admin/system/resources`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 系统设置 获取系统设置
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemSettings
     * @request GET:/admin/system/settings
     */
    adminSystemGetSystemSettings: (
      query?: {
        category?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetSystemSettingsResponse, any>({
        path: `/admin/system/settings`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 系统监控 获取系统状态
     *
     * @tags AdminSystem
     * @name AdminSystemGetSystemStatus
     * @request GET:/admin/system/status
     */
    adminSystemGetSystemStatus: (params: RequestParams = {}) =>
      this.request<AdminV1SystemStatus, any>({
        path: `/admin/system/status`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取任务详情
     *
     * @tags AdminSystem
     * @name AdminSystemGetTaskDetail
     * @request GET:/admin/system/tasks/{id}
     */
    adminSystemGetTaskDetail: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1TaskDetail, any>({
        path: `/admin/system/tasks/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取任务执行历史
     *
     * @tags AdminSystem
     * @name AdminSystemGetTaskHistory
     * @request GET:/admin/system/tasks/history
     */
    adminSystemGetTaskHistory: (
      query?: {
        endTime?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startTime?: string;
        taskName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetTaskHistoryResponse, any>({
        path: `/admin/system/tasks/history`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 优化数据库
     *
     * @tags AdminSystem
     * @name AdminSystemOptimizeDatabase
     * @request POST:/admin/system/database/optimize
     */
    adminSystemOptimizeDatabase: (
      data: AdminV1OptimizeDatabaseRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TaskResult, any>({
        path: `/admin/system/database/optimize`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 修复数据库
     *
     * @tags AdminSystem
     * @name AdminSystemRepairDatabase
     * @request POST:/admin/system/database/repair
     */
    adminSystemRepairDatabase: (
      data: AdminV1RepairDatabaseRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TaskResult, any>({
        path: `/admin/system/database/repair`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 重置系统设置
     *
     * @tags AdminSystem
     * @name AdminSystemResetSystemSettings
     * @request POST:/admin/system/settings/reset
     */
    adminSystemResetSystemSettings: (
      data: AdminV1ResetSystemSettingsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/system/settings/reset`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 恢复备份
     *
     * @tags AdminSystem
     * @name AdminSystemRestoreBackup
     * @request POST:/admin/system/backups/{id}/restore
     */
    adminSystemRestoreBackup: (
      id: string,
      data: AdminV1RestoreBackupRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1BackupTask, any>({
        path: `/admin/system/backups/${id}/restore`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 系统通知 发送系统通知
     *
     * @tags AdminSystem
     * @name AdminSystemSendSystemNotification
     * @request POST:/admin/system/notifications
     */
    adminSystemSendSystemNotification: (
      data: AdminV1SendSystemNotificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SystemNotification, any>({
        path: `/admin/system/notifications`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新配置项
     *
     * @tags AdminSystem
     * @name AdminSystemUpdateConfigItem
     * @request PUT:/admin/system/config/items/{key}
     */
    adminSystemUpdateConfigItem: (
      key: string,
      data: AdminV1UpdateConfigItemRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ConfigItem, any>({
        path: `/admin/system/config/items/${key}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新系统配置
     *
     * @tags AdminSystem
     * @name AdminSystemUpdateSystemConfig
     * @request PUT:/admin/system/config
     */
    adminSystemUpdateSystemConfig: (
      data: AdminV1UpdateSystemConfigRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SystemConfig, any>({
        path: `/admin/system/config`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新系统通知
     *
     * @tags AdminSystem
     * @name AdminSystemUpdateSystemNotification
     * @request PUT:/admin/system/notifications/{id}
     */
    adminSystemUpdateSystemNotification: (
      id: string,
      data: AdminV1UpdateSystemNotificationRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SystemNotification, any>({
        path: `/admin/system/notifications/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 更新系统设置
     *
     * @tags AdminSystem
     * @name AdminSystemUpdateSystemSettings
     * @request PUT:/admin/system/settings
     */
    adminSystemUpdateSystemSettings: (
      data: AdminV1UpdateSystemSettingsRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1SystemSettings, any>({
        path: `/admin/system/settings`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 预热缓存
     *
     * @tags AdminSystem
     * @name AdminSystemWarmCache
     * @request POST:/admin/system/cache/warm
     */
    adminSystemWarmCache: (
      data: AdminV1WarmCacheRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1TaskResult, any>({
        path: `/admin/system/cache/warm`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateAd
     * @request PUT:/admin/ads/{id}
     */
    adminUpdateAd: (
      id: string,
      data: AdminV1UpdateAdReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Ad, any>({
        path: `/admin/ads/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateAdmin
     * @request PUT:/admin/admins/{id}
     */
    adminUpdateAdmin: (
      id: string,
      data: AdminV1UpdateAdminReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AdminInfo, any>({
        path: `/admin/admins/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateAdminRoles
     * @request PUT:/admin/admins/{adminId}/roles
     */
    adminUpdateAdminRoles: (
      adminId: string,
      data: AdminV1UpdateAdminRolesReq,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/admins/${adminId}/roles`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 管理员状态管理接口
     *
     * @tags Admin
     * @name AdminUpdateAdminStatus
     * @request PUT:/admin/admins/{id}/status
     */
    adminUpdateAdminStatus: (
      id: string,
      data: AdminV1UpdateAdminStatusReq,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/admins/${id}/status`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateAnchor
     * @request PUT:/admin/anchors/{id}
     */
    adminUpdateAnchor: (
      id: string,
      data: AdminV1UpdateAnchorReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Anchor, any>({
        path: `/admin/anchors/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateAnchorVerify
     * @request PUT:/admin/anchor-verifies/{id}
     */
    adminUpdateAnchorVerify: (
      id: string,
      data: AdminV1UpdateAnchorVerifyReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1AnchorVerify, any>({
        path: `/admin/anchor-verifies/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdatePermission
     * @request PUT:/admin/permissions/{id}
     */
    adminUpdatePermission: (
      id: string,
      data: AdminV1UpdatePermissionReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Permission, any>({
        path: `/admin/permissions/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateRole
     * @request PUT:/admin/roles/{id}
     */
    adminUpdateRole: (
      id: string,
      data: AdminV1UpdateRoleReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Role, any>({
        path: `/admin/roles/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateRolePermissions
     * @request PUT:/admin/roles/{roleId}/permissions
     */
    adminUpdateRolePermissions: (
      roleId: string,
      data: AdminV1UpdateRolePermissionsReq,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/roles/${roleId}/permissions`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateVideo
     * @request PUT:/admin/videos/{id}
     */
    adminUpdateVideo: (
      id: string,
      data: AdminV1UpdateVideoReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1Video, any>({
        path: `/admin/videos/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Admin
     * @name AdminUpdateVideoCategory
     * @request PUT:/admin/video-categories/{id}
     */
    adminUpdateVideoCategory: (
      id: string,
      data: AdminV1UpdateVideoCategoryReq,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1VideoCategory, any>({
        path: `/admin/video-categories/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 添加用户标签
     *
     * @tags AdminUser
     * @name AdminUserAddUserTags
     * @request POST:/admin/users/{id}/tags
     */
    adminUserAddUserTags: (
      id: string,
      data: AdminV1AddUserTagsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/users/${id}/tags`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 批量删除用户
     *
     * @tags AdminUser
     * @name AdminUserBatchDeleteUsers
     * @request POST:/admin/users/batch-delete
     */
    adminUserBatchDeleteUsers: (
      data: AdminV1BatchDeleteUsersRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/users/batch-delete`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 创建用户
     *
     * @tags AdminUser
     * @name AdminUserCreateUser
     * @request POST:/admin/users
     */
    adminUserCreateUser: (
      data: AdminV1CreateUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserDetail, any>({
        path: `/admin/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 删除用户
     *
     * @tags AdminUser
     * @name AdminUserDeleteUser
     * @request DELETE:/admin/users/{id}
     */
    adminUserDeleteUser: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/users/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 导出用户数据
     *
     * @tags AdminUser
     * @name AdminUserExportUsers
     * @request POST:/admin/users/export
     */
    adminUserExportUsers: (
      data: AdminV1ExportUsersRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ExportUsersResponse, any>({
        path: `/admin/users/export`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 冻结用户
     *
     * @tags AdminUser
     * @name AdminUserFreezeUser
     * @request POST:/admin/users/{id}/freeze
     */
    adminUserFreezeUser: (
      id: string,
      data: AdminV1FreezeUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/users/${id}/freeze`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 获取用户详情
     *
     * @tags AdminUser
     * @name AdminUserGetUser
     * @request GET:/admin/users/{id}
     */
    adminUserGetUser: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1UserDetail, any>({
        path: `/admin/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户操作日志
     *
     * @tags AdminUser
     * @name AdminUserGetUserLogs
     * @request GET:/admin/users/{id}/logs
     */
    adminUserGetUserLogs: (
      id: string,
      query?: {
        action?: string;
        endDate?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetUserLogsResponse, any>({
        path: `/admin/users/${id}/logs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户列表
     *
     * @tags AdminUser
     * @name AdminUserGetUsers
     * @request GET:/admin/users
     */
    adminUserGetUsers: (
      query?: {
        endDate?: string;
        keyword?: string;
        order?: string;
        /** @format int32 */
        page?: number;
        /** @format int32 */
        pageSize?: number;
        sort?: string;
        startDate?: string;
        /** @format int32 */
        status?: number;
        tagIds?: Array<string>;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1GetUsersResponse, any>({
        path: `/admin/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户统计信息
     *
     * @tags AdminUser
     * @name AdminUserGetUserStats
     * @request GET:/admin/users/stats
     */
    adminUserGetUserStats: (
      query?: {
        endDate?: string;
        startDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserStats, any>({
        path: `/admin/users/stats`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description 获取用户标签
     *
     * @tags AdminUser
     * @name AdminUserGetUserTags
     * @request GET:/admin/users/{id}/tags
     */
    adminUserGetUserTags: (id: string, params: RequestParams = {}) =>
      this.request<AdminV1GetUserTagsResponse, any>({
        path: `/admin/users/${id}/tags`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 导入用户数据
     *
     * @tags AdminUser
     * @name AdminUserImportUsers
     * @request POST:/admin/users/import
     */
    adminUserImportUsers: (
      data: AdminV1ImportUsersRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1ImportUsersResponse, any>({
        path: `/admin/users/import`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 移除用户标签
     *
     * @tags AdminUser
     * @name AdminUserRemoveUserTags
     * @request DELETE:/admin/users/{id}/tags
     */
    adminUserRemoveUserTags: (
      id: string,
      data: AdminV1RemoveUserTagsRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/users/${id}/tags`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 解冻用户
     *
     * @tags AdminUser
     * @name AdminUserUnfreezeUser
     * @request POST:/admin/users/{id}/unfreeze
     */
    adminUserUnfreezeUser: (
      id: string,
      data: AdminV1UnfreezeUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/users/${id}/unfreeze`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 更新用户
     *
     * @tags AdminUser
     * @name AdminUserUpdateUser
     * @request PUT:/admin/users/{id}
     */
    adminUserUpdateUser: (
      id: string,
      data: AdminV1UpdateUserRequest,
      params: RequestParams = {},
    ) =>
      this.request<AdminV1UserDetail, any>({
        path: `/admin/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description 主播认证审核接口
     *
     * @tags Admin
     * @name AdminVerifyAnchor
     * @request POST:/admin/anchor-verifies/{id}/verify
     */
    adminVerifyAnchor: (
      id: string,
      data: AdminV1VerifyAnchorReq,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/admin/anchor-verifies/${id}/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
