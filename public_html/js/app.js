/* Create a directive, giving your app a name and list the dependancies within the square brackets [] */
angular.module('portfolioApp', [
  'portfolioApp.services', // services.js
  'portfolioApp.controllers', // controllers.js
  'ngRoute' // angular module angular-route.min.js
])

/* Using $route* service requires ngRoute module - see index.html */

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when("/",
        {
        templateUrl: "partials/project-list.html", // html displayed in ng-view of index.html
        controller: "projectCtrl"  // defined in controllers.js
        })

      .when("/:nid",{
        templateUrl: "partials/project-detail.html", // html displayed in ng-view of index.html
        controller: "projectDetailCtrl"  // defined in controllers.js
      })

      .otherwise({
        redirectTo: "/"
      });
  }]);
