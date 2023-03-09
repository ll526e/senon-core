import { Injectable } from '@nestjs/common';

@Injectable()
export class PeopleService {
  getPeople(): string {
    return 'Hello People Page'
  }
}
