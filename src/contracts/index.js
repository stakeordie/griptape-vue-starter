import {
  useWalletStore as useWallet,
  useViewingKeyStore as useVks
} from '@stakeordie/griptape-vue.js';
import { createSnip20Contract } from '@stakeordie/griptape-vue.js';

const stkdDef = {
  state: {
    tokenInfo: undefined,
    balance: undefined
  },

  queries: {
    async getTokenInfo() {
      const msg = { token_info: {} };
      const result =
        await this.scrtClient.queryContract(this.contractAddress, msg);
      this.tokenInfo = result;
    },
  },

  messages: {

  }
}

const stkdAddr = 'secret1mtg8tuqsfvk9ma36tmtz5mc7pae73j0hsc6jla';
export const stkd = createSnip20Contract('stkd', stkdAddr, stkdDef);
