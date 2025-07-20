<script lang="ts">
  import { eventsLinks } from "$lib";
</script>

<nav class="flex flex-wrap justify-center list-none py-6 gap-6">
  <li class="relative p-4 overflow-hidden rounded-xl mx-4 sm:mx-0 sm:h-[320px] sm:max-w-[300px] max-w-full bg-zinc-700 text-zinc-100 hover:outline">
    <p class="text-lg mb-4">Musical duo with a spicy taste in great music. We put on open mic events and gigs around the Leicester area.</p>
    <p class="text-lg">Our events are inclusive and diverse bringing together the best of the local music scene.</p>
    <a href="/about" class="absolute inset-0"><span class="hidden sm:block text-center text-lg font-semibold absolute left-0 right-0 bottom-4">Read more</span></a> 
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
