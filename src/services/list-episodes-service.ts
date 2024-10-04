import { PodacastTransferDTO } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ():Promise<PodacastTransferDTO> => {

	let responseFormat: PodacastTransferDTO = {
		statusCode: 0,
		body: []
	};

	const data = await repositoryPodcast();

	if(data.length > 0){
		responseFormat.statusCode = StatusCode.OK;
	}else{
		responseFormat.statusCode = StatusCode.NO_CONTENT;
	}
	
	responseFormat.body = data;

	return responseFormat;
}