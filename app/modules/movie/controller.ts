import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './service';
import { AxiosResponse } from 'axios'
import { Observable } from 'rxjs'
@Controller('movie')
export class MovieController {
  constructor(private readonly appService: MovieService) { }

  @Get('/')
  getMovie(@Query() query): Observable<AxiosResponse> {
    return this.appService.getMovie(query);
  }
}
