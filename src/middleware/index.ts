import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // console.log("middleware information");
  next();
});