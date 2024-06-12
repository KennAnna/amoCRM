import {Controller, Get, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {QueryLeadsDto} from "./dto/query-leads.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('leads')
  getLeads(@Query() query: QueryLeadsDto) {
    return this.appService.getLeads(query);
  }
}
