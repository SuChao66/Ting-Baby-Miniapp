/**
 * 设计稿换算工具（375 稿）：px → rpx，1px = 2rpx
 *
 * 使用边界：
 * - JS 动态样式用本函数：<View style={{ height: rpx(16) }} /> → "32rpx"
 * - scss 静态样式不用它：config 里 designWidth=375，直接写 px（16px），
 *   pxtransform 编译期自动 ×2 转 32rpx，零运行时开销
 * - JS 里不要手写 "16px" 字符串，统一走本函数
 *
 * @example rpx(16)  → "32rpx"
 * @example rpx(7.5) → "15rpx"
 */
export const rpx = (px: number): string => `${px * 2}rpx`;
