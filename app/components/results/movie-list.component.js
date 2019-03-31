import ComponentsModule from "../main.module";
import MovieComponent from "./movie.component";

const MovieListComponent = ComponentsModule.component("movieList", {
  template: /*html*/ `

  `,
  controllerAs: "vm",
  controller: function() {
    const vm = this;
  }
});
