import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

// 定义接口返回标准 T 实际返回结果集类型
export interface ReturnDataType<T> {
    data: T,
    status: number
    message: string
}

export type HttpReturn<T = any> = Observable<AxiosResponse<ReturnDataType<T>>>

export const useFetch = (): string => {
    return ''
}