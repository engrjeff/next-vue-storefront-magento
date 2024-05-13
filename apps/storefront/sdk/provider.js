"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
const sdk_1 = require("./sdk");
const react_query_1 = require("@tanstack/react-query");
const queryClient = new react_query_1.QueryClient();
function Providers({ children }) {
    return (<sdk_1.SdkProvider>
      <react_query_1.QueryClientProvider client={queryClient}>{children}</react_query_1.QueryClientProvider>
    </sdk_1.SdkProvider>);
}
exports.Providers = Providers;
