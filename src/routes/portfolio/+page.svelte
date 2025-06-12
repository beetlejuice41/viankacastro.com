<script lang="ts">
    import PortfolioModal from './PortfolioModal.svelte';
    
    let { data } = $props();
</script>

<style>
    /* your styles go here */
</style>

<main class="container p-8">
    <h1 class="text-2xl text-center">Online Portfolio</h1>
    <div class="flex flex-col space-x-3 gap-2">
        <button>Show All by Grid</button>
        {#each data.categories.rows as category}
            <button class="bg-pink-light w-full py-2 cursor-pointer hover:bg-pink-dark transition-all ease-in-out">{category.data.name}</button>
        {/each}
    </div>

    <div class="pt-10 flex flex-col overflow-hidden">
        {#each data.posts.rows as post}
            <PortfolioModal post={post} />
        {/each}
    </div>
</main>