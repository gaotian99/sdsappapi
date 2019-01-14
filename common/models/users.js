'use strict';

module.exports = function(Users) {
  Users.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Users.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Users.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Users.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Users.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Users.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Users.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
