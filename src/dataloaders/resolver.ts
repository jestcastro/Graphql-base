import { Context } from "../types/context";
import { GraphQLResolveInfo } from "graphql";
import { Dataloaders } from ".";

export const dataloaderResolver = (dataloader: keyof Dataloaders, parentField: string, multiple: boolean) => (
  async (parent, args, context: Context, info: GraphQLResolveInfo) => {
    const records = await context.dataloaders[dataloader].load(parent[parentField])
    return multiple ? records : records[0];
  }
)
