import ComponentsModule from "./main.module";
import SearchBarComponent from "./search/search-bar.component";
import MovieComponent from "./results/movie.component";

const MainComponent = ComponentsModule.component("main", {
  template: /*html*/ `
    <search-bar on-search="vm.onSearch"></search-bar>
    <movie details="vm.details"></movie>

  `,
  controllerAs: "vm",
  controller: function(movieService) {
    const vm = this;

    vm.onSearch = term => {
      movieService.getMovie(term).then(response => {
        vm.details = response.data;
      });
    };
  }
});

export default MainComponent;
