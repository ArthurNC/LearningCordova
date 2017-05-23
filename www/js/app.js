var app = angular.module("app", ["ionic"])

//VIEW CONTROLLERS
app.controller('page1Ctrl', ['$scope', '$stateParams', function($scope, $stateParams) {
                            
                            }])

app.controller('page2Ctrl', ['$scope', '$stateParams', function($scope, $stateParams) {
                             
                             }])

app.controller('page3Ctrl', ['$scope', '$stateParams', function($scope, $stateParams) {
                             
                             }])

app.controller('menuCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
                             
                             }])

app.controller('testPageCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
                             
                             }])

//CONFIGURE TEMPLATE VIEWS
app.config(function($stateProvider, $urlRouterProvider) {
           
           $stateProvider.state('tabsController.page1', {
                                 url: '/page2',
                                 views: {
                                 'tab1': {
                                 templateUrl: 'templates/page1.html',
                                 controller: 'page1Ctrl'
                                 }
                                 }
                                 })
           
           $stateProvider.state('tabsController.page2', {
                                url: '/page3',
                                views: {
                                'tab2': {
                                templateUrl: 'templates/page2.html',
                                controller: 'page2Ctrl'
                                }
                                }
                                })
           
           $stateProvider.state('tabsController.page3', {
                                 url: '/page4',
                                 views: {
                                 'tab3': {
                                 templateUrl: 'templates/page3.html',
                                 controller: 'page3Ctrl'
                                 }
                                 }
                                 })
           
           $stateProvider.state('tabsController', {
                                url: '/page1',
                                templateUrl: 'templates/tabsController.html',
                                abstract:true
                                })
           
           $stateProvider.state('testPage', {
                                url: '/page5',
                                templateUrl: 'templates/testPage.html',
                                controller: 'testPageCtrl'
                                })
           
           $urlRouterProvider.otherwise('/page1/page4')
           })
