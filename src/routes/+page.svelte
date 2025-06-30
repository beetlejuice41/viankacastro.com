<script>
    /* your script goes here */
    let videoId = "5WCHM02p9XY";
    import CaseStudyPreview from '$lib/components/CaseStudyPreview.svelte';
</script>

<style>
    /* your styles go here */
</style>

<main class="app">
    <div class="main mb-12 md:pb-16 lg:pb-20">
        <!-- hero -->
        <div class="py-6 leading-loose max-w-7xl mx-auto p-6 flex flex-col gap-3">
        <h1 class="text-2xl heading-font-weight leading-tight">I help companies turn big ideas into bold visuals — through thoughtful branding, digital design, and creative direction. </h1>
        <a href="/portfolio" class="text-secondary-shade transition-colors flex flex-row">View Portfolio →
          </a>
      </div>
       <div class="w-full aspect-video mb-6">
          <iframe
          class="w-full h-full pointer-events-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
          title="YouTube video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen>
          </iframe>
       </div>
       
       <!-- portfolio -->
      <div class="space-y-8">
        <CaseStudyPreview/>
        </div>

         <!-- skills -->
       <div class="rounded-md max-w-7xl mx-auto p-6">
        <h2 class="text-3xl heading-font-weight text-center mb-4">My Services</h2>
        <p class="text-gray-500 text-center mb-6">I offer creative solutions tailored to elevate your brand—from standout visuals to strategic storytelling.</p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 max-w-7xl mx-auto">
          <!-- Card 1 -->
         <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
         <img src="https://r2.viankacastro.com/IRMO%20Letterhead%20BC.jpg" alt="graphicdesign" class="w-full h-40 object-cover">
            <div class="p-4 flex flex-col flex-1">
              <h3 class="text-lg font-semibold leading-tight min-h-[3.5rem]">Graphic Design and Branding</h3>
              <p class="text-sm text-gray-600">Bold visuals and cohesive branding that make your message unforgettable.</p>
          </div>
        </div>
          <!-- Card 2 -->
         <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
         <img src="https://r2.viankacastro.com/Tiktok%20and%20Facebook%20Reels.jpg" alt="videoediting" class="w-full h-40 object-cover">
            <div class="p-4 flex flex-col flex-1">
              <h3 class="text-lg font-semibold leading-tight min-h-[3.5rem]">Video Editing and Motion Graphics</h3>
              <p class="text-sm text-gray-600">Dynamic edits and eye-catching motion that bring your story to life.</p>
          </div>
        </div>
          <!-- Card 3 -->
         <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
         <img src="https://r2.viankacastro.com/socmedthumbnail1.png" alt="digitalads" class="w-full h-40 object-cover">
            <div class="p-4 flex flex-col flex-1">
              <h3 class="text-lg font-semibold leading-tight min-h-[3.5rem]">Digital Ads and Marketing</h3>
              <p class="text-sm text-gray-600">Scroll-stopping visuals that capture attention and drive engagement.</p>
          </div>
        </div>
          <!-- Card 4 -->
         <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
         <img src="https://r2.viankacastro.com/Pol%20Purol%20Book%20Cover%20Actual.jpg" alt="illustrations" class="w-full h-40 object-cover">
            <div class="p-4 flex flex-col flex-1">
              <h3 class="text-lg font-semibold leading-tight min-h-[3.5rem]">Digital Illustrations</h3>
              <p class="text-sm text-gray-600">Custom illustrations that add character, charm, and clarity to your brand.</p>
          </div>
        </div>
      </div>
       </div>
    </div>
</main>

