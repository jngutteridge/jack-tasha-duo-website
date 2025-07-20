<script lang="ts">
	import { getOccurrencesView } from "$lib";

  const address = '24 King St, Leicester LE1 6RL';
  const mapHref = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(['The Grand Union', address].join(', '));
  const events = getOccurrencesView([{ day: 'thursday', week: 'second'}, { day: 'thursday', week: 'fourth'}])
</script>

<div class="mt-6 mx-auto bg-zinc-700 rounded-lg flex flex-col lg:flex-row overflow-hidden">
<img class="object-cover w-full lg:max-w-[50%]" src="/img/jack-tasha-grand-union.jpg" alt="Jack & Tasha at The Grand Union" />
<div class="max-w-screen-md p-4">
<h1 class="text-2xl font-bold mb-4">Grand Union Leicester open mic</h1>
<div class="prose prose-invert">
<p>The Grand Union is a beautiful bar situated on New Walk and King Street in Leicester. The open mic is ran twice a month on the second and fourth Thursday. We love hosting a great community from members of the Leicester music scene.</p>
<p>We welcome all genres and abilities. There is a PA and microphones provided, you only need to bring your instruments. We take sign-ups for the open mics at the start of the session.</p>

<h3>Information</h3>
<strong>The Grand Union</strong><br />
<a class="underline" href={mapHref} target="_blank">{address}</a>
<p>The second and fourth Thursday of the month<br />Start time 7.30pm</p>

<h3>Upcoming events</h3>
</div>
<ul class="list-none grid grid-cols-4 gap-3 mt-4">
{#each events as event}
  <li class="block bg-zinc-800 px-3 py-2 text-center">{event}</li>
{/each}
</ul>
</div>
</div>

<svelte:head><title>The Grand Union Leicester open mic hosted by Jack & Tasha</title></svelte:head>
