'use strict';
var _ = require('lodash');

var buildTree = function (graftTarget, current, depth) {
  if (!current || depth == 0) {
    return;
  }
  var objects = current.objects || current.children;
  _.each(objects, function (value, key) {
    graftTarget[key] = {};
    buildTree(graftTarget[key], objects[key], depth-1);
  });
  return graftTarget;
};

module.exports = function (input, depth) {
  depth = depth !== undefined ? depth : -1;
  console.log(depth);
  var result = buildTree({}, input, depth);
  console.log(result);
  return result;
};