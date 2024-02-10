import React from 'react';
import "./style.css"

type LogoProps = {
  className?: string;
  type?: 'area' | 'app'
};



const Loading: React.FC<LogoProps> = ({ type = 'area', className }: LogoProps = { type: 'area' },) => {
  return (
    <div className={`flex w-full justify-center items-center ${type === 'app' ? 'h-full' : ''}`}>
      <svg className={`${className} animate-pulse`} width="19" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17" fill="none">
        <path d="M13.1237 4.29838L4.57116 13.1548C2.12529 10.7929 2.05725 6.89547 4.41921 4.44959C6.78117 2.00371 10.6778 1.93642 13.1237 4.29838Z" fill="#ECB22D" />
        <path d="M5.87695 12.7017L14.4295 3.84524C16.8754 6.20719 16.9434 10.1046 14.5815 12.5504C12.2195 14.9949 8.32209 15.0629 5.87695 12.7017Z" fill="#101A3C" />
      </svg>
    </div>
  );
};

export default Loading;



