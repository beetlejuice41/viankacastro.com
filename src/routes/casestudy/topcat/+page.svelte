<script>
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  import { onMount } from 'svelte';

  onMount(() => {
    // Only load SDK once
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    } else {
      // Re-render Facebook plugin if already loaded
      window.FB.XFBML.parse();
    }
  });

</script>

<main class="app md:pb-16 lg:pb-20">
    <!-- cover photo -->
    <div class="flex justify-center w-full p-6 md:h-[60vh] max-w-7xl mx-auto">
        <img src="https://r2.viankacastro.com/TopCat-Casestudy/443840563_420099380940140_9206897466113149114_n.png" alt="banner" class="w-full object-cover select-none pointer-events-none">
    </div>
    <!-- project overview -->
<div class="flex flex-col md:flex-row md:gap-4 px-6 py-6 md:px-10 lg:px-20 max-w-7xl mx-auto ">
  <div class="text-xs md:items-start text-secondary-four ">
    PROJECT OVERVIEW
  </div>

  <div class="flex flex-col gap-4">
    <h2 class="text-3xl heading-font-weight text-secondary-shade">
      TopCat PH: Facebook Content, Engagement Strategy, and Art Direction
    </h2>

    <p class="text-primary-eight">
      TopCat is a newly launched cat food brand developed as the feline counterpart to the popular dog food line, TopBreed. While TopBreed already had a strong presence, TopCat’s challenge was to establish its own playful identity and connect with millennial cat owners.</p>

    <div class="flex flex-col md:flex-row gap-4 justify-between">
      <!-- Problem and Goal -->
      <div class="flex flex-col gap-y-4">
        <div class="flex flex-row gap-2 text-secondary-three ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 13v8q0 .425-.288.713T6 22t-.712-.288T5 21V4q0-.425.288-.712T6 3h13.525q.275 0 .488.125t.337.325t.162.438t-.062.487L19 8l1.45 3.625q.1.25.063.488t-.163.437t-.337.325t-.488.125z"/></svg>
            <h3 class="heading-font-weight">Objectives</h3>
        </div>
        <ul class="list-disc pl-5 text-primary-eight">
                <li>Introduce TopCat to the market as a distinct but trusted brand</li>
                <li>Visual Identity & Key Visuals</li>
                <li>Build brand awareness and visual identity from the ground up</li>
                <li>Create engaging content to foster a growing online community</li>
            </ul>
      </div>

      <!-- Role and Responsibility -->
      <div class="flex flex-col gap-y-4 ">
        <div class="flex flex-row gap-2 text-secondary-three">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.55 12L14 8.45l1.425-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"/></svg>
            <h3 class="heading-font-weight">Role and responsibility</h3>
        </div>
            <ul class="list-disc pl-5 text-primary-eight">
                <li>Art Direction</li>
                <li>Visual Identity & Key Visuals</li>
                <li>Social Media Copywriting</li>
                <li>Motion Design & Animations</li>
                <li>Monthly Content Strategy</li>
            </ul>
      </div>

      <!-- Tools used and timeframe -->
    <div class="flex flex-col gap-2 ">
            <h3 class="heading-font-weight text-secondary-three">🛠 Tools used</h3>
            <div class="">
                <ul class="list-disc pl-5 text-primary-eight">
                <li>Adobe Illustrator & Photoshop</li>
                <li>After Effects</li>
                <li>Canva (for quick deployment if needed)</li>
            </ul>
            </div>
        <div class="">
            <h3 class="heading-font-weight text-secondary-three">📅 Timeline</h3>
            <ul class="list-disc pl-5 text-primary-eight">
                <li>1 year</li>
            </ul>
        </div>
    </div>
    </div>
  </div>

</div>
 <!------------------- ART DIRECTION ---------------->
<div class="flex flex-col md:flex-row md:gap-4 px-6 py-6 md:px-10 lg:px-20 max-w-7xl mx-auto md:pb-16 lg:pb-20">
  <div class="text-xs md:items-start text-secondary-four ">
    ART DIRECTION
  </div>

  <div class="flex flex-col gap-4">
    <h2 class="text-xl heading-font-weight text-secondary-shade">Art Direction, Tone, and Application</h2>
    <p class="">I developed a playful, colorful visual language to reflect the charm and personality of cats while appealing to young pet owners. Content formats included:</p>
    <h1 class="flex flex-row gap-2 text-secondary-three heading-font-weight">🖼️ Static posts and carousels</h1>
    <div class="flex flex-col md:flex-row flex-wrap">
        <!-- Facebook Post Embed -->
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid02P9aFM4m8E413j399G526eGAevGASAefup1qxE7qbmQAEsxfCkdLqLfw8KSVrMz6Al"
       data-width="500"></div>
        </div>
         <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid02bKQ6QucYHF2x4FMSWDQBfuABPbxjWe9GDyktC32UGqSXBw7exabmBeyRCXcXnPusl"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid02yDWezhYMNoPka7htpErUc86Aj9UCeTWnoLuem2s5cQ7SnsPtNLmxNDKXE2NpZZ92l"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid02UoRT6EqTMK6RH65KK5YMXF4SKvftPx1Cs8LXj2Pkvxbrt38WVvFvz741uABJrUial"
       data-width="500"></div>
        </div>
    </div>
    <h1 class="flex flex-row gap-2 text-secondary-three heading-font-weight">🎞️ Reels, Dynamic posts, and Promotion of E-commerce platforms</h1>
    <div class="flex flex-col md:flex-row flex-wrap">
        <!-- Facebook Post Embed -->
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/521684050288857"
       data-width="500"></div>
        </div>
         <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/340062079134279"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/511648991794453"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/578048654548209"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/1757890931694527"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/610129794878296"
       data-width="500"></div>
        </div>
    </div>
    <h1 class="flex flex-row gap-2 text-secondary-three heading-font-weight">📅 Monthly themes and pet-specific observances</h1>
    <div class="flex flex-col md:flex-row flex-wrap">
        <!-- Facebook Post Embed -->
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid02hJFSmM1ewWowuiUAUfCgutpzh5gRjdWXmdSx5B5ZWfR3ZCpH2P8jattxPFKqWnHVl"
       data-width="500"></div>
        </div>
         <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid0Tdw1RSwztcfZT4hesx7QLcgGoLPAaa1eviHRZJntTmfDVSMXY4534kMoC7rUriVql"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid02bFU4dcSerdJ9Cfrq993PKwSgB1sLLVgQNbXFUN7FdYAmhHXCL9cMaMGaH7PZrW65l"
       data-width="500"></div>
        </div>
        <div class="w-full max-w-xl mx-auto py-8 md:w-1/2">
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid0QbtGuWgCX54UGsoQXw2juMs29FKuNxbceMzznkQW7NNZKypxudB5Gf6Z5WkV86z6l"
       data-width="500"></div>
        </div>
    </div>
  </div>
</div>
<!------------------- DESIGN PROCESS ---------------->
<div class="flex flex-col md:flex-row md:gap-4 px-6 py-6 md:px-10 lg:px-20 max-w-7xl mx-auto ">
  <div class="text-xs md:items-start text-secondary-four ">
    TOP POSTS
  </div>
  <div class="flex flex-col gap-4 ">
    <h2 class="text-xl heading-font-weight text-secondary-shade">
      Engagement Highlight
    </h2>
<div class="flex flex-col md:flex-row flex-wrap">
<div class="w-full max-w-xl mx-auto py-4 md:w-1/2">
    <p class="text-primary-eight">
      Post with the most likes:
    </p>
    <blockquote class=" pl-4 italic text-gray-700 p-4 rounded-md">
        “Understanding your cat’s language” – This post resonated with the audience, offering valuable insight into feline behavior. It received the most likes, driving strong organic reach.
        </blockquote>
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/videos/2266043436933659"
       data-width="500"></div>
        </div>
<div class="w-full max-w-xl mx-auto py-4 md:w-1/2">
        <p class="text-primary-eight">
      Post with the most comments that sparked conversation:
        </p>
        <blockquote class="pl-4 italic text-gray-700 p-4 rounded-md">
          “World Rabies Day - Vaccination for Cats” – This informative post sparked meaningful conversations in the comments and became the most commented piece on the page, highlighting the community’s interest in responsible pet care.
        </blockquote>
        <div class="fb-post"
       data-href="https://www.facebook.com/TopCatPH/posts/pfbid0Tdw1RSwztcfZT4hesx7QLcgGoLPAaa1eviHRZJntTmfDVSMXY4534kMoC7rUriVql"
       data-width="500"></div>
        </div>
  </div>
</div> 
</div>

<!-- RESULTS AND IMPACT -->

<div class="flex flex-col md:flex-row md:gap-4 px-6 py-6 md:px-10 lg:px-20 max-w-7xl mx-auto ">
  <div class="text-xs md:items-start text-secondary-four ">
    RESULTS
  </div>
  <div class="flex flex-col gap-4 ">
    <h2 class="text-xl heading-font-weight text-secondary-shade">
      Results and Key Takeaways
    </h2>
    <p class="text-primary-eight">The contract ended in January 2025. Here are the results that came with TopCat:</p>
        <ul class="list-disc pl-5 text-primary-eight">
            <li>Established a consistent visual presence for a new brand</li>
            <li>Increased social interaction through themed engagement posts</li>
            <li>Built a content ecosystem that was fun, informative, and community-focused</li>
        </ul>
    <p class="text-primary-eight">This project allowed me to shape a brand’s online identity from essentially scratch, applying both design strategy and content storytelling to drive results in a highly visual, emotionally driven market.</p>
</div>
</div>

</main>