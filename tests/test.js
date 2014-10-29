var expect = require('chai').expect;
var _ = require('lodash');
var extractManifest = require('../index');

describe('manifest', function () {
  // describe('transform', function () {});
  it('should correctly transform input files', function () {
    var model1 = require('./model1/parse.autodesk.json');
    var manifest1 = require('./model1/expectedManifest.js');
    expect(extractManifest(model1)).to.eql(manifest1);
  });
});