'use strict';

/**
 * serv service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::serv.serv');
