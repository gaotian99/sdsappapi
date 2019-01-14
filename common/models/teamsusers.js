'use strict';

module.exports = function(Teamsusers) {
  Teamsusers.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Teamsusers.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Teamsusers.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Teamsusers.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Teamsusers.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Teamsusers.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Teamsusers.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
