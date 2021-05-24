import service from './service.js'
export function get(url, params) {
    const config = {
        method: 'get',
        url
    }
    if (params) {
        config.params = params
    }
    return service(config)
}
export function post(url, params) {
    const config = {
        method: 'post',
        url
    }
    if (params) {
        config.data = params
    }
    return service(config)
}