<script lang="ts">
	import { IconLink } from '$lib/components';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col">
<main class="max-w-screen-xl mx-auto">
{@render children()}
</main>

<header class="-order-1">
	<h1 class="bg-[black] relative">
		<img src="/img/jack-tasha-soundhouse.jpg" class="h-[400px] w-[600px] lg:h-[600px] lg:w-[800px] object-cover mx-auto relative opacity-60" alt="Jack & Tasha at the SoundHouse in Leicester" />
		<a href="/" class="absolute inset-0 flex items-center justify-center">
			<span class="block text-center font-bold text-4xl text-[white]">Jack & Tasha</span>
			<span class="hidden">Home</span>
		</a>
	</h1>
	<div class="bg-zinc-900">
	<div class="flex flex-wrap underline max-w-screen-xl mx-auto">
		<nav class="list-none flex flex-wrap grow justify-center items-center md:justify-start gap-8 md:text-lg font-semibold py-4 px-8">
			<li><a href="/about">About</a></li>
			<li><a href="/events">Events</a></li>
			<li><a href="/repertoire">Repertoire</a></li>
			<li><a href="/contact">Contact</a></li>
		</nav>
		<nav class="list-none flex grow justify-center md:justify-end gap-8 md:text-lg font-semibold py-4 px-8">
			<IconLink description="Facebook" icon="facebook" href="https://www.facebook.com/jack.tasha.duo" />
			<IconLink description="Instagram" icon="instagram" href="https://www.instagram.com/jack_and_tash/" />
		</nav>
	</div>
	</div>
</header>
</div>
<footer class="m-4 flex flex-wrap justify-center gap-8  underline text-zinc-400">
	<a class="block" target="_blank" href="https://www.facebook.com/profile.php?id=61552504853283">Photography by Aimee-Elisabeth</a>
	<a class="block" target="_blank" href="https://www.bespokemedia.net/">Powered by Bespoke Media</a>
</footer>
