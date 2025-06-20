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
    import CaseStudyPreview from '$lib/components/CaseStudyPreview.svelte';
</script>

<style>
    /* your styles go here */
</style>

<main class="main p-4 mb-12 md:pb-16 lg:pb-20 max-w-6xl mx-auto">
    <h1 class="text-2xl text-center heading-font-weight">Online Portfolio</h1>
    <div class="flex self-center justify-center pt-4">
        <button class="text-secondary-shade" onclick={()=> currentCategory = ""}>Show All by Grid</button>
    </div>
    <div class="flex flex-col space-x-3 gap-2 pt-4 md:flex-row md:space-x-4 md:gap-0">
        {#each data.categories.rows as category}
            <button class="{ currentCategory === category.id ? "bg-primary-hundred" : ""} text-primary-shade bg-none w-full py-2 cursor-pointer hover:bg-primary-hundred hover:text-primary-shade border-b-primary-fifty transition-all ease-in-out" 
                onclick={() => currentCategory = category.id}
            >
                {category.data.name}
            </button>
        {/each}

    </div>

    <div class="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 auto-rows-auto">
        {#if data.posts.rows.length === 0 && currentCategory === ""}
            <p class=" text-gray-500">No posts available.</p>
        {/if}
        {#if data.posts.rows.length === 0 && currentCategory !== ""}
            <p class=" text-gray-500">No posts available for this category.</p>
        {/if}
        {#if data.posts.rows.length === 0}
            <p class=" text-gray-500">No posts available.</p>
        {/if}
        {#each data.posts.rows as post}
            {#if currentCategory === "" || currentCategory === post.data.category}     
        <PortfolioModal post={post} className={checkCategory(post.data.category)} />
            {/if}
        {/each}
    </div>

     <div class="space-y-8">
        <CaseStudyPreview/>
        </div>
</main>