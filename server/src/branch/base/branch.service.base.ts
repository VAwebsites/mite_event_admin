/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Branch, Event } from "@prisma/client";

export class BranchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BranchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BranchFindManyArgs>
  ): Promise<number> {
    return this.prisma.branch.count(args);
  }

  async findMany<T extends Prisma.BranchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BranchFindManyArgs>
  ): Promise<Branch[]> {
    return this.prisma.branch.findMany(args);
  }
  async findOne<T extends Prisma.BranchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BranchFindUniqueArgs>
  ): Promise<Branch | null> {
    return this.prisma.branch.findUnique(args);
  }
  async create<T extends Prisma.BranchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BranchCreateArgs>
  ): Promise<Branch> {
    return this.prisma.branch.create<T>(args);
  }
  async update<T extends Prisma.BranchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BranchUpdateArgs>
  ): Promise<Branch> {
    return this.prisma.branch.update<T>(args);
  }
  async delete<T extends Prisma.BranchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BranchDeleteArgs>
  ): Promise<Branch> {
    return this.prisma.branch.delete(args);
  }

  async findEvents(
    parentId: string,
    args: Prisma.EventFindManyArgs
  ): Promise<Event[]> {
    return this.prisma.branch
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .events(args);
  }
}
