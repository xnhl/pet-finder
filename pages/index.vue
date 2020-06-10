<template>
	<div id="wrapper">
		<SearchBox @search-submit="search" />
		<div id="intro">
			<!-- <img src="" alt="" class="intro-image"> -->
			<div class="intro-text">Welcome!</div>
			<div class="intro-text">Let's find pets in your area.</div>
			<div class="intro-text">Use the search box to begin.</div>
		</div>
		<div id="animals-wrapper">
			<Animal v-for="(animal, index) in animals" :key="index" :info="animal" />
		</div>
	</div>
</template>

<script>
import moment from 'moment'
// import data from '@/assets/res.json'
import Animal from '@/components/Animal'
import SearchBox from '@/components/SearchBox'
export default {
	components: {Animal, SearchBox},
	data() {
		return {
			count: 1,
			// animals: data.animals,
			animals: []
		}
	},
	methods: {
		search: async function($event) {
			let intro = document.getElementById("intro");
			intro.classList.add("hide");
			let key = process.env.mikey;
			// let key = "vViQcHxBnMGGUfgSCU4zf3L7gfVsEfeNOpvU4KX2ss5mDWs6P7";
			let secret = process.env.miceykrit;
			// let secret = "3WsKg2sQubocNWVrd38cMDCHd3tjFHwqtLeGJX19";
			let existingToken = localStorage.getItem("petfinder_token");
			if (existingToken && existingToken !== null) {
				try {
					let actualCall = await fetch(`https://api.petfinder.com/v2/animals?${$event}`, {
						headers: {
							'Authorization': `Bearer ${existingToken}`,
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					});
					let callRes = await actualCall.json();
					this.animals = callRes.animals
				} catch(error) {
					try {
						let tokenCall = await fetch('https://api.petfinder.com/v2/oauth2/token', {
							method: 'POST',
							body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						});
						let tokenRes = await tokenCall.json();
						let newToken = tokenRes.access_token;
						this.tokenExpireTime = moment().add(tokenRes.expires_in, 'seconds').format();
						localStorage.setItem("petfinder_token", newToken);
						let actualCall = await fetch(`https://api.petfinder.com/v2/animals?${$event}`, {
							headers: {
								'Authorization': `Bearer ${newToken}`,
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						});
						let callRes = await actualCall.json();
						this.animals = callRes.animals
					} catch(error) {
						console.log(error)
					}
				}
			} else {
				let tokenCall = await fetch('https://api.petfinder.com/v2/oauth2/token', {
					method: 'POST',
					body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				});
				let tokenRes = await tokenCall.json();
				let newToken = tokenRes.access_token;
				this.tokenExpireTime = moment().add(tokenRes.expires_in, 'seconds').format();
				localStorage.setItem("petfinder_token", newToken);
				let actualCall = await fetch(`https://api.petfinder.com/v2/animals?${$event}`, {
					headers: {
						'Authorization': `Bearer ${newToken}`,
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				});
				let callRes = await actualCall.json();
				this.animals = callRes.animals
			}
		}
	}
	// async beforeMount() {
		// this.search()
	// }
}
</script>

<style lang="sass">
#wrapper
	@include pageWrapper
	margin: 0.5rem auto
	#animals-wrapper
		@include flexCenter
		align-items: stretch
		padding: 0.5rem
	#intro
		@include flexCenter
		margin: 3rem auto
		padding: 3rem
		border-radius: 0.5rem
		max-width: 50rem
		animation: $pageFade
		box-shadow: var(--theme-boxShadow)
		background: var(--theme-whiteBG)
		.intro-text
			width: 100%
			margin: 1rem auto
			font-size: 2.5rem
			line-height: 3rem
			text-align: center
			@include flexCenter
</style>
