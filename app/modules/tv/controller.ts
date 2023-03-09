import { Controller, Get, Query } from '@nestjs/common';
import { TVService } from './service';
import { Request } from 'express'

@Controller('tv')
export class TVController {
  constructor(private readonly appService: TVService) { }

  @Get('/')
  getTV(@Query() query: Request): string {
    console.log(query);

    return this.appService.getTV();
  }
}
