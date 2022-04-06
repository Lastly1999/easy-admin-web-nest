export type ISetCacheOption = {
    key: string
    data: string
}

/**
 * 设置缓存
 * @param config
 * @returns
 */
export const setLocalCache = (config: ISetCacheOption) => {
    return new Promise((resolve, reject) => {
        try {
            localStorage.setItem(config.key, config.data)
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
            const cacheData = JSON.stringify(localStorage.getItem(key))
            resolve(cacheData)
        } catch (err) {
            reject(err)
        }
    })
}
