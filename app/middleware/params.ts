import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ParamsMiddleware implements NestMiddleware {
    constructor(private readonly configRuntime: ConfigService) { }
    use(req: Request, res: Response, next: NextFunction): void {
        const lang = this.configRuntime.get<string>('MOVIE_LANGUAGE')
        const token = this.configRuntime.get<string>('MOVIE_ACCESS_TOKEN')
        req.query = Object.assign({ 'api_key': token, 'language': lang }, req.query)
        next();
    }
}
