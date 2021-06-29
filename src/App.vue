<template>
  <img src="@/assets/images/logo.svg" alt="logo">

  <h1>Welcome to griptape-vue.starter!</h1>

  <p>Your address is  {{ address }}</p>

  <p>
    To get started,
    <a href="https://docs.vue.griptapejs.com" target="_blank">
      read the docs!
    </a>
  </p>
</template>

<script>
import { mapState } from 'pinia'
import { useWalletStore as wallet} from '@stakeordie/griptape-vue.js'

export default {
  computed: {
    ...mapState(wallet, ['address'])
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  grid-row-gap: var(--g-gutter);
  grid-auto-rows: max-content;

  margin-top: calc(var(--g-gutter) * 10);
}
</style>
