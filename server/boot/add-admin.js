'use strict';
module.exports = function(app) {
  var Users = app.models.users;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  Users.create([
    {username: 'Superman', email: 'clark@kent.com', password: '123456'},
  ], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);

    // create the admin role
    Role.create({
      name: 'admin',
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      // make superman an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id,
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
  });
};
