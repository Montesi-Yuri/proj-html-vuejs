<script>

export default {
  data() {
    return {
    }
  },
  components:{
  }
}

</script>

<template>
	<header class="bg-blue-500">
		<div class="container">
			<section class="header-top">
				<div class="shrink">
					<img src="" alt="Logo">
				</div>
			
				<nav class="grow">
					<ul class="flex justify-end">
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
						<li class="mx-5">
							<a href="">
								link
							</a>
						</li>
					</ul>
				</nav>
				<button class="shrink">
					Sign in
				</button>
			</section>

			<section class="hero-section">

				<div class="w-2/5">
					<h2>
						Text
					</h2>
					<p>
						small text
					</p>

					<button>button</button>

					<button>button</button>
				</div>

				<div class="w-3/5">
					<img src="" alt="desk img">
				</div>

			</section>
		</div>
	</header>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';

.header-top{
	display: flex;
	padding: 20px 0;
}
.hero-section{
	display: flex;
}

</style>