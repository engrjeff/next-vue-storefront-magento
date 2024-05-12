'use client';

import { createSdkContext } from '@vue-storefront/next/client';
import { sdk } from './sdk.config';

export const [SdkProvider, useSdk] = createSdkContext(sdk);
