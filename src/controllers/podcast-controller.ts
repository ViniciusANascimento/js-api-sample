import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';

export const getListEpisodes = async (
	request : IncomingMessage,
	response : ServerResponse
) => {
	const content = await serviceListEpisodes();
	//configurando o cabeçalho para retornar com 200 se ocorrer tudo bem
	response.writeHead(200,{'Content-Type': "application/json"});
	//carregando o retorno em JSON do conteudo da service.
	response.end(JSON.stringify(content));
}