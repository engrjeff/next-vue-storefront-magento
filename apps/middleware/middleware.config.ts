import { Integrations } from '@vue-storefront/middleware';
import { config } from 'dotenv';

config();

const cookieNames = {
  currencyCookieName: 'vsf-currency',
  countryCookieName: 'vsf-country',
  localeCookieName: 'vsf-locale',
  cartCookieName: 'vsf-cart',
  customerCookieName: 'vsf-customer',
  storeCookieName: 'vsf-store',
  messageCookieName: 'vsf-message',
};

export const integrations: Integrations = {
  magento: {
    location: '@vue-storefront/magento-api/server',
    configuration: {
      api: process.env.VSF_MAGENTO_GRAPHQL_URL,
      cookies: {
        ...cookieNames,
      },
      cookiesDefaultOpts: {
        httpOnly: process.env.VSF_COOKIE_HTTP_ONLY || false,
        secure: process.env.VSF_COOKIE_SECURE || false,
        sameSite: process.env.VSF_COOKIE_SAME_SITE || 'lax',
        path: process.env.VSF_COOKIE_PATH || '/',
      },
      defaultStore: 'default',
      customApolloHttpLinkOptions: {
        useGETForQueries: true,
      },
      magentoBaseUrl: process.env.VSF_MAGENTO_BASE_URL,
      magentoApiEndpoint: process.env.VSF_MAGENTO_GRAPHQL_URL,
      imageProvider: process.env.NEXT_IMAGE_PROVIDER,
      recaptcha: {
        isEnabled: process.env.VSF_RECAPTCHA_ENABLED === 'true',
        sitekey: process.env.VSF_RECAPTCHA_SITE_KEY,
        secretkey: process.env.VSF_RECAPTCHA_SECRET_KEY,
        version: process.env.VSF_RECAPTCHA_VERSION,
        score: process.env.VSF_RECAPTCHA_MIN_SCORE,
      },
      customer: {
        customer_create_account_confirm: true,
      },
    },
    customQueries: {
      'single-category': ({ variables, query, metadata }) => ({
        variables,
        query: `
          query categories($filters: CategoryFilterInput) {
            categories(filters: $filters) {
              items {
                name
                meta_title
                meta_description
                meta_keywords
                url_path
                uid
                id
                default_sort_by
                breadcrumbs {
                  category_name
                  category_url_key
                  category_url_path
                }
                description
              }
            }
          }
        `,
      }),
      'plp-query': ({ variables }) => ({
        variables,
        query: `
          query products(
          $search: String
          $filter: ProductAttributeFilterInput
          $sort: ProductAttributeSortInput
          $pageSize: Int
          $currentPage: Int
        ) {
          products(
            search: $search
            filter: $filter
            pageSize: $pageSize
            currentPage: $currentPage
            sort: $sort
          ) {
            total_count
            page_info {
              page_size
              current_page
              total_pages
            }
            items {
              id
              uid
              name
              __typename
              sku
              supplier_sku
              canonical_url
              url_key
              stock_status
              size
              brand
              small_image {
                url
                label
              }
              ... on ConfigurableProduct {
                variants {
                  attributes {
                    code
                    label
                    value_index
                    uid
                  }
                  product {
                    uid
                    id
                    name
                    brand
                    sku
                    supplier_sku
                    color
                    size
                    stock_status
                    url_key
                    price_range {
                      minimum_price {
                        discount {
                          amount_off
                          percent_off
                        }
                        final_price {
                          currency
                          value
                        }
                        regular_price {
                          currency
                          value
                        }
                      }
                      maximum_price {
                        discount {
                          amount_off
                          percent_off
                        }
                        final_price {
                          currency
                          value
                        }
                        regular_price {
                          currency
                          value
                        }
                      }
                    }
                    __typename
                  }
                }
                products {
                  color
                  entity_id
                }
              }
            }
          }
        }
        `,
      }),
      'root-categories': ({ variables }) => ({
        variables,
        query: `
          query categories {
            categories {
              total_count
              items {
                uid
                level
                name
                path
                children_count
                children {
                  uid
                  url_key
                  url_path
                  canonical_url
                  level
                  name
                  path
                  children_count
                  include_in_menu
                  mega_menu
                }
              }
              page_info {
                current_page
                page_size
                total_pages
              }
            }
          }
        `,
      }),
      'cms-blocks-query': ({ variables }) => ({
        variables,
        query: `
          query cmsBlocks($identifiers: [String]){
            cmsBlocks(identifiers: $identifiers){
                items {
                    title,
                    identifier,
                    content,
                    block_id
                }
            }
          }
        `,
      }),
    },
  },
};
