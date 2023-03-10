import { Controller, Get, Query } from '@nestjs/common';
import { MovieService } from './service';

@Controller('movie')
export class MovieController {
  constructor(private readonly appService: MovieService) { }

  @Get('/')
  getMovie(@Query() query): HttpReturn {
    
    return this.appService.getMovie(query);
  }
}
