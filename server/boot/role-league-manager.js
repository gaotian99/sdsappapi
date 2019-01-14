
'use strict';
module.exports = function(app) {
  var Role = app.models.Role;

  Role.registerResolver('leagueManager', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // if the target model is not team, nor league, nor match, nor matchResult
    if (!((context.modelName === 'teams') || (context.modelName === 'leagues') || (context.modelName === 'matches') || (context.modelName === 'matchresults'))) {
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

        var League = app.models.Leagues;
        League.count({
          id: team.leagueID,
          leagueManager: userId}, function(err, count) {
          if (err) {
            console.log(err);
            return cb(null, false);
          }

          cb(null, count > 0); // true = is a league manager for this team
        });
      });
    }

    // check if the model is leagues
    if (context.modelName === 'leagues') {
      // check if userId is in team table for the given project id
      context.model.findById(context.modelId, function(err, league) {
        if (err || !league)
          return reject();

        if (league.leagueManager === userId) {
          return cb(null, true); // if the league manager for this league
        } else {
          return reject();
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
        Team.findById(
          matchresult.teamID,
          function(err, thatTeam) {
            if (err) {
              console.log(err);
              return cb(null, false);
            }
            var League = app.models.Leagues;
            League.count({
              id: thatTeam.leagueID,
              leagueManager: userId}, function(err, count) {
              if (err) {
                console.log(err);
                return cb(null, false);
              }

              cb(null, count > 0); // true = is a league manager for this team
            });
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
            Team.findById(
              aMatchResult.teamID,
              function(err, thatTeam) {
                if (err) {
                  console.log(err);
                  return cb(null, false);
                }
                var League = app.models.Leagues;
                League.count({
                  id: thatTeam.leagueID,
                  leagueManager: userId}, function(err, count) {
                  if (err) {
                    console.log(err);
                    return cb(null, false);
                  }

                  return cb(null, count > 0); // true = is a league manager for this team
                });
              });
          }
          return reject();
        });
      });
    }
  });
};
