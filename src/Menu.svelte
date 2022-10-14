<script>
  import { Tabs, Tab } from "carbon-components-svelte";

  export let selected;
</script>

<Tabs bind:selected>
  <Tab label="Single Video" />
  <Tab label="Series Video" />
</Tabs>
