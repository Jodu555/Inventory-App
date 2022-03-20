<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
@import '~bootstrap/scss/_functions';
@import '~bootstrap/scss/_variables';
@import '~bootstrap/scss/mixins/_breakpoints';

.dark {
	$enable-gradients: true;

	$success: #5cdd8b;
	$danger: #dc3545;
	$warning: #f8a306;

	$theme-colors: (
		'primary': $primary,
		'secondary': $secondary,
		'success': $success,
		'danger': $danger,
		'info': $indigo,
		'dark': $dark,
		'light': #aaa,
	);

	/* redefine theme color variables */
	@each $color, $value in $theme-colors {
		--#{$variable-prefix}#{$color}: #{$value};
	}

	$theme-colors-rgb: map-loop($theme-colors, to-rgb, '$value');

	@each $color, $value in $theme-colors-rgb {
		--#{$variable-prefix}#{$color}-rgb: #{$value};
	}

	$body-color: #eeeeee;
	$body-bg: #0d1117;

	--#{$variable-prefix}body-color: #{$body-color};
	--#{$variable-prefix}body-bg: #{$body-bg};

	// @import 'bootstrap';
	@import '~bootstrap/scss/bootstrap';
}
@import '~bootstrap/scss/bootstrap';
</style>
