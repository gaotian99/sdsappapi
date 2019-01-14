'use strict';

module.exports = function(Posts) {
  Posts.disableRemoteMethodByName('patchOrCreate'); // stop show API: PATCH /xxx
  Posts.disableRemoteMethodByName('prototype.patchAttributes'); // stop show API: PATCH /xxx/:id
  Posts.disableRemoteMethodByName('replaceOrCreate'); // stop show API: PUT /xxx
  Posts.disableRemoteMethodByName('replaceById'); // stop show API: POST /xxx/:id/replace
  Posts.disableRemoteMethodByName('createChangeStream'); // stop show API: GET / POST /xxx/change-steam
  Posts.disableRemoteMethodByName('upsertWithWhere'); // stop show API: PATCH /xxx/upsertWithWhere
  Posts.disableRemoteMethodByName('updateAll'); // stop show API: PUT /xxx/update
};
