
import { PubSub } from "graphql-yoga";
import { Datasources } from "../datasources";
import { Dataloaders } from "../dataloaders";

export interface Context {
    pubsub: PubSub,
    datasources: Datasources,
    dataloaders: Dataloaders
}
