import { Ref } from 'vue';

export const POOLS_ROOT_KEY = 'pools';

const QUERY_KEYS = {
  Pools: {
    All: [POOLS_ROOT_KEY, 'all'],
    Shares: (account: Ref<string>) => [POOLS_ROOT_KEY, 'shares', account]
  }
};

export default QUERY_KEYS;