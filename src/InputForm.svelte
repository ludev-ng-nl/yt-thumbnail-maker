<script>
  import { store } from "./lib/state";

  export let selected;

  import {
    FormGroup,
    TextInput,
    Select,
    SelectItem,
  } from "carbon-components-svelte";
</script>

<FormGroup>
  <TextInput
    labelText="Title"
    placeholder="Title (serie)"
    bind:value={$store.title}
  />
  {#if selected === 0}
    <TextInput
      labelText="Subtitle"
      placeholder="Subtitle"
      bind:value={$store.chapter}
    />
  {/if}
  <TextInput
    labelText="URL"
    placeholder="URL de la foto"
    bind:value={$store.url}
  />
</FormGroup>
