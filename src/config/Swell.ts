import swell from 'swell-js'

const swellStoreId = import.meta.env.VITE_SWELL_STORE_ID;
const swellPublicToken = import.meta.env.VITE_SWELL_PUBLIC_TOKEN;

if (!swellStoreId) {
  throw new Error(
    `Missing VITE_SWELL_STORE_ID variable in the .env.local file`
  );
}

if (!swellPublicToken) {
  throw new Error(
    "Missing VITE_SWELL_PUBLIC_TOKEN variable in the .env.local file"
  );
}

swell.init(swellStoreId, swellPublicToken);