/**
 * Created by olinf on 30/09/2016.
 */
'use strict';
eventsApp.controller('EventController',
    function EventController($scope){
        $scope.event={
            name:'Angular Boot Camp',
            date:'1/1/2013',
            time:'10:30 am',
            location:{
                address:'Somersstraat 22',
                city:'Antwerpen',
                postalCode:'2018'
            },
            imageUrl:'/img/angularjs-logo.png',
            sessions:[
                {
                    name:'Directives Masterclass',
                    creatorName:'Bob Smith',
                    duration:'1 hr',
                    level:'Advanced',
                    abstract:'In this session you will learn ... Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.',
                    upvoteCount:0
                },
                {
                    name:'Scopes for fun and profits',
                    creatorName:'John Doe',
                    duration:'30 mins',
                    level:'Introductory',
                    abstract:'Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.',
                    upvoteCount:0
                },
                {
                    name:'Well Behaved Controllers',
                    creatorName:'Jane Doe',
                    duration:'2 hrs',
                    level:'Intermediate',
                    abstract:'Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.',
                    upvoteCount:30
                }
            ]
        }
        $scope.upvoteSession=function(session){
            session.upvoteCount++;
        }
        $scope.downvoteSeesion=function(session){
            session.upvoteCount--;
        }
    }
);