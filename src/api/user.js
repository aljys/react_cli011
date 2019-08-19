import request from '../utils/request'

export function getuser(url){
    return request({
        methods:'get',
        url
    })
}