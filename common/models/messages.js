'use strict';

module.exports = function(Messages) {
  Messages.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Messages.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Messages.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Messages.disableRemoteMethodByName('findOrCreate'); // stop show API: HEAD /xxx/:id
  Messages.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Messages.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Messages.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Messages.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
