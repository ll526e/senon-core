import { Injectable, ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'
import { ConfigService } from '@nestjs/config';
import { Observable, map, catchError } from 'rxjs'
@Injectable()
export class MovieService {
  constructor(
    private readonly axios: HttpService,
    private readonly configRuntime: ConfigService) {
  }
  getMovie(params): Observable<AxiosResponse> {
    const url = this.configRuntime.get<string>('MOVIE_API_URL')
    return this.axios.get(`${url}/search/movie`, { params }).pipe(map((res) => res.data)).pipe(catchError(() => {
      throw new ForbiddenException('API is error')
    }))
  }
}
