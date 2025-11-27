<script lang="ts">
  import { eventsLinks } from "$lib";
</script>

<nav class="flex flex-wrap justify-center list-none py-6 gap-6">
  <li class="relative p-4 rounded-xl mx-4 sm:w-[420px] max-w-full bg-zinc-700 text-zinc-100 hover:outline">
    <p class="text-lg mb-4">Musical duo with a spicy taste in great music. We put on open mic events and gigs around the Leicester area.</p>
    <p class="text-lg mb-4">Our events are inclusive and diverse bringing together the best of the local music scene.</p>
    <a href="/about"><span class="block text-center text-lg font-semibold">Read more</span></a> 
  </li>
{#each eventsLinks as {title, href, imgSrc}}
  <li class="relative flex flex-wrap justify-center overflow-hidden rounded-xl h-[320px] max-w-[460px] bg-zinc-700 text-zinc-100 hover:outline">
    <h2 class="block text-center text-lg font-semibold py-4 px-2">{title}</h2>
    <img class="-order-1 object-cover h-[260px] w-full" src="/img/{imgSrc}" alt="Jack & Tasha at {title}" />
    <a {href} class="absolute inset-0"><span class="hidden">View more</span></a> 
  </li>
{/each}
</nav>

<svelte:head><title>Jack & Tasha musical duo</title></svelte:head>
