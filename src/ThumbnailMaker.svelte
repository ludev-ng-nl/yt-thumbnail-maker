<script>
  import { Checkbox, Form, FormGroup, Button } from "carbon-components-svelte";
  import Menu from "./Menu.svelte";
  import InputForm from "./InputForm.svelte";
  import DownloadForm from "./DownloadForm.svelte";
  import Thumbnail from "./Thumbnail.svelte";

  /** The download timestamp. Using it to force a component repaint (and redownload). */
  let download = null;

  let selected = 0;

  /** If true, display the server side lists. */
  let downloadServerSide = false;

  function handleSubmit(e) {
    e.preventDefault();
    download = Date.now();
  }

  function downloaded() {
    download = null;
  }
</script>

<main>
  <Menu bind:selected />
  <Thumbnail {selected} on:download={downloaded} {download} />

  <Form on:submit={handleSubmit}>

    <InputForm {selected} />
    <FormGroup>
      <Button type="submit">Download</Button>
    </FormGroup>
  </Form>
</main>

<style>
  main {
    max-width: 1024px;
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  }
</style>
