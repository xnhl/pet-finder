<template>
	<div class="light">
		<nuxt />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: '',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'insert description'
				},
				{
					charset: 'utf-8'
				},
				{
					name: 'viewport', 
					content: 'width=device-width, initial-scale=1'
				}
			]
		}
	}
}
</script>

<style lang="sass">
@keyframes fadeIn
	0%
		opacity: 0
	100%
		opacity: 1
.hide
	display: none !important
@font-face
	font-family: 'Open Sans'
	src: url('../static/fonts/OpenSans-Regular.ttf') format('truetype')
	font-weight: normal
	font-style: normal
.light
	--theme-icon: invert(0)
	--theme-divider: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))
	--theme-white: rgba(255, 255, 255, 0.9)
	--theme-black: rgba(0, 0, 0, 0.9)
	--theme-blackLight: rgba(0, 0, 0, 0.75)
	--theme-whiteBG: #dfdfdf
	--theme-itemWhite: #e6e6e6
	--theme-boxShadow: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.05), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
	--theme-boxShadowHover: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.15), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.25) inset
	--theme-boxShadowLight: 0 0 0.5rem 0.125rem rgba(0, 0, 0, 0.025), 0 0 0.5rem 0.25rem rgba(255, 255, 255, 0.1) inset
html
	font-family: 'Open Sans', sans-serif
	font-size: 14px
	-ms-text-size-adjust: 100%
	-webkit-text-size-adjust: 100%
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	box-sizing: border-box
	transition: $transition
	&:root
		--theme-bg: #CCCCCC
		background: var(--theme-bg)
*,
*:before,
*:after
	box-sizing: border-box
	font-size: 14px
	padding: 0
	margin: 0
	line-height: 1.1rem
	transition: $transition
	color: var(--theme-black)
</style>
