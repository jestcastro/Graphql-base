
import { PubSub } from 'graphql-yoga'
import { getDatasources } from "./datasources";
import { Context } from './types/context';
import { getDataloaders } from './dataloaders';

export const getContext = (pubsub: PubSub) => (): Context => {
  const datasources = getDatasources()
  return {
    datasources,
    dataloaders: getDataloaders(datasources),
    pubsub
  };
}