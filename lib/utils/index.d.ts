export declare function getUuiD(randomLength?: number): string;
export declare function deepClone(O: Target): Promise<unknown>;
/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
export declare function debounce(func: any, wait: any, immediate: any): (this: {}) => void;
