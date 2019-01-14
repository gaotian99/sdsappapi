'use strict';

module.exports = function(Comments) {
  Comments.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Comments.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Comments.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Comments.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Comments.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Comments.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Comments.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
