import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast-controller';
import { Routes } from './routes/routes';
const server =

http.createServer(
	async (request:http.IncomingMessage,response:http.ServerResponse) =>
		{	
			//queryString
			const [baseUrl, queryString] = request.url?.split("?") ?? ["",""]

			//Listar podcasts
			if(request.method === "GET" && baseUrl === Routes.LIST){
				await getListEpisodes(request, response);
			}

			//Trazer com filtros.
			if(request.method === "GET" && baseUrl === Routes.EPISODE){
				await getFilterEpisodes(request, response);
			}
		}
);

const port = process.env.PORT;

server.listen(port,()=>{
	
	console.log(`servidor iniciado na porta ${port}`)
});

