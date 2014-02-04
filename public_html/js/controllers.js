/* define the controllers for the app using appName.controllers */

/* Project List controller */
angular.module('portfolioApp.controllers', []).
             // define controller               services.js
  controller('projectCtrl', function($scope, webmakerAPIservice) {
    // create empty array
    $scope.projects = [];

    webmakerAPIservice.getProjects().success(function (response) {
        // Dig into the response to get the relevant data to populate the array
        $scope.projects = response;
        // uncomment next line to see the objects and properties created in the
        // array to find elements for the partials

        console.log(response);
    });
  }).



  /* Project Detail controller */

              // define controller                    app.js        services.js
  controller('projectDetailCtrl', function($scope, $routeParams, webmakerAPIservice){
      $scope.nid = $routeParams.nid;
      $scope.project = [];

    webmakerAPIservice.getProjectDetails($scope.nid).success(function (response) {
      $scope.project = response[0];

      // uncomment next line to see the objects and properties created in the
      // array to find elements for the partials

      console.log(response[0]);
    });
});
