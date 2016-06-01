'use strict';

/* Controllers */

var hatApp = angular.module('hatApp', []);

/*
*
*  bandana
*  blondparyk
*  chipchap
*  guiness
*  hotdog
*  joker
*  lyseroedcowboy
*  nissehue
*  pirat
*  roedcowboy
*  tophat
*  troldmand
*  
* */

hatApp.controller('HatControl', function($scope) {
  var hats = [
    'bandana',
    'blondparyk',
    'chipchap',
    'guiness',
    'hotdog',
    'joker',
    'lyseroedcowboy',
    'nissehue',
    'pirat',
    'roedcowboy',
    'tophat',
    'troldmand',
  ];

  var cards = [];


  for (var i = 0; i < hats.length; i++) {
    var missingHat = hats[i];

    var card = [missingHat];

    for(var j = 0; j < 7; j++) {
      var availableCards = _.difference(hats, card);
      var nextCard = availableCards[Math.floor(Math.random() * availableCards.length)]
      card.push(nextCard);
    }

    cards.push({
        name: 'forside',
        children: _.shuffle(card).map(function (x) {
          return {image: x}
        })
      }, {
       name: 'bagside',
       children: _.shuffle(_.without(card, missingHat)).map(function(x) {
         return { image: x }
       })
     }
    );
  }

  $scope.hats = cards;
});

