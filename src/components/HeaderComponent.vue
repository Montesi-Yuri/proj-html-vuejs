<script>
import {store} from '../store.js';

export default {
	data() {
		return {
			store
		}
	},
	components:{
	},
	methods:{
		getImgPath(src){
			return new URL(`${src}`, import.meta.url).href 
		},
		pageChange(i){
			store.header.links[store.header.activeLink].active = false;
			store.header.activeLink = i;
			store.header.links[i].active = true;
		}
		
	}
}

</script>

<template>
	<header id="header">
		<div class="container">
			<!-- Header Top -->
			<section class="header-top">
				<div class="shrink">
					<img :src="getImgPath('../assets/img/white-logo-2.png')" alt="Logo">
				</div>
				<nav class="grow flex items-center justify-end">
					<ul class="flex">
						<li class="mx-5" v-for="(link, i) in store.header.links" :class=" link.active == true ? 'active' : '' "
						@click="pageChange(i)">
							<a href="#">
								{{ link.name }}
							</a>
						</li>
					</ul>
				</nav>
				<div class="flex items-center ms-10">
					<button class="btn blue-btn">
						Sign in
					</button>
				</div>
			</section>
			<!-- Hero Section -->
			<section class="hero-section">
				<div class="w-2/5 pt-40">
					<h2 class="text-6xl font-bold">
						Business Planning
						<span class="text-6xl font-normal">Digital Technology</span> 
						Modern solution !
					</h2>
					<p class="my-10">
						When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
					</p>
					<button class="btn primary-btn  me-5">
						Try It Now 
					</button>
					<button class="btn blue-btn">
						Explore More
					</button>
				</div>
				<div class="w-3/5">
					<img :src="getImgPath('../assets/img/header.png')" alt="">
				</div>
			</section>
		</div>
	</header>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';
@use '../assets/scss/SingleStylingFiles/variables' as *;

header{
	background: rgb(10,24,82);
	background: linear-gradient(180deg, rgba(10,24,82,1) 14%, rgba(3,5,53,1) 40%);
	color: white;
	padding-top: 10px;
	padding-bottom: 60px;
}
.header-top{
	display: flex;
	padding: 20px 0;

	.active{
		color: salmon;
	}
}
.hero-section{
	display: flex;

	> div p{
		color: $secondary-color;
	}
	> div img{
		width: 100%;
	}
}

</style>