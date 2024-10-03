import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";


const pathData = path.join(__dirname,"../repositories/podcast-repository.json");

export const repositoryPodcast = async ():Promise<Podcast[]> =>{
    const data = fs.readFileSync(pathData, { encoding: "utf8" });
    const jsonFile = JSON.parse(data);
    return jsonFile;
}