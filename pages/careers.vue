<template>
  <section class="bg-white dark:bg-[#1d1d1d]">
    <BackgroundImage
      backgroundImage="https://eliteeuromotors.com/wp-content/uploads/2024/04/pexels-maria-geller-2127038-scaled.jpg"
    />
    <div class="w-11/12 md:w-9/12 mx-auto">
      <!-- We're hiring text -->
      <h2 class="text-4xl md:text-6xl text-center">
        {{ $t("careers.header") }}
      </h2>
      <p
        class="text-center py-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        {{ $t("careers.description") }}
        <br />
        <br />
        {{ $t("careers.role_importance") }}
      </p>
      <!-- <BaseButton
        target="_blank"
        rel="noreferrer"
        href="https://jobs.lever.co/clearbit"
        >View Openings</BaseButton
      > -->

      <!-- We're a family owned business -->
      <div
        class="md:grid-cols-2 lg:gap-x-16 grid w-11/12 mx-auto items-center grid-cols-1 gap-4"
      >
        <div
          class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
          <div class="mr-auto place-self-center lg:col-span-12">
            <h2 class="text-3xl mb-8">
              {{ $t("careers.family_owned") }}
            </h2>
            <a
              class="group block no-underline transition-all duration-200 ease-in-out"
              href="https://www.google.com/maps/place/548+Market+St,+San+Francisco,+CA+94104"
              target="_blank"
              rel="noreferrer"
            >
              <GoogleMap />

              <span class="block h-auto pt-8"
                ><h3
                  class="text-navy-400 mb-2 text-lg font-semibold leading-none tracking-wider uppercase"
                >
                  {{ $t("careers.location.header") }}
                </h3>
                <address class="mb-3 not-italic">
                  <span class="block">{{
                    $t("careers.location.address")
                  }}</span>
                </address>
                <span class="block ml-auto"
                  ><BaseButton
                    class="group-hover text-white font-medium transition-all duration-200 ease-in-out"
                    >{{ $t("careers.location.directions") }}</BaseButton
                  ></span
                ></span
              ></a
            >
          </div>
        </div>
        <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public"
            alt="office photo"
            class="w-auto"
          />
        </div>
      </div>

      <!-- description, responsibilities, etc. -->
      <div class="block w-11/12 mx-auto">
        <h2 class="text-left text-3xl md:text-5xl my-3 mt-8">
          {{ $t("careers.job_description.header") }}
        </h2>
        <p
          class="mb-3 text-left font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
        >
          {{ $t("careers.job_description.description") }}
        </p>
        <h2 class="text-left text-3xl md:text-5xl my-3 mt-8">
          {{ $t("careers.responsibilities.header") }}
        </h2>
        <p
          class="text-left font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
        >
          {{ $t("careers.responsibilities.description") }}
        </p>
        <h2 class="text-left text-3xl md:text-5xl my-3 mt-8">
          {{ $t("careers.qualifications.header") }}
        </h2>
        <p
          class="text-left font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4"
        >
          {{ $t("careers.qualifications.description") }}
        </p>
        <BaseButton
          href="https://jobs.lever.co/clearbit"
          class="text-white"
          target="_blank"
          rel="noreferrer"
        >
          {{ $t("careers.apply_now") }}
        </BaseButton>
      </div>

      <!-- Benefits -->
      <div class="md:grid md:grid-cols-2 gap-10 mt-12">
        <div>
          <div
            class="md:mb-0 grid w-full max-w-xl grid-cols-2 grid-rows-2 gap-6 mx-auto mb-2"
          >
            <div
              style="
                background-image: url('https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public');
              "
              class="bg-about-seminar bg-center hover:scale-105 hover:-translate-y-1 w-full col-span-2 transition-all duration-200 ease-in-out bg-cover rounded-lg h-0 pb-[50%]"
            >
              &nbsp;
            </div>
            <div
              style="
                background-image: url('https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public');
              "
              class="bg-about-dog bg-center hover:scale-105 hover:-translate-y-1 transition-all duration-200 ease-in-out bg-cover rounded-lg h-0 pb-[100%]"
            >
              &nbsp;
            </div>
            <div
              style="
                background-image: url('https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/5a33f575-c0f2-477a-e3f5-89c2ccf3ee00/public');
              "
              class="bg-about-team bg-center hover:scale-105 hover:-translate-y-1 pb-[100%] h-0 transition-all duration-200 ease-in-out bg-cover rounded-lg"
            >
              &nbsp;
            </div>
          </div>
        </div>
        <ul class="flex flex-col gap-8">
          <h2 class="text-left text-3xl md:text-5xl">
            {{ $t("careers.benefits.header") }}
          </h2>
          <li class="ck-h6-new flex items-center w-full p-0 mb-0 list-none">
            <span class="block w-8 mr-6"
              ><svg
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-8 h-auto max-w-full"
              >
                <path
                  d="M7 2c-.35081.00028-.69537.09282-.9991.26834-.30374.17553-.55597.42785-.73137.73166H5c-1.09306 0-2 .90694-2 2v6c0 3.362 2.0941 6.2453 5.04297 7.4258.15959 1.1148.92403 2.0236 1.95703 2.3906V21c0 3.3016 2.6984 6 6 6h3c3.3016 0 6-2.6984 6-6v-4.1738c.5845-.2067 1.0907-.5894 1.4488-1.0955.3582-.5061.5507-1.1107.5512-1.7307 0-.7956-.3161-1.5587-.8787-2.1213C25.5587 11.3161 24.7956 11 24 11c-.7956 0-1.5587.3161-2.1213.8787C21.3161 12.4413 21 13.2044 21 14c.0009.6197.1936 1.2239.5517 1.7296s.8641.8881 1.4483 1.0946V21c0 2.2204-1.7796 4-4 4h-3c-2.2204 0-4-1.7796-4-4v-.1836c1.033-.367 1.7974-1.2758 1.957-2.3906C16.9059 17.2453 19 14.362 19 11V5c0-1.09306-.9069-2-2-2h-.2715c-.1752-.30352-.4271-.55566-.7305-.73117-.3034-.1755-.6475-.26821-.998-.26883-.5304 0-1.0391.21071-1.4142.58579C13.2107 2.96086 13 3.46957 13 4s.2107 1.03914.5858 1.41421C13.9609 5.78929 14.4696 6 15 6c.3508-.00028.6954-.09282.9991-.26834.3037-.17553.556-.42785.7314-.73166H17v6c0 3.3256-2.6744 6-6 6-3.32556 0-6-2.6744-6-6V5h.27148c.17524.30352.42716.55566.73052.73117.30337.1755.64753.26821.998.26883.53043 0 1.03914-.21071 1.41421-.58579C8.78929 5.03914 9 4.53043 9 4s-.21071-1.03914-.58579-1.41421C8.03914 2.21071 7.53043 2 7 2Z"
                  fill="#ef0605"
                ></path></svg></span
            ><span class="flex-1 block">{{
              $t("careers.benefits.health_benefits")
            }}</span>
          </li>
          <li class="ck-h6-new flex items-center w-full p-0 mb-0 list-none">
            <span class="block w-8 mr-6"
              ><svg
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-8 h-auto max-w-full"
              >
                <path
                  d="M25 19.412c-6.627 0-12-5.373-12-12 0-1.95.475-3.785 1.3-5.412C9.485 3.56 6 8.077 6 13.412c0 6.627 5.373 12 12 12 4.678 0 8.72-2.682 10.7-6.588-1.166.378-2.408.588-3.7.588Z"
                  fill="#ef0605"
                ></path></svg></span
            ><span class="flex-1 block">{{
              $t("careers.benefits.work_life_balance")
            }}</span>
          </li>
          <li class="ck-h6-new flex items-center w-full p-0 mb-0 list-none">
            <span class="block w-8 mr-6"
              ><svg
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-8 h-auto max-w-full"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m16.0001 14 12 5v4.0854c.5825.2059 1 .7615 1 1.4146 0 .5656-.313 1.058-.7753 1.3136.4623 1.0276.7753 2.711.7753 3.115 0 .5917-.6716 1.0714-1.5 1.0714-.8285 0-1.5-.4797-1.5-1.0714 0-.404.313-2.0874.7752-3.115-.4622-.2556-.7752-.748-.7752-1.3136 0-.6531.4174-1.2087 1-1.4146v-3.6687l-11 4.5833-12.99912-5.0322L16.0001 14Zm-8.00005 9.1333v3.5264c0 1.7422 1.27873 3.2204 3.00275 3.4712 3.3484.487 6.7496.487 10.098 0 1.7241-.2508 3.0028-1.729 3.0028-3.4712v-3.6524L16.0001 26l-8.00005-2.8667ZM16 12c3.3137 0 6-2.68629 6-6s-2.6863-6-6-6-6 2.68629-6 6 2.6863 6 6 6Zm.3592-2.94118v.94168H15.8v-.92501c-1.2117-.075-1.802-.95833-1.802-1.98334h1.1185c.0078.41667.2252.78334.6835.875V6.48382l-.4117-.125c-.831-.25-1.2427-.89167-1.2427-1.7 0-.95.7068-1.625 1.6544-1.725v-.93333h.5592v.93333c1.0486.13334 1.6388.925 1.6388 1.95834h-1.1184c-.0078-.34167-.1476-.69167-.5204-.825v1.34999l.2175.05834c.9864.29167 1.4213.925 1.4213 1.84166 0 .91667-.6368 1.60001-1.6388 1.74167Zm-.5592-5.025c-.2952.05833-.5282.26667-.5282.58334 0 .36069.1576.44179.4192.57642.0346.01778.0709.03649.109.05691V4.03382Zm.5592 3.91667c.2874-.08333.4893-.28334.4893-.63334 0-.30833-.1398-.52499-.4893-.66666v1.3Z"
                  fill="#ef0605"
                ></path></svg></span
            ><span class="flex-1 block">{{
              $t("careers.benefits.training_career_support")
            }}</span>
          </li>
          <li class="ck-h6-new flex items-center w-full p-0 mb-0 list-none">
            <span class="block w-8 mr-6"
              ><svg
                width="32"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-8 h-auto max-w-full"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5 30C22.9558 30 29 23.9558 29 16.5 29 9.04416 22.9558 3 15.5 3 8.04416 3 2 9.04416 2 16.5 2 23.9558 8.04416 30 15.5 30Zm.8087-6.6178v2.1188h-1.2582v-2.0813c-2.7263-.1687-4.0544-2.1562-4.0544-4.4625h2.5165c.0175.9375.5068 1.7625 1.5379 1.9688v-3.3375l-.9263-.2813c-1.8699-.5625-2.7961-2.0062-2.7961-3.825 0-2.1375 1.5903-3.65622 3.7224-3.88122v-2.1h1.2582v2.1c2.3592.3 3.6874 2.08122 3.6874 4.40622h-2.5165c-.0175-.7687-.3321-1.5562-1.1709-1.8562v3.0375l.4893.1312c2.2195.6563 3.1981 2.0813 3.1981 4.1438 0 2.0625-1.433 3.6-3.6874 3.9187ZM15.0505 12.076c-.6641.1312-1.1884.6-1.1884 1.3125 0 .8115.3546.994.9432 1.2969.0777.04.1595.0821.2452.1281V12.076Zm1.2582 8.8125c.6466-.1875 1.101-.6375 1.101-1.425 0-.6938-.3146-1.1813-1.101-1.5v2.925Z"
                  fill="#ef0605"
                ></path></svg></span
            ><span class="flex-1 block">{{
              $t("careers.benefits.food_stipend")
            }}</span>
          </li>
          <li class="ck-h6-new flex items-center w-full p-0 mb-0 list-none">
            <span class="block w-8 mr-6"
              ><svg
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-8 h-auto max-w-full"
              >
                <path
                  d="M11 3C7.686 3 5 5.686 5 9c0 .519.07327 1.02.19727 1.5C5.86427 7.914 8.205 6 11 6c1.363 0 2.6135.46021 3.6191 1.22656-.8907-.2506-1.8639-.3043-2.873-.09961-2.29601.466-4.15315 2.32119-4.61915 4.61715-.278 1.371-.08754 2.6818.43946 3.8008.342.726 1.4695.4964 1.4375-.3066-.022-.558.03468-1.1385.17968-1.7305.518-2.109 2.21521-3.80621 4.32421-4.32421.4943-.1216.9778-.17473 1.4512-.17773C14.2541 18.2446 4 22 4 22v2c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2v-2s-1 1-2 1-2-1-2-1-1 1-2 1-2-1-2-1-1 1-2 1-2-1-2-1h-1.9102s4.8705-3.3701 4.9063-12.89844c.1723.02823.3436.04257.5176.08594 2.095.521 3.7778 2.2058 4.2988 4.3008.148.595.2046 1.1772.1836 1.7402-.031.805 1.0984 1.0357 1.4414.3067.524-1.117.7135-2.4221.4355-3.7891-.4488-2.21168-2.1944-4.0027-4.373-4.54883C19.9802 7.07308 20.4805 7 21 7c2.795 0 5.1357 1.914 5.8027 4.5.124-.48.1973-.981.1973-1.5 0-3.314-2.686-6-6-6-1.8923 0-3.5704.88364-4.6699 2.25195C15.3328 4.32186 13.3225 3 11 3Z"
                  fill="#ef0605"
                ></path></svg></span
            ><span class="flex-1 block">{{
              $t("careers.benefits.early_day_off")
            }}</span>
          </li>
          <li class="ck-h6-new flex items-center w-full p-0 mb-0 list-none">
            <span class="block w-8 mr-6"
              ><svg
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="inline w-8 h-auto max-w-full"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.51749 3c-1.07458 0-1.9668.89222-1.9668 1.9668v2.41992c-.32992.18258-.63315.41557-.87695.71484-.56688.6952-.7931 1.61064-.61329 2.49024v.002C2.59167 13.178 3.33013 16.772 3.37686 17l-.16342.7955c-.25585 1.2451-.75822 3.6901-1.14908 5.5951-.18128.884.0467 1.8033.61523 2.502v.0019C3.24963 26.5932 4.10511 27 5.00772 27H24.0526c.9121 0 1.7768-.4112 2.3536-1.1172v-.0019c.5759-.7069.8061-1.6361.623-2.5293-.3763-1.8332-.8522-4.1493-1.1134-5.4206L25.7245 17l.2092-1.0189.0068-.0328c.2687-1.3085.7343-3.5762 1.1004-5.3604.18-.87736-.0447-1.79305-.6113-2.48829l-.002-.00195c-.2439-.29904-.5468-.53091-.8769-.71289V4.9668C25.5507 3.89222 24.6585 3 23.5839 3H5.51749Zm.0332 2H23.5507v2H5.55069V5ZM18.7332 17h.1531c-.2347-.326-.6025-.5186-1.0464-.5186-.444 0-.8117.1926-1.0465.5186H14.72c.2626-1.5804 1.3065-3.2077 2.872-5h2.1811c-.8799.9434-1.9084 2.1228-2.5776 3.2648.2726-.1489.6072-.2358 1.0285-.2358 1.3965 0 2.3247.8286 2.6484 1.971h2.808l.041.2012s.7967 3.8875 1.3438 6.5527c.062.3055-.0142.6209-.211.8633-.1992.244-.4907.3828-.8046.3828H5.00464c-.30339 0-.58538-.1358-.77735-.3711-.19053-.2351-.26761-.5405-.20703-.8359.54703-2.6662 1.35352-6.5918 1.35352-6.5918L5.41479 17l8.79881.002L18.7332 17Zm-7.0527 0H9.87118v-3.2124H8.03711v-1.1793L10.2182 12h1.4623v5Z"
                  fill="#ef0605"
                ></path>
                <path
                  d="M9.87125 17v2.3241H8v1.4897h5.5518v-1.4897h-1.8713V17H9.87125Zm4.84885 0c-.043.2586-.065.5159-.065.7724 0 1.7752 1.2268 3.2276 3.1848 3.2276C19.7112 21 21 19.6345 21 17.9462c0-.3306-.0433-.649-.1275-.9462h-1.9861c.1781.2473.2795.5713.2795.9462 0 .869-.5452 1.4648-1.326 1.4648-.7807 0-1.3259-.5958-1.3259-1.4648 0-.3749.1014-.6989.2795-.9462h-2.0734Z"
                  fill="#ef0605"
                ></path></svg></span
            ><span class="flex-1 block">{{
              $t("careers.benefits.paid_vacation")
            }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup type="ts">
import BaseButton from "../components/ui/BaseButton.vue";
import BackgroundImage from "../components/ui/BackgroundImage.vue";
import GoogleMap from '../components/homepage/GoogleMap.vue'
</script>
