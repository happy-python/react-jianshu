import { createGlobalStyle } from 'styled-components';

export const IconFontStyle = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1558613429495'); /* IE9 */
    src: url('./iconfont.eot?t=1558613429495#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPIAAsAAAAAB8QAAAN5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDCIJvATYCJAMQCwoABCAFhG0HQBvZBsgOJZHAwABgoABgPPw31v6+mdllME1iUv10EqebREqHkimFkrV+LWH///esm6TdAZSVBnbShdL0peBJ3wD8WpBfFL7U/7kcNxYeWOvbWS63RtEaOjbV8zCgXhxQQGtMDLiAEuSGsQta4mwCHcZNQZxmF1aCtcJsFIgntZID64xVaUgPVWhW9CwQryBVUx95CcBL8P34D+FhDZJGBrPl2U2WAlJ/eb0dS7VaWs3y7NA5nRusHxmrQCHuKr0XqCi6itKh/kZiH6iqxC+vN9Fvx1oskD6KWK2/PEKSiSaYqV1gFwn5wigHJfgVjZL4PTZFhg9Sv6Idz8AbUoyeJynyiL21tYedh9S6gT16l7hzh711q/L2bWbgbgqzYGBRm7yA3L0rw6pO4GTL2lfaau2mz1gYaLvcexp30G4AoCNsj9n2XyHaZLK24KWJzP7N0LrFbuAkQTRsvdB/bgKe7z5t/hYvfpFXzbZ9bXtrK2U1jCyRTdk2cL017pr006fCifpkavjw4WGXo6iNGk7GzawKvfDpI+N00OnXmiZy8yaymWzavLnJRzZtJt9x0yY4JuRcn5B5HTla5Bl3NMklDJkuVyfflfxJNuPTsSGENC3YOJFVO8y2K0iNfzVHhi/6ePzxHft9bCAkzZQzQlJ11uBghDvyKWZe+aC0CAUvlhSmRIx7Vlb2LDp6eBhxj907PH5UsbUCTACtV3kd5Q/QsuRjFLT+WhopC9Xy72r5cel9MNcp8be13bUHPux3HgiIbhoJmOEHUJ2pP8WXSXJA0RjTVopCO3gHMULL5s02SOjQgf+TZMCTKfzDIHGHyikISZsxyKpZSVGsQkOnXWiqDqDDipz+nQaJKFFsgGVdAEKfXZD0eIesz2VJUTyGhhGfoakvKOhwHm4jdpoPtW2GiDiMFLS8jlbzRoNgO7BtmF6OlFU6TkwzgZZFolkdoMOCQ/OJHGRA4hRtzNXKcIwFWhCNejobzId0OiNtEo0axONgFcam+JAQoepKwbxRD7ZOiBAOhijQ5OrQ1HhGBoKXH7MtfL4colRFhyM2ZFRNWYjITF08LUyw0A6SHNHQKeNW9jGrphQOwwQ0gchIj5YN3IjOihrRTNXVNBAeFkw1IGwSLwRlE7qKwctb9G+4ADqYm5YgCYqQEFKo91PNiBN5FZnGjTAhA6/WAQAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1558613429495') format('woff'),
    url('./iconfont.ttf?t=1558613429495') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1558613429495#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-i-search:before {
    content: "\e617";
  }

  .icon-Aa:before {
    content: "\e636";
  }

  .icon-pencil:before {
    content: "\e725";
  }
`;