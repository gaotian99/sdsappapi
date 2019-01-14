'use strict';
module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('teamPlayer', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // if the target model is not team, nor match, nor matchResult
    if (!((context.modelName === 'posts') || (context.modelName === 'comments'))) {
      return reject();
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    // check if the model is posts
    if (context.modelName === 'posts') {
      // check if userId is in team table for the given project id
      context.model.findById(context.modelId, function(err, post) {
        if (err || !post)
          return reject();

        var Teamuser = app.models.Teamsusers;
        Teamuser.count({
          teamID: post.ofTeam,
          userID: userId,
        }, function(err, count) {
          if (err) {
            console.log(err);
            return cb(null, false);
          }

          cb(null, count > 0); // true = is a league manager for this team
        });
      });
    }

    // check if the model is comments
    if (context.modelName === 'comments') {
      // check if userId is in team table for the given project id
      context.model.findById(context.modelId, function(err, comment) {
        if (err || !comment)
          return reject();

        var Post = app.models.Posts;
        Post.findById(comment.postID, function(err, thePost) {
          if (err || !thePost)
            return reject();

          var Teamuser = app.models.Teamsusers;
          Teamuser.count({
            teamID: thePost.ofTeam,
            userID: userId,
          }, function(err, count) {
            if (err) {
              console.log(err);
              return cb(null, false);
            }

            cb(null, count > 0); // true = is a league manager for this team
          });
        });
      });
    }
  });
};
