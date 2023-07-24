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
			<section class="floating-section">
				<div class=" w-1/2">
					<h3>
						Title
					</h3>
					<p>
						text
					</p>
				</div>
				<div class=" w-1/2">
					<div>
						<input type="text">
						<button>
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

.floating-section{
	background-color: purple;
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