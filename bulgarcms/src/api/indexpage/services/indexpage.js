'use strict';

/**
 * indexpage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::indexpage.indexpage');
