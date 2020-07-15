<script>
  const Factory = require("@rdfjs/data-model");
  const Dataset = require("@rdfjs/dataset");
  const { DatasetEditor } = require("rdfjs-svelte");

  let dataset = Dataset.dataset([
    Factory.quad(
      Factory.namedNode("http://example.org/Bill"),
      Factory.namedNode("http://example.org/knows"),
      Factory.namedNode("http://example.org/Berta"),
      Factory.defaultGraph()
    ),
    Factory.quad(
      Factory.namedNode("http://example.org/Charlie"),
      Factory.namedNode("http://example.org/knows"),
      Factory.namedNode("http://example.org/Carl"),
      Factory.defaultGraph()
    ),
    Factory.quad(
      Factory.namedNode("http://example.org/Carl"),
      Factory.namedNode("http://example.org/admires"),
      Factory.namedNode("http://example.org/Bill"),
      Factory.defaultGraph()
    ),
    Factory.quad(
      Factory.namedNode("http://example.org/Berta"),
      Factory.namedNode("http://example.org/knows"),
      Factory.namedNode("http://example.org/Charlie"),
      Factory.defaultGraph()
    ),
    Factory.quad(
      Factory.namedNode("http://example.org/Bill"),
      Factory.namedNode("http://example.org/loves"),
      Factory.namedNode("http://example.org/Alice"),
      Factory.namedNode("http://example.org/BillsSecrets")
    ),
  ]);
</script>

<style>

</style>

<div class="container">
  <div class="columns">
    <div class="column">
      <h2>Dataset</h2>
      <DatasetEditor bind:value={dataset} />
    </div>
  </div>
</div>
