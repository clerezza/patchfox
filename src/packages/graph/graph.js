const GraphView = require("./GraphView.svelte");

patchfox.package({
  name: "graph",
  view: GraphView,
  menu: [
    {
      group: "Graph",
      items: [
        {
          label: "Edit",
          event: "package:go",
          data: {
            pkg: "graph",
            view: "view",
            data: {
              currentSubView: "edit"
            }
          }
        }
      ]
    }
  ]
});
