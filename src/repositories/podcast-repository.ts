import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";


const pathData = path.join(__dirname,"../repositories/podcast-repository.json");

export const repositoryPodcast = 
    async (podcastName?:string):Promise<PodcastModel[]> =>
    {

    const data = fs.readFileSync(pathData, { encoding: "utf8" });
    let jsonFile = JSON.parse(data);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName)
    }
    return jsonFile;
    }