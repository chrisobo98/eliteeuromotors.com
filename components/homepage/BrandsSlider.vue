<template>
  <section>
    <!-- Slider Section -->
    <div
      class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-20"
    >
      <h3
        class="font-semibold text-4xl md:text-lg uppercase text-left md:text-center mx-12 md:mx-0"
      >
      {{ $t("home.home.servicing_since_2007") }}
  </h3>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/278a51e2-5d13-4ffc-b330-772269890800/public"
              height="auto"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="padding-left: 80px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/75c38cae-35ed-451a-970b-a3ad1eb3f400/public"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="padding-left: 80px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/ba3c4279-cbbe-4f71-2d4a-fae155965f00/public"
              height="50"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 50px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/25c54c18-c29c-4ed7-0297-08b97f130c00/public"
              height="auto"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 80px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/553d47af-fc45-492b-58c8-61ac53912900/public"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 80px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/278a51e2-5d13-4ffc-b330-772269890800/public"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 140px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/75c38cae-35ed-451a-970b-a3ad1eb3f400/public"
              height="100"
              width="150"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 100px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/ba3c4279-cbbe-4f71-2d4a-fae155965f00/public"
              height="50"
              width="150"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 50px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/25c54c18-c29c-4ed7-0297-08b97f130c00/public"
              height="auto"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 80px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/553d47af-fc45-492b-58c8-61ac53912900/public"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              style="margin-left: 80px"
              src="https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/278a51e2-5d13-4ffc-b330-772269890800/public"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* body {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100vh;
  justify-content: center;
} */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  /*   background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125); */
  height: 150px;
  margin: auto;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  width: auto;
}
.slider::before,
.slider::after {
  /*   background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%); */
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
  padding-left: 20px;
}
</style>
