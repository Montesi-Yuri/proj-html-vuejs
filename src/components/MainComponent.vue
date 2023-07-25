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
						<div class="card-image">
							<img :src="getImgPath(card.image)" :alt="card.title">
						</div>
						<div class="card-text">
							<h4 class="font-bold text-xl mb-5">
								{{ card.title }}
							</h4>
							<p>
								{{ card.text }}
							</p>
						</div>
						<div class="arrow-link">
							<a href="#">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
									<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</a>
						</div>
						
					</div>
				</div>
				<button class="btn primary-btn text-white mt-20">
					View All Services
				</button>
			</div>
		</section>

		<!-- Start Your Business -->
		<section class="start-your-business">
			<div class="container">
				<div class="flex">
					<div class="w-1/3 relative">
						<div>
							<img :src="getImgPath('../assets/img/nemoodar.png')" alt="" class="m-0">
						</div>
						<div class="absolute top-20 left-20">
							<img :src="getImgPath('../assets/img/men-data.png')" alt="start your business">
						</div>
					</div>
					<div class="w-1/2 ps-48">
						<h5>
							Start Your Project
						</h5>
						<h2 class="text-6xl font-bold mt-8">
							Grow Your Business
							<span class="text-6xl font-normal">With Our Strategy</span> 
						</h2>
						<p class="my-10">
							When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
						</p>
						<button class="btn primary-btn me-5">
							Try It Now 
						</button>
						<button class="btn blue-btn">
							Explore More
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio -->
		<section class="portfolio">
			<div class="container">
				<h5>
					Portfolio
				</h5>
				<h3 class=" text-4xl font-bold">
					latest <span class="font-normal"> work</span>
				</h3>
			</div>
			<div class="carousel">
				<button>
					prev
				</button>
				<button>
					next
				</button>

				<div class="cards-container">
					<div class="card" v-for="card in store.main.portfolio">
						<div class="card-image">
							<img :src="getImgPath(card.image)" :alt="card.title">
						</div>
						<div class="card-text">
							<h6 class="font-bold">
								{{ card.title }}							
							</h6>
							<p class="font-extralight">
								{{ card.subtitle }}
							</p>
						</div>
					</div>
				</div>
				
				
				<div class="text-center">
					active img counter
				</div>
			</div>
			
		</section>

		<!-- Price List -->
		<section class="price-list">
			<div class="container">
				<h5>
					Price List
				</h5>
				<h3>
					Our <span class="font-normal"> Pricing</span>
				</h3>
				<p class="text-white my-3">
					When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
				</p>
				<div class="cards-container">
					<div class="card" v-for="card in store.main.priceList.cards" :class=" card.colorSet == 'light' ? 'light' : '',  card.colorSet == 'primary' ? 'primary' : '' ">

						<span class="bg-price" :class=" card.colorSet == 'light' ? 'light' : '',  card.colorSet == 'primary' ? 'primary' : '' ">
							{{ card.price }}
						</span>
						<h4 class="font-bold text-4xl">
							{{ card.title }}
						</h4>
						<h6>
							{{ card.subtitle }}
						</h6>
						<div class="price my-10">
							<p class="text-center pe-20">$</p>
							<span class=" text-8xl font-bold">
								{{ card.price }}
							</span>
							<p>
								{{ card.cadence }}
							</p>
						</div>

						<p v-for="service in card.services" class="py-2">

							{{ service.bold }} 
							<span class="font-normal">
								{{ service.thin }}
							</span>
						</p>

						<button class="btn my-5 font-bold" :class=" card.colorSet == 'light' ? 'primary-btn' : '', card.colorSet == 'primary' ? 'light-btn' : '' ">
							<span :class=" card.colorSet == 'primary' ? ' text-rose-500' : '' ">Order Now </span> 
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block ms-8" :class=" card.colorSet == 'primary' ? ' text-rose-500' : '' ">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>

						</button>
					</div>

				</div>
			</div>
		</section>

		<!-- Blog -->
		<section class="blog">
			<div class="container">
				<h5>
					Blog
				</h5>
				<h3>
					Latest <span class="font-normal"> Posts</span>
				</h3>
				<h6 class="mt-5">
					When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
				</h6>
				<div class="cards-container">
					<div class="card" v-for="card in store.main.blog.cards" :class="card.cardWidth, card.cardWidth == 'w-1/2' ? 'big-card' : '' ">
						<div class="card-text">
							<span>
								{{ card.date }}
							</span>
							<span>
								&#8226 {{ card.author }}
							</span>
							<h5>
								{{card.title}}
							</h5>
							<p>
								{{card.text}}
							</p>
						</div>
						<div>
							<button class="btn light-btn">
								Read More
							</button>
						</div>
						
					</div>
				</div>
			</div>
		</section>

		<!-- Testimonial -->
		<section class="testimonial">
			<div class="container">
				<h5>
					Testimonial
				</h5>
				<h3 class="font-bold mb-5">
					What <span class="font-normal">People Say</span>
				</h3>
				<h6>
					When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
				</h6>
				<div class="cards-container">
					<div class="card" v-for="card in store.main.testimonials.cards">
						<img :src="getImgPath(card.image)" :alt="card.name">
						<div class="vote flex justify-center" >
							<span v-for="fullstar in card.vote" class="mx-0">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
									<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
								</svg>
							</span>
							<span v-for="emptystar in (5 - card.vote)" class="mx-0">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
									<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
								</svg>
							</span>
						</div>
						<p class="my-10">
							{{ card.review }}
						</p>
						<h6 class="font-bold mb-2">
							{{ card.name }}
						</h6>
						<p class="text-sm">
							{{ card.role }}
						</p>
					</div>
				</div>
				<div class="sponsors flex my-28">
					<div class="w-1/5" v-for="sponsor in store.main.testimonials.sponsors">
						<img :src="getImgPath(sponsor.image)" alt="sponsor">
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
		margin-top: 160px;

		.card{
			width: 300px;
			height: 100%;
			position: relative;

			&:hover .card-image{
				box-shadow: -2px -2px 10px rgb(75, 74, 74);
			}
			&:hover .card-text{
				@include bg-secondary;
				color: white;
				box-shadow: -2px -2px 10px rgb(75, 74, 74);
			}
			&:hover .arrow-link{
				display: flex;
			}

			.card-image{
				width: 150px;
				height: 150px;
				position: absolute;
				top: 0;
				left: 0;
				transform: translate(50%, -50%);
				background-color: white;
				padding: 15px;
				border-radius: 15px;
			}
			.card-text{
				padding: 40px;
				padding-top: 120px;
				border-radius: 24px;
			}
			.arrow-link{
				width: 50px;
				height: 50px;
				@include bg-primary;
				border-radius: 50%;
				display: none;
				align-items: center;
				position: relative;
				top: 0;
				left: 0;
				transform: translate( 0, -50%);
				cursor: pointer;
			}
		}
	}
}
.start-your-business{
	display: flex;
	@include bg-secondary;
	color: white;
	padding: 110px 0;

	p{
		color: $secondary-color;
	}
	h5{
		color: white;
	}
}
.portfolio{

	.cards-container{
		margin: 0;
		display: flex;
	}
	.card{
		width: 400px;
		box-shadow: 2px 2px 5px grey;
		border-radius: 25px;
		overflow: hidden;
		margin: 15px 30px;

		.card-image{
			border-radius: 25px;
			overflow: hidden;
		}
		.card-text{
			display: flex;
			justify-content: space-between;
			padding: 25px 15px;
		}

	}
	h5{
		color: $primary-color;
	}
}
.price-list{
	text-align: center;
	@include bg-half-secondary;
	padding: 80px 0;

	h3{
		color: white;
	}
	.cards-container{
		display: flex;
		margin-top: 70px;
		.card{
			width: 30%;
			border-radius: 25px;
			padding: 30px;
			position: relative;
			box-shadow: -1px -1px 4px slategray;

			h6{
				font-size: small;
				font-weight: bold;
				margin: 10px 0;
			}
			.bg-price{
				position: absolute;
				top: 0;
				right: -5px;
				line-height: 200px;
				font-size: 260px;
				padding: 0;
				margin: 0;
				&.light{
					color: rgba($color: black, $alpha: 0.2);
				}
				&.primary{
					color: rgba($color: white, $alpha: 0.2);
				}
			}
			&.light{
				color: black;
				background-color: white;
			}
			&.primary{
				color: white;
				@include bg-primary;
			}
		}
		
		
	}
}
.blog{
	text-align: center;
	.cards-container{
		display: flex;
		margin: 50px 0;
		.card{
			border-radius: 25px;
			box-shadow: -1px -1px 4px slategray;
			margin: 20px;
			padding: 30px;
			text-align: left;
			@include bg-secondary;
			color: white;
			display: flex;
			flex-wrap: wrap;
			align-items: end;
			font-size: small;
			filter: brightness(0.9);

			h5{
				margin: 20px 0;
				font-weight: bold;
				color: white;
				font-size: 18px;
			}
			p{
				margin-bottom: 40px;
			}

			&.big-card{
				align-items: end;
				background-image: url('../assets/img/headway-537308-unsplash-1380x703.jpg');
				background-size: contain;

				> div:first-child{
					width: 60%;
					margin-left: 0;
					flex-grow: 1;

					p{
						margin: 0;
					}
				}
				> div{
					
				}

			}
		}
	}
}
.testimonial{
	text-align: center;
	.cards-container{
		display: flex;
		.card{
			padding: 30px;
			margin: 30px 25px;
			position: relative;
			&.card::before {
				content: "";
				position: absolute;
				top: 0; left: 0;
				width: 100%;
				height: 100%;
				scale: 20%;
				background-image: url('../assets/img/noun-quotation-mark-5265746.png');
				background-size: contain;
				background-repeat: no-repeat;
				filter:opacity(0.1);
				z-index: -1;
			}
			img{
				width: 100px;
				height: 100px;
				border: 4px solid $tertiary-color;
				border-radius: 50%;
				margin: 30px auto;
			}
			.vote span svg{
				color: $tertiary-color;
			}
		}
	}
}

</style>