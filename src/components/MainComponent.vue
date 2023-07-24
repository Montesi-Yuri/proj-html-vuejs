<script>
import {store} from '../store.js'

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
	}
}

</script>

<template>
	<main>
		<!-- Our Services -->
		<section class="our-services">
			<div class="container">
				<h5>
					Our services
				</h5>
				<h3 class="text-5xl font-bold py-5">
					What <span class="text-5xl font-normal">we do</span>
				</h3>
				<h6 class="mb-20">
					When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
				</h6>
				<div class="cards-container">
					<div class="card" v-for="card in store.main.ourServices.cards">
						<div>
							<img :src="getImgPath(card.image)" :alt="card.title">
						</div>
						
						<h4 class="font-bold text-xl mb-5">
							{{ card.title }}
						</h4>
						<p>
							{{ card.text }}
						</p>
					</div>
				</div>
				<button class="btn primary-btn text-white mt-40">
					View All Services
				</button>
			</div>
		</section>

		<!-- Start Your Business -->
		<section class="start-your-business">
			<div class="container">

				<div class="w-3/5">
					<img src="" alt="desk img">
				</div>

				<div class="w-2/5">
					<h2>
						Text
					</h2>
					<p>
						small text
					</p>

					<button> purple button</button>

					<button> blue button</button>
				</div>
			</div>
		</section>

		<!-- Portfolio -->
		<section class="portfolio">
			<div class="container">
				<h5>
					small title
				</h5>
				<h3>
					Title
				</h3>
				<div class="carousel">
					<button>
						prev
					</button>
					<button>
						next
					</button>
					<img src="" alt="active img">
					<div class="text-center">
						active img counter
					</div>
				</div>
			</div>
		</section>

		<!-- Price List -->
		<section class="price-list">
			<div class="container">
				<h5>
					small title
				</h5>
				<h3>
					section title
				</h3>
				<h6>
					subtitle
				</h6>
				<div class="cards-container">
					<div class="card">
						<h4>
							card title
						</h4>
						<h5>
							card subtitle
						</h5>
						<div class="price">
							<p>$</p>
							<span class=" text-4xl">
								40
							</span>
							<p>
								Per Month
							</p>
						</div>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<button>
							purple button
						</button>
					</div>

					<div class="card">
						<h4>
							card title
						</h4>
						<h5>
							card subtitle
						</h5>
						<div class="price">
							<p>$</p>
							<span class=" text-4xl">
								40
							</span>
							<p>
								Per Month
							</p>
						</div>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<button>
							purple button
						</button>
					</div>

					<div class="card">
						<h4>
							card title
						</h4>
						<h5>
							card subtitle
						</h5>
						<div class="price">
							<p>$</p>
							<span class=" text-4xl">
								40
							</span>
							<p>
								Per Month
							</p>
						</div>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<p>text 
							<span>
								span text
							</span>
						</p>
						<button>
							purple button
						</button>
					</div>
					
				</div>
			</div>
		</section>

		<!-- Blog -->
		<section class="blog">
			<div class="container">
				<h5>
					small title
				</h5>
				<h3>
					section title
				</h3>
				<h6>
					subtitle
				</h6>
				<div class="cards-container">
					<div class="card w-1/3">
						<span>
							text
						</span>
						<h5>
							card title
						</h5>
						<p>
							card text
						</p>
						<button>
							blue button
						</button>
					</div>
					<div class="card w-1/6">
						<span>
							text
						</span>
						<h5>
							card title
						</h5>
						<p>
							card text
						</p>
						<button>
							blue button
						</button>
					</div>
					<div class="card w-1/6">
						<span>
							text
						</span>
						<h5>
							card title
						</h5>
						<p>
							card text
						</p>
						<button>
							blue button
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonial -->
		<section class="testimonial">
			<div class="container">
				<h5>
					small title
				</h5>
				<h3>
					section title
				</h3>
				<h6>
					subtitle
				</h6>
				<div class="cards-container">
					<div class="card">
						<img src="" alt="card img">
						<div>
							vote
						</div>
						<p>
							text
						</p>
						<h6>
							testimonial name
						</h6>
						<p>
							text
						</p>
					</div>
					<div class="card">
						<img src="" alt="card img">
						<div>
							vote
						</div>
						<p>
							text
						</p>
						<h6>
							testimonial name
						</h6>
						<p>
							text
						</p>
					</div>
					<div class="card">
						<img src="" alt="card img">
						<div>
							vote
						</div>
						<p>
							text
						</p>
						<h6>
							testimonial name
						</h6>
						<p>
							text
						</p>
					</div>
				</div>
				<div class="sponsors flex">
					<div class="card w-1/5">
						<img src="" alt="sponsor">
					</div>
					<div class="card w-1/5">
						<img src="" alt="sponsor">
					</div>
					<div class="card w-1/5">
						<img src="" alt="sponsor">
					</div>
					<div class="card w-1/5">
						<img src="" alt="sponsor">
					</div>
					<div class="card w-1/5">
						<img src="" alt="sponsor">
					</div>
				</div>

			</div>
		</section>
	</main>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';
@use '../assets/scss/SingleStylingFiles/variables&mixins.scss' as *;

main{
	margin: 50px 0;
}

.our-services{
	text-align: center;
	padding-bottom: 40px;

	h5{
		color: $primary-color;
	}
	.cards-container{
		display: flex;

		.card{
			width: 20%;
			padding: 0 20px;
			height: 100%;

			> div{
				width: 120px;
				height: 120px;
				margin: 30px auto;
			}
		}
	}
}

.start-your-business{
	display: flex;
	background-color: rgb(59 130 246);
}

.price-list{
	text-align: center;
	background: rgb(4,55,144);
	background: linear-gradient(180deg, rgba(4,55,144,1) 60%, rgba(255,255,255,1) 60%);

	.cards-container{
		display: flex;

		.card{
			width: 33%;
		}
	}
}

.blog{
	text-align: center;
	.cards-container{
		display: flex;

	}
}

.testimonial{
	text-align: center;
	.cards-container{
		display: flex;

	}
}

</style>