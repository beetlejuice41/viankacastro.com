<script lang="ts">
    import PortfolioModal from './PortfolioModal.svelte';
    
    let { data } = $props();

    let currentCategory = $state("");

    function checkCategory(postCategory : string) {
        if (currentCategory === "") {
            return "visible"
        } else if (currentCategory === postCategory) {
            return "visible"
        } else {
            return "hidden"
        }
    }

</script>

<style>
    /* your styles go here */
</style>

<main class="container p-8">
    <h1 class="text-2xl text-center">Online Portfolio</h1>
    <div class="flex flex-col space-x-3 gap-2">

        <button onclick={()=> currentCategory = ""}>Show All by Grid</button>

        {#each data.categories.rows as category}
            <button class="bg-primary-paler w-full py-2 cursor-pointer hover:bg-primary-paley hover:text-primary-palest transition-all ease-in-out" 
                onclick={() => currentCategory = category.id}
            >
                {category.data.name}
            </button>
        {/each}

    </div>

    <div class="pt-10 flex flex-col">
        {#each data.posts.rows as post}
            <PortfolioModal post={post} className={checkCategory(post.data.category)}/>
        {/each}
    </div>

</main>