<template>
  <img src="@/assets/images/logo.svg" alt="logo">

  <viewing-key-manager
    contract-address="secret1mtg8tuqsfvk9ma36tmtz5mc7pae73j0hsc6jla">
  </viewing-key-manager>

  <h1>Welcome to griptape-vue.starter!</h1>

  <p>Your address is  {{ address }}</p>

  <p>Token info: {{ tokenInfo }}</p>
  <p>Balance: {{ balance }}</p>

  <p>
    To get started,
    <a href="https://docs.vue.griptapejs.com" target="_blank">
      read the docs!
    </a>
  </p>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useWalletStore as wallet } from '@stakeordie/griptape-vue.js'
import { stkd } from './contracts';

export default {
  data() {
    return {
      contractId: ''
    }
  },

  mounted() {
    this.getTokenInfo();
    this.getBalance();
  },

  methods: {
    ...mapActions(stkd, ['getTokenInfo', 'getBalance'])
  },

  computed: {
    ...mapState(wallet, ['address']),
    ...mapState(stkd, ['tokenInfo', 'balance']),

    name() {
      return this.tokenInfo?.token_info.name;
    }
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
