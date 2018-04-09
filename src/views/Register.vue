<template>
  <v-container fluid>
	<v-layout align-center justify-center>
	  <v-flex xs12 sm8 md4>
		<v-card class="elevation-8">
		  <v-toolbar class="elevation-2">
			<v-toolbar-title>Sign Up Here!</v-toolbar-title>
		  </v-toolbar>
		  <v-card-text>
			<v-form>
			  <v-text-field required v-model='first' prepend-icon="edit" name="first" label="First Name" type="text"></v-text-field>
			  <v-text-field required v-model='last' prepend-icon="edit" name="last" label="Last Name" type="text"></v-text-field>
			  <v-text-field required v-model='email' prepend-icon="email" name="email" label="Email" type="text"></v-text-field>
			  <v-text-field required v-model='uname' prepend-icon="person" name="username" label="Username" type="text"></v-text-field>
			  <v-text-field required v-model='pass' prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
			  <v-text-field required v-model='conf' prepend-icon="lock" name="passconf" label="Re-Type Password" type="password"></v-text-field>
			  <v-btn type="submit" color="primary" @click.prevent="signUp">Sign Up</v-btn>
			</v-form>
		  </v-card-text>          
		</v-card>
	  </v-flex>
	</v-layout>
  </v-container>
</template>

<script>
export default {
	data () {
		return {
			uname: "",
			first: "",
			last: "",
			email: "",
			pass: "",
			conf: ""
		}
	},
	methods : {
		signUp() {
			console.log(`Sign Up: ${this.uname} -- ${this.pass}`)
		}
	}
}
</script>

<style>

</style>
