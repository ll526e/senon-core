import { Controller, Get, Query } from '@nestjs/common';
import { PeopleService } from './service';
import { Request } from 'express'

@Controller('people')
export class PeopleController {
  constructor(private readonly appService: PeopleService) { }

  @Get('/')
  getPeople(@Query() query: Request): string {
    console.log(query);
    return this.appService.getPeople();
  }
}
