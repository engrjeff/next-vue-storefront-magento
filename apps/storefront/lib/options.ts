import { envVars } from "./env-vars";

export const countryOptions = [
  {
    currency: "$",
    image: `${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-au.png`,
    path: envVars.SHOWPO_URL,
    label: "AUD (Australia)",
    countryName: "Australia",
    literalCurrency: "AUD",
    store: "ShowpoAU",
  },
  {
    currency: "$",
    image: `${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-nz.png`,
    path: `${envVars.SHOWPO_URL}/nz`,
    label: "NZD (New Zealand)",
    countryName: "New Zealand",
    literalCurrency: "NZD",
    store: "ShowpoNZ",
  },
  {
    currency: "$",
    image: `${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-us.png`,
    path: `${envVars.SHOWPO_URL}/us`,
    label: "USD (America)",
    countryName: "America",
    literalCurrency: "USD",
    store: "ShowpoUS",
  },
  {
    currency: "€",
    image: `${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-eu.png`,
    path: `${envVars.SHOWPO_URL}/eu`,
    label: "EUR (Europe)",
    countryName: "Europe",
    literalCurrency: "EU",
    store: "ShowpoEU",
  },
  {
    currency: "£",
    image: `${envVars.SHOWPO_MEDIA_URL}/media/wysiwyg/flags/flag-uk.png`,
    path: `${envVars.SHOWPO_URL}/uk`,
    label: "GBP (United Kingdom)",
    countryName: "United Kingdom",
    literalCurrency: "GBP",
    store: "ShowpoUK",
  },
];
