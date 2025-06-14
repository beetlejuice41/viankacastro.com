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

<div class="bg-primary-fifty text-primary-ninefifty">
	<div class="container navbar flex flex-col p-8"> 
		<img src="https://s3clients.krokismedia.com/viankacastro/logo%20-%20main%20-%20with%20text.svg" class="h-20 w-50 self-center" alt="Logo" >
		<div class="flex flex-row justify-around p-8">
			<a href="/" class="text-primary-shade hover:text-secondary-shade">Home</a>
			<a href="/about" class="text-primary-shade hover:text-secondary-shade">About</a>
			<a href="/portfolio" class="text-primary-shade hover:text-secondary-shade">Portfolio</a>
			<a href="/contact" class="text-primary-shade hover:text-secondary-shade">Contact</a>
		</div>
		<a href="https://drive.google.com/file/d/1VJrDwUQoehNqC5MMooYDDAxZCnAVI5ae/view?usp=sharing" target="undefined" class="bg-secondary-shade rounded-full hover:bg-secondary-four text-center text-white p-2">Download CV</a>
	</div>

	{@render children()}

	<!-- footer -->
	<div class="flex flex-col p-8">
		<img src="https://s3clients.krokismedia.com/viankacastro/logo%20-%20main%20-%20with%20text.svg" class="h-20 w-50 self-center" alt="Logo" >
		<p class="py-8">This is a paragraph to describe your business. Fill it to your heart's content.</p>
		<div class="flex flex-row gap-5 justify-around">
			<a href="https://www.linkedin.com/in/viankalorraine/" target=none class=""><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg></a>
			<a href="https://behance.net/viankalorraine" target=none class=""><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.443 5.35c.639 0 1.23.05 1.77.198c.541.099.984.297 1.377.544q.591.371.885 1.039c.197.445.296.99.296 1.583c0 .693-.148 1.286-.492 1.731c-.295.446-.787.841-1.377 1.138c.836.248 1.475.693 1.869 1.286s.639 1.336.639 2.177c0 .693-.148 1.286-.394 1.781c-.245.495-.639.94-1.082 1.237a5.1 5.1 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35zm-.394 5.54c.541 0 .984-.148 1.328-.395s.492-.693.492-1.237c0-.297-.05-.594-.148-.791s-.246-.347-.442-.495a2.4 2.4 0 0 0-.64-.247c-.246-.05-.491-.05-.787-.05H4v3.216zm.148 5.838c.295 0 .59-.05.836-.099c.246-.05.492-.148.688-.297a1.8 1.8 0 0 0 .492-.544c.098-.247.197-.544.197-.89c0-.693-.197-1.188-.59-1.534c-.394-.297-.935-.445-1.574-.445H4v3.81zm9.492-.05q.59.594 1.77.594c.541 0 1.033-.148 1.426-.395q.591-.446.738-.891h2.41c-.394 1.187-.984 2.028-1.77 2.572c-.788.495-1.722.792-2.853.792a5.8 5.8 0 0 1-2.115-.396a3.9 3.9 0 0 1-1.574-1.088a3.9 3.9 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127c0-.742.099-1.434.345-2.078a5.3 5.3 0 0 1 1.033-1.682c.442-.445.983-.84 1.573-1.088a5.5 5.5 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495c.64.346 1.131.742 1.524 1.336c.394.544.69 1.187.886 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93m3.098-5.194c-.344-.346-.885-.544-1.525-.544a2.34 2.34 0 0 0-1.082.247c-.295.149-.491.347-.688.545a1.3 1.3 0 0 0-.344.692c-.05.248-.099.445-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583M15.459 6.29h5.508v1.336H15.46z"/></svg></a>
			<a href="https://99designs.com/profiles/5087051" target=none class=""><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M21.65 13.779a2.106 2.106 0 1 1-4.212 0a2.106 2.106 0 0 1 4.212 0m-7.557-3.572a2.023 2.023 0 1 1-4.045 0a2.023 2.023 0 0 1 4.046 0m-7.66 0a2.023 2.023 0 1 1-4.046 0a2.023 2.023 0 0 1 4.046 0M17.44 17.87c.917.398 2.243.466 3.122.058q.588-.274 1.085-.886v.877H24V6.062h-2.485v4.272c-.707-.685-1.449-.977-2.45-.977c-1.06 0-1.925.352-2.585.916v-.066A4.41 4.41 0 0 0 8.24 8.02a4.41 4.41 0 1 0-4.14 6.585l-1.912 3.313h2.869l3.183-5.526a4.41 4.41 0 0 0 3.522 2.213l-1.913 3.313h2.868l2.238-3.884c.066 1.584.868 3.13 2.486 3.835"/></svg></a>
		</div>
	<div class="flex flex-row left-align justify-around">
			<div class="py-8 flex flex-col gap-4">
				<h3 class="text-xl font-bold">My Work</h3>
				<a href="/portfolio" class="text-primary-shade hover:text-secondary-shade">Portfolio</a>
				<a href="" class="text-primary-shade hover:text-secondary-shade">Case Studies</a>
				<a href="" class="text-primary-shade hover:text-secondary-shade">Demo Reel</a>
				</div>

			<div class="py-8 flex flex-col gap-4">
				<h3 class="text-xl font-bold">Info</h3>
				<a href="/about" class="text-primary-shade hover:text-secondary-shade">About</a>
				<a href="/contact" class="text-primary-shade hover:text-secondary-shade">Contact</a>
			</div>
	</div>

	</div>
</div>

