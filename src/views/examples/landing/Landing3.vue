<template>
  <header class="d-header">
    <div
      class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6"
    >
      <button
        aria-label="mobileMenu"
        class="flex items-center transition-colors duration-200 justify-center lg:hidden d-icon w-12 h-12 lg:hidden text-gray-300 hover:text-cloud-lighter"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      <div class="flex items-center flex-1 justify-center lg:justify-start">
        <a href="/" aria-label="homeLink" class="nuxt-link-active"
          ><div
            settings="[object Object]"
            class="inline-flex items-center space-x-3 h-8 md:h-9"
          >
            <svg
              viewBox="0 0 221 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8"
            >
              <g clip-path="url(#a)">
                <path
                  fill="currentColor"
                  d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z"
                  fill="#80EEC0"
                ></path>
                <path
                  d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z"
                  fill="#00DC82"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h221v65H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <span
              class="inline-flex items-center mt-1.2 px-2 py-0.5 rounded text-xs font-medium font-mono bg-cloud-surface dark:bg-sky-dark dark:text-white"
              >RC</span
            >
          </div>
        </a>
      </div>
      <nav class="items-center hidden h-full lg:flex gap-4">
        <a
          href="/getting-started/quick-start"
          aria-current="page"
          class="font-medium px-2 py-1 nuxt-link-exact-active nuxt-link-active"
        >
          Getting Started </a
        ><a href="/guide/concepts/introduction" class="font-medium px-2 py-1">
          Guide </a
        ><a
          href="/api/composables/use-async-data"
          class="font-medium px-2 py-1"
        >
          API </a
        ><a
          href="/examples/essentials/hello-world"
          class="font-medium px-2 py-1"
        >
          Examples </a
        ><a href="/community/getting-help" class="font-medium px-2 py-1">
          Community
        </a>
      </nav>
      <div class="flex items-center justify-end gap-1 lg:flex-1">
        <a
          href="https://github.com/nuxt/framework"
          rel="noopener nofollow noreferrer"
          target="_blank"
          aria-label="gitHubLink"
          class="d-icon p-3"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <a
          href="https://twitter.com/nuxt_js"
          rel="noopener nofollow noreferrer"
          target="_blank"
          aria-label="twitterLink"
          class="d-icon p-3 hidden lg:block"
          ><svg fill="none" viewBox="0 0 24 24" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.165-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
        <button
          slot="placeholder"
          aria-label="Color Mode"
          class="d-icon hidden lg:block p-3"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C12.3315 2 12.6495 2.1317 12.8839 2.36612C13.1183 2.60054 13.25 2.91848 13.25 3.25V4.5C13.25 4.83152 13.1183 5.14946 12.8839 5.38388C12.6495 5.6183 12.3315 5.75 12 5.75C11.6685 5.75 11.3505 5.6183 11.1161 5.38388C10.8817 5.14946 10.75 4.83152 10.75 4.5V3.25C10.75 2.91848 10.8817 2.60054 11.1161 2.36612C11.3505 2.1317 11.6685 2 12 2V2ZM17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12V12ZM16.42 18.1875L17.3038 19.0712C17.5395 19.2989 17.8553 19.4249 18.183 19.4221C18.5107 19.4192 18.8243 19.2878 19.056 19.056C19.2878 18.8243 19.4192 18.5107 19.4221 18.183C19.4249 17.8553 19.2989 17.5395 19.0712 17.3038L18.1875 16.42C17.9517 16.1923 17.636 16.0663 17.3082 16.0692C16.9805 16.072 16.667 16.2035 16.4352 16.4352C16.2035 16.667 16.072 16.9805 16.0692 17.3082C16.0663 17.636 16.1923 17.9517 16.42 18.1875V18.1875ZM19.07 4.92875C19.3043 5.16316 19.436 5.48105 19.436 5.8125C19.436 6.14396 19.3043 6.46184 19.07 6.69625L18.1875 7.58C18.0722 7.69939 17.9343 7.79462 17.7818 7.86013C17.6293 7.92564 17.4652 7.96012 17.2993 7.96156C17.1333 7.96301 16.9687 7.93138 16.8151 7.86853C16.6614 7.80568 16.5219 7.71286 16.4045 7.59549C16.2871 7.47813 16.1943 7.33856 16.1315 7.18494C16.0686 7.03132 16.037 6.86672 16.0384 6.70075C16.0399 6.53477 16.0744 6.37075 16.1399 6.21824C16.2054 6.06574 16.3006 5.92781 16.42 5.8125L17.3038 4.92875C17.5382 4.69441 17.856 4.56277 18.1875 4.56277C18.519 4.56277 18.8368 4.69441 19.0712 4.92875H19.07ZM20.75 13.25C21.0815 13.25 21.3995 13.1183 21.6339 12.8839C21.8683 12.6495 22 12.3315 22 12C22 11.6685 21.8683 11.3505 21.6339 11.1161C21.3995 10.8817 21.0815 10.75 20.75 10.75H19.5C19.1685 10.75 18.8505 10.8817 18.6161 11.1161C18.3817 11.3505 18.25 11.6685 18.25 12C18.25 12.3315 18.3817 12.6495 18.6161 12.8839C18.8505 13.1183 19.1685 13.25 19.5 13.25H20.75ZM12 18.25C12.3315 18.25 12.6495 18.3817 12.8839 18.6161C13.1183 18.8505 13.25 19.1685 13.25 19.5V20.75C13.25 21.0815 13.1183 21.3995 12.8839 21.6339C12.6495 21.8683 12.3315 22 12 22C11.6685 22 11.3505 21.8683 11.1161 21.6339C10.8817 21.3995 10.75 21.0815 10.75 20.75V19.5C10.75 19.1685 10.8817 18.8505 11.1161 18.6161C11.3505 18.3817 11.6685 18.25 12 18.25V18.25ZM5.8125 7.58C5.92856 7.69614 6.06635 7.78828 6.21802 7.85116C6.36968 7.91405 6.53225 7.94645 6.69643 7.9465C6.86062 7.94656 7.02321 7.91428 7.17492 7.8515C7.32663 7.78872 7.46449 7.69668 7.58062 7.58062C7.69676 7.46457 7.7889 7.32678 7.85179 7.17511C7.91467 7.02344 7.94707 6.86088 7.94713 6.69669C7.94719 6.53251 7.91491 6.36992 7.85213 6.21821C7.78935 6.0665 7.69731 5.92864 7.58125 5.8125L6.69625 4.92875C6.4605 4.70105 6.14474 4.57506 5.817 4.57791C5.48925 4.58076 5.17574 4.71222 4.94398 4.94398C4.71222 5.17574 4.58076 5.48925 4.57791 5.817C4.57506 6.14474 4.70105 6.4605 4.92875 6.69625L5.8125 7.58V7.58ZM7.58 18.1875L6.69625 19.0712C6.4605 19.2989 6.14474 19.4249 5.817 19.4221C5.48925 19.4192 5.17574 19.2878 4.94398 19.056C4.71222 18.8243 4.58076 18.5107 4.57791 18.183C4.57506 17.8553 4.70105 17.5395 4.92875 17.3038L5.8125 16.42C6.04825 16.1923 6.36401 16.0663 6.69175 16.0692C7.0195 16.072 7.33301 16.2035 7.56477 16.4352C7.79653 16.667 7.92799 16.9805 7.93084 17.3082C7.93369 17.636 7.8077 17.9517 7.58 18.1875V18.1875ZM4.5 13.25C4.83152 13.25 5.14946 13.1183 5.38388 12.8839C5.6183 12.6495 5.75 12.3315 5.75 12C5.75 11.6685 5.6183 11.3505 5.38388 11.1161C5.14946 10.8817 4.83152 10.75 4.5 10.75H3.25C2.91848 10.75 2.60054 10.8817 2.36612 11.1161C2.1317 11.3505 2 11.6685 2 12C2 12.3315 2.1317 12.6495 2.36612 12.8839C2.60054 13.1183 2.91848 13.25 3.25 13.25H4.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <div id="docsearch">
          <button
            type="button"
            class="DocSearch DocSearch-Button"
            aria-label="Search"
          >
            <span class="DocSearch-Button-Container"
              ><svg
                width="20"
                height="20"
                class="DocSearch-Search-Icon"
                viewBox="0 0 20 20"
              >
                <path
                  d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                  stroke="currentColor"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
              ><span class="DocSearch-Button-Placeholder">Search</span></span
            ><span class="DocSearch-Button-Keys"
              ><span class="DocSearch-Button-Key"
                ><svg width="15" height="15" class="DocSearch-Control-Key-Icon">
                  <path
                    d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                    stroke-width="1.2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="square"
                  ></path></svg></span
              ><span class="DocSearch-Button-Key">K</span></span
            >
          </button>
        </div>
      </div>
    </div>
  </header>
  <div class="lg:flex d-container">
    <aside class="fixed z-50 lg:z-0 lg:static">
      <div class="h-full overflow-auto pointer-events-none lg:overflow-visible">
        <!---->
        <div
          class="hidden lg:block fixed top-0 left-0 overflow-auto pointer-events-auto min-h-fill-available h-screen sticky top-header w-60"
        >
          <div class="w-auto h-full overflow-auto">
            <nav
              class="flex flex-col justify-start max-w-sm overflow-y-auto text-sm font-medium lg:h-[reset] h-(full-header) d-scrollbar py-4 px-4 sm:px-6 lg:pr-0 lg:pt-8"
            >
              <!---->
              <ul>
                <li class="active">
                  <!---->
                  <ul class="mb-2 ml-2">
                    <li>
                      <a
                        href="/getting-started/quick-start"
                        aria-current="page"
                        class="block w-full nuxt-link-exact-active nuxt-link-active d-active-aside-navigation-item-text"
                        ><span
                          class="relative inline-flex items-center justify-between px-2 py-1 rounded-md d-active-aside-navigation-item-bg"
                          ><!---->
                          <span> Quick Start </span>
                        </span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="">
                  <!---->
                  <ul class="mb-2 ml-2">
                    <li>
                      <a
                        href="/getting-started/migration"
                        class="block w-full d-secondary-text hover:d-secondary-text-hover"
                        ><span
                          class="relative inline-flex items-center justify-between px-2 py-1 rounded-md"
                          ><!---->
                          <span> Migration Guide </span>
                        </span></a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
              <!---->
            </nav>
          </div>
        </div>
        <div
          class="lg:hidden fixed top-0 left-0 w-auto h-full overflow-auto pointer-events-auto min-h-fill-available border-r dark:border-sky-darker !w-base"
          style="display: none"
        >
          <div class="w-auto h-full overflow-auto d-bg-header">
            <div
              class="flex items-center justify-between w-full px-0.5 sm:px-2 h-header d-aside-header-bg"
            >
              <button
                aria-label="backButton"
                class="transition-colors duration-200 d-secondary-text hover:d-secondary-text-hover focus:outline-none"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="p-3 w-12 h-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div class="flex items-center h-header space-x-1">
                <a
                  href="https://github.com/nuxt/framework"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                  aria-label="gitHubLink"
                  class="d-icon p-3"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.02751 0.333496C3.34571 0.333496 0.333332 3.40836 0.333332 7.16653C0.333332 10.1845 2.23002 12.7468 4.90769 13.6579C5.2424 13.7149 5.35397 13.4871 5.35397 13.3163C5.35397 13.1454 5.35397 12.7468 5.35397 12.1774C3.51307 12.576 3.12257 11.2664 3.12257 11.2664C2.84365 10.4692 2.39737 10.2414 2.39737 10.2414C1.72795 9.8428 2.39737 9.8428 2.39737 9.8428C3.06679 9.89974 3.4015 10.5261 3.4015 10.5261C4.01513 11.5511 4.96347 11.2664 5.35397 11.0955C5.40975 10.64 5.57711 10.3553 5.80024 10.1845C4.29405 10.0136 2.73208 9.44421 2.73208 6.82488C2.73208 6.08463 3.011 5.45827 3.4015 5.00274C3.4015 4.77497 3.12257 4.09166 3.51307 3.18059C3.51307 3.18059 4.07091 3.00977 5.35397 3.8639C5.91181 3.69307 6.46966 3.63613 7.02751 3.63613C7.58536 3.63613 8.14321 3.69307 8.70105 3.8639C9.98411 2.95283 10.542 3.18059 10.542 3.18059C10.9324 4.14861 10.6535 4.83191 10.5977 5.00274C11.044 5.45827 11.2672 6.08463 11.2672 6.82488C11.2672 9.44421 9.70518 10.0136 8.19899 10.1845C8.42213 10.4122 8.64527 10.8108 8.64527 11.4372C8.64527 12.3482 8.64527 13.0885 8.64527 13.3163C8.64527 13.4871 8.75684 13.7149 9.09155 13.6579C11.7692 12.7468 13.6659 10.1845 13.6659 7.16653C13.7217 3.40836 10.7093 0.333496 7.02751 0.333496Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/nuxt_js"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                  aria-label="twitterLink"
                  class="d-icon p-3"
                  ><svg fill="none" viewBox="0 0 24 24" class="w-6 h-6">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.165-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <button
                  slot="placeholder"
                  aria-label="Color Mode"
                  class="d-icon p-3"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C12.3315 2 12.6495 2.1317 12.8839 2.36612C13.1183 2.60054 13.25 2.91848 13.25 3.25V4.5C13.25 4.83152 13.1183 5.14946 12.8839 5.38388C12.6495 5.6183 12.3315 5.75 12 5.75C11.6685 5.75 11.3505 5.6183 11.1161 5.38388C10.8817 5.14946 10.75 4.83152 10.75 4.5V3.25C10.75 2.91848 10.8817 2.60054 11.1161 2.36612C11.3505 2.1317 11.6685 2 12 2V2ZM17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12V12ZM16.42 18.1875L17.3038 19.0712C17.5395 19.2989 17.8553 19.4249 18.183 19.4221C18.5107 19.4192 18.8243 19.2878 19.056 19.056C19.2878 18.8243 19.4192 18.5107 19.4221 18.183C19.4249 17.8553 19.2989 17.5395 19.0712 17.3038L18.1875 16.42C17.9517 16.1923 17.636 16.0663 17.3082 16.0692C16.9805 16.072 16.667 16.2035 16.4352 16.4352C16.2035 16.667 16.072 16.9805 16.0692 17.3082C16.0663 17.636 16.1923 17.9517 16.42 18.1875V18.1875ZM19.07 4.92875C19.3043 5.16316 19.436 5.48105 19.436 5.8125C19.436 6.14396 19.3043 6.46184 19.07 6.69625L18.1875 7.58C18.0722 7.69939 17.9343 7.79462 17.7818 7.86013C17.6293 7.92564 17.4652 7.96012 17.2993 7.96156C17.1333 7.96301 16.9687 7.93138 16.8151 7.86853C16.6614 7.80568 16.5219 7.71286 16.4045 7.59549C16.2871 7.47813 16.1943 7.33856 16.1315 7.18494C16.0686 7.03132 16.037 6.86672 16.0384 6.70075C16.0399 6.53477 16.0744 6.37075 16.1399 6.21824C16.2054 6.06574 16.3006 5.92781 16.42 5.8125L17.3038 4.92875C17.5382 4.69441 17.856 4.56277 18.1875 4.56277C18.519 4.56277 18.8368 4.69441 19.0712 4.92875H19.07ZM20.75 13.25C21.0815 13.25 21.3995 13.1183 21.6339 12.8839C21.8683 12.6495 22 12.3315 22 12C22 11.6685 21.8683 11.3505 21.6339 11.1161C21.3995 10.8817 21.0815 10.75 20.75 10.75H19.5C19.1685 10.75 18.8505 10.8817 18.6161 11.1161C18.3817 11.3505 18.25 11.6685 18.25 12C18.25 12.3315 18.3817 12.6495 18.6161 12.8839C18.8505 13.1183 19.1685 13.25 19.5 13.25H20.75ZM12 18.25C12.3315 18.25 12.6495 18.3817 12.8839 18.6161C13.1183 18.8505 13.25 19.1685 13.25 19.5V20.75C13.25 21.0815 13.1183 21.3995 12.8839 21.6339C12.6495 21.8683 12.3315 22 12 22C11.6685 22 11.3505 21.8683 11.1161 21.6339C10.8817 21.3995 10.75 21.0815 10.75 20.75V19.5C10.75 19.1685 10.8817 18.8505 11.1161 18.6161C11.3505 18.3817 11.6685 18.25 12 18.25V18.25ZM5.8125 7.58C5.92856 7.69614 6.06635 7.78828 6.21802 7.85116C6.36968 7.91405 6.53225 7.94645 6.69643 7.9465C6.86062 7.94656 7.02321 7.91428 7.17492 7.8515C7.32663 7.78872 7.46449 7.69668 7.58062 7.58062C7.69676 7.46457 7.7889 7.32678 7.85179 7.17511C7.91467 7.02344 7.94707 6.86088 7.94713 6.69669C7.94719 6.53251 7.91491 6.36992 7.85213 6.21821C7.78935 6.0665 7.69731 5.92864 7.58125 5.8125L6.69625 4.92875C6.4605 4.70105 6.14474 4.57506 5.817 4.57791C5.48925 4.58076 5.17574 4.71222 4.94398 4.94398C4.71222 5.17574 4.58076 5.48925 4.57791 5.817C4.57506 6.14474 4.70105 6.4605 4.92875 6.69625L5.8125 7.58V7.58ZM7.58 18.1875L6.69625 19.0712C6.4605 19.2989 6.14474 19.4249 5.817 19.4221C5.48925 19.4192 5.17574 19.2878 4.94398 19.056C4.71222 18.8243 4.58076 18.5107 4.57791 18.183C4.57506 17.8553 4.70105 17.5395 4.92875 17.3038L5.8125 16.42C6.04825 16.1923 6.36401 16.0663 6.69175 16.0692C7.0195 16.072 7.33301 16.2035 7.56477 16.4352C7.79653 16.667 7.92799 16.9805 7.93084 17.3082C7.93369 17.636 7.8077 17.9517 7.58 18.1875V18.1875ZM4.5 13.25C4.83152 13.25 5.14946 13.1183 5.38388 12.8839C5.6183 12.6495 5.75 12.3315 5.75 12C5.75 11.6685 5.6183 11.3505 5.38388 11.1161C5.14946 10.8817 4.83152 10.75 4.5 10.75H3.25C2.91848 10.75 2.60054 10.8817 2.36612 11.1161C2.1317 11.3505 2 11.6685 2 12C2 12.3315 2.1317 12.6495 2.36612 12.8839C2.60054 13.1183 2.91848 13.25 3.25 13.25H4.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav
              class="flex flex-col justify-start max-w-sm overflow-y-auto text-sm font-medium lg:h-[reset] h-(full-header) d-scrollbar py-4 px-4 sm:px-6 lg:pr-0 lg:pt-8"
            >
              <!---->
              <ul>
                <li class="active">
                  <!---->
                  <ul class="mb-2 ml-2">
                    <li>
                      <a
                        href="/getting-started/quick-start"
                        aria-current="page"
                        class="block w-full nuxt-link-exact-active nuxt-link-active d-active-aside-navigation-item-text"
                        ><span
                          class="relative inline-flex items-center justify-between px-2 py-1 rounded-md d-active-aside-navigation-item-bg"
                          ><!---->
                          <span> Quick Start </span>
                        </span></a
                      >
                    </li>
                  </ul>
                </li>
                <li class="">
                  <!---->
                  <ul class="mb-2 ml-2">
                    <li>
                      <a
                        href="/getting-started/migration"
                        class="block w-full d-secondary-text hover:d-secondary-text-hover"
                        ><span
                          class="relative inline-flex items-center justify-between px-2 py-1 rounded-md"
                          ><!---->
                          <span> Migration Guide </span>
                        </span></a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
              <!---->
            </nav>
          </div>
        </div>
      </div>
    </aside>
    <div
      class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
    >
      <div
        data-fetch-key="1"
        class="flex flex-col w-full pt-0 xl:flex-row xl:pt-10"
      >
        <article
          class="flex-auto order-last min-w-0 mt-0 xl:order-first xl:mt-0"
        >
          <div>
            <div
              class="sticky z-10 left-0 flex-none w-full text-sm xl:hidden d-blur-header d-page-mobile-toc-bg lg:left-60 px-4 sm:px-6 top-header"
            >
              <button
                class="relative z-10 flex items-center w-full py-3 text-sm font-semibold text-gray-900 focus:outline-none xl:hidden dark:text-gray-100"
              >
                <span class="mr-2">Table of Contents</span>
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 d-secondary-text transition-transform duration-100 transform rotate-0"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <div
                class="flex flex-col justify-between overflow-y-auto sticky max-h-(screen-header) -mt-10 pt-10 pb-4 top-header hidden xl:flex"
              >
                <!---->
                <h5 class="items-center hidden mb-2 xl:flex">
                  <span
                    class="text-base font-semibold text-gray-900 dark:text-gray-100"
                    >Table of Contents</span
                  >
                </h5>
                <div class="overflow-y-auto overflow-hidden max-h-[50vh]">
                  <ul class="font-medium ml-4">
                    <li>
                      <a
                        href="#play-online"
                        class="block py-1 transition-colors duration-100 transform d-secondary-text-active hover:d-secondary-text-hover"
                      >
                        Play online
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a
                        href="#prerequisites"
                        class="block py-1 transition-colors duration-100 transform d-secondary-text-active hover:d-secondary-text-hover"
                      >
                        Prerequisites
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a
                        href="#new-project"
                        class="block py-1 transition-colors duration-100 transform d-secondary-text hover:d-secondary-text-hover"
                      >
                        New project
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a
                        href="#development-server"
                        class="block py-1 transition-colors duration-100 transform d-secondary-text hover:d-secondary-text-hover"
                      >
                        Development server
                      </a>
                      <!---->
                    </li>
                    <li>
                      <a
                        href="#next-steps"
                        class="block py-1 transition-colors duration-100 transform d-secondary-text hover:d-secondary-text-hover"
                      >
                        Next steps
                      </a>
                      <!---->
                    </li>
                  </ul>
                </div>
              </div>
              <hr class="border-dashed d-border" />
            </div>
            <div class="px-4 sm:px-6 mt-4 xl:mt-0">
              <div class="docus-content">
                <h1 id="quick-start" class="d-heading-title" data-v-46eaf374="">
                  Quick Start
                </h1>
                <p class="d-heading-description" data-v-bcba96ca="">
                  Starting fresh? Getting started with Nuxt 3 is
                  straightforward!
                </p>
                <h2 id="play-online" data-v-3110d1ce="">
                  <a
                    href="#play-online"
                    rel="noopener nofollow noreferrer"
                    data-v-53a84f30=""
                    data-v-3110d1ce=""
                    >Play online
                  </a>
                </h2>
                <p data-v-bcba96ca="">
                  You can start playing with Nuxt 3 in your browser using our
                  online sandboxes:
                </p>
                <a
                  href="https://stackblitz.com/github/nuxt/starter/tree/v3-stackblitz"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                  class="button-link font-medium"
                  data-v-e8426e6a=""
                  >Play on StackBlitz
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2"
                    data-v-e8426e6a=""
                  >
                    <path
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path></svg
                ></a>
                <a
                  href="https://codesandbox.io/s/github/nuxt/starter/tree/v3-codesandbox"
                  rel="noopener nofollow noreferrer"
                  target="_blank"
                  class="button-link font-medium"
                  data-v-e8426e6a=""
                  >Play on CodeSandbox
                  <svg
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 ml-2"
                    data-v-e8426e6a=""
                  >
                    <path
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path></svg
                ></a>
                <h2 id="prerequisites" data-v-3110d1ce="">
                  <a
                    href="#prerequisites"
                    rel="noopener nofollow noreferrer"
                    data-v-53a84f30=""
                    data-v-3110d1ce=""
                    >Prerequisites
                  </a>
                </h2>
                <p data-v-bcba96ca="">
                  Before getting started, please make sure you have installed
                  the recommended setup.
                </p>
                <ul data-v-ed22b86e="">
                  <li data-v-fd7d8a38="" data-v-ed22b86e="">
                    <strong data-v-7c7b61be="" data-v-fd7d8a38=""
                      >Node.js</strong
                    ><sup data-v-fd7d8a38="">*</sup> (latest LTS version) 👉
                    <span data-v-fd7d8a38=""
                      ><a
                        href="https://nodejs.org/en/download/"
                        rel="nofollow noopener noreferrer"
                        data-v-53a84f30=""
                        data-v-fd7d8a38=""
                        >Download
                      </a></span
                    >
                  </li>
                  <li data-v-fd7d8a38="" data-v-ed22b86e="">
                    <strong data-v-7c7b61be="" data-v-fd7d8a38=""
                      >Visual Studio Code</strong
                    >
                    👉
                    <span data-v-fd7d8a38=""
                      ><a
                        href="https://code.visualstudio.com/"
                        rel="nofollow noopener noreferrer"
                        data-v-53a84f30=""
                        data-v-fd7d8a38=""
                        >Download
                      </a></span
                    >
                  </li>
                  <li data-v-fd7d8a38="" data-v-ed22b86e="">
                    <strong data-v-7c7b61be="" data-v-fd7d8a38=""
                      >Volar Extension</strong
                    >
                    👉
                    <span data-v-fd7d8a38=""
                      ><a
                        href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar"
                        rel="nofollow noopener noreferrer"
                        data-v-53a84f30=""
                        data-v-fd7d8a38=""
                        >Download
                      </a></span
                    >
                    <ul data-v-ed22b86e="" data-v-fd7d8a38="">
                      <li data-v-fd7d8a38="" data-v-ed22b86e="">
                        Either enable
                        <a
                          href="https://github.com/johnsoncodehk/volar/discussions/471"
                          rel="nofollow noopener noreferrer"
                          data-v-53a84f30=""
                          data-v-fd7d8a38=""
                          ><strong data-v-7c7b61be="">Take Over Mode</strong>
                        </a>
                        (recommended)
                      </li>
                      <li data-v-fd7d8a38="" data-v-ed22b86e="">
                        ... or add
                        <strong data-v-7c7b61be="" data-v-fd7d8a38=""
                          >TypeScript Vue Plugin (Volar)</strong
                        >
                        👉
                        <span data-v-fd7d8a38=""
                          ><a
                            href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin"
                            rel="nofollow noopener noreferrer"
                            data-v-53a84f30=""
                            data-v-fd7d8a38=""
                            >Download
                          </a></span
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                <p data-v-bcba96ca="">
                  <sup data-v-bcba96ca="">*</sup> If you already have Node.js
                  installed, check with
                  <code data-v-10acb923="" data-v-bcba96ca=""
                    >node --version</code
                  >
                  that you are using version 14.16 or above 16.11.
                </p>
                <div
                  class="p-4 mt-4 mb-4 rounded-lg alert text-sm leading-relaxed info"
                  data-v-ca643460=""
                >
                  <div class="flex items-start" data-v-ca643460="">
                    <!---->
                    <div class="flex-grow alert-content" data-v-ca643460="">
                      If you have enabled
                      <strong data-v-7c7b61be="">Take Over Mode</strong> or
                      installed the
                      <strong data-v-7c7b61be=""
                        >TypeScript Vue Plugin (Volar)</strong
                      >, you can disable generating the shim for
                      <code data-v-10acb923="">*.vue</code> files:<br
                        data-v-ca643460=""
                      />
                      <div class="docus-highlight group" data-v-021093f9="">
                        <pre
                          class="line-numbers language-js"
                          data-v-021093f9=""
                        ><code data-v-021093f9=""><span class="token keyword module" data-v-021093f9="">export</span> <span class="token keyword module" data-v-021093f9="">default</span> <span class="token function" data-v-021093f9="">defineNuxtConfig</span><span class="token punctuation" data-v-021093f9="">(</span><span class="token punctuation" data-v-021093f9="">{</span>
  typescript<span class="token operator" data-v-021093f9="">:</span> <span class="token punctuation" data-v-021093f9="">{</span>
    shim<span class="token operator" data-v-021093f9="">:</span> <span class="token boolean" data-v-021093f9="">false</span>
  <span class="token punctuation" data-v-021093f9="">}</span>
<span class="token punctuation" data-v-021093f9="">}</span><span class="token punctuation" data-v-021093f9="">)</span>
</code></pre>
                        <button
                          class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                          data-v-021093f9=""
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                              stroke="currentColor"
                              stroke-width="1.49375"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                              stroke="currentColor"
                              stroke-width="1.49375"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 id="new-project" data-v-3110d1ce="">
                  <a
                    href="#new-project"
                    rel="noopener nofollow noreferrer"
                    data-v-53a84f30=""
                    data-v-3110d1ce=""
                    >New project
                  </a>
                </h2>
                <p data-v-bcba96ca="">
                  Open a terminal, or from
                  <a
                    href="https://code.visualstudio.com/"
                    rel="nofollow noopener noreferrer"
                    data-v-53a84f30=""
                    data-v-bcba96ca=""
                    >Visual Studio Code </a
                  >, open an
                  <a
                    href="https://code.visualstudio.com/docs/editor/integrated-terminal"
                    rel="nofollow noopener noreferrer"
                    data-v-53a84f30=""
                    data-v-bcba96ca=""
                    >integrated terminal
                  </a>
                  and use the following command to create a new starter project:
                </p>
                <div class="code-group first-tab" data-v-355ff316="">
                  <div
                    class="relative text-white rounded-t-lg d-code-group-header-bg"
                    data-v-ae77f522=""
                    data-v-355ff316=""
                  >
                    <div class="relative z-0 px-2" data-v-ae77f522="">
                      <button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none active text-gray-800 dark:text-white"
                        data-v-ae77f522=""
                      >
                        npx</button
                      ><button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none d-prose-code-filename-text"
                        data-v-ae77f522=""
                      >
                        pnpm
                      </button>
                      <span
                        class="absolute -z-1 highlight-underline h-full xs:py-1.5"
                        data-v-ae77f522=""
                        style="left: 8px; top: 0px; width: 48px; height: 44px"
                        ><span
                          class="flex w-full h-full d-code-group-tab rounded-md"
                          data-v-ae77f522=""
                        ></span
                      ></span>
                    </div>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">npx</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9="">npx nuxi init nuxt-app
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">pnpm</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">pnpm</span> dlx nuxi init nuxt-app
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <p data-v-bcba96ca="">
                  Open
                  <code data-v-10acb923="" data-v-bcba96ca="">nuxt-app</code>
                  folder in Visual Studio Code:
                </p>
                <div class="docus-highlight group" data-v-021093f9="">
                  <pre
                    class="line-numbers language-bash"
                    data-v-021093f9=""
                  ><code data-v-021093f9="">code nuxt-app
</code></pre>
                  <button
                    class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                    data-v-021093f9=""
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                    >
                      <path
                        d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                        stroke="currentColor"
                        stroke-width="1.49375"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                        stroke="currentColor"
                        stroke-width="1.49375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p data-v-bcba96ca="">Install the dependencies:</p>
                <div class="code-group first-tab" data-v-355ff316="">
                  <div
                    class="relative text-white rounded-t-lg d-code-group-header-bg"
                    data-v-ae77f522=""
                    data-v-355ff316=""
                  >
                    <div class="relative z-0 px-2" data-v-ae77f522="">
                      <button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none active text-gray-800 dark:text-white"
                        data-v-ae77f522=""
                      >
                        yarn</button
                      ><button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none d-prose-code-filename-text"
                        data-v-ae77f522=""
                      >
                        npm</button
                      ><button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none d-prose-code-filename-text"
                        data-v-ae77f522=""
                      >
                        pnpm
                      </button>
                      <span
                        class="absolute -z-1 highlight-underline h-full xs:py-1.5"
                        data-v-ae77f522=""
                        style="left: 8px; top: 0px; width: 56px; height: 44px"
                        ><span
                          class="flex w-full h-full d-code-group-tab rounded-md"
                          data-v-ae77f522=""
                        ></span
                      ></span>
                    </div>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">yarn</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">yarn</span> <span class="token function" data-v-021093f9="">install</span>
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">npm</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">npm</span> <span class="token function" data-v-021093f9="">install</span>
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">pnpm</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">pnpm</span> <span class="token function" data-v-021093f9="">install</span> --shamefully-hoist
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <h2 id="development-server" data-v-3110d1ce="">
                  <a
                    href="#development-server"
                    rel="noopener nofollow noreferrer"
                    data-v-53a84f30=""
                    data-v-3110d1ce=""
                    >Development server
                  </a>
                </h2>
                <p data-v-bcba96ca="">
                  Now you'll be able to start your Nuxt app in development mode:
                </p>
                <div class="code-group first-tab" data-v-355ff316="">
                  <div
                    class="relative text-white rounded-t-lg d-code-group-header-bg"
                    data-v-ae77f522=""
                    data-v-355ff316=""
                  >
                    <div class="relative z-0 px-2" data-v-ae77f522="">
                      <button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none active text-gray-800 dark:text-white"
                        data-v-ae77f522=""
                      >
                        yarn</button
                      ><button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none d-prose-code-filename-text"
                        data-v-ae77f522=""
                      >
                        npm</button
                      ><button
                        class="relative px-3 py-1.5 xs:py-3 my-1.5 xs:my-0 text-sm font-mono font-medium tracking-tight focus:outline-none d-prose-code-filename-text"
                        data-v-ae77f522=""
                      >
                        pnpm
                      </button>
                      <span
                        class="absolute -z-1 highlight-underline h-full xs:py-1.5"
                        data-v-ae77f522=""
                        style="left: 8px; top: 0px; width: 56px; height: 44px"
                        ><span
                          class="flex w-full h-full d-code-group-tab rounded-md"
                          data-v-ae77f522=""
                        ></span
                      ></span>
                    </div>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">yarn</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">yarn</span> dev -o
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">npm</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">npm</span> run dev -- -o
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    class="docus-highlight group"
                    data-v-021093f9=""
                    data-v-355ff316=""
                  >
                    <span class="filename" data-v-021093f9="">pnpm</span>
                    <pre
                      class="line-numbers language-bash"
                      data-v-021093f9=""
                    ><code data-v-021093f9=""><span class="token function" data-v-021093f9="">pnpm</span> run dev -o
</code></pre>
                    <button
                      class="copy focus:outline-none absolute right-0 bottom-0 px-2 py-2 m-1 d-prose-code-filename-text d-prose-code-filename-bg text-xs leading-none rounded-lg font-mono font-semibold copy-button opacity-0 transition-all duration-300"
                      data-v-021093f9=""
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                      >
                        <path
                          d="M19.0781 6H8.67187C7.19624 6 6 7.19624 6 8.67187V19.0781C6 20.5538 7.19624 21.75 8.67187 21.75H19.0781C20.5538 21.75 21.75 20.5538 21.75 19.0781V8.67187C21.75 7.19624 20.5538 6 19.0781 6Z"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M17.9766 6L18 4.875C17.998 4.17942 17.7208 3.51289 17.229 3.02103C16.7371 2.52918 16.0706 2.25198 15.375 2.25H5.25C4.45507 2.25235 3.69338 2.56917 3.13128 3.13128C2.56917 3.69338 2.25235 4.45507 2.25 5.25V15.375C2.25198 16.0706 2.52918 16.7371 3.02103 17.229C3.51289 17.7208 4.17942 17.998 4.875 18H6"
                          stroke="currentColor"
                          stroke-width="1.49375"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  class="p-4 mt-4 mb-4 rounded-lg alert text-sm leading-relaxed success font-bold"
                  data-v-ca643460=""
                >
                  <div class="flex items-start" data-v-ca643460="">
                    <span
                      class="inline-flex mr-2 w-5 h-5 justify-center items-center text-1.2rem"
                      data-v-ca643460=""
                    >
                      ✨
                    </span>
                    <div class="flex-grow alert-content" data-v-ca643460="">
                      Well done! A browser window should automatically open for
                      <a
                        href="http://localhost:3000"
                        rel="nofollow noopener noreferrer"
                        target="_blank"
                        data-v-53a84f30=""
                        >http://localhost:3000 </a
                      >.
                    </div>
                  </div>
                </div>
                <h2 id="next-steps" data-v-3110d1ce="">
                  <a
                    href="#next-steps"
                    rel="noopener nofollow noreferrer"
                    data-v-53a84f30=""
                    data-v-3110d1ce=""
                    >Next steps
                  </a>
                </h2>
                <p data-v-bcba96ca="">
                  Now that you've created your Nuxt 3 project, you are ready to
                  start building your application.
                </p>
                <ul data-v-ed22b86e="">
                  <li data-v-fd7d8a38="" data-v-ed22b86e="">
                    Learn about the framework
                    <a
                      href="/guide/concepts"
                      data-v-53a84f30=""
                      class=""
                      data-v-fd7d8a38=""
                      >concepts
                    </a>
                  </li>
                  <li data-v-fd7d8a38="" data-v-ed22b86e="">
                    Learn more about the framework
                    <a
                      href="/guide/features"
                      data-v-53a84f30=""
                      class=""
                      data-v-fd7d8a38=""
                      >features
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-between d-secondary-text mt-8 mb-4 px-4 sm:px-6 sm:flex-row"
          >
            <a
              href="https://github.com/nuxt/framework/edit/main/docs/content/1.getting-started/1.quick-start.md"
              target="_blank"
              rel="noopener"
              class="flex items-center mb-2 text-sm sm:mb-0 hover:underline"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 mr-1"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span> Edit this page on GitHub </span></a
            >
            <span class="flex items-center text-sm">
              Updated at Mon, Jul 11, 2022
            </span>
          </div>
          <div class="px-4 sm:px-6">
            <hr class="mt-10 mb-8 border-t d-border" />
            <div
              class="flex mb-8 flex-col justify-between font-medium leading-7 xs:space-x-2 xs:flex-row"
            >
              <div class="flex justify-start items-center w-full xs:w-1/2">
                <!---->
              </div>
              <div
                class="flex justify-end order-first w-full xs:order-last xs:w-1/2"
              >
                <a
                  href="/getting-started/migration"
                  class="inline-flex items-center justify-end w-full px-4 py-2.5 mb-2 truncate border d-border hover:d-border-hover rounded-xl group xs:mb-0 xs:w-auto hover:d-text-primary"
                  ><span class="relative flex flex-col items-start truncate"
                    ><span class="mb-1 text-xs leading-tight d-secondary-text">
                      Getting Started
                    </span>
                    <span class="flex items-center w-full leading-tight"
                      ><span class="truncate">Migration Guide</span>
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        class="flex-shrink-0 w-4 h-4 ml-2"
                      >
                        <path
                          d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z"
                          fill="currentColor"
                        ></path></svg></span></span
                ></a>
              </div>
            </div>
          </div>
        </article>
        <div
          class="hidden z-10 left-0 flex-none w-full pl-4 mr-8 text-sm bg-white border-b border-gray-200 border-opacity-50 xl:relative xl:border-0 dark:border-gray-800 d-blur-header bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 xl:bg-transparent dark:xl:bg-transparent lg:left-60 xl:left-0 pl-4 sm:pl-6 xl:w-60 top-header xl:block xl:top-0"
        >
          <div
            class="hidden xl:flex flex-col justify-between overflow-y-auto d-scrollbar sticky max-h-(screen-header) -mt-10 pt-10 pb-4 top-header"
          >
            <!---->
            <div class="mb-8">
              <h5 class="items-center hidden mb-2 xl:flex">
                <span
                  class="text-base font-semibold text-gray-900 dark:text-gray-100"
                  >Table of Contents</span
                >
              </h5>
              <ul class="font-medium ml-4">
                <li>
                  <a
                    href="#play-online"
                    class="block py-1 transition-colors duration-100 transform d-secondary-text-active hover:d-secondary-text-hover"
                  >
                    Play online
                  </a>
                  <!---->
                </li>
                <li>
                  <a
                    href="#prerequisites"
                    class="block py-1 transition-colors duration-100 transform d-secondary-text-active hover:d-secondary-text-hover"
                  >
                    Prerequisites
                  </a>
                  <!---->
                </li>
                <li>
                  <a
                    href="#new-project"
                    class="block py-1 transition-colors duration-100 transform d-secondary-text hover:d-secondary-text-hover"
                  >
                    New project
                  </a>
                  <!---->
                </li>
                <li>
                  <a
                    href="#development-server"
                    class="block py-1 transition-colors duration-100 transform d-secondary-text hover:d-secondary-text-hover"
                  >
                    Development server
                  </a>
                  <!---->
                </li>
                <li>
                  <a
                    href="#next-steps"
                    class="block py-1 transition-colors duration-100 transform d-secondary-text hover:d-secondary-text-hover"
                  >
                    Next steps
                  </a>
                  <!---->
                </li>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer
    class="bg-cloud-surface dark:bg-sky-black text-center border-t dark:border-t-sky-darkest"
    data-v-1c3e45d6=""
  >
    <div
      class="d-container mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      data-v-1c3e45d6=""
    >
      <div class="flex justify-center space-x-3 md:order-2" data-v-1c3e45d6="">
        <a
          href="https://twitter.com/nuxt_js"
          target="_blank"
          rel="noopener"
          class="footer-link"
          data-v-1c3e45d6=""
          ><span class="sr-only" data-v-1c3e45d6="">Twitter</span>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6"
            data-v-1c3e45d6=""
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              data-v-1c3e45d6=""
            ></path></svg
        ></a>
        <a
          href="https://github.com/nuxt/framework"
          target="_blank"
          rel="noopener"
          class="footer-link"
          data-v-1c3e45d6=""
          ><span class="sr-only" data-v-1c3e45d6="">GitHub</span>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6"
            data-v-1c3e45d6=""
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
              data-v-1c3e45d6=""
            ></path></svg
        ></a>
      </div>
      <div class="mt-3 md:mt-0 md:order-1" data-v-1c3e45d6="">
        <p class="text-center text-base" data-v-1c3e45d6="">
          <a
            href="https://nuxtjs.org"
            class="inline-flex items-center gap-1 font-medium hover:underline"
            data-v-1c3e45d6=""
            >Nuxt 2 documentation
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              data-v-1c3e45d6=""
            >
              <path
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z"
                fill="currentColor"
              ></path></svg
          ></a>
        </p>
      </div>
    </div>
  </footer>
</template>
