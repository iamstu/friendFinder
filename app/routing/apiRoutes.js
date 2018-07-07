var path = require("path");
var friends = require("../data/friends.js");


module.exports = function(app){
app.get("/api/friends", function(req, res){
    res.json(friends);
})

app.post("/api/friends", function(req, res){
    console.log(req.body);
    console.log(friends);
    var userData = req.body;
    var initDiff = null;
    var match = null;
    for (var i = 0; i < friends.length; i++){
        var diff = 0;
        friendData = friends[i];
        for (var j = 0; j < friendData.choices.length; j++){
            diff += Math.abs(parseInt(userData.choices[j]) - parseInt(friendData.choices[j]));
            // console.log(diff)
        }
        console.log(diff);
        if(initDiff === null || initDiff > diff){
            initDiff = diff;
            match = friendData;
            console.log(match);
            console.log("a change occured");
        }
        if(initDiff = diff){
            if (Math.random < .49){
            initDiff = diff;
            match = friendData;
            console.log(match);
            console.log("a change occured");
            }
        }
    }
    res.json(match);
    friends.push(userData);
    console.log(diff);
})

}