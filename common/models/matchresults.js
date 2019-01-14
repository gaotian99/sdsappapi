'use strict';

module.exports = function(Matchresults) {
  Matchresults.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Matchresults.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Matchresults.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Matchresults.disableRemoteMethodByName('findOrCreate'); // stop show API: HEAD /xxx/:id
  Matchresults.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Matchresults.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Matchresults.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Matchresults.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
