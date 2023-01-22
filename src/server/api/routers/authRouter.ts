import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { hash } from "bcrypt";
import { TRPCError } from "@trpc/server";

const SALT_ROUNDS = 8;

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const foundUser = await ctx.prisma.user.findFirst({
        where: {
          email: input.email,
        },
      });

      if (foundUser) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Email is already taken",
        });
      }

      const hashedPassword = await hash(input.password, SALT_ROUNDS);
      if (!hashedPassword) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }

      const user = await ctx.prisma.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
        },
      });

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      };
    }),
});
