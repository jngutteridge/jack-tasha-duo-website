<script lang="ts">
  import { PUBLIC_NOTIFIER_URL } from '$env/static/public';
  const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  let sending = false;
  let sent = false;
  const errors: {[key: string]: string | null} = {};
  const sendMessage = async (e: SubmitEvent) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const data: {[key: string]: string} = {};
    for (const field of formData.entries()) {
      const [key, value] = field;
      data[key] = value.toString();
    }

    errors.name = null;
    errors.email = null;
    errors.message = null;

    if (data.email === '') {
      errors.email = 'Your email address is required';
    } else if (!data.email.match(emailValidation)) {
      errors.email = 'Your email address is invalid';
    }

    if (data.name === '') {
      errors.name = 'Your name is required';
    }

    if (data.message === '') {
      errors.message = 'A message is required';
    }

    if (errors.name || errors.email || errors.message) {
      return;
    }

    sending = true;

    await fetch(`${PUBLIC_NOTIFIER_URL}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    sent = true;
  }
</script>

<div class="p-4 mt-6 w-[460px] max-w-[100vw] mx-auto bg-zinc-700 rounded-lg">
<h1 class="text-center text-2xl font-bold">Contact us</h1>
{#if !sending && !sent}
<form on:submit|preventDefault={sendMessage} class="flex flex-col">
  <label for="name" class="font-semibold">Name</label>
  {#if errors.name}<span class="text-zinc-300">{errors.name}</span>{/if}
  <input id="name" name="name" class="mt-2 mb-6 text-zinc-800" />
  <label for="email" class="font-semibold">Email</label>
  {#if errors.email}<span class="text-zinc-300">{errors.email}</span>{/if}
  <input id="email" name="email" class="mt-2 mb-6 text-zinc-800" />
  <label for="message" class="font-semibold">Message</label>
  {#if errors.message}<span class="text-zinc-300">{errors.message}</span>{/if}
  <textarea id="message" name="message" class="mt-2 mb-6 h-44 text-zinc-800"></textarea>
  {#if errors.email || errors.name || errors.message}<span class="text-zinc-300 mb-2">Please correct form errors and try again</span>{/if}
  <input type="submit" value="Send message" class="bg-zinc-800 text-white font-semibold p-4" />
</form>
{/if}
{#if sending && !sent}
  <p class="text-center mt-6 font-semibold text-2xl opacity-50">Sending message...</p>
{/if}
{#if sent}
  <p class="text-center mt-6 font-semibold text-2xl">Message sent</p>
{/if}
</div>

<svelte:head>
  <title>Contact Jack & Tasha</title>
</svelte:head>
