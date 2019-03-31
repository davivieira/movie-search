import ComponentsModule from "../main.module";

const MovieComponent = ComponentsModule.component("movie", {
  template: /*html*/ `
    <div ng-if="vm.details && !vm.details.Error" class="ui container">
      <div class="ui card">
        <div ng-if="vm.details.Poster != 'N/A'" class="image">
          <img src="{{vm.details.Poster}}">
        </div>
        <div class="content">
          <a class="header">{{vm.details.Title}}</a>
          <div class="meta">
            <span class="date">{{vm.details.Year}}</span>
          </div>
          <div class="description">
            {{vm.details.Plot}}
          </div>
        </div>
      </div>
    </div>
    <div ng-if="vm.details.Error" class="ui container">
      <div class="ui ignored info message">
      <i class="info icon"></i>
      {{vm.details.Error}}
    </div>
    </div>

  `,
  bindings: {
    details: "<"
  },
  controllerAs: "vm",
  controller: function() {
    const vm = this;
  }
});
