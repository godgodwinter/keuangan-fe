<script setup lang="ts">
import NavBarSolid from "@/components/atoms/NavBarSolid.vue";
</script>
<template>
  <div class="font-dmsans">
    <NavBarSolid />
  </div>

  <div class="flex justify-center">
    <div>
      <div class="flex flex-col md:pt-8">
        <div
          class="lg:my-2 px-0 lg:px-12 container flex flex-col lg:space-y-10 md:pt-10 md:bg-blocks-one bg-contain bg-no-repeat bg-left-top md:dark:bg-blocks-one-dark"
        >
          <section
            class="grid sm:grid-cols-2 lg:grid-cols-4 space-y-4 lg:space-y-0 lg:space-x-4 rounded-lg"
          >
            <div
              class="px-10 py-4 mt-4 md:py-10 border-b border-0 dark:border-solid-darkLighterBg md:border-r lg:border-b-0 lg:ml-4 lg:mt-0 last:border-none"
            >
              <img
                class="w-12 mb-5 dark:brightness-150"
                src="@/assets/img/solid/performant.b2a8f095.svg"
                alt="Performant"
              />
              <h3 class="text-xl mb-2 font-semibold">Performant</h3>
              <p class="text-base">
                Consistently tops recognized UI speed and memory utilization
                benchmarks.
              </p>
            </div>
            <div
              class="px-10 py-4 mt-4 md:py-10 border-b border-0 dark:border-solid-darkLighterBg md:border-r lg:border-b-0 lg:ml-4 lg:mt-0 last:border-none"
            >
              <img
                class="w-12 mb-5 dark:brightness-150"
                src="@/assets/img/solid/powerful.533ab60c.svg"
                alt="Powerful"
              />
              <h3 class="text-xl mb-2 font-semibold">Powerful</h3>
              <p class="text-base">
                Composable reactive primitives married with the flexibility of
                JSX.
              </p>
            </div>
            <div
              class="px-10 py-4 mt-4 md:py-10 border-b border-0 dark:border-solid-darkLighterBg md:border-r lg:border-b-0 lg:ml-4 lg:mt-0 last:border-none"
            >
              <img
                class="w-12 mb-5 dark:brightness-150"
                src="@/assets/img/solid/pragmatic.5c3c3a96.svg"
                alt="Pragmatic"
              />
              <h3 class="text-xl mb-2 font-semibold">Pragmatic</h3>
              <p class="text-base">
                A sensible and tailored API makes developing fun and simple.
              </p>
            </div>
            <div
              class="px-10 py-4 mt-4 md:py-10 border-b border-0 dark:border-solid-darkLighterBg md:border-r lg:border-b-0 lg:ml-4 lg:mt-0 last:border-none"
            >
              <img
                class="w-12 mb-5 dark:brightness-150"
                src="@/assets/img/solid/powerful.533ab60c.svg"
                alt="Productive"
              />
              <h3 class="text-xl mb-2 font-semibold">Productive 2a</h3>
              <p class="text-base">
                Ergonomics and familiarity make building simple or complex
                things a breeze.
              </p>
            </div>
          </section>
        </div>
        <div
          class="lg:my-10 px-0 lg:px-12 container flex flex-col lg:space-y-10"
        >
          <section
            class="border-2 m-5 lg:m-0 border-gray-200 dark:border-solid-darkLighterBg rounded-lg defer"
          >
            <ul class="flex flex-col md:flex-row justify-center w-full">
              <li
                class="transition border-gray-100 dark:border-solid-darkLighterBg border-r last:border-r-0 hover:bg-solid-dark hover:text-white"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  class="flex md:inline-block p-3 justify-center border-b md:border-none md:px-5 md:py-5"
                  href="https://bundlephobia.com/package/solid-js@1.2.1"
                  ><strong class="font-semibold mr-1">7kb</strong
                  ><span class="flex items-center text-sm"
                    >Minified + Gzipped</span
                  ></a
                >
              </li>
              <li
                class="transition border-gray-100 dark:border-solid-darkLighterBg border-r last:border-r-0 hover:bg-solid-dark hover:text-white"
              >
                <a
                  target="_blank"
                  rel="noopener"
                  class="flex md:inline-block p-3 justify-center border-b md:border-none md:px-5 md:py-5"
                  href="https://star-history.t9t.io/#solidjs/solid"
                  ><strong class="font-semibold mr-1">19k+</strong
                  ><span class="flex items-center text-sm"
                    >Github stars</span
                  ></a
                >
              </li>
              <li
                class="transition border-gray-100 dark:border-solid-darkLighterBg border-r last:border-r-0"
              >
                <div
                  class="flex md:inline-block p-3 justify-center border-b md:border-none md:px-5 md:py-5"
                >
                  <strong class="font-semibold mr-1">5+ years</strong
                  ><span class="flex items-center text-sm">In development</span>
                </div>
              </li>
              <li
                class="transition border-gray-100 dark:border-solid-darkLighterBg border-r last:border-r-0"
              >
                <div
                  class="flex md:inline-block p-3 justify-center border-b md:border-none md:px-5 md:py-5"
                >
                  <strong class="font-semibold mr-1">TypeScript</strong
                  ><span class="flex items-center text-sm">Support</span>
                </div>
              </li>
              <li
                class="transition border-gray-100 dark:border-solid-darkLighterBg border-r last:border-r-0"
              >
                <div
                  class="flex md:inline-block p-3 justify-center border-b md:border-none md:px-5 md:py-5"
                >
                  <strong class="font-semibold mr-1">Top Rated</strong
                  ><span class="flex items-center text-sm">In performance</span>
                </div>
              </li>
              <li
                class="transition border-gray-100 dark:border-solid-darkLighterBg border-r last:border-r-0"
              >
                <div
                  class="flex md:inline-block p-3 justify-center border-b md:border-none md:px-5 md:py-5"
                >
                  <strong class="font-semibold mr-1">Astro &amp; Vite</strong
                  ><span class="flex items-center text-sm">Support</span>
                </div>
              </li>
            </ul>
          </section>
          <section
            class="py-20 px-8 lg:px-15 flex flex-col lg:flex-row lg:space-x-32"
          >
            <div
              dir="ltr"
              style="
                height: 70vh;
                max-height: 600px;
                min-height: 475px;
                width: 100%;
              "
              class="rounded-lg overflow-hidden flex-1 shadow-2xl order-2 lg:order-1 rtl:order-2 mt-10 lg:mt-0"
            >
              <div
                class="relative grid bg-slate-50 h-full text-slate-900 dark:text-slate-50 font-sans overflow-hidden wrapper--forced"
                style="
                  --left: 1.25fr;
                  --right: 0.75fr;
                  --top: 1fr;
                  --bottom: 1fr;
                "
              >
                <nav class="row-start-1 flex items-center dark:bg-base-300">
                  <ul
                    class="flex tabs flex-wrap items-center list-none bg-white dark:bg-base-300 m-0 flex-1"
                  >
                    <li
                      class="relative inline-flex text-sm font-sans leading-snug items-center bg-slate-500 bg-opacity-0 hover:bg-opacity-5 overflow-hidden space-x-2 border-solid border-brand-default dark:border-gray-200 border-opacity-5 dark:border-opacity-5 border-b-2 mr-2 border-opacity-90 dark:border-opacity-90 hover:border-opacity-100"
                    >
                      <button
                        type="button"
                        class="cursor-pointer focus:outline-none -mb-0.5 py-2 px-3"
                      >
                        <span class="outline-none" contenteditable="false"
                          >main</span
                        ><span>.tsx</span>
                      </button>
                    </li>
                    <li
                      class="inline-flex items-center m-0 border-b-2 border-transparent"
                    >
                      <button
                        type="button"
                        class="focus:outline-none"
                        title="Add a new tab"
                      >
                        <span class="sr-only">Add a new tab</span
                        ><svg
                          viewBox="0 0 24 24"
                          style="stroke: currentColor; fill: none"
                          class="h-5 text-brand-default dark:text-slate-50"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          ></path>
                        </svg>
                      </button>
                    </li>
                    <label
                      for="display-errors"
                      class="ml-auto relative justify-self-end inline-flex text-sm font-sans leading-snug items-center bg-opacity-0 hover:bg-opacity-5 overflow-hidden space-x-2 dark:text-white border-solid border-brand-default dark:border-gray-200 border-opacity-5 dark:border-opacity-5 border-b-2 px-3 py-2 dark:bg-base-300 cursor-pointer"
                      ><input
                        type="checkbox"
                        id="display-errors"
                        name="display-errors"
                      /><span>Display Errors</span></label
                    >
                  </ul>
                </nav>
                <ul
                  class="flex tabs flex-wrap items-center list-none bg-white dark:bg-base-300 m-0 row-start-4 border-slate-200"
                >
                  <li
                    class="relative inline-flex text-sm font-sans leading-snug items-center bg-slate-500 bg-opacity-0 hover:bg-opacity-5 overflow-hidden space-x-2 border-solid border-brand-default dark:border-gray-200 border-opacity-5 dark:border-opacity-5 border-b-2 hover:border-opacity-10 dark:hover:border-opacity-10"
                  >
                    <button
                      type="button"
                      title="Refresh the page"
                      class="py-2 px-3 disabled:cursor-not-allowed disabled:opacity-25 active:animate-spin"
                    >
                      <span class="sr-only">Refresh the page</span
                      ><svg
                        class="h-5"
                        viewBox="0 0 24 24"
                        style="fill: none; stroke: currentcolor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li
                    class="relative inline-flex text-sm font-sans leading-snug items-center bg-slate-500 bg-opacity-0 hover:bg-opacity-5 overflow-hidden space-x-2 border-solid border-brand-default dark:border-gray-200 border-opacity-5 dark:border-opacity-5 border-b-2 flex-1 border-opacity-90 dark:border-opacity-90 hover:border-opacity-100"
                  >
                    <button
                      type="button"
                      class="w-full focus:outline-none -mb-0.5 py-2 px-3"
                    >
                      Result
                    </button>
                  </li>
                  <li
                    class="relative inline-flex text-sm font-sans leading-snug items-center bg-slate-500 bg-opacity-0 hover:bg-opacity-5 overflow-hidden space-x-2 border-solid border-brand-default dark:border-gray-200 border-opacity-5 dark:border-opacity-5 border-b-2 flex-1 hover:border-opacity-10 dark:hover:border-opacity-10"
                  >
                    <button
                      type="button"
                      class="w-full focus:outline-none -mb-0.5 py-2 px-3"
                    >
                      Output
                    </button>
                  </li>
                </ul>
                <div class="h-full row-start-2 flex flex-col overflow-hidden">
                  <div
                    class="p-0 dark:text-white flex-1 overflow-auto focus:outline-none bg-slate-50 dark:bg-yellow-400"
                    data-keybinding-context="1"
                    style="
                      --codelens-font-features_ee1f61: 'liga' off, 'calt' off;
                      --code-editorInlayHintsFontFamily: 'Droid Sans Mono',
                        'monospace', monospace, 'Droid Sans Fallback';
                    "
                    data-mode-id="typescript"
                  >
                    <div
                      class="monaco-editor no-user-select showUnused showDeprecated vs"
                      role="code"
                      style="width: 496px; height: 222px"
                      data-uri="file:///repl-1/main.tsx"
                    >
                      <div
                        data-mprt="3"
                        class="overflow-guard"
                        style="width: 496px; height: 222px"
                      >
                        <div
                          class="margin"
                          style="
                            position: absolute;
                            transform: translate3d(0px, 0px, 0px);
                            contain: strict;
                            top: 0px;
                            height: 497px;
                            width: 48px;
                          "
                          role="presentation"
                          aria-hidden="true"
                        >
                          <div
                            class="glyph-margin"
                            style="left: 0px; width: 0px; height: 497px"
                          ></div>
                          <div
                            class="margin-view-zones"
                            style="position: absolute"
                            role="presentation"
                            aria-hidden="true"
                          ></div>
                          <div
                            class="margin-view-overlays"
                            style="
                              position: absolute;
                              width: 48px;
                              font-family: 'Droid Sans Mono', 'monospace',
                                monospace, 'Droid Sans Fallback';
                              font-weight: normal;
                              font-size: 15px;
                              font-feature-settings: 'liga' 0, 'calt' 0;
                              line-height: 20px;
                              letter-spacing: 0px;
                              height: 497px;
                            "
                            role="presentation"
                            aria-hidden="true"
                          >
                            <div
                              style="
                                position: absolute;
                                top: 15px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="current-line current-line-margin-both"
                                style="width: 48px; height: 20px"
                              ></div>
                              <div
                                class="active-line-number line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                1
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 35px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                2
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 55px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                3
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 75px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="cldr codicon codicon-folding-expanded"
                                style="left: 27px; width: 21px"
                              ></div>
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                4
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 95px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                5
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 115px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="cldr codicon codicon-folding-expanded"
                                style="left: 27px; width: 21px"
                              ></div>
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                6
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 135px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                7
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 155px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                8
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 175px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                9
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 195px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                10
                              </div>
                            </div>
                            <div
                              style="
                                position: absolute;
                                top: 215px;
                                width: 100%;
                                height: 20px;
                              "
                            >
                              <div
                                class="line-numbers lh-even"
                                style="left: 0px; width: 27px"
                              >
                                11
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="monaco-scrollable-element editor-scrollable vs"
                          role="presentation"
                          style="
                            position: absolute;
                            overflow: hidden;
                            left: 48px;
                            width: 448px;
                            height: 222px;
                          "
                          data-mprt="5"
                        >
                          <div
                            class="lines-content monaco-editor-background"
                            style="
                              position: absolute;
                              overflow: hidden;
                              width: 1000000px;
                              height: 1000000px;
                              transform: translate3d(0px, 0px, 0px);
                              contain: strict;
                              top: 0px;
                              left: 0px;
                            "
                          >
                            <div
                              class="view-overlays"
                              style="
                                position: absolute;
                                height: 0px;
                                width: 504px;
                              "
                              role="presentation"
                              aria-hidden="true"
                            >
                              <div
                                style="
                                  position: absolute;
                                  top: 15px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="current-line"
                                  style="width: 504px; height: 20px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 35px;
                                  width: 100%;
                                  height: 20px;
                                "
                              ></div>
                              <div
                                style="
                                  position: absolute;
                                  top: 55px;
                                  width: 100%;
                                  height: 20px;
                                "
                              ></div>
                              <div
                                style="
                                  position: absolute;
                                  top: 75px;
                                  width: 100%;
                                  height: 20px;
                                "
                              ></div>
                              <div
                                style="
                                  position: absolute;
                                  top: 95px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 115px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 135px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 18px; height: 20px; width: 9px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 155px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 18px; height: 20px; width: 9px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 175px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 195px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                              </div>
                              <div
                                style="
                                  position: absolute;
                                  top: 215px;
                                  width: 100%;
                                  height: 20px;
                                "
                              >
                                <div
                                  class="core-guide core-guide-indent vertical"
                                  style="left: 0px; height: 20px; width: 9px"
                                ></div>
                              </div>
                            </div>
                            <div
                              role="presentation"
                              aria-hidden="true"
                              class="view-rulers"
                            ></div>
                            <div
                              class="view-zones"
                              style="position: absolute"
                              role="presentation"
                              aria-hidden="true"
                            ></div>
                            <div
                              class="view-lines monaco-mouse-cursor-text"
                              style="
                                position: absolute;
                                font-family: 'Droid Sans Mono', 'monospace',
                                  monospace, 'Droid Sans Fallback';
                                font-weight: normal;
                                font-size: 15px;
                                font-feature-settings: 'liga' 0, 'calt' 0;
                                line-height: 20px;
                                letter-spacing: 0px;
                                width: 504px;
                                height: 497px;
                              "
                              role="presentation"
                              aria-hidden="true"
                              data-mprt="7"
                            >
                              <div
                                style="top: 15px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk6">import</span
                                  ><span class="mtk1"
                                    >&nbsp;{&nbsp;render&nbsp;}&nbsp;</span
                                  ><span class="mtk6">from</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk9">"solid-js/web"</span
                                  ><span class="mtk1">;</span></span
                                >
                              </div>
                              <div
                                style="top: 35px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk6">import</span
                                  ><span class="mtk1"
                                    >&nbsp;{&nbsp;onCleanup,&nbsp;createSignal&nbsp;}&nbsp;</span
                                  ><span class="mtk6">from</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk9">"solid-js"</span
                                  ><span class="mtk1">;</span></span
                                >
                              </div>
                              <div
                                style="top: 55px; height: 20px"
                                class="view-line"
                              >
                                <span><span></span></span>
                              </div>
                              <div
                                style="top: 75px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk6">const</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk10">CountingComponent</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk6">=</span
                                  ><span class="mtk1">&nbsp;()&nbsp;</span
                                  ><span class="mtk6">=&gt;</span
                                  ><span class="mtk1">&nbsp;{</span></span
                                >
                              </div>
                              <div
                                style="top: 95px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1">&nbsp;&nbsp;</span
                                  ><span class="mtk6">const</span
                                  ><span class="mtk1">&nbsp;[</span
                                  ><span class="mtk8">count</span
                                  ><span class="mtk1">,&nbsp;</span
                                  ><span class="mtk8">setCount</span
                                  ><span class="mtk1">]&nbsp;</span
                                  ><span class="mtk6">=</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk10">createSignal</span
                                  ><span class="mtk1">(</span
                                  ><span class="mtk8">0</span
                                  ><span class="mtk1">);</span></span
                                >
                              </div>
                              <div
                                style="top: 115px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1">&nbsp;&nbsp;</span
                                  ><span class="mtk6">const</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk8">interval</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk6">=</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk8">setInterval</span
                                  ><span class="mtk1">(</span></span
                                >
                              </div>
                              <div
                                style="top: 135px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1"
                                    >&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;</span
                                  ><span class="mtk6">=&gt;</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk10">setCount</span
                                  ><span class="mtk1">(</span
                                  ><span class="mtk12">count</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk6">=&gt;</span
                                  ><span class="mtk1">&nbsp;count&nbsp;</span
                                  ><span class="mtk6">+</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk8">1</span
                                  ><span class="mtk1">),</span></span
                                >
                              </div>
                              <div
                                style="top: 155px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1"
                                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                                  ><span class="mtk8">1000</span></span
                                >
                              </div>
                              <div
                                style="top: 175px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1"
                                    >&nbsp;&nbsp;);</span
                                  ></span
                                >
                              </div>
                              <div
                                style="top: 195px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1">&nbsp;&nbsp;</span
                                  ><span class="mtk10">onCleanup</span
                                  ><span class="mtk1">(()&nbsp;</span
                                  ><span class="mtk6">=&gt;</span
                                  ><span class="mtk1">&nbsp;</span
                                  ><span class="mtk8">clearInterval</span
                                  ><span class="mtk1">(interval));</span></span
                                >
                              </div>
                              <div
                                style="top: 215px; height: 20px"
                                class="view-line"
                              >
                                <span
                                  ><span class="mtk1">&nbsp;&nbsp;</span
                                  ><span class="mtk6">return</span
                                  ><span class="mtk1">&nbsp;&lt;</span
                                  ><span class="mtk11">div</span
                                  ><span class="mtk1"
                                    >&gt;Count&nbsp;value&nbsp;is&nbsp;{</span
                                  ><span class="mtk10">count</span
                                  ><span class="mtk1">()}&lt;/</span
                                  ><span class="mtk11">div</span
                                  ><span class="mtk1">&gt;;</span></span
                                >
                              </div>
                            </div>
                            <div
                              data-mprt="1"
                              class="contentWidgets"
                              style="position: absolute; top: 0px"
                            >
                              <div
                                class="codicon-light-bulb codicon"
                                style="
                                  position: absolute;
                                  display: none;
                                  visibility: hidden;
                                  max-width: 576px;
                                "
                                widgetid="LightBulbWidget"
                                title="Show Code Actions (Ctrl+.)"
                              ></div>
                            </div>
                            <div
                              role="presentation"
                              aria-hidden="true"
                              class="cursors-layer cursor-line-style cursor-solid"
                            >
                              <div
                                class="cursor monaco-mouse-cursor-text"
                                style="
                                  height: 20px;
                                  top: 15px;
                                  left: 0px;
                                  font-family: 'Droid Sans Mono', 'monospace',
                                    monospace, 'Droid Sans Fallback';
                                  font-weight: normal;
                                  font-size: 15px;
                                  font-feature-settings: 'liga' 0, 'calt' 0;
                                  line-height: 20px;
                                  letter-spacing: 0px;
                                  display: block;
                                  visibility: hidden;
                                  width: 1.90476px;
                                "
                              ></div>
                            </div>
                          </div>
                          <div
                            role="presentation"
                            aria-hidden="true"
                            class="invisible scrollbar horizontal fade"
                            style="
                              position: absolute;
                              width: 434px;
                              height: 12px;
                              left: 0px;
                              bottom: 0px;
                            "
                          >
                            <div
                              class="slider"
                              style="
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                height: 12px;
                                transform: translate3d(0px, 0px, 0px);
                                contain: strict;
                                width: 385px;
                              "
                            ></div>
                          </div>
                          <canvas
                            class="decorationsOverviewRuler"
                            style="
                              position: absolute;
                              transform: translate3d(0px, 0px, 0px);
                              contain: strict;
                              top: 0px;
                              right: 0px;
                              width: 14px;
                              height: 222px;
                            "
                            aria-hidden="true"
                            width="36"
                            height="582"
                          ></canvas>
                          <div
                            role="presentation"
                            aria-hidden="true"
                            class="invisible scrollbar vertical fade"
                            style="
                              position: absolute;
                              width: 14px;
                              height: 222px;
                              right: 0px;
                              top: 0px;
                            "
                          >
                            <div
                              class="slider"
                              style="
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                width: 14px;
                                transform: translate3d(0px, 0px, 0px);
                                contain: strict;
                                height: 99px;
                              "
                            ></div>
                          </div>
                        </div>
                        <div
                          role="presentation"
                          aria-hidden="true"
                          style="width: 496px"
                        ></div>
                        <textarea
                          data-mprt="6"
                          class="inputarea monaco-mouse-cursor-text"
                          autocorrect="off"
                          autocapitalize="none"
                          autocomplete="off"
                          spellcheck="false"
                          aria-label="Editor content;Press Alt+F1 for Accessibility Options."
                          tabindex="0"
                          role="textbox"
                          aria-roledescription="editor"
                          aria-multiline="true"
                          aria-haspopup="false"
                          aria-autocomplete="both"
                          style="
                            font-family: 'Droid Sans Mono', 'monospace',
                              monospace, 'Droid Sans Fallback';
                            font-weight: normal;
                            font-size: 15px;
                            font-feature-settings: 'liga' 0, 'calt' 0;
                            line-height: 20px;
                            letter-spacing: 0px;
                            top: 15px;
                            left: 48px;
                            width: 0px;
                            height: 0px;
                          "
                          wrap="off"
                        ></textarea>
                        <div
                          style="
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 0px;
                            height: 0px;
                          "
                        ></div>
                        <div
                          data-mprt="4"
                          class="overlayWidgets"
                          style="width: 496px"
                        >
                          <div
                            style="position: absolute; top: 0px; right: 50%"
                            widgetid="editor.contrib.quickInputWidget"
                          ></div>
                          <div
                            class="accessibilityHelpWidget"
                            style="display: none; position: absolute"
                            role="dialog"
                            aria-hidden="true"
                            widgetid="editor.contrib.accessibilityHelpWidget"
                          >
                            <div role="document"></div>
                          </div>
                        </div>
                        <div
                          data-mprt="8"
                          class="minimap slider-mouseover"
                          style="
                            position: absolute;
                            left: 0px;
                            width: 0px;
                            height: 222px;
                          "
                          role="presentation"
                          aria-hidden="true"
                        >
                          <div
                            class="minimap-shadow-hidden"
                            style="height: 222px"
                          ></div>
                          <canvas
                            style="
                              position: absolute;
                              left: 0px;
                              width: 0px;
                              height: 222px;
                            "
                            width="0"
                            height="582"
                          ></canvas
                          ><canvas
                            style="
                              position: absolute;
                              left: 0px;
                              width: 0px;
                              height: 222px;
                            "
                            class="minimap-decorations-layer"
                            width="0"
                            height="582"
                          ></canvas>
                          <div
                            style="
                              position: absolute;
                              transform: translate3d(0px, 0px, 0px);
                              contain: strict;
                              width: 0px;
                            "
                            class="minimap-slider"
                          >
                            <div
                              style="
                                position: absolute;
                                width: 0px;
                                height: 0px;
                              "
                              class="minimap-slider-horizontal"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div data-mprt="2" class="overflowingContentWidgets">
                        <div
                          class="monaco-editor rename-box"
                          style="
                            background-color: rgb(246, 248, 250);
                            box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 8px 2px;
                            color: rgb(47, 54, 61);
                            position: absolute;
                            display: none;
                            visibility: hidden;
                            max-width: 1920px;
                          "
                          widgetid="__renameInputWidget"
                        >
                          <input
                            class="rename-input"
                            type="text"
                            aria-label="Rename input. Type new name and press Enter to commit."
                            style="
                              font-family: 'Droid Sans Mono', 'monospace',
                                monospace, 'Droid Sans Fallback';
                              font-weight: normal;
                              font-size: 15px;
                              background-color: rgb(250, 251, 252);
                              border-width: 1px;
                              border-style: solid;
                              border-color: rgb(225, 228, 232);
                            "
                          />
                          <div class="rename-label" style="font-size: 12px">
                            Enter to Rename, Shift+Enter to Preview
                          </div>
                        </div>
                      </div>
                      <div
                        class="context-view"
                        style="display: none"
                        aria-hidden="true"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="hidden"></div>
                <div
                  class="justify-center group items-center border-slate-200 dark:border-solid-darkbg/30 hover:bg-brand-default dark:hover:bg-solid-medium bg-slate-50 dark:bg-solid-darkbg/70 cursor-row-resize border-t-2 border-b-2 flex row-start-3"
                >
                  <span
                    class="m-1 w-1 h-1 rounded-full bg-slate-300 dark:bg-white dark:group-hover:bg-slate-200"
                  ></span
                  ><span
                    class="m-1 w-1 h-1 rounded-full bg-slate-300 dark:bg-white dark:group-hover:bg-slate-200"
                  ></span
                  ><span
                    class="m-1 w-1 h-1 rounded-full bg-slate-300 dark:bg-white dark:group-hover:bg-slate-200"
                  ></span>
                </div>
                <div class="hidden"></div>
                <div
                  class="justify-center group items-center border-slate-200 dark:border-solid-darkbg/30 hover:bg-brand-default dark:hover:bg-solid-medium bg-slate-50 dark:bg-solid-darkbg/70 flex-col cursor-col-resize border-l-2 border-r-2 hidden row-start-1 row-end-3 col-start-2"
                >
                  <span
                    class="m-1 w-1 h-1 rounded-full bg-slate-300 dark:bg-white dark:group-hover:bg-slate-200"
                  ></span
                  ><span
                    class="m-1 w-1 h-1 rounded-full bg-slate-300 dark:bg-white dark:group-hover:bg-slate-200"
                  ></span
                  ><span
                    class="m-1 w-1 h-1 rounded-full bg-slate-300 dark:bg-white dark:group-hover:bg-slate-200"
                  ></span>
                </div>
                <div
                  class="grid relative h-full w-full bg-white row-start-5"
                  style="grid-template-rows: 1fr auto"
                >
                  <iframe
                    title="Solid REPL"
                    class="overflow-auto p-0 w-full h-full dark:bg-other block"
                    sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-same-origin"
                    srcdoc='
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- Ressource hints -->
        <link rel="dns-prefetch" href="//unpkg.com">
        <link href="https://unpkg.com" rel="preconnect" crossorigin>
        <link rel="preload" href="https://unpkg.com/modern-normalize@1.1.0/modern-normalize.css" as="style">
        <link href="https://unpkg.com/modern-normalize@1.1.0/modern-normalize.css" rel="stylesheet">

        <style>
          html, body {
            position: relative;
            width: 100%;
            height: 100%;
          }

          body {
            color: #333;
            margin: 0;
            padding: 8px;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            max-width: 100%;
          }

          .dark {
            color: #e5e7eb;
          }

          input, button, select, textarea {
            padding: 0.4em;
            margin: 0 0 0.5em 0;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 2px;
          }

          button {
            color: #333;
            background-color: #f4f4f4;
            outline: none;
          }

          button:disabled {
            color: #999;
          }

          button:not(:disabled):active {
            background-color: #ddd;
          }

          button:focus {
            border-color: #666;
          }
		    </style>

        <script type="module" id="setup">
          const fakeConsole = {};

          function formatArgs(args) {
            return args
              .map((arg) => {
                if (arg instanceof Element) {
                  return arg.outerHTML;
                }

                return typeof arg === &apos;object&apos; 
                  ? JSON.stringify(arg, null, 2)
                  : &apos;"&apos; + String(arg) + &apos;"&apos;;
              })
              .join(&apos; &apos;)
          }

          
          for (const level of [&apos;log&apos;, &apos;error&apos;, &apos;warn&apos;]) {
            fakeConsole[level] = console[level];

            console[level] = (...args) => {
              fakeConsole[level](...args);
              window.postMessage({ event: &apos;LOG&apos;, level, args: formatArgs(args) }, &apos;*&apos;);
            }
          }

          window.addEventListener(&apos;message&apos;, ({ data }) => {
            try {
              const { event, code } = data;

              if (event !== &apos;CODE_UPDATE&apos;) return;

              window?.dispose?.();
              window.dispose = undefined;

              let app = document.getElementById(&apos;app&apos;);
              if (app) {
                app.remove();
                app = document.createElement(&apos;div&apos;);
                app.id = &apos;app&apos;;
                document.body.prepend(app);
              }

              const encodedCode = encodeURIComponent(code);
              const dataUri = &apos;data:text/javascript;charset=utf-8,&apos; + encodedCode;
              import(dataUri);
  
              const load = document.getElementById(&apos;load&apos;);
              if (code &amp;&amp; load) load.remove();
            } catch (e) {
              console.error(e)
            }
          })
        </script>
      </head>
      
      <body class="dark">
        <div id="load" style="display: flex; height: 80vh; align-items: center; justify-content: center;">
          <p style="font-size: 1.5rem">Loading the playground...</p>
        </div>
        <div id="app"></div>
      </body>
    </html>
  '
                  ></iframe>
                  <div
                    class="grid border-t-2 border-slate-200 dark:border-slate-700 border-solid dark:bg-base-300 text-slate-600 dark:text-gray-200"
                    style="grid-template-rows: 1fr 0px"
                  >
                    <div class="flex justify-between items-center w-full">
                      <button
                        type="button"
                        class="relative text-left text-xs md:text-sm p-2 focus:outline-none -mb-1 md:-mb-0.5 leading-none md:leading-tight flex items-center"
                      >
                        <svg
                          class="h-7"
                          viewBox="0 0 20 20"
                          style="fill: currentcolor; stroke: none"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path></svg
                        ><span>Console (0<!---->)</span></button
                      ><button
                        type="button"
                        class="text-xs md:text-sm p-2 focus:outline-none -mb-1 md:-mb-0.5 leading-none md:leading-tight hover:text-slate-800 dark:hover:text-slate-200"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col justify-center flex-1 order-1 lg:order-2 rtl:order-1"
            >
              <img class="w-20" alt="" src="/assets/blocks1.c165f9eb.svg" />
              <h3 class="text-3xl mt-6 font-semibold leading-10 text-solid">
                It's familiar and modern
              </h3>
              <p class="mt-9 leading-7">
                Solid stands on the shoulders of giants, particularly React and
                Knockout. If you've developed with React Hooks before, Solid
                should seem very natural. In fact, more natural as Solid's model
                is much simpler with no Hook rules. Every Component executes
                once and it is the Hooks and bindings that execute many times as
                their dependencies update.
              </p>
              <p class="mt-9 leading-7">
                Solid follows the same philosophy as React with unidirectional
                data flow, read/write segregation, and immutable interfaces. It
                however has a completely different implementation that forgoes
                using a Virtual DOM.
              </p>
              <a
                class="button inline-block mt-8 text-solid-default dark:text-solid-darkdefault font-semibold hover:text-gray-500 dark:hover:text-gray-300 chevron chevron-right"
                href="https://www.solidjs.com/docs/latest#component-apis"
                >View Docs</a
              >
            </div>
          </section>
          <section
            class="dark:bg-base-300 bg-solid-lightgray py-16 grid grid-cols-1 lg:grid-cols-2 md:px-5 lg:px-16 defer rounded-br-6xl lg:bg-blocks-three bg-no-repeat bg-contain bg-right rtl:bg-left"
          >
            <div
              class="px-10 py-4 2xl:bg-opacity-0 bg-opacity-80 rounded-lg xl:bg-opacity-0"
            >
              <img class="w-16" alt="" src="/assets/sandbox.dcd2b182.svg" />
              <h2 class="text-3xl mt-8 mb-5 text-solid font-semibold">
                Fine-grained reactivity means you do more with less.
              </h2>
              <p class="text-2xl mt-2">
                Solid is built with efficient reactive primitives from your
                userland code to your JSX views.
              </p>
              <p class="mt-6 leading-7">
                This unlocks complete control over what gets updated and when,
                even at the DOM binding level. With no Virtual DOM or extensive
                diffing the framework never does more work than you want it to.
              </p>
              <a
                class="button inline-block shadow mt-8 text-solid-default dark:text-solid-darkdefault font-semibold hover:text-gray-500 dark:hover:text-gray-300 chevron chevron-right"
                href="https://playground.solidjs.com/?version=1.0.0#NobwRAdghgtgpmAXGGUCWEwBowBcCeADgsrgM4Ae2YZA9gK4BOAxiWGjIbY7gAQi9GcCABM4jXgF9eAM0a0YvAOR0ANmhEBaAFZkA9AHc4AIyUBuADoQOXHv17MhUXHADKaAObRVU2fMUqtOpauuZWVjL0EMy4aLQQvACChIQAFACU-Fa8DvFkfMBQMWgAbnBYvGRwuInFZQC6vAC8Dk4u7l5Qqqm4jPRw6ZYQ2YLVTAkAPCKlDqpQZGRNIEWxZRm8APy8FmArpXA7vIjbYDuSAHwAEmgTetMl51aS4RBCouKp603nvBPJhLw9OcKiJaMx6PAILgAHQeaoAUVUcEhuAAQvgAJIiVJKKApJTpdJWMCSepAA"
                >See it in action</a
              >
            </div>
          </section>
          <section
            class="py-20 px-10 lg:px-10 flex flex-col gap-x-32 space-y-10 lg:space-y-0 lg:flex-row"
          >
            <div class="flex flex-wrap items-center flex-1 rtl:ml-10">
              <table class="w-full table-fixed">
                <tbody>
                  <tr>
                    <td class="w-1/6 text-xs">Vanilla</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-red-400 dark:bg-base-300"
                          style="width: 45.2489%; transform: translateX(100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Solid 1.0.0</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-red-400 dark:bg-base-300"
                          style="width: 54%; transform: translateX(100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.05</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Inferno 7.4.8</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 54.2986%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.2</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Svelte 3.37.9</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 57.4661%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.27</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Preact 10.5.12</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 64.2534%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.42</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Vue 3.0.6</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 69.6833%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.54</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">React 17.0.1</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 87.3303%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.93</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Angular 12.0.1</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 87.3303%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >1.93</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-1/6 text-xs">Ember 3.22.0</td>
                    <td class="w-4/6 py-1">
                      <div class="relative z-10 rounded-3xl overflow-hidden">
                        <div
                          class="transition-transform -translate-x-full duration-700 w-full h-full rounded-3xl ltr:text-right rtl:text-left text-xxs py-1 bg-gray-100 dark:bg-base-300"
                          style="width: 100%; transform: translateX(-100%)"
                        >
                          <figure>
                            <span class="inline-block p-1 px-2 rounded-full"
                              >2.21</span
                            >
                          </figure>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td class="p-3 text-xs">Time</td>
                  </tr>
                </tbody>
              </table>
              <button
                class="py-3 text-sm chevron button text-solid-default dark:text-solid-darkdefault font-semibold hover:text-gray-500 dark:hover:text-gray-300 chevron-right"
              >
                Show more client + server benchmarks
              </button>
            </div>
            <div class="flex flex-col justify-around flex-1 bg-no-repeat">
              <img class="w-20" alt="" src="/assets/blocks2.9ee919ce.svg" />
              <h2 class="mt-6 text-3xl font-semibold text-solid">
                Performance focused
              </h2>
              <h2 class="m3-6 text-2xl font-semibold text-solid">
                on both client and server
              </h2>
              <p class="leading-7 mt-9">
                The strength of fine-grained reactivity as an approach shines on
                all notable benchmarks. Even if performance is not your focus,
                it's virtually effortless and without the cost of
                complicated/involved DX. Think of Solid's performance gain as a
                free win. Solid is about being fast without trying.
              </p>
              <a
                class="button inline-block py-3 text-solid-default dark:text-solid-darkdefault font-semibold hover:text-gray-500 dark:hover:text-gray-300 chevron chevron-right"
                href="https://ryansolid.medium.com/solidjs-the-tesla-of-javascript-ui-frameworks-6a1d379bc05e"
                >Read full article</a
              >
            </div>
          </section>
          <section
            class="dark:bg-base-300 bg-solid-lightgray rounded-3xl grid md:grid-cols-2 py-20 px-10 lg:px-20 md:space-x-12"
          >
            <div class="gridflex flex-wrap content-center">
              <h2 class="text-2xl font-semibold">
                <img
                  class="w-10 mb-5 block dark:invert"
                  alt=""
                  src="/assets/flag.54aa6e79.svg"
                />Fully loaded with all features.
              </h2>
              <p class="text-xl mt-4">
                Solid supports all common and expected library features and
                expands on aspects to increase DX.
              </p>
            </div>
            <ul class="flex flex-wrap">
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Fragments</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Portals</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Context</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Suspense</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Error Boundaries</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Lazy Components</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm"
                  >Async &amp; Concurrent Rendering</span
                >
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Implicit Delegation</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">SSR &amp; Hydration</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Directives</span>
              </li>
              <li
                class="feature-block border-gray-300 dark:border-gray-700 w-full md:w-auto mr-3 mt-3 px-5 py-3"
              >
                <span class="block text-sm">Streaming</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
