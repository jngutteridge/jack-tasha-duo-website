<script lang="ts">
  const { href, icon, description } = $props();
</script>

<li class="flex items-center gap-1 relative">
  <img src="/icons/{icon}.svg" class="w-12" alt="" />
  <span class="underline">{description}</span>
  <a {href} target="_blank" class="absolute inset-0"><span class="hidden">Visit link</span></a>
</li>
