import { Injectable } from '@nestjs/common';

@Injectable()
export class TVService {
  getTV(): string {
    return 'Hello TV Page'
  }
}
