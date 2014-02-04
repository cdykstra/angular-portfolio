/* Create a directive, giving the service a name and list the dependancies within the square brackets [] */
angular.module('portfolioApp.services', [])

  .factory('webmakerAPIservice', function($http) {

    var webmakerAPI = {};

    webmakerAPI.getProjects = function() {
      return $http({
        method: 'JSONP',
        // created a Drupal Services View with no filter
        url: 'http://example.com/<path-to-endpoint>/<resource>?callback=JSON_CALLBACK'
      });
    };

    // provide the nid (Drupal node id) to the service to retrieve a specific drupal node
    webmakerAPI.getProjectDetails = function(nid) {
      return $http({
        method: 'JSONP',
        // created a separate Services View to filter results
        url: 'http://example.com/<path-to-endpoint>/<resource>?nid='+ nid +'&callback=JSON_CALLBACK'
      });
    };

    return webmakerAPI;
  });