import { HTMLChakraProps, chakra, useColorModeValue } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>): React.ReactElement => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 381.25 91.08"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="290.17"
          y1="45.54"
          x2="381.25"
          y2="45.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#652ee3" />
          <stop offset=".55" stopColor="#4662e4" />
          <stop offset="1" stopColor="#48a2e5" />
        </linearGradient>
      </defs>
      <path
        fill={color}
        d="M11.95 74.55a40.21 40.21 0 0 1-11.9-4.86l6-13.13a38.4 38.4 0 0 0 10.2 4.4 42.81 42.81 0 0 0 11.8 1.7q11.6 0 11.6-5.75 0-2.69-3.16-3.87a47.31 47.31 0 0 0-9.73-2 94.61 94.61 0 0 1-12.78-2.69 19.92 19.92 0 0 1-8.77-5.42q-3.69-3.87-3.69-11a17.23 17.23 0 0 1 3.46-10.61 22.26 22.26 0 0 1 10.07-7.19 43.22 43.22 0 0 1 15.64-2.57 61.26 61.26 0 0 1 13.36 1.46 37.51 37.51 0 0 1 11 4l-6.09 13a36.44 36.44 0 0 0-18.17-4.68c-3.9 0-6.84.54-8.79 1.64s-2.93 2.5-2.93 4.22q0 2.93 3.17 4.1a56 56 0 0 0 10.08 2.22 107.24 107.24 0 0 1 12.56 2.81 19 19 0 0 1 8.56 5.33q3.61 3.87 3.61 10.78a16.65 16.65 0 0 1-3.51 10.43 22.49 22.49 0 0 1-10.24 7.06 45.66 45.66 0 0 1-16 2.52 61.21 61.21 0 0 1-15.35-1.9zM116.26 18.53q7.84 7 7.85 21v36h-17.06v-7.86q-5.16 8.79-19.22 8.79A29.81 29.81 0 0 1 75.23 74a18.79 18.79 0 0 1-8.18-6.77 17.78 17.78 0 0 1-2.81-9.85 16.44 16.44 0 0 1 6.62-13.83q6.63-5 20.45-5h14.54q0-6-3.64-9.2t-10.9-3.22a31.93 31.93 0 0 0-9.9 1.58 26 26 0 0 0-8.28 4.22l-6.56-12.78a39.52 39.52 0 0 1 12.36-5.62 55.29 55.29 0 0 1 14.82-2q14.66.03 22.51 7zm-15.59 43.48a11.89 11.89 0 0 0 5.16-6.39v-6.44H93.29q-11.24 0-11.24 7.38a6.58 6.58 0 0 0 2.76 5.57 12.43 12.43 0 0 0 7.56 2 15.89 15.89 0 0 0 8.3-2.12zM188.57 18.53q7.84 7 7.85 21v36h-17.11v-7.86q-5.16 8.79-19.22 8.79a29.81 29.81 0 0 1-12.6-2.46 18.79 18.79 0 0 1-8.15-6.79 17.78 17.78 0 0 1-2.81-9.85 16.44 16.44 0 0 1 6.62-13.83q6.63-5 20.45-5h14.54q0-6-3.64-9.2t-10.9-3.22a31.93 31.93 0 0 0-9.9 1.58 26 26 0 0 0-8.26 4.24l-6.56-12.78a39.52 39.52 0 0 1 12.36-5.62 55.31 55.31 0 0 1 14.83-2q14.64.03 22.5 7zm-15.59 43.48a11.89 11.89 0 0 0 5.16-6.39v-6.44H165.6q-11.25 0-11.25 7.38a6.58 6.58 0 0 0 2.75 5.57 12.43 12.43 0 0 0 7.56 2 15.89 15.89 0 0 0 8.32-2.12zM218.8 74.55a40.21 40.21 0 0 1-11.95-4.86l6.09-13.13a38.55 38.55 0 0 0 10.2 4.4 42.81 42.81 0 0 0 11.72 1.7q11.6 0 11.6-5.75 0-2.69-3.16-3.87a47.16 47.16 0 0 0-9.73-2 94.09 94.09 0 0 1-12.77-2.69 20 20 0 0 1-8.75-5.42q-3.69-3.87-3.69-11a17.23 17.23 0 0 1 3.46-10.61 22.26 22.26 0 0 1 10.08-7.21 43.22 43.22 0 0 1 15.64-2.57A61.26 61.26 0 0 1 250.85 13a37.69 37.69 0 0 1 11 4l-6.1 13a36.44 36.44 0 0 0-18.17-4.68c-3.9 0-6.83.54-8.79 1.64s-2.92 2.5-2.92 4.22q0 2.93 3.16 4.1a56 56 0 0 0 10.02 2.29 107.47 107.47 0 0 1 12.66 2.76 19 19 0 0 1 8.55 5.33q3.63 3.87 3.64 10.78a16.65 16.65 0 0 1-3.52 10.43 22.43 22.43 0 0 1-10.23 7.06 45.64 45.64 0 0 1-16 2.52 61.23 61.23 0 0 1-15.35-1.9zM312.78 62.24q-4.73-4.77-4.73-13.68V25.41h7.61v22.85q0 12.08 10.43 12.07t10.38-12.07V25.41h7.5v23.15q0 8.9-4.72 13.68t-13.2 4.78q-8.52 0-13.27-4.78zM354.62 25.41h7.62v41h-7.62z"
      />
      <rect
        x="292.17"
        y="2"
        width="87.08"
        height="87.08"
        rx="12"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="4"
        stroke="url(#linear-gradient)"
      />
    </chakra.svg>
  )
}
