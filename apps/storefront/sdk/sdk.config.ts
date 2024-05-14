import { Endpoints } from "@vue-storefront/magento-api";
import { CreateSdkOptions, createSdk } from "@vue-storefront/next";

const options: CreateSdkOptions = {
  middleware: {
    apiUrl: "http://localhost:8181",
  },
};

const { getSdk } = createSdk(
  options,
  ({ buildModule, middlewareUrl, middlewareModule, getRequestHeaders }) => ({
    magento: buildModule(middlewareModule<Endpoints>, {
      apiUrl: middlewareUrl + "/magento",
      errorHandler: ({ error }) => {
        throw error;
      },
      defaultRequestConfig: {
        headers: getRequestHeaders(),
      },
    }),
  })
);

export const sdk = getSdk();
