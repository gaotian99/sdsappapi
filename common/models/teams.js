'use strict';

module.exports = function(Teams) {
  Teams.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Teams.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Teams.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Teams.disableRemoteMethodByName('findOrCreate'); // stop show API: HEAD /xxx/:id
  Teams.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Teams.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Teams.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Teams.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
