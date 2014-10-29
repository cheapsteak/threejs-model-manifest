'use strict';
var _ = require('lodash');
var async = require('async');

var buildTree = function (graftTarget, current) {
  if (!current) {
    return;
  }
  var objects = current.objects || current.children;
  _.each(objects, function (value, key) {
    graftTarget[key] = {};
    buildTree(graftTarget[key], objects[key]);
  });
  return graftTarget;
};

module.exports = function (input) {
  return buildTree({}, input);
};