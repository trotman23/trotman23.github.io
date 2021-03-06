angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
    $scope.greetMe = 'World';
    $scope.temp = 'temp'
    $scope.ranks = [
            {
                "rank": 1,
                "teamName": "8th Year Senior",
                "owner": "Joey Bauer",
                "teamId": 1,
                "wins": 2,
                "losses": 1,
                "theme": "Michelob Golden Draft Light",
                "text": "Bouncing back after last weeks down week, Joey's team is starting to look legitimate. As legitimite as ice cold always smooth Michelob Golden Draft Light&trade;. Obviously the best domestic beer.",
                "imgUrl": "http://trotman23.github.io/ffl/img/mich-golden.jpg"
            },
            {
                "rank": 2,
                "teamName": "The Implication",
                "owner": "KC Faulkner",
                "teamId": 2,
                "wins": 2,
                "losses": 1,
                "theme": "Bud Light",
                "text": "Just as Bud Light is the #1 selling beer in America (besides the lesser know best beer, Michelob Golden Draft Light&trade;, KC's team has shown that it can compete. If you/re still in denial about her making roster decisions for Brenda last year, you're an idiot.",
                "imgUrl": "http://trotman23.github.io/ffl/img/bud-light.jpg"
            },
            {
                "rank": 3,
                "teamName": "Tevin Coleman Lives Matter",
                "owner": "Eric Johnson",
                "teamId": 3,
                "wins": 2,
                "losses": 1,
                "theme": "Coors Light",
                "text": "The #2 selling beer in America, Eric's team is right up there by the top.",
                "imgUrl": "http://trotman23.github.io/ffl/img/coors-light.jpg"
            },
            {
                "rank": 4,
                "teamName": "Grace White Lightning Bolt",
                "owner": "Kevin Englebert",
                "teamId": 4,
                "wins": 3,
                "losses": 0,
                "theme": "Budweiser",
                "text": "As the only undefeated team in the league, I can't rank Kev lower than 4. I think his team isn't that good, but a W is a W. Just like Budweiser isn't that good of a beer, it still is the 4th best selling domestic beer in the USA.",
                "imgUrl": "http://trotman23.github.io/ffl/img/budweiser.jpg"
            },
            {
                "rank": 5,
                "teamName": "Let Me Ask My Girlfriend Fist",
                "owner": "Matt Dexheimer",
                "teamId": 5,
                "wins": 1,
                "losses": 2,
                "theme": "Michelob Ultra Light",
                "text": "The little sister beer of the infamous Michelob Golden Draft Light&trade;. Matt's team is better than his record, and he has the hardest SOS currently.",
                "imgUrl": "http://trotman23.github.io/ffl/img/mich-ultra.jpg"
            },
            {
                "rank": 6,
                "teamName": "Ladi Dayz",
                "owner": "Alex Fife",
                "teamId": 6,
                "wins": 2,
                "losses": 1,
                "theme": "Miller Light",
                "text": "The awful skunky beer, just like fife's team. A lot of people like Miller Light simply because they have no taste buds, just like fife has poor taste.",
                "imgUrl": "http://trotman23.github.io/ffl/img/miller-light.jpg"
            },
            {
                "rank": 7,
                "teamName": "Team Kelly",
                "owner": "Nick Kelly",
                "teamId": 7,
                "wins": 2,
                "losses": 1,
                "theme": "Keystone Light",
                "text": "Nick sucks and Keystone sucks, but it gets the job done when you need it to. Like his team, 2-1, but lucky to be that good.",
                "imgUrl": "http://trotman23.github.io/ffl/img/keystone-light.jpg"
            },
            {
                "rank": 8,
                "teamName": "No, My Name Is Luke",
                "owner": "Luke Przekurat",
                "teamId": 8,
                "wins": 1,
                "losses": 2,
                "theme": "Hamms",
                "text": "We're getting down to the lower half of teams, and that's exactly where Hamm's falls. Near the bottom, but drinkable",
                "imgUrl": "http://trotman23.github.io/ffl/img/hamms.jpg"
            },
            {
                "rank": 9,
                "teamName": "Cleveland Steamers",
                "owner": "Brendan Page",
                "teamId": 9,
                "wins": 1,
                "losses": 2,
                "theme": "Red Dog",
                "text": "The truth is out. The Gina should have gone to KC last year. ",
                "imgUrl": "http://trotman23.github.io/ffl/img/red-dog.jpg"
            },
            {
                "rank": 10,
                "teamName": "trotaline dayz 2k18",
                "owner": "Ryan Lewis",
                "teamId": 10,
                "wins": 1,
                "losses": 2,
                "theme": "Kirkland Light",
                "text": "Thinks he's good but isn't. Doesn't read the chat, just shitposts in it.",
                "imgUrl": "http://trotman23.github.io/ffl/img/kirkland-light.jpg"
            },
            {
                "rank": 11,
                "teamName": "Rissy Dayz 2k17",
                "owner": "Jake Trotman",
                "teamId": 11,
                "wins": 1,
                "losses": 2,
                "theme": "Milwaukee's Be(a)st",
                "text": "If only I could start the right players each week, I would be a little higher on this list. But now at least I'm not the worst team (by W/L record)",
                "imgUrl": "http://trotman23.github.io/ffl/img/mke-best.jpg"
            },
            {
                "rank": 12,
                "teamName": "Team Gardner",
                "owner": "David Gardner",
                "teamId": 12,
                "wins": 0,
                "losses": 3,
                "theme": "Special Export",
                "text": "Year after year, week after week, david's team continues to suck. When will the suffering end? Will he even set his lineup this week? Maybe David likes Tina's company down at the bottom. That's why he gets Special Export. The single worst beer I have ever tasted in my entire life.",
                "imgUrl": "http://trotman23.github.io/ffl/img/special-export.jpg"
            }
        ];
        $scope.he = "he";
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});