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
	<footer>
		<div class="container">
			<section class="floating-section relative rounded-3xl py-20 px-12 text-white">
				<div class=" w-1/2 px-2">
					<h3>
						We Offer Awesome Services
					</h3>
					<p class="text-sm">
						When, while lovely valley teems with vapor around meand the meridian sun strikes the upper surface.
					</p>
				</div>
				<div class="w-1/2 flex items-center">
					<div class="bg-white rounded-full py-2 ps-4 px-2 w-3/4 flex justify-between ms-40">
						<input type="text" placeholder="Enter Your Email Address" class="grow text-black">
						<button class="btn primary-btn text-sm ms-5">
							Subscribe
						</button>
					</div>
				</div>
			</section>

			<section class="footer-info">
				<div class="cards-container">
					<div class="card">
						<img src="" alt="logo">
						<p>
							text
						</p>
					</div>
					<div class="card">
						<h6>
							title
						</h6>
						<ul>
							<li>
								<a href="">social icon
									link
								</a>
							</li>
							<li>
								<a href="">
									link
								</a>
							</li>
							<li>
								<a href="">
									link
								</a>
							</li>
						</ul>
					</div>
					<div class="card">
						<h6>
							title
						</h6>
						<ul>
							<li>
								<a href="">
									link
								</a>
							</li>
							<li>
								<a href="">
									link
								</a>
							</li>
							<li>
								<a href="">
									link
								</a>
							</li>
							<li>
								<a href="">
									link
								</a>
							</li>
							<li>
								<a href="">
									link
								</a>
							</li>
						</ul>
					</div>
					<div class="card">
						<h6>
							title
						</h6>
						<p>
							<span>
								highlighted text
							</span>
							text
						</p>
						<p>
							<span>
								highlighted text
							</span>
							text
						</p>
						<p>
							<span>
								highlighted text
							</span>
							text
						</p>
					</div>
				</div>
			</section>
			<hr>
			<section class="footer-bottom">
				<div>
					<p>copyrights</p>
				</div>
				<div>
					<a href="">social icon</a>
					<a href="">social icon</a>
					<a href="">social icon</a>
					<a href="">social icon</a>
				</div>
				<a href="#header">
					Back to the top
				</a>
			</section>
		</div>
	</footer>

	
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';
@use '../assets/scss/SingleStylingFiles/variables&mixins.scss' as *;

.floating-section{
	@include bg-primary;
	display: flex;
}

.footer-info{
	.cards-container{
		display: flex;

		.card{
			width: 25%;
		}
	}
}

.footer-bottom{
	display: flex;
}
</style>