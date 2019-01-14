'use strict';
module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('teamCaptain', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // if the target model is not team, nor match, nor matchResult
    if (!((context.modelName === 'teams') || (context.modelName === 'matches') || (context.modelName === 'matchresults'))) {
      return reject();
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    // check if the model is teams
    if (context.modelName === 'teams') {
      // check if userId is in team table for the given project id
      context.model.findById(context.modelId, function(err, team) {
        if (err || !team)
          return reject();

        if (userId !== team.captain) {
          return reject();
        } else {
          return cb(null, true); // true = is a league manager for this team
        }
      });
    }

    // check if the model is matchresults
    if (context.modelName === 'matchresults') {
      // check if userId is in team table for the given project id
      context.model.findById(context.modelId, function(err, matchresult) {
        if (err || !matchresult)
          return reject();

        var Team = app.models.Teams;
        Team.count({
          id: matchresult.teamID,
          captain: userId}, function(err, count) {
          if (err) {
            console.log(err);
            return cb(null, false);
          }

          cb(null, count > 0); // true = is a league manager for this team
        });
      });
    }

    // check if the model is matches
    if (context.modelName === 'matches') {
      // check if userId is in team table for the given project id
      context.model.findById(context.modelId, function(err, matche) {
        if (err || !matche)
          return reject();

        var MatchResult = app.models.Matchresults;
        MatchResult.find({
          matchID: matche.id,
        }, function(err, allMatchesResults) {
          if (err) {
            console.log(err);
            return cb(null, false);
          }
          var Team = app.models.Teams;
          for (var aMatchResult in allMatchesResults) {
            Team.count({
              id: aMatchResult.teamID,
              captain: userId}, function(err, count) {
              if (err) {
                console.log(err);
                return cb(null, false);
              }
              if (count > 0) return cb(null, true);
            });
          }
          return reject();
        });
      });
    }
  });
};
