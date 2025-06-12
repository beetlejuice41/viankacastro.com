<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<!-- 
class="h-20 w-50"

h = height
w = width
m = margin
p = padding 
-->

<div class="bg-primary-palest">
	<div class="container navbar flex flex-col p-8"> 
		<img src="https://s3clients.krokismedia.com/viankacastro/logo%20-%20main%20-%20with%20text.svg" class="h-20 w-50 self-center" alt="Logo" >
		<div class="flex flex-row justify-around p-8">
			<a href="/" class="">Home</a>
			<a href="/about" class="">About</a>
			<a href="/portfolio" class="">Portfolio</a>
			<a href="/contact" class="">Contact</a>
		</div>
		<a href="https://drive.google.com/file/d/1VJrDwUQoehNqC5MMooYDDAxZCnAVI5ae/view?usp=sharing" target="undefined" class="bg-primary-shadest rounded-full hover:bg-primary-shade text-center text-white p-2">Download CV</a>
	</div>

	{@render children()}

	<!-- footer -->
	<div class="flex flex-col">
		<img src="https://s3clients.krokismedia.com/viankacastro/logo%20-%20main%20-%20with%20text.svg" class="h-20 w-50 self-center" alt="Logo" >
	</div>
</div>

