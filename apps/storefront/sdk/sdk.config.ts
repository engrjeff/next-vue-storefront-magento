import { Endpoints } from '@vue-storefront/magento-api';
import { buildModule, initSDK, middlewareModule } from '@vue-storefront/sdk';

const sdkConfig = {
  magento: buildModule(middlewareModule<Endpoints>, {
    apiUrl: 'http://localhost:8181/magento',
  }),
};

export const sdk = initSDK(sdkConfig);
