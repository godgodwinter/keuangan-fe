<script setup lang="ts">
import { ref } from "vue";
const windowTop = ref(0);

const onScroll = (e: any) => {
  windowTop.value = e.target.documentElement.scrollTop;
  console.log({ top: windowTop.value });
};
window.addEventListener("scroll", onScroll);

// change value per second interval

const fnRandomInt = (min = 0, max = 100) => {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  // let result = Math.floor(Math.random() * max) + 1;
  return result;
};
let a = ref(0);
setInterval(() => {
  // a.value = (a.value + 1) % 2;
  // random int 1-40
  // a.value = Math.floor(Math.random() * 100) + 1;
  a.value = fnRandomInt(1, 100);
  wavePoint.value = [
    `${fnRandomInt(
      1,
      1
    )},100 0,0 0,1.0750648956591724 1,0.8243572388520124 2,0.5151407862053479 3,0.18329129226856763 4,-0.13378016814620805 5,-0.40313901396355195 6,-0.6019133146796158 7,-0.7210218375647284 8,-0.7660295685687055 9,-0.7549615444931578 10,-0.7138059587225107 11,-0.6710198180807156 12,-0.6524313099146278 13,-0.6775723134292865 ${fnRandomInt(
      1,
      100
    )},-0.7578935002196355 15,-0.8967574871714483 16,-1.0907335093615516 17,-1.3315754647329876 18,-1.6083121085209044 ${fnRandomInt(
      1,
      100
    )},-1.9090349303452605 20,-2.222160891715039 21,-2.53712206754463 22,-2.84456646432945 23,-3.1362389878387287 24,-3.4047604243520415 25,-3.6435626791191367 26,-3.8473081795915216 27,-4.013229433249989 28,-4.14381650596789 29,-4.250570183045146 ${fnRandomInt(
      1,
      100
    )},-4.355962898611671 31,-4.485525777257816 32,-4.637254794754993 33,-4.7232866872005275 34,-4.515825758478852 35,-3.6872965949727936 36,-2.0365664651758886 37,0.17288190329633843 ${fnRandomInt(
      1,
      100
    )},2.111574851887672 39,2.854980289989277 40,2.150208167665656 41,0.61440560044966 42,-0.9379952781539301 43,-2.1458018859024097 44,-3.0143878127666124 45,-3.6086886619182414 46,-3.9923278590504485 47,-4.207402023409382 48,-4.276246260221722 49,-4.207402023409384 50,-3.9923278590504516 51,-3.6086886619182437 52,-3.0143878127666133 53,-2.1458018859024093 54,-0.9379952781539302 55,0.6144056004496602 56,2.150208167665656 57,2.854980289989277 58,2.1115748518876734 ${fnRandomInt(
      1,
      100
    )},0.1728819032963403 ${fnRandomInt(
      1,
      100
    )},-2.0365664651758864 61,-3.687296594972792 ${fnRandomInt(
      1,
      100
    )},-4.51582575847885 ${fnRandomInt(
      1,
      100
    )},-4.723286687200525 ${fnRandomInt(
      1,
      100
    )},-4.637254794754992 65,-4.4855257772578145 66,-4.355962898611669 67,-4.250570183045147 68,-4.14381650596789 69,-4.01322943324999 70,-3.847308179591523 71,-3.643562679119138 72,-3.4047604243520415 73,-3.136238987838729 74,-2.844566464329451 75,-2.5371220675446304 76,-2.2221608917150397 77,-1.9090349303452618 78,-1.6083121085209062 79,-1.3315754647329894 80,-1.0907335093615536 81,-0.8967574871714508 82,-0.7578935002196381 83,-0.677572313429289 84,-0.6524313099146304 ${fnRandomInt(
      1,
      100
    )},-0.6710198180807182 86,-0.7138059587225133 87,-0.7549615444931607 88,-0.7660295685687082 89,-0.721021837564731 90,-0.6019133146796183 91,-0.403139013963554 92,-0.13378016814621005 93,0.1832912922685655 94,0.515140786205346 95,0.8243572388520111 96,1.0750648956591713 97,1.2380907697032806 98,1.2945956913273857 99,1.238090769703281 1439,0 1439,100`,
  ];
}, 1000);

const wavePoint = ref([
  `0,100 0,0 0,1.0750648956591724 1,0.8243572388520124 2,0.5151407862053479 3,0.18329129226856763 4,-0.13378016814620805 5,-0.40313901396355195 6,-0.6019133146796158 7,-0.7210218375647284 8,-0.7660295685687055 9,-0.7549615444931578 10,-0.7138059587225107 11,-0.6710198180807156 12,-0.6524313099146278 13,-0.6775723134292865 14,-0.7578935002196355 15,-0.8967574871714483 16,-1.0907335093615516 17,-1.3315754647329876 18,-1.6083121085209044 19,-1.9090349303452605 20,-2.222160891715039 21,-2.53712206754463 22,-2.84456646432945 23,-3.1362389878387287 24,-3.4047604243520415 25,-3.6435626791191367 26,-3.8473081795915216 27,-4.013229433249989 28,-4.14381650596789 29,-4.250570183045146 30,-4.355962898611671 31,-4.485525777257816 32,-4.637254794754993 33,-4.7232866872005275 34,-4.515825758478852 35,-3.6872965949727936 36,-2.0365664651758886 37,0.17288190329633843 ${a.value},2.111574851887672 39,2.854980289989277 40,2.150208167665656 41,0.61440560044966 42,-0.9379952781539301 43,-2.1458018859024097 44,-3.0143878127666124 45,-3.6086886619182414 46,-3.9923278590504485 47,-4.207402023409382 48,-4.276246260221722 49,-4.207402023409384 50,-3.9923278590504516 51,-3.6086886619182437 52,-3.0143878127666133 53,-2.1458018859024093 54,-0.9379952781539302 55,0.6144056004496602 56,2.150208167665656 57,2.854980289989277 58,2.1115748518876734 ${a.value},0.1728819032963403 60,-2.0365664651758864 61,-3.687296594972792 ${a.value},-4.51582575847885 ${a.value},-4.723286687200525 ${a.value},-4.637254794754992 65,-4.4855257772578145 66,-4.355962898611669 67,-4.250570183045147 68,-4.14381650596789 69,-4.01322943324999 70,-3.847308179591523 71,-3.643562679119138 72,-3.4047604243520415 73,-3.136238987838729 74,-2.844566464329451 75,-2.5371220675446304 76,-2.2221608917150397 77,-1.9090349303452618 78,-1.6083121085209062 79,-1.3315754647329894 80,-1.0907335093615536 81,-0.8967574871714508 82,-0.7578935002196381 83,-0.677572313429289 84,-0.6524313099146304 85,-0.6710198180807182 86,-0.7138059587225133 87,-0.7549615444931607 88,-0.7660295685687082 89,-0.721021837564731 90,-0.6019133146796183 91,-0.403139013963554 92,-0.13378016814621005 93,0.1832912922685655 94,0.515140786205346 95,0.8243572388520111 96,1.0750648956591713 97,1.2380907697032806 98,1.2945956913273857 99,1.238090769703281 1439,0 1439,100`,
]);
</script>

<template>
  <div class="flex justify-end items-center bg-green-300">
    <a
      href="/docs"
      class="border-1 border-black inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white"
      >Documentation -- {{ a }}</a
    >
  </div>
  <section
    class="w-full flex justify-center items-center flex-col bg-green-300"
  >
    <svg
      width="100"
      height="300"
      viewBox="0 0 100 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="mt-36"
      role="img"
      aria-label="Fresh logo"
    >
      <circle cx="18" cy="427.77722499997077" r="4" fill="white"></circle>
      <path
        d="M11.9 96.3v24H7v-24h4.9Zm7.5 10.2v4h-8.8v-4h8.8Zm1-10.2v4h-9.8v-4h9.8ZM23.2 96.3H31c1.6 0 3 .3 4.1.9 1.1.5 2 1.3 2.6 2.4a8 8 0 0 1 1 4c0 1.3-.2 2.4-.6 3.3-.3 1-.8 1.7-1.5 2.3-.7.6-1.4 1-2.3 1.5l-1.5.8h-6.3v-4h4.3a3 3 0 0 0 1.7-.4c.4-.3.7-.7 1-1.2a5 5 0 0 0 .3-2c0-.7-.1-1.3-.3-1.9-.2-.5-.5-1-1-1.2-.3-.3-.9-.5-1.5-.5h-3v20h-4.8v-24Zm11 24-4.4-10.7h5l4.6 10.5v.2h-5.2ZM55.9 116.3v4H45.4v-4h10.5Zm-9-20v24H42v-24H47Zm7.6 9.8v3.8h-9.1v-3.8h9Zm1.4-9.8v4H45.4v-4h10.5ZM69 114c0-.4 0-.8-.2-1.1 0-.4-.2-.7-.5-1l-1-1-1.9-.8-2.6-1.2-2.2-1.5a6.5 6.5 0 0 1-1.7-2 6 6 0 0 1-.5-2.7c0-1 .1-2 .5-2.7a6 6 0 0 1 1.6-2.2c.7-.5 1.5-1 2.4-1.3a9.5 9.5 0 0 1 7.1.5c1.2.6 2 1.5 2.7 2.6.6 1 1 2.4 1 3.8h-5a5 5 0 0 0-.2-1.8c-.2-.5-.5-1-1-1.2-.4-.3-1-.5-1.6-.5-.6 0-1.1.2-1.5.4-.4.2-.7.6-1 1l-.2 1.4c0 .4.1.8.3 1.1l.8.8a21.3 21.3 0 0 0 2.8 1.4l2.9 1.4a9 9 0 0 1 2 1.8c.7.6 1 1.3 1.4 2a7.9 7.9 0 0 1-.1 5.5c-.4.8-.9 1.5-1.5 2.1a7 7 0 0 1-2.5 1.4c-2 .5-1 1.8-3 1.8s-1.3-1.5-3.2-1.8c-1-.3-2-.8-2.7-1.4a6.7 6.7 0 0 1-1.8-2.5c-.4-1-.6-2.2-.6-3.5h4.9c0 .7 0 1.3.2 1.8.1.5.3 1 .6 1.3.3.2.7.5 1.1.6.5.2 1 .2 1.5.2.7 0 1.2 0 1.6-.3.4-.3.6-.6.8-1 .2-.4.3-.9.3-1.4ZM90.5 106v4h-10v-4h10Zm-8.6-9.7v24h-4.8v-24h4.8Zm12.1 0v24h-4.8v-24H94Z"
        fill="#0A140C"
      ></path>
      <path
        d="M84 16c13 27 1 52-7 59 0 4-9 9-12 7-12 5-38-2-53-21-6-7 1-21 21-36 13-10 33-17 51-9Z"
        fill="#FFD80B"
      ></path>
      <path
        d="M18 63.08992628713985 C15 63.08992628713985 16 63.08992628713985 12 61L9 56C2 33 62 -3 80 12C103 27 44 56 29 58C27 58 25 59 24 61C20 63.08992628713985 21 63.08992628713985 18 63.08992628713985Z"
        fill="white"
      ></path>
      <path
        d="M69 15c15-1 9 10-6 19L44 44c-2 1-4-2-6 0l-3 6c-3 1-13 3-16 2-5-2-5-9 5-18l7-4c-1-2-1-2 2-5 3-2 19-10 29-11l1 2 6-1Z"
        fill="#FFED4E"
      ></path>
      <path
        d="M38 35c1-1 3-2 3-4l8-3c0 1-1 3 1 4-2 1-7 1-8 5-1-2-1-2-4-2Z"
        fill="#fff"
      ></path></svg
    ><svg
      width="100%"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      class="-mt-5"
    >
      <polygon
        :points="wavePoint"
        fill="white"
        transform="translate(0, 50)"
      ></polygon>
      <!-- <polygon
        points="0,100 0,0 0,0.13895674983308412 1,0.04894738930336671 2,-0.07065742483867929 3,-0.21138216256415585 4,-0.35947798170979095 5,-0.4945347514059589 6,-0.589389395069669 7,-0.6126079955276341 8,-0.5343623663968973 9,-0.33522626515289833 10,-0.015608732118191242 11,0.3978935508263467 12,0.8529332717084147 13,1.2803388944226037 14,1.6097937847997814 15,1.7873075345988774 16,1.7883376769373192 17,1.6220917801858385 18,1.3262257753256692 19,0.9548701614952633 20,0.5648319707374015 21,0.20436103670559774 22,-0.09317546646539442 23,-0.3106295794189435 24,-0.44481211725802156 25,-0.5024587113288024 26,-0.4959462234294262 27,-0.43970353333405304 28,-0.34771501797249443 29,-0.23213016756455926 30,-0.1027754463892358 31,0.032723425410893264 32,0.16850173058295123 33,0.29994071297975244 34,0.4232433436089872 35,0.5351859262317676 36,0.6330590690409569 37,0.7147587745930478 38,0.7789583211753022 39,0.8252836634805839 40,0.8544252666662953 41,0.8681414917670514 42,0.869135938731393 43,0.8608085811347644 44,0.8463967899565902 45,0.8091586178922884 46,0.28259739062793987 47,-6.562827238661582 48,-44.08900462852001 49,-6.562827238661581 50,0.2825973906279409 51,0.8091586178922902 52,0.8463967899565918 53,0.8608085811347662 54,0.8691359387313949 55,0.8681414917670536 56,0.854425266666298 57,0.8252836634805871 58,0.7789583211753055 59,0.714758774593051 60,0.63305906904096 61,0.5351859262317705 62,0.42324334360898985 63,0.2999407129797547 64,0.16850173058295362 65,0.03272342541089628 66,-0.10277544638923261 67,-0.23213016756455615 68,-0.3477150179724912 69,-0.43970353333404966 70,-0.4959462234294228 71,-0.5024587113287993 72,-0.4448121172580185 73,-0.31062957941894037 74,-0.09317546646539096 75,0.20436103670560116 76,0.5648319707374051 77,0.9548701614952668 78,1.3262257753256725 79,1.6220917801858408 80,1.7883376769373205 81,1.7873075345988783 82,1.6097937847997812 83,1.2803388944226033 84,0.8529332717084142 85,0.3978935508263459 86,-0.015608732118192234 87,-0.3352262651529 88,-0.5343623663968989 89,-0.612607995527635 90,-0.5893893950696705 91,-0.4945347514059592 92,-0.3594779817097913 93,-0.2113821625641564 94,-0.07065742483868002 95,0.04894738930336626 96,0.1389567498330839 97,0.1945540521718095 98,0.21332891560767336 99,0.19455405217180946 1439,0 1439,100"
        fill="white"
        transform="translate(0, 50)"
      ></polygon> -->
    </svg>
  </section>
  <div class="flex-1">
    <section
      class="max-w-screen-sm mx-auto my-16 px-4 sm:px-6 md:px-8 space-y-4"
    >
      <picture
        ><img
          src="/illustration/lemon-squash.svg?__frsh_c=mpcpr8gem0wg"
          class="w-64 mx-auto"
          alt="deno is drinking fresh lemon squash"
          width="800"
          height="678"
      /></picture>
      <h2
        class="py-4 text-4xl sm:text-4xl lg:text-4xl text-gray-900 text-center sm:tracking-tight font-extrabold"
      >
        The next-gen web framework.
      </h2>
      <p class="text-gray-600">
        Fresh is a next generation web framework, built for speed, reliability,
        and simplicity. Some stand out features:
      </p>
      <div>
        <div class="flex mt-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h24v24H0z"></path>
            <path
              d="M2 10.276c.862-2.673 2.155-5.259 5.603-5.69"
              stroke="#6BA377"
              stroke-width="1.724"
            ></path>
            <path
              d="M19.091 5.146c-4.44-5.697-10.945-2.374-13.643 0 2.081-1.662 3.006 4.747 4.163 9.733.925 3.987 8.71 6.409 12.486 7.121.848-3.244 1.434-11.157-3.006-16.854Z"
              fill="#25D24B"
            ></path>
          </svg>
          <div class="pl-4 flex-1">
            <b>Just-in-time rendering</b> on the edge.
          </div>
        </div>
        <div class="flex mt-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h24v24H0z"></path>
            <path
              d="M2 10.276c.862-2.673 2.155-5.259 5.603-5.69"
              stroke="#6BA377"
              stroke-width="1.724"
            ></path>
            <path
              d="M19.091 5.146c-4.44-5.697-10.945-2.374-13.643 0 2.081-1.662 3.006 4.747 4.163 9.733.925 3.987 8.71 6.409 12.486 7.121.848-3.244 1.434-11.157-3.006-16.854Z"
              fill="#25D24B"
            ></path>
          </svg>
          <div class="pl-4 flex-1">
            <b>Island based client hydration</b> for maximum interactivity.
          </div>
        </div>
        <div class="flex mt-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h24v24H0z"></path>
            <path
              d="M2 10.276c.862-2.673 2.155-5.259 5.603-5.69"
              stroke="#6BA377"
              stroke-width="1.724"
            ></path>
            <path
              d="M19.091 5.146c-4.44-5.697-10.945-2.374-13.643 0 2.081-1.662 3.006 4.747 4.163 9.733.925 3.987 8.71 6.409 12.486 7.121.848-3.244 1.434-11.157-3.006-16.854Z"
              fill="#25D24B"
            ></path>
          </svg>
          <div class="pl-4 flex-1">
            <b>Zero runtime overhead</b>: no JS is shipped to the client by
            default.
          </div>
        </div>
        <div class="flex mt-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h24v24H0z"></path>
            <path
              d="M2 10.276c.862-2.673 2.155-5.259 5.603-5.69"
              stroke="#6BA377"
              stroke-width="1.724"
            ></path>
            <path
              d="M19.091 5.146c-4.44-5.697-10.945-2.374-13.643 0 2.081-1.662 3.006 4.747 4.163 9.733.925 3.987 8.71 6.409 12.486 7.121.848-3.244 1.434-11.157-3.006-16.854Z"
              fill="#25D24B"
            ></path>
          </svg>
          <div class="pl-4 flex-1"><b>No build step</b>.</div>
        </div>
        <div class="flex mt-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h24v24H0z"></path>
            <path
              d="M2 10.276c.862-2.673 2.155-5.259 5.603-5.69"
              stroke="#6BA377"
              stroke-width="1.724"
            ></path>
            <path
              d="M19.091 5.146c-4.44-5.697-10.945-2.374-13.643 0 2.081-1.662 3.006 4.747 4.163 9.733.925 3.987 8.71 6.409 12.486 7.121.848-3.244 1.434-11.157-3.006-16.854Z"
              fill="#25D24B"
            ></path>
          </svg>
          <div class="pl-4 flex-1"><b>No configuration</b> necessary.</div>
        </div>
        <div class="flex mt-3">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#fff" d="M0 0h24v24H0z"></path>
            <path
              d="M2 10.276c.862-2.673 2.155-5.259 5.603-5.69"
              stroke="#6BA377"
              stroke-width="1.724"
            ></path>
            <path
              d="M19.091 5.146c-4.44-5.697-10.945-2.374-13.643 0 2.081-1.662 3.006 4.747 4.163 9.733.925 3.987 8.71 6.409 12.486 7.121.848-3.244 1.434-11.157-3.006-16.854Z"
              fill="#25D24B"
            ></path>
          </svg>
          <div class="pl-4 flex-1">
            <b>TypeScript support</b> out of the box.
          </div>
        </div>
      </div>
      <p class="text-gray-600">
        Fresh embraces the tried and true design of server side rendering and
        progressive enhancement on the client side.
      </p>
    </section>
    <section
      class="max-w-screen-sm mx-auto my-16 px-4 sm:px-6 md:px-8 space-y-4"
    >
      <h2 id="getting-started" class="text-xl text-gray-600 font-bold">
        <a href="#getting-started" class="hover:underline">Getting started</a>
      </h2>
      <p class="text-gray-600">
        To get started, make sure you have the
        <a href="https://deno.land" class="text-blue-600 hover:underline"
          >Deno CLI</a
        >
        version 1.23.0 or higher installed.
      </p>
      <p class="text-gray-600">
        Then you can use the Fresh init script to bootstrap a new project:
      </p>
      <pre class="overflow-x-auto py-2 px-4 bg-gray-100">
deno run -A -r https://fresh.deno.dev my-project</pre
      >
      <p class="text-gray-600">
        Enter the newly created project directory and run the following command
        to start the development server:
      </p>
      <pre class="overflow-x-auto py-2 px-4 bg-gray-100">deno task start</pre>
      <p class="text-gray-600">
        You can now open
        <a href="http://localhost:8000" class="text-blue-600 hover:underline"
          >http://localhost:8000</a
        >
        in your browser to view the page.
      </p>
      <p class="text-gray-600">
        A more in-depth getting started guide is available in
        <a href="/docs" class="text-blue-600 hover:underline">the docs</a>.
      </p>
    </section>
    <section
      class="max-w-screen-sm mx-auto my-16 px-4 sm:px-6 md:px-8 space-y-4"
    >
      <h2 id="example" class="text-xl text-gray-600 font-bold">
        <a href="#example" class="hover:underline">Example</a>
      </h2>
      <p class="text-gray-600">
        This text is being server side rendered on the fly. It was rendered at
        05:05:03 UTC.
      </p>
      <p class="text-gray-600">
        The counter below was rendered on the server with a starting value of 3,
        and was then hydrated on the client to provide interactivity. Try out
        the buttons!
      </p>
      <div
        class="bg-gray-100 p-4 border border-gray-200 flex items-center justify-around"
      >
        <button
          style="touch-action: manipulation"
          title="Subtract 1"
          class="p-3 border border-transparent rounded-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-200 disabled:cursor-default"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            ></path>
          </svg>
        </button>
        <div class="text-3xl tabular-nums">3</div>
        <button
          style="touch-action: manipulation"
          title="Add 1"
          class="p-3 border border-transparent rounded-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-200 disabled:cursor-default"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>
      <p class="text-gray-600">
        Only the JS required to render that counter is sent to the client.
      </p>
    </section>
  </div>
  <footer
    class="border-t-2 border-gray-200 bg-gray-100 h-32 flex flex-col gap-4 justify-center"
  >
    <div class="mx-auto max-w-screen-lg flex items-center justify-center gap-8">
      <a
        href="https://github.com/denoland/fresh"
        class="text-gray-600 hover:underline"
        >Source</a
      ><a
        href="https://github.com/denoland/fresh/blob/main/LICENSE"
        class="text-gray-600 hover:underline"
        >License</a
      ><a
        href="https://github.com/denoland/fresh/blob/main/CODE_OF_CONDUCT.md"
        class="text-gray-600 hover:underline"
        >Code of Conduct</a
      >
    </div>
    <div class="text-gray-600 text-center">
      <span>© 2022 the fresh authors</span>
    </div>
  </footer>
</template>

<style>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
</style>
