'use strict';

module.exports = function(Matches) {
  Matches.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Matches.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Matches.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Matches.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Matches.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Matches.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Matches.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
