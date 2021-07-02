<template>

  <main class="login">

    <section class="auth container">

      <img class="auth__logo" src="img/svg/olverica_logo.svg" alt="logo">
      <form class="auth__form">
        <div class="auth__input">Your email adress</div>
        <div class="auth__input">Your password code</div>
        <button class="auth__button" type="button">confirm</button>
        <a class="auth__link" href="#">Forgot your password?</a>
      </form>

      <h1 class="test-a">sdasdasdasdad</h1>

    </section>

  </main>

</template>

<script lang="ts">
import Vue from 'vue' 
import {Component} from 'nuxt-property-decorator'

@Component
export default class LoginPage extends Vue {

}
</script>