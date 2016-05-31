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
  $scope.hats = [

    {
    name: "Hatte 1 forside",
    children: [
      {image: ""},
      {image: "bandana"},
      {image: "blondparyk"},
      {image: ""},
      {image: "chipchap"},
      {image: ""},
      {image: ""},
      {image: "guiness"},
      {image: "hotdog"},
      {image: ""},
      {image: ""},
      {image: "joker"},
      {image: ""},
      {image: "lyseroedcowboy"},
      {image: "nissehue"}
    ]},

    {
    name: "Hatte 1 bagside",
    children: [
      {image: ""},
      {image: "pirat"},
      {image: "roedcowboy"},
      {image: ""},
      {image: "tophat"},
      {image: ""},
      {image: ""},
      {image: "troldmand"},
      {image: "troldmand"},
      {image: ""},
      {image: ""},
      {image: "troldmand"},
      {image: ""},
      {image: "troldmand"},
      {image: "troldmand"}
    ]}
  ]
});

