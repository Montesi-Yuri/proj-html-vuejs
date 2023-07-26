<script>

export default {
  data() {
    return {
    }
  },
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
						<input type="text" placeholder="Enter Your Email Address" class="ps-5 text-sm grow text-black">
						<button class="btn blue-btn text-sm ms-5">
							Subscribe
						</button>
					</div>
				</div>
			</section>

			<section class="footer-info">
				<div class="cards-container">
					<div class="card">
						<div class="mb-10">
							<img class="ms-0" src="../assets/img/white-logo-2.png" alt="logo">
						</div>
						<p>
							When, while lovely valley teems with vapor around meand the meridian sun strikes the upper impenetrable.
						</p>
					</div>
					<div class="card">
						<h6>
							Quick Links
						</h6>
						<ul>
							<li>
								<a href="">
									Services
								</a>
							</li>
							<li>
								<a href="">
									Contact
								</a>
							</li>
							<li>
								<a href="">
									Blog
								</a>
							</li>
						</ul>
					</div>
					<div class="card">
						<h6>
							Resources
						</h6>
						<ul>
							<li>
								<a href="">
									Art Design
								</a>
							</li>
							<li>
								<a href="">
									Computer
								</a>
							</li>
							<li>
								<a href="">
									IT News
								</a>
							</li>
							<li>
								<a href="">
									Networking
								</a>
							</li>
							<li>
								<a href="">
									Web Security
								</a>
							</li>
						</ul>
					</div>
					<div class="card">
						<h6>
							Contact Us
						</h6>
						<p class="mb-8">
							<span>
								Address :
							</span>
							Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051
						</p>
						<p>
							<span>
								Phone :
							</span>
							+99 (0) 101 0000 888
						</p>
						<p>
							<span>
								Email :
							</span>
							info@yourdomain.com
						</p>
					</div>
				</div>
			</section>
		</div>
		<hr>
		<div class="container">
			<section class="footer-bottom">
				<div class="w-1/2">
					<p>© 2020 Phlox. All Rights Reserved.</p>
				</div>
				<div class="social-icons">
					<a href="">
						<font-awesome-icon icon="fa-brands fa-instagram" />
					</a>
					<a href="">
						<font-awesome-icon icon="fa-brands fa-linkedin-in" />
					</a>
					<a href="">
						<font-awesome-icon icon="fa-brands fa-facebook-f" />
					</a>
					<a href="">
						<font-awesome-icon icon="fa-brands fa-twitter" />
					</a>
				</div>
				<div class="back-top">
					<a href="#header">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
						</svg>
					</a>
				</div>
			</section>
		</div>
	</footer>

	
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';
@use '../assets/scss/SingleStylingFiles/variables&mixins.scss' as *;

footer{
	@include bg-secondary;
	position: relative;
	margin-top: 220px;

	hr{
		border-color: #333333;
	}
	.floating-section{
		@include bg-primary;
		display: flex;
		position: relative;
		top: 0; left: 0;
		transform: translate(0, -50%);
	}

	.footer-info{
		color: white;
		padding-bottom: 60px;
		
		.cards-container{
			display: flex;

			.card{
				width: 25%;
				padding: 10px 40px;
				
				li{
					margin: 10px 0;
					a{
						color: #BBBBBB;
						font-weight: 200;
						font-size: small;	
					}
				}

				h6{
					font-size: larger;
					font-weight: bold;
					margin-bottom: 15px;
				}
				span{
					font-weight: bold;
					color: white;
				}
				p{
					font-size: small;
					color: #BBBBBB;
					font-weight: 200;
				}
			}
		}
	}

	.footer-bottom{
		display: flex;
		color: #BBBBBB;
		position: relative;
		padding: 30px 0;
		font-size: small;

		.social-icons{
			width: 50%;
			display: flex;
			justify-content: flex-end;
			margin-right: 100px;
			a{
				color: white;
				margin: 0 20px;
			}
		}
		.back-top{
			width: 40px;
			height: 40px;
			background-color: white;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 0; right: 0;
			transform: translate(-50%, -50%);


		}
	}
}

</style>