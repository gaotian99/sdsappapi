'use strict';

module.exports = function (Comments) {
  Comments.disableRemoteMethodByName('patchOrCreate');
  Comments.disableRemoteMethodByName('prototype.patchAttributes');
};
