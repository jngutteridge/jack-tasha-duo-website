<script lang="ts">
  import { eventsLinks } from "$lib";
</script>

<div class="p-4 mt-6 max-w-lg mx-auto bg-zinc-700 rounded-lg prose prose-invert">
<h2>Events</h2>
<p>We put on open mic events and gigs around the Leicester area. Our events are inclusive and diverse bringing together the best of the local music scene.</p>
<p>We welcome all genres and abilities. There is a PA and microphones provided, you only need to bring your instruments. We take sign-ups for the open mics at the start of the session.</p>
</div>
<div class="flex flex-wrap gap-4">
<nav class="flex flex-wrap justify-center list-none py-6 gap-6">
{#each eventsLinks as {title, href, imgSrc}}
  <li class="relative flex flex-wrap justify-center overflow-hidden rounded-xl h-[320px] max-w-[460px] bg-zinc-700 text-zinc-100 hover:outline">
    <h2 class="block text-center text-lg font-semibold py-4 px-2">{title}</h2>
    <img class="-order-1 object-cover h-[260px] w-full" src="/img/{imgSrc}" alt="Jack & Tasha at {title}" />
    <a {href} class="absolute inset-0"><span class="hidden">View more</span></a> 
  </li>
{/each}
</nav>
</div>

<svelte:head><title>Events hosted by Jack & Tasha</title></svelte:head>
