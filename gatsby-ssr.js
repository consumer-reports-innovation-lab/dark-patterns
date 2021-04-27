import React from 'react'
// import App from "./App"


// export const wrapRootElement = () => {
//   if (process.env.NODE_ENV !== `production`) {
//     return null
//   }
//   return App
// }

export const onRenderBody = ({ setPostBodyComponents }) => {

  setPostBodyComponents([
    <script
      key="iframeResize"
      id="iframeResize"
      src="/js/iframeResize.js"
      defer
    />,
    // <script
    //   key="recaptcha"
    //   id="recaptcha"
    //   src="https://www.google.com/recaptcha/api.js"
    //   defer
    // />,

  ])
}