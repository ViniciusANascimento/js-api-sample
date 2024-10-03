import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async(
	request:http.IncomingMessage,
	response:http.ServerResponse) =>
		{
			//queryString
			const [baseUrl, queryString] = request.url?.split("?") ?? ["",""]

			//Listar podcasts
			if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
				await getListEpisodes(request, response);
			}

			//Trazer com filtros.
			if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
				await getFilterEpisodes(request, response);
			}
		}