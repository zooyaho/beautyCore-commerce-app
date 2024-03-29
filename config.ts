export const CONFIG = {
  ENV: process.env.NODE_ENV,
  DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  AUTH_TOKEN_KEY: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY,

  KAKAO_REST_API_KEY: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  KAKAO_REDIRECT_URI: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,

  TOSSPAYMENT_CLIENT_KEY: process.env.NEXT_PUBLIC_TOSSPAYMENT_CLIENT_KEY,
  TOSSPAYMENT_SUCCESS_URL: process.env.NEXT_PUBLIC_TOSSPAYMENT_SUCCESS_URL,
  TOSSPAYMENT_FAIL_URL: process.env.NEXT_PUBLIC_TOSSPAYMENT_FAIL_URL,
} as const;
