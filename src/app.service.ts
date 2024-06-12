import {Injectable, ServiceUnavailableException} from '@nestjs/common';
import {QueryLeadsDto} from "./dto/query-leads.dto";
import {HttpService} from "@nestjs/axios";
import {envFile} from "./config";
import {catchError, firstValueFrom} from "rxjs";

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService) {
    }

    async getLeads(query: QueryLeadsDto) {
        const response = await firstValueFrom(
            this.httpService.get(`https://${envFile.amoCrmDomain}.amocrm.ru//api/v4/leads`, {
                params: {
                    with: 'contacts',
                    query: query.query
                },
                headers: {
                    Authorization: `Bearer ${envFile.amoCrmToken}`
                }
            })
            .pipe(
                catchError(error => {
                    throw new ServiceUnavailableException()
                    }
                )
            )
        );
        return response.data;
    }
}
