<script lang="ts">
    import { onMount } from "svelte";

    let { images, firstimage } = $props();

    let carouselDiv : HTMLDivElement;
    let carouselIndex = 0;

    function scrollNext() {
        if (carouselDiv) {
            carouselIndex = (carouselIndex + 1) % (images.length + 1);
            const imageWidth = carouselDiv.offsetWidth;
            carouselDiv.scrollLeft = carouselIndex * imageWidth;
        }
    }

    function scrollBack() {
        if (carouselDiv) {
            carouselIndex = (carouselIndex - 1) % (images.length + 1);
            const imageWidth = carouselDiv.offsetWidth;
            carouselDiv.scrollLeft = carouselIndex * imageWidth;
        }
    }

    onMount(() => {
        const handleKeyDown = (event : any) => {
            if (event.key === 'ArrowRight') {
                scrollNext();
            } else if (event.key === 'ArrowLeft') {
                scrollBack();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

</script>

<div class="w-full relative">
    <div class="carousel flex flex-row items-center gap-2">
        <button class="arrowleft text-black pointer-events-auto" aria-label="swipe left" onclick={scrollBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-left-icon lucide-circle-chevron-left"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>
        </button>
        <div class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto h-90" bind:this={carouselDiv}>
            <img src={firstimage} alt="" class="snap-center w-fit object-cover">
            {#each images as image}
                <img src={image.gallery1.url} alt="" class="snap-center w-fit object-cover">
            {/each}
        </div>
        <button class="relative inset-0 arrowright rotate-180 text-black pointer-events-auto" aria-label="swipe right" onclick={scrollNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-left-icon lucide-circle-chevron-left"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>
        </button>
    </div>
</div>
