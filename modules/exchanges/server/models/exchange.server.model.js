'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Exchange Schema
 */
var ExchangeSchema = new Schema({
  currency_from: {
    type: String,
    required: 'Please fill Exchange currency_from'
  },
  amount_from: {
    type: Number,
    required: 'Please fill Exchange amount_from'
  },
  currency_to: {
    type: String,
    required: 'Please fill Exchange currency_to'
  },
  amount_to: {
    type: Number,
    required: 'Please fill Exchange amount_to'
  },
  location: {
    type: String,
    required: 'Please fill Exchange location'
  },
  schedule: {
    type: Date,
    required: 'Please fill Exchange schedule'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Exchange', ExchangeSchema);
