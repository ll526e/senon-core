import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

declare global {
    interface ReturnDataType<T> {
        data: T,
        status: number
        message: string
    }

    type HttpReturn<T = any> = Observable<AxiosResponse<ReturnDataType<T>>>
}