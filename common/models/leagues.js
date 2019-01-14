'use strict';

module.exports = function(Leagues) {
  Leagues.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Leagues.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Leagues.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Leagues.disableRemoteMethodByName('findOrCreate'); // stop show API: HEAD /xxx/:id
  Leagues.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Leagues.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Leagues.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Leagues.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
