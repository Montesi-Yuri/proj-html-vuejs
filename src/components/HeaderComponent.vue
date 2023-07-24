<script>

export default {
  data() {
    return {
    }
  },
  components:{
  },
  methods:{
	getImgPath(src){
		return new URL(`${src}`, import.meta.url).href 
	}
	
  }
}

</script>

<template>
	<header id="header">
		<div class="container">
			<section class="header-top">
				<div class="shrink">
					<img :src="getImgPath('../assets/img/white-logo-2.png')" alt="Logo">
				</div>
			
				<nav class="grow flex items-center justify-end">
					<ul class="flex">
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

header{
	background: rgb(10,24,82);
	background: linear-gradient(180deg, rgba(10,24,82,1) 14%, rgba(3,5,53,1) 40%);
	color: white;
}
.header-top{
	display: flex;
	padding: 20px 0;
}
.hero-section{
	display: flex;
}

</style>