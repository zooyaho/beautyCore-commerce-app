import { IconProps, Icon } from '@chakra-ui/react';
export const MoonIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </Icon>
);
export const SunIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={5} />
    <line x1={12} y1={1} x2={12} y2={3} />
    <line x1={12} y1={21} x2={12} y2={23} />
    <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
    <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
    <line x1={1} y1={12} x2={3} y2={12} />
    <line x1={21} y1={12} x2={23} y2={12} />
    <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
    <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
  </Icon>
);

export const UserProfileIcon = (props: IconProps) => (
  <Icon width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_0_1)">
      <path d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z" fill="#CBCED6" />
      <path d="M11.957 61.279C12.4572 58.1032 13.6676 55.0811 15.4979 52.4379C17.3281 49.7948 19.7312 47.5986 22.528 46.013C22.7008 45.9198 22.8967 45.8781 23.0925 45.8926C23.2883 45.9071 23.4758 45.9774 23.633 46.095C27.127 48.5361 31.3012 49.8146 35.563 49.749C39.8607 49.8155 44.0684 48.515 47.579 46.035C47.7026 45.9415 47.8466 45.8785 47.9992 45.8512C48.1518 45.8239 48.3086 45.8331 48.457 45.878C48.5598 45.9143 48.6583 45.9616 48.751 46.019C53.551 49.019 58.063 54.164 59.412 60.01C52.891 66.3926 44.1258 69.9614 35.001 69.949C26.5201 69.9621 18.326 66.8791 11.957 61.279H11.957Z" fill="white" />
      <path d="M19.646 30.634C19.6513 26.3873 21.3404 22.316 24.3429 19.3127C27.3454 16.3095 31.4163 14.6194 35.663 14.613C39.91 14.6194 43.9812 16.3093 46.9842 19.3125C49.9872 22.3156 51.677 26.387 51.683 30.634C51.6775 34.8807 49.9877 38.9518 46.9845 41.9543C43.9813 44.9568 39.9097 46.6455 35.663 46.65C31.4166 46.6455 27.3454 44.9567 24.3426 41.9541C21.3398 38.9515 19.6508 34.8804 19.646 30.634V30.634Z" fill="white" />
    </g>
    <path d="M60 70C65.5228 70 70 65.5228 70 60C70 54.4772 65.5228 50 60 50C54.4772 50 50 54.4772 50 60C50 65.5228 54.4772 70 60 70Z" fill="#FF710B" />
    <path d="M59.666 55.166V64.166" stroke="white" stroke-width="1.5" stroke-linecap="round" />
    <path d="M64.166 59.666H55.166" stroke="white" stroke-width="1.5" stroke-linecap="round" />
    {/* <defs>
      <clipPath id="clip0_0_1">
        <rect width="70" height="70" fill="white" />
      </clipPath>
    </defs> */}
  </Icon>
);
export const CircleCheckIcon = (props: IconProps) => (
  <Icon width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z" stroke="#CBCED6" stroke-width="1.5" />
    <path d="M6.3894 11.7523L10.7304 15.9652L16.9984 8.61621" stroke="#CBCED6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  </Icon>
);
export const CheckLineIcon = (props: IconProps) => (
  <Icon width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.84302 11.3302L10.532 17.2472L17.465 7.51025" stroke="#CBCED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </Icon>

);
