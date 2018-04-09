<template>
    <v-card>
        <h1>Sign In / Register</h1>
        <Register/>
        <Login />
    </v-card>
</template>

<script>
import Login from "@/components/Login"
import Register from "@/components/Register"
export default {
    components: {
        Login,
        Register
    }
}
</script>

<style>

</style>
