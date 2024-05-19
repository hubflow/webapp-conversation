import React from 'react'
import './style.css'

type LogoProps = {
  className?: string
  type?: 'area' | 'app'
}

const Loading: React.FC<LogoProps> = ({ type = 'area', className }: LogoProps = { type: 'area' }) => {
  return (
    <div className={`flex flex-col w-full justify-center items-center gap-2 ${type === 'app' ? 'h-full' : ''}`}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} animate pulse`}>
        <path d="M1.51294 24.0212C1.94531 19.7453 1.51294 18.1192 1.51294 13.7412C1.51294 13.7412 2.05035 17.8523 11.7409 17.8523C22.5621 17.7382 22.3803 13.7436 22.3803 13.7436C22.3803 13.7436 22.5487 16.2962 19.1518 19.5175C15.7548 22.7389 12.5965 22.3124 9.37263 22.2423C4.2518 22.131 1.51294 24.0212 1.51294 24.0212Z" fill="#ECB22D" />
        <path d="M1.51172 11.4648C1.51172 8.68007 2.60625 5.04451 4.57538 3.07538C6.54451 1.10625 9.21523 -6.58163e-07 12 -4.5897e-07C14.7848 -2.59776e-07 17.4555 1.10625 19.4246 3.07538C21.3938 5.04451 22.5 8.66481 22.5 11.4496C22.5 14.2344 20.5818 17.3013 12 17.2685C3.4182 17.2358 1.51172 14.2496 1.51172 11.4648Z" fill="#010224" />
        <path d="M1.51172 11.4648C1.51172 8.68007 2.60625 5.04451 4.57538 3.07538C6.54451 1.10625 9.21523 -6.58163e-07 12 -4.5897e-07C14.7848 -2.59776e-07 17.4555 1.10625 19.4246 3.07538C21.3938 5.04451 22.5 8.66481 22.5 11.4496C22.5 14.2344 20.5818 17.3013 12 17.2685C3.4182 17.2358 1.51172 14.2496 1.51172 11.4648Z" fill="url(#paint0_linear_1712_48395)" />
        <defs>
          <linearGradient id="paint0_linear_1712_48395" x1="2.88791" y1="0.604751" x2="24.2019" y2="8.54178" gradientUnits="userSpaceOnUse">
            <stop stop-color="#20213E" />
            <stop offset="1" stop-color="#010224" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Loading
