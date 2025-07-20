<script lang="ts">
	import { getOccurrencesView } from "$lib";

  const address = 'Queen\'s Building, 41 Rutland St, Leicester LE1 1RE';
  const mapHref = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(['Baton Rouge at Queens', address].join(', '));
  const events = getOccurrencesView([{ day: 'thursday', week: 'first'}, { day: 'thursday', week: 'third'}])
</script>

<div class="mt-6 mx-auto bg-zinc-700 rounded-lg flex flex-col lg:flex-row overflow-hidden">
<img class="object-cover w-full lg:max-w-[50%]" src="/img/jack-tasha-baton-rouge.jpg" alt="Jack & Tasha at Baton Rouge at Queens Leicester" />
<div class="max-w-screen-md p-4">
<h1 class="text-2xl font-bold mb-4">Baton Rouge at Queens open mic</h1>
<div class="prose prose-invert">
<p>Having long established themselves in Hinckley, Baton Rouge expanded their network to Leicester’s Cultural Quarter near the city centre.</p>

<p>Baton Rouge is a regular drinking hole for Leicester locals. With welcoming staff and 2 large stages, it cemented itself as a home for musicians and southern-American enthusiasts alike.</p>

<p>We welcome all genres and abilities. There is a PA and microphones provided, you only need to bring your instruments. We take sign-ups for the open mics at the start of the session.</p>

<h3>Information</h3>
<strong>Baton Rouge at Queens</strong><br />
<a class="underline" href={mapHref} target="_blank">{address}</a>
<p>The first and third Thursday of the month<br />Start time 8pm</p>

<h3>Upcoming events</h3>
</div>
<ul class="list-none grid grid-cols-4 gap-3 mt-4">
{#each events as event}
  <li class="block bg-zinc-800 px-3 py-2 text-center">{event}</li>
{/each}
</ul>
</div>
</div>

<svelte:head><title>Baton Rouge at Queens open mic hosted by Jack & Tasha</title></svelte:head>
