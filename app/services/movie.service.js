import ServiceModule from "./services.module";

const BASE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f343cccf";

ServiceModule.service("movieService", function($http) {
  this.getMovie = term => {
    return $http.get(`${BASE_URL}&t=${term}`);
  };
});
