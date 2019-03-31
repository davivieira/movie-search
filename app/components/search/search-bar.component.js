import ComponentsModule from "../main.module";

const SearchBarComponent = ComponentsModule.component("searchBar", {
  template: /*html*/ `
    <div class="ui menu"">
      <div class="right menu">
        <div class="item">
          <div class="ui action left icon input">
            <i class="search icon"></i>
            <input type="text" placeholder="Search" ng-model="vm.term">
            <button class="ui button" ng-click="vm.onSearch(vm.term)">Submit</button>
          </div>
        </div>
      </div>
    </div>
  `,
  bindings: {
    onSearch: "<"
  },
  controllerAs: "vm",
  controller: function(movieService) {
    const vm = this;

    vm.term = "";
  }
});

export default SearchBarComponent;
