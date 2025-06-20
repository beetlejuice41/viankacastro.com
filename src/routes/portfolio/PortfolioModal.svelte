<script lang="ts">
  import { Modal } from '@skeletonlabs/skeleton-svelte';
  import PortfolioCarousel from './PortfolioCarousel.svelte'

  let { post, className }= $props();

  console.log(post)

  let openState = $state(false);

  function modalClose() {
    openState = false;
  }
</script>

<Modal
  open={openState}
  onOpenChange={(e) => (openState = e.open)}
  triggerBase="h-fit w-full hover:brightness-50 object-cover transition-all ease-in-out max-w-xl mx-auto {className}"
  contentBase="card bg-primary-fifty p-4 space-y-4 shadow-xl rounded-xl max-h-screen max-w-2xl mx-auto"
  backdropClasses="backdrop-blur-sm"
>
    {#snippet trigger()}
        <div class="relative">
            {#if post.data.imageAnimated}
                <img src={post.data.imageAnimated.url} alt="" class="absolute inset-0 top-0 h-60 w-full object-cover object-top hover:opacity-100 opacity-0">
            {/if}
            <img src={post.data.image.url} alt="" class="h-60 w-full object-cover object-top" loading="lazy">
        </div>
    {/snippet}

    {#snippet content()}

        <button class="relative inset-0 float-right" onclick={modalClose} aria-label="Close Window"><svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
        <div class="flex flex-col justify-center w-full overflow-auto">
            <PortfolioCarousel images={post.data.carouselgallery} firstimage={post.data.image.url} />
            <div class="p-4">
                <h1 class="text-xl heading-font-weight pb-4 text-primary-shade">{post.data.name}</h1>
                <h2 class="text-md text-primary-ninefifty">{post.data.description}</h2>
            </div>
        </div>

    {/snippet}

</Modal>



        <!-- <header class="flex justify-between">
            <h2 class="h2">Modal Example</h2>
        </header>
        <img src={post.post.data.image.url} alt="" class="h-60 w-full object-cover object-top">
        <article>
            <p class="opacity-60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab adipisci. Libero cumque sunt quis error veritatis amet, expedita
                voluptatem. Quos repudiandae consequuntur voluptatem et dicta quas, reprehenderit velit excepturi?
            </p>
        </article>
        <footer class="flex justify-end gap-4">
            <button type="button" class="btn preset-tonal" onclick={modalClose}>Cancel</button>
            <button type="button" class="btn preset-filled" onclick={modalClose}>Confirm</button>
        </footer> -->
