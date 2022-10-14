<script>
  import { store } from "./lib/state";
  import { createEventDispatcher } from "svelte";
  import { saveSvgAsPng, svgAsPngUri } from "save-svg-as-png";

  const dispatch = createEventDispatcher();

  export let download,
    selected = 0;

  let svg;

  $: if (!!download) {
    const title = `${$store.title}_${$store.chapter}.png`;
    svgAsPngUri(svg).then(() => {
      saveSvgAsPng(svg, title);
    });
    dispatch("download");
  }

  $: className = `thumb ${$store.category}`;
</script>

<section>
  <svg
    bind:this={svg}
    viewBox={selected == 0 ? "0 0 1280 720" : "0 0 1280 640"}
    class={className}
    id="thumb"
    background="#ff9800"
  >
    <defs>
      <filter id="inset-shadow">
        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
      </filter>
      <pattern
        id="icon-image"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
      >
        <image
          id="icon-image-src"
          width="180"
          height="180"
          xlink:href={$store.url}
        />
        />
      </pattern>
    </defs>
    <rect x="0" y="0" width="1280" height="120" class="bar" />

    <g class="top">
      <svg
        class="makigas"
        aria-role="img"
        aria-hidden="true"
        viewBox="0 0 47 7"
        version="1.1"
        width="432"
        height="120"
        x="50"
      >
    <text x="0" y="6" class="header"
      >ngUML</text
    >
    </g>

    <rect
      class="icon"
      x="1040"
      y="30"
      width="180"
      height="180"
      fill="url(#icon-image)"
    />

    <text x="50" y="410" id="text-title" class="title"
      >{$store.title}</text
    >
    {#if selected === 0}
      <text
       
        x="50"
        y="520"
        id="text-description"
        class="lesson">{$store.chapter}</text
      >
    {/if}
  </svg>
</section>

<style>
  text {
    font-family: 'IBM Plex Mono';
  }

  .header {
    font-size: 6pt;
    font-weight: bolder;
  }

  section {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .thumb {
    width: 100%;
  }

  .bar {
    fill: #f46e32;
  }

  .makigas,
  .topic {
    fill: white;
  }

  .title,
  .lesson {
    fill: white;
  }

  .title {
    font-size: 80px;
    font-weight: bold;
  }
  .lesson {
    font-size: 65px;
  }

  .topic {
    display: none;
  }

  .thumb {
    display: block;
  }
  .thumb {
    background: #001158;
  }
</style>
