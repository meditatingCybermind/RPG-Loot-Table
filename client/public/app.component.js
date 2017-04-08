(function (app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'app',
      template: '<h1>Hello Angular</h1>',
    })
    .Class({
      constructor() {

      },
    });
}(window.app || (window.app = {})));
