import { ActionFunction } from "@remix-run/node";
import { badRequest } from "~/service/request.server";
import { requireUserId } from "~/service/session.server";
import { db } from "../../service/db.server";

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);

  const recipeId = params.recipeId;

  if (!recipeId || typeof recipeId !== "string") {
    return badRequest({ formError: "Recipe not exsit!" });
  }

  const isLiked = await db.favorite.findFirst({
    where: { userId, recipes: { some: { id: recipeId } } },
  });

  await db.favorite.upsert({
    where: { userId },
    create: { userId, recipes: { connect: { id: recipeId } } },
    update: {
      recipes:
        isLiked !== null
          ? { disconnect: { id: recipeId } }
          : { connect: { id: recipeId } },
    },
  });
  // const favCounts = await db.recipe.findFirst({
  //   where: { id: recipeId },
  //   select: { likesNum: true },
  // });

  // if (!favCounts)
  //   return badRequest({ message: "cannot find likesNum in recipe!" });

  // const oldLikesNum = favCounts.likesNum;

  await db.recipe.update({
    where: { id: recipeId },
    // data: { likesNum: isLiked ? oldLikesNum - 1 : oldLikesNum + 1 },
    data: {
      likesNum: (() => {
        return isLiked ? { decrement: 1 } : { increment: 1 };
      })(),
    },
  });

  return null;
};
