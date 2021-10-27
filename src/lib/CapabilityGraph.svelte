<script context="module">
</script>

<script lang="ts">
  import type { CapabilityData } from "./capability";
  import * as Plot from "@observablehq/plot";
  import * as aq from "arquero";
  import { onMount } from "svelte";

  export let capability: CapabilityData;

  let mounted = false;
  onMount(() => {
    console.log("Mounted");
    mounted = true;
  });
  const months = 56;
  const exp = 361;
  const width = 250;
  const height = 250;

  $: if (mounted) {
    let table = generateTable(capability);
    table.print();
    drawGraph(capability, table);
  }

  function generateTable(capability: CapabilityData) {
    // (curr + (tar - curr) / ( 1 + 361 ^ (( offset + offset + duration/2 - monthNo) / duration))
    let t = aq.table({ monthNo: aq.op.sequence(1, months) });

    capability.curves.forEach((cap) => {
      const curr = cap.current;
      const tar = cap.target;
      const offset = cap.start;
      const duration = cap.duration;

      t.params({
        curr: cap.current,
        tar: cap.target,
        exp: exp,
        offset: cap.start,
        start: cap.duration * 0.2,
        duration: cap.duration * 0.6,
      });
      t = t.derive({
        [cap.name]: (d, p) =>
          p.curr +
          (p.tar - p.curr) /
            (1 +
              p.exp **
                ((p.offset + p.start + p.duration / 2 - d.monthNo) /
                  p.duration)),
      });
    });
    let opStr = capability.curves.reduce((p, c, i) => {
      if (i > 0) {
        p += "*";
      }
      p += `d.${c.name}`;
      return p;
    }, "");
    console.log(opStr);

    t = t.derive({
      Combined: opStr,
    });

    t.print();
    return t;
  }

  function drawGraph(cap: CapabilityData, table) {
    let p = Plot.plot({
      width: width,
      height: height,
      x: {
        domain: [0, months],
        nice: true,
      },
      y: {
        domain: [0, 100],
        nice: true,
        percent: true,
      },
      marks: [
        Plot.line(table, {
          x: "monthNo",
          y: cap.curves[0].name,
          stroke: "red",
        }),
        Plot.line(table, {
          x: "monthNo",
          y: cap.curves[1].name,
          stroke: "green",
        }),
        Plot.line(table, { x: "monthNo", y: "Combined" }),
      ],
    });
    let e = document.getElementById(`vis-${cap.name}`);
    if (e) {
      e.replaceChildren(p);
    }
  }
</script>

<div id={`vis-${capability.name}`} class="font-sans-serif text-xs" />

<style>
  div#vis {
    display: block;
    font: 10px system-ui, sans-serif;
    background: #fff;
  }
</style>
