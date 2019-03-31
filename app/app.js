import angular from "angular";
import MainComponent from "./components/main.component";
import MovieService from "./services/movie.service";

angular.module("app", ["components", "services"]).component("app", {
  template: `<main></main>`
});
