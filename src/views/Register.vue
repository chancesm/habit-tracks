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
const axios = require('axios')
// const crypto = require('crypto');
// function hashThis(string) {
//     let hash = crypto.createHash('sha256');
//     hash.update(string)
//     return hash.digest('hex');
// }
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
			//let hashpass = hashThis(this.pass);

			axios.post('/auth/register', {
				username: this.uname,
				password: this.pass,
				first: this.first,
				last: this.last,
				email: this.email,
				settings: {
					dark: false
				}
				
			})
			.then(() => {
				this.$router.push('/login')
			})
			.catch(err => {
				this.$router.push('/register')
			})
		}
	}		
}
</script>

<style>

</style>
