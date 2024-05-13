import { sdk } from '@/sdk/sdk.config';

export async function getStoreConfig() {
  try {
    const result = await sdk.magento.storeConfig();
    return result.data.storeConfig;
  } catch (error) {
    return null;
  }
}
