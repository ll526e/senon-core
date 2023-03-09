import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
interface ReturnType {
    data: unknown,
    status: number
    message: string
}

@Injectable()
export class HttpInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler): Observable<ReturnType> {
        return next.handle().pipe(
            map(data => {
                return {
                    data,
                    status: 1,
                    message: 'success',
                };
            }),
        );
    }
}