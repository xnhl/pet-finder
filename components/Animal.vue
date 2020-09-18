<template>
	<div class="animal" :animal_id="id" :age="age" :gender="gender" :size="size" :name="name" :org="organization_id" :mixed="isMixedBreed" :distance="distance" :spayed_neutered="if_spayed_neutered" :house_trained="if_house_trained" :declawed="if_declawed" :special_needs="if_special_needs" :shots_current="if_shots_current">
		<div class="animal-image-wrapper">
			<img :src="image" alt="" class="animal-image" v-if="hasImage">
			<p class="animal-image-backup" v-if="!hasImage">No image found</p>
		</div>
		<div class="animal-info-wrapper">
			<div class="animal-name">
				<p class="animal-name-text" v-text="name"></p>
				<p class="animal-name-info" v-text="animalInfo"></p>
				<div class="animal-name-breeds" v-if="hasBreeds">
					<span class="animal-breed" v-if="hasPrimaryBreed" v-text="primaryBreed"></span>
					<span class="animal-breed" v-if="hasSecondaryBreed" v-text="secondaryBreed"></span>
					<span class="animal-breed mix" v-if="isMixedBreed" v-text="`Mix`"></span>
					<span class="animal-breed" v-if="hasUnknownBreed" v-text="unknownBreed"></span>
				</div>
			</div>
			<div class="breeds-colors-wrapper">
				<div class="animal-colors" v-if="hasColors">
					<div class="animal-color" v-if="hasPrimaryColor" v-text="`Color: ${primaryColor}`"></div>
					<div class="animal-color" v-if="hasSecondaryColor" v-text="secondaryColor"></div>
					<div class="animal-color" v-if="hasTertiaryColor" v-text="tertiaryColor"></div>
				</div>
			</div>
			<div class="animal-other-info">
				<p class="animal-other-info-item" v-if="ifCoat" v-text="`Coat: ${coat}`"></p>
				<p class="animal-other-info-item description" v-if="hasDescription" v-text="description"></p>
				<!-- <p class="animal-other-info-item" v-text="`Status: ${status}`"></p> -->
				<p class="animal-other-info-item" v-text="published_at"></p>
				<p class="animal-other-info-item" v-text="distance"></p>
			</div>
			<div class="animal-options" v-if="if_spayed_neutered || if_house_trained || if_declawed || if_special_needs || if_shots_current">
				<p class="animal-options-title">Details: </p>
				<div class="animal-options-list">
					<p class="animal-option" v-if="if_spayed_neutered" v-text="`spayed / neutered`"></p>
					<p class="animal-option" v-if="if_house_trained" v-text="`house trained`"></p>
					<p class="animal-option" v-if="if_declawed" v-text="`declawed`"></p>
					<p class="animal-option" v-if="if_special_needs" v-text="`special needs`"></p>
					<p class="animal-option" v-if="if_shots_current" v-text="`shots current`"></p>
				</div>
			</div>
			<div class="animal-contact" v-if="address || phone || email">
				<p class="animal-contact-method" v-if="address" v-text="address"></p>
				<p class="animal-contact-method" v-if="phone" v-text="phone"></p>
				<p class="animal-contact-method" v-if="email" v-text="email"></p>
			</div>
			<a class="animal-link" :href="url" v-text="`More Info`" target="_blank"></a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		info: Object
	},
	computed: {
		id: function() { return this.info.id },
		organization_id: function() { return this.info.organization_id },
		url: function() { return this.info.url },
		type: function() { return this.info.type },
		species: function() { return this.info.species },
		animalInfo: function() { return ` - ${this.size} ${this.age} ${this.gender} ${this.type}` },
		image: function() { return (Array.isArray(this.info.photos) && this.info.photos.length && this.info.photos[0].small) ? this.info.photos[0].small : "" },
		hasImage: function() { return (Array.isArray(this.info.photos) && this.info.photos.length && this.info.photos[0].small) ? true : false },
		hasPrimaryBreed: function() { return this.info.breeds.primary ? true : false },
		primaryBreed: function() { return this.info.breeds.primary ? this.info.breeds.primary : "" },
		hasSecondaryBreed: function() { return this.info.breeds.secondary ? true : false },
		secondaryBreed: function() { return this.info.breeds.secondary ? this.info.breeds.secondary : "" },
		isMixedBreed: function() { return this.info.breeds.mixed ? true : false },
		mixedBreed: function() { return this.info.breeds.mixed ? this.info.breeds.mixed : "" },
		hasUnknownBreed: function() { return this.info.breeds.unknown ? true : false },
		unknownBreed: function() { return this.info.breeds.unknown ? this.info.breeds.unknown : "" },
		hasPrimaryColor: function() { return this.info.colors.primary ? true : false },
		primaryColor: function() { return this.info.colors.primary ? this.info.colors.primary : "" },
		hasSecondaryColor: function() { return this.info.colors.secondary ? true : false },
		secondaryColor: function() { return this.info.colors.secondary ? this.info.colors.secondary : "" },
		hasTertiaryColor: function() { return this.info.colors.tertiary ? true : false },
		tertiaryColor: function() { return this.info.colors.tertiary ? this.info.colors.tertiary : "" },
		age: function() { return this.info.age ? this.info.age : "" },
		gender: function() { return this.info.gender ? this.info.gender : "" },
		size: function() { return this.info.size ? this.info.size : "" },
		ifCoat: function() { return this.info.coat ? true : false },
		coat: function() { return this.info.coat ? this.info.coat : "" },
		hasBreeds: function() { return this.info.breeds.primary ? true : false },
		hasColors: function() { return this.info.colors.primary ? true : false },
		if_spayed_neutered: function() { return this.info.attributes.spayed_neutered ? true : false },
		if_house_trained: function() { return this.info.attributes.house_trained ? true : false },
		if_declawed: function() { return this.info.attributes.declawed ? true : false },
		if_special_needs: function() { return this.info.attributes.special_needs ? true : false },
		if_shots_current: function() { return this.info.attributes.shots_current ? true : false },
		email: function() { return this.info.contact.email ? `E-mail: ${this.info.contact.email}` : false },
		distance: function() { return this.info.distance ? `Distance: ${parseInt(this.info.distance)} miles` : "" },
		hasDescription: function() { return this.info.description ? true : false },
		photos: function() { return this.info.photos[0].small },
		videos: function() { return this.info.videos[0].embed },
		environment: function() {
			return this.info.environment ? this.info.environment : []
		},
		tags: function() {
			return this.info.tags ? this.info.tags : []
		},
		contact: function() {
		},
		_links: function() {
		},
		description: function() {
			const Entities = require('html-entities').AllHtmlEntities
			const entities = new Entities()
			return entities.decode(entities.decode(this.info.description))
		},
		published_at: function() {
			const moment = require('moment')
			let rightNow = moment()
			let published = moment(this.info.published_at)
			let howLong = rightNow.diff(published, 'days')
			let publishedFormatted = moment(this.info.published_at).format('LL')
			return howLong > 1 ? `Last Update: ${publishedFormatted} (${howLong} days ago)` : howLong == 1 ? `Last Update: ${publishedFormatted} (${howLong} day ago)` : howLong == 0 ? `Last Update: ${publishedFormatted} (Today)` : null
		},
		name: function() {
			const toTitleCase = (str) => {
				str = str.toLowerCase().split(' ')
				for (var i = 0; i < str.length; i++) {
					str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
				}
				return str.join(' ')
			}
			return this.info.name.length > 2 ? toTitleCase(this.info.name) : this.info.name
		},
		status: function() {
			const toTitleCase = (str) => {
				str = str.toLowerCase().split(' ')
				for (var i = 0; i < str.length; i++) {
					str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
				}
				return str.join(' ')
			}
			return toTitleCase(this.info.status)
		},
		attributes: function() {
			let keys = Object.keys(this.info.attributes)
			let keysLen = keys.length
			let keysSpaced = keys.map(key => key.replace("_", " "))
			let newAttrs = []
			for (let i = 0; i < keysLen; i++) {
				let newKey = keysSpaced[i]
				newAttrs[i] = {
					newKey: this.info.attributes[i]
				}
			}
			return newAttrs
		},
		address: function() {
			let address1 = this.info.contact.address.address1 ? this.info.contact.address.address1 : ""
			let address2 = this.info.contact.address.address2 ? this.info.contact.address.address2 : ""
			let city = this.info.contact.address.city ? this.info.contact.address.city : ""
			let state = this.info.contact.address.state ? this.info.contact.address.state : ""
			let postcode = this.info.contact.address.postcode ? this.info.contact.address.postcode : ""
			let country = this.info.contact.address.country ? this.info.contact.address.country : ""
			return (this.info.contact.address.address1 || this.info.contact.address.address2) ? `Location: ${address1}, ${city}, ${state} ${postcode}` : ` Location: ${city}, ${state} ${postcode}`
		},
		phone: function() {
			if (this.info.contact.phone && this.info.contact.phone.replace(/ /gi, "") !== "") {
				let initial = this.info.contact.phone.replace(/[^0-9]/gi, "")
				if (initial.length === 10) {
					let num1 = initial.slice(0, 3)
					let num2 = initial.slice(3, 6)
					let num3 = initial.slice(6)
					return `Phone: (${num1})${num2}-${num3}`
				} else if (initial.length === 11) {
					let num0 = initial.slice(0, 1)
					let num1 = initial.slice(1, 4)
					let num2 = initial.slice(4, 7)
					let num3 = initial.slice(7)
					return `Phone: ${num0}-${num1}-${num2}-${num3}`
				}
			} else return false
		}
	}
}
</script>

<style lang="sass">
.animal
	@include flexCenter
	cursor: pointer
	background: var(--theme-itemWhite)
	border: 0.1rem solid rgba(white, 0.25)
	border-radius: 0.5rem
	margin: 0.25rem
	padding: 0.5rem
	min-width: 100%
	flex: 1
	box-shadow: var(--theme-boxShadow)
	&:hover
		box-shadow: var(--theme-boxShadowHover)
	@media (min-width: 66em)
		min-width: 40%
	.animal-image-wrapper
		@include flexCenter
		min-width: 100%
		max-width: 25%
		margin: 0 0 1rem 0
		border-radius: 0.25rem
		@media (min-width: 35em)
			min-width: auto
			width: auto
			margin: 0.5rem 1rem
		.animal-image
			height: auto
			width: auto
			padding: 0.5rem
			background: var(--theme-whiteBG)
			border-radius: 0.25rem
		.animal-image-backup
			height: auto
			width: auto
			font-size: 0.75rem
			padding: 2.5rem 0.5rem
			background: var(--theme-whiteBG)
			border-radius: 0.25rem
			@include flexCenter
	.animal-info-wrapper
		@include flexCenter
		flex: 1
		@media (min-width: 66em)
			height: 100%
		.animal-name
			@include flexCenter
			align-items: stretch
			flex: 1
			padding: 0.5rem
			min-width: 100%
			.animal-name-text
				@include flexCenter
				font-size: 1.25rem
				margin: auto 0.5rem
				width: auto
			.animal-name-info
				@include flexCenter
				width: auto
			.animal-name-breeds
				@include flexCenter
				margin: auto 0.5rem
				width: auto
				&:before
					content: '('
				&:after
					content: ')'
				.animal-breed
					@include flexCenter
					text-align: left
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
					&.mix
						&:before
							content: ''
							margin-left: 0.1rem
		.animal-other-info
			@include flexCenter
			min-width: 100%
			.animal-other-info-item
				margin: 0.25rem auto
				&.description
					@include flexCenter
					padding: 1rem
					min-width: 100%
					text-indent: 0.25rem
		.breeds-colors-wrapper
			@include flexCenter
			min-width: 100%
			padding: 0.25rem
			.animal-breeds
				@include flexCenter
				flex: 1
				min-width: 100%
				@media (min-width: 28em)
					min-width: 40%
				.animal-breed
					@include flexCenter
					text-align: left
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
			.animal-colors
				@include flexCenter
				flex: 1
				min-width: 100%
				@media (min-width: 28em)
					min-width: 40%
				.animal-color
					@include flexCenter
					text-align: left
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
		.animal-options
			@include flexCenter
			padding: 0.25rem
			.animal-options-title
				width: auto
				margin-right: 0.2rem
			.animal-options-list
				@include flexCenter
				.animal-option
					@include flexCenter
					&:before
						content: ', '
						margin-right: 0.2rem
					&:first-child
						&:before
							content: ''
							margin-right: 0
		.animal-contact
			@include flexCenter
			min-width: 100%
			padding: 0.25rem
			.animal-contact-method
				margin: 0.25rem
		.animal-link
			padding: 0.25rem
</style>
