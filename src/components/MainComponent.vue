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
	<main>
		<!-- Our Services -->
		<section class="our-services">
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
						<img src="" alt="card image">
						<h4>
							card title
						</h4>
						<p>
							card text
						</p>
					</div>
					<div class="card">
						<img src="" alt="card image">
						<h4>
							card title
						</h4>
						<p>
							card text
						</p>
					</div>
					<div class="card">
						<img src="" alt="card image">
						<h4>
							card title
						</h4>
						<p>
							card text
						</p>
					</div>
					<div class="card">
						<img src="" alt="card image">
						<h4>
							card title
						</h4>
						<p>
							card text
						</p>
					</div>
				</div>
				<button>
					purple button
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

		
	</main>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';

.our-services{
	text-align: center;
	.cards-container{
		display: flex;

		.card{
			width: 25%;
		}
	}
}

.start-your-business{
	display: flex;
	background-color: rgb(59 130 246);
}

.price-list{
	text-align: center;
	.cards-container{
		display: flex;

		.card{
			width: 33%;
		}
	}
}

</style>