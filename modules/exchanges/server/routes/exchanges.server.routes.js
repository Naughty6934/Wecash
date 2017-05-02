'use strict';

/**
 * Module dependencies
 */
var exchangesPolicy = require('../policies/exchanges.server.policy'),
  exchanges = require('../controllers/exchanges.server.controller');

module.exports = function(app) {
  // Exchanges Routes
  app.route('/api/exchanges').all(exchangesPolicy.isAllowed)
    .get(exchanges.list)
    .post(exchanges.create);

  app.route('/api/exchanges/:exchangeId').all(exchangesPolicy.isAllowed)
    .get(exchanges.read)
    .put(exchanges.update)
    .delete(exchanges.delete);

  // Finish by binding the Exchange middleware
  app.param('exchangeId', exchanges.exchangeByID);
};
