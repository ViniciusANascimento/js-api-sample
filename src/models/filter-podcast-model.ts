import { PodcastModel } from "./podcast-model";

export interface PodacastTransferDTO{
	statusCode: number;
	body: PodcastModel[];

}