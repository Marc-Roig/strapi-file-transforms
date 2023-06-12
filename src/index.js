"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    const mediaBuilder = strapi.plugin("upload").service("upload").mediaBuilder;

    mediaBuilder.deleteTransform("image.metadata");
    mediaBuilder.deleteTransform("image.throttle");
    mediaBuilder.deleteTransform("image.optimize");
    mediaBuilder.deleteTransform("image.breakpoints");
    mediaBuilder.deleteTransform("image.thumbnail");
  },
};
