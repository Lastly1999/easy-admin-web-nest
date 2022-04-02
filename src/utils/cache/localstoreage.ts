export type ISetCacheOption<T> = {
    key: string
    data: T
}

/**
 * 设置缓存
 * @param config
 * @returns
 */
export const setLocalCache = <T>(config: ISetCacheOption<T>) => {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(config.key, JSON.stringify(config.data))
            resolve(null)
        } catch (err) {
            reject(err)
        }
    })
}

/**
 * 获取缓存
 * @param key 
 * @returns 
 */
export const getLocalCache = (key: string) => {
    return new Promise((resolve, reject) => {
        try {
            const cacheData = localStorage.getItem(key)
            resolve(cacheData)
        } catch (err) {
            reject(err)
        }
    })
}
