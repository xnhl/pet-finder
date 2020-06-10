<template>
	<div id="searchbox-wrapper">
		<form action="" id="search-form">
			<div class="field">
				<label class="label">Zip Code</label>
				<div class="control">
					<input type="text" class="input" placeholder="12345" id="zip-code">
				</div>
			</div>
			<div class="field">
				<label class="label">Distance</label>
				<div class="control">
					<input type="text" class="input" placeholder="100" id="distance">
				</div>
			</div>
			<div class="field">
				<label class="label">Type</label>
				<div class="select-container">
					<select class="select" id="type">
						<option class="option" value=""></option>
						<option class="option" value="dog">Dog</option>
						<option class="option" value="cat">Cat</option>
						<option class="option" value="bird">Bird</option>
						<option class="option" value="horse">Horse</option>
						<option class="option" value="reptile">Reptile</option>
						<option class="option" value="barnyard">Barnyard</option>
						<option class="option" value="smallfurry">Small Furry</option>
					</select>
				</div>
			</div>
			<div class="field">
				<label class="label">Sex</label>
				<div class="select-container">
					<select class="select" id="sex">
						<option class="option" value=""></option>
						<option class="option" value="male">Male</option>
						<option class="option" value="female">Female</option>
						<option class="option" value="unknown">Unknown</option>
					</select>
				</div>
			</div>
			<div class="field">
				<label class="label">Size</label>
				<div class="select-container">
					<select class="select" id="size">
						<option class="option" value=""></option>
						<option class="option" value="small">Small</option>
						<option class="option" value="medium">Medium</option>
						<option class="option" value="large">Large</option>
						<option class="option" value="xlarge">X-Large</option>
					</select>
				</div>
			</div>
			<div class="field">
				<label class="label">Age</label>
				<div class="select-container">
					<select class="select" id="age">
						<option class="option" value=""></option>
						<option class="option" value="baby">Baby</option>
						<option class="option" value="young">Young</option>
						<option class="option" value="adult">Adult</option>
						<option class="option" value="senior">Senior</option>
					</select>
				</div>
			</div>
			<div class="field">
				<label class="label">Coat</label>
				<div class="select-container">
					<select class="select" id="coat">
						<option class="option" value=""></option>
						<option class="option" value="short">Short</option>
						<option class="option" value="medium">Medium</option>
						<option class="option" value="long">Long</option>
						<option class="option" value="wire">Wire</option>
						<option class="option" value="hairless">Hairless</option>
						<option class="option" value="curly">Curly</option>
					</select>
				</div>
			</div>
			<div class="field">
				<label class="label">Status</label>
				<div class="select-container">
					<select class="select" id="status">
						<option class="option" value=""></option>
						<option class="option" value="adoptable">Adoptable</option>
						<option class="option" value="adopted">Adopted</option>
						<option class="option" value="found">Found</option>
					</select>
				</div>
			</div>
			<div id="search-submit-wrapper">
				<div @click="searchSubmit" id="search-submit">Search</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	methods: {
		searchSubmit: async function (e) {
			let zipcode = document.getElementById("zip-code");
			let zipcodeValue = (zipcode.value && zipcode.value !== "") ? `&location=${zipcode.value}` : "";
			let distance = document.getElementById("distance");
			let distanceValue = (distance.value && distance.value !== "") ? `&distance=${distance.value}` : "";
			let type = document.getElementById("type");
			let typeValue = type.options[type.selectedIndex].value !== "" ? `&type=${type.options[type.selectedIndex].value}` : "";
			let sex = document.getElementById("sex");
			let sexValue = sex.options[sex.selectedIndex].value !== "" ? `&gender=${sex.options[sex.selectedIndex].value}` : "";
			let size = document.getElementById("size");
			let sizeValue = size.options[size.selectedIndex].value !== "" ? `&size=${size.options[size.selectedIndex].value}` : "";
			let age = document.getElementById("age");
			let ageValue = age.options[age.selectedIndex].value !== "" ? `&age=${age.options[age.selectedIndex].value}` : "";
			let coat = document.getElementById("coat");
			let coatValue = coat.options[coat.selectedIndex].value !== "" ? `&coat=${coat.options[coat.selectedIndex].value}` : "";
			let status = document.getElementById("status");
			let statusValue = status.options[status.selectedIndex].value !== "" ? `&status=${status.options[status.selectedIndex].value}` : "";
			let searchOptions = `${zipcodeValue}${distanceValue}${typeValue}${sexValue}${sizeValue}${ageValue}${coatValue}${statusValue}`;
			this.$emit("search-submit", searchOptions.substring(1))
		}
	}
}
</script>

<style lang="sass">
#searchbox-wrapper
	display: flex
	align-items: center
	flex-direction: column
	justify-content: space-around
	margin: 0.5rem auto
	width: 100%
	align-self: flex-start
	#search-form
		padding: 0.5rem
		width: 100%
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: space-around
		border-radius: 0.5rem
		background-color: var(--theme-itemWhite)
		box-shadow: var(--theme-boxShadowLight)
		margin: 0 auto
		input
			background: var(--theme-whiteBG)
			color: var(--theme-white)
			padding: 0.5rem
			margin-top: 0.5rem
			border: 0.2rem solid rgba(white, 0.25)
			border-radius: 0.5rem
		#search-submit-wrapper
			width: 100%
			@include flexCenter
			#search-submit
				// display: block
				color: var(--theme-black)
				flex: 1
				max-width: 20rem
				@include flexCenter
				height: 2rem
				cursor: pointer
				border-radius: 0.5rem
				padding: 0.25rem
				margin: 0.5rem
				background-color: var(--theme-whiteBG)
				text-align: center
				@media (max-width: 40em)
					flex: 1
					width: 100%
				&:hover
					background-color: var(--theme-itemWhite)
		.field
			width: auto
			flex-grow: 1
			margin: 0.25rem
			*
				width: 100%
			.label
				text-align: center
				margin-left: 0.5rem
				color: var(--theme-black)
			.select-container
				.select
					background-color: var(--theme-itemWhite)
					color: var(--theme-black)
					padding: 0.5rem
					margin-top: 0.5rem
					border: 0.2rem solid rgba(white, 0.25)
					border-radius: 0.5rem
					.option
			.control
				.input
					color: var(--theme-black)
					&::placeholder
						color: var(--theme-black)
</style>
