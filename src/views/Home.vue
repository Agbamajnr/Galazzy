<template>
  <div class="w-screen min-w-full flex flex-col items-center min-h-screen overflow-auto bg-white py-7">
    <div class="body flex flex-col items-center w-full px-2 md:w-5/6 xl:w-4/5 min-h-full">
      <div class="navbar w-full flex flex-row items-center justify-between">
        <p class="text-4xl font-bold w-fit flex flex-row gap-x-1 g-white">
          <span style="color: black;">TEAM </span>
          <span class="text-primary">GALAXY</span>
        </p>
        <div class="md:flex hidden flex-row items-center h-full gap-x-5">
          <span class="text-lg text-black font-extrabold underline cursor-pointer">HOME</span>
          <span class="text-lg text-black font-medium underline cursor-pointer">FTC CHALLENGE</span>
          <span class="text-lg text-black font-medium underline cursor-pointer">FLL CHALLENGE</span>
        </div>
        <div class="flex flex-row items-center h-full gap-x-2">
          <span style="color: #630202" class="text-sm font-semibold">Log In</span>
          <button class="bg-primary h-11 w-28 rounded-lg grid place-items-center text-white">Sign Up</button>
        </div>
      </div>

      <div class="flex flex-col md:flex-row w-full items-center justify-between mt-14">
        <div class="flex flex-col items-start gap-y-24 w-full md:w-1/2 ">
          <p class="text-5xl text-secondary mt-7">ROBOTICS</p>
          <div class="flex flex-col items-start gap-y-3">
            <p class="text-black text-lg text-left">
              Robotics is the branch of technology that deals with the design, construction, operation, structural
              disposition, manufacture and application of robots. In FGC IKOM our Robotic Club berth on Gracious Professionalism
            </p>
            <div class="flex flex-row items-center  gap-x-4">
              <button class="bg-primary h-11 w-28 rounded-lg grid place-items-center text-white">Sign Up</button>
              <img src="../assets/icons/learn-more.svg" alt="">
            </div>
          </div>
        </div>
        <img src="../assets/img/robot.svg" style="object-fit: contain" class="h-full w-full md:w-1/2 2xl:w-fit" alt="">

      </div>

      <!-- Corre values tab -->
      <div class="service flex flex-col items-center w-full h-full gap-y-5">
        <p class="text-gray-500 text-sm underline tracking-widest">SERVICE</p>
        <p class="text-secondary-header text-5xl uppercase underline font-black">Our Vision & Our Goal</p>

        <div class="mt-3 flex flex-col md:flex-row items-center justify-between w-full h-fit">
          <div class="corevalues-tab flex flex-col items-center justify-between p-5 py-7">
            <div class="flex flex-col items-center gap-y-7">
              <img src="../assets/icons/idea.svg" alt="">
              <p class="text-black text-4xl font-black">INNOVATION</p>
              <p class="text-lg text-black text-center">We Use Creativity And Persistence To Solve Problems </p>
            </div>
            <button class="bg-primary h-11 w-36 rounded-lg grid place-items-center text-white">Learn More</button>
          </div>
          <div class="corevalues-tab flex flex-col items-center justify-between p-5 py-7">
            <div class="flex flex-col items-center gap-y-7">
              <img src="../assets/icons/team.svg" alt="">
              <p class="text-black text-4xl font-black">TEAM WORK</p>
              <p class="text-lg text-black text-center">We Are Stronger When We Work Together </p>
            </div>
            <button class="bg-primary h-11 w-36 rounded-lg grid place-items-center text-white">Learn More</button>
          </div>
          <div class="corevalues-tab flex flex-col items-center justify-between p-5 py-7">
            <div class="flex flex-col items-center gap-y-7">
              <img src="../assets/icons/search.svg" alt="">
              <p class="text-black text-4xl font-black">DISCOVERY</p>
              <p class="text-lg text-black text-center">We Explore New Skills And Ideas</p>
            </div>
            <button class="bg-primary h-11 w-36 rounded-lg grid place-items-center text-white">Learn More</button>
          </div>
        </div>
      </div>

      <!-- highlights -->
      <div class="highlights flex flex-row w-full items-center justify-between mt-24" style="height: 400px">
        <div class="flex flex-col items-start justify-between w-full md:w-1/3 h-full">
          <span class="text-secondary uppercase text-xl">HIGHLIGHTS</span>
          <p class="text-gray-400 text-sm">Robotics team video</p>
          <button class="border border-gray-200 rounded-full py-3 px-7 text-secondary">Explore</button>
        </div>
        <div class="md:w-2/3 w-full h-full rounded-xl">
          <video src="../assets/gallery/videos/2.mp4" class="rounded-lg" type="video/mp4" height="400" width="800px" controls>
          </video>
        </div>
      </div>

      <!-- our vision -->
      <div class="vision flex flex-col items-center w-full  2xl:w-4/5 h-full gap-y-5 mt-24 ">
        <p class="text-gray-500 text-sm underline tracking-widest">TESTMONIALS</p>
        <p class="text-secondary-header text-5xl uppercase underline font-black">our vision</p>

        <div class="flex flex-col items-center h-full w-full gap-y-4 mt-5">
          <div class="flex-row items-center flex w-full justify-between">
            <div class="vision-tab p-7">
              <p class="text-left text-xl text-black">
                Grow in the experience of FTC to better equip ourselves to compete next year
              </p>
            </div>
            <div class="vision-tab p-7">
              <p class="text-left text-xl text-black">
                Learn how to recruit members in preparation for expanding our team for the next season.
              </p>
            </div>
          </div>
          <div class="flex-row items-center flex w-full justify-between">
            <div class="vision-tab p-7">
              <p class="text-left text-xl text-black">
                To train our efficiency by focusing on one task at a time i.e. perfecting our robot to consistently rack
                in points by projecting rings to the highest goal
              </p>
            </div>
            <div class="vision-tab p-7">
              <p class="text-left text-xl text-black">
                Learn how to recruit members in preparation for expanding our team for the next season.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- our team -->

      <!-- team members -->
      <div class="team-members flex flex-col items-center w-full h-full gap-y-5 mt-24">
        <p class="text-gray-500 text-sm underline tracking-widest">OUR TEAM</p>
        <p class="text-secondary-header text-5xl uppercase underline font-black">Meet The Team galaxy</p>

        <div class="mt-6 flex flex-row flex-auto w-full h-fit  flex-wrap gap-5 justify-center">
          <div
            class="profile-card flex flex-col items-center rounded-lg border basis-full md:basis-1/3 2xl:basis-1/4 border-gray-200">
            <div class="flex flex-col items-center w-full h-5/6 gap-y-2 p-3">
              <img src="../assets/icons/memoji.svg" class="h-1/2" alt="">
              <span class="text-secondary font-medium text-xl mt-3">Agbama U.</span>
              <span class="text-black opacity-30 font-bold text-sm">Programmer</span>
            </div>
            <div class="flex flex-row items-center w-full h-1/6 border-t border-t-gray-200">
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/twitter.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/fb.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/dribble.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="profile-card flex flex-col items-center rounded-lg border basis-full md:basis-1/3 2xl:basis-1/4 border-gray-200">
            <div class="flex flex-col items-center w-full h-5/6 gap-y-2 p-3">
              <img src="../assets/icons/memoji.svg" class="h-1/2" alt="">
              <span class="text-secondary font-medium text-xl mt-3">Effa Kenneth</span>
              <span class="text-black opacity-30 font-bold text-sm">Programmer</span>
            </div>
            <div class="flex flex-row items-center w-full h-1/6 border-t border-t-gray-200">
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/twitter.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/fb.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/dribble.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="profile-card flex flex-col items-center rounded-lg border basis-full md:basis-1/3 2xl:basis-1/4 border-gray-200">
            <div class="flex flex-col items-center w-full h-5/6 gap-y-2 p-3">
              <img src="../assets/icons/memoji.svg" class="h-1/2" alt="">
              <span class="text-secondary font-medium text-xl mt-3">Maxwell Azubike</span>
              <span class="text-black opacity-30 font-bold text-sm">Client Manager</span>
            </div>
            <div class="flex flex-row items-center w-full h-1/6 border-t border-t-gray-200">
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/twitter.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/fb.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/dribble.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="profile-card flex flex-col items-center rounded-lg border basis-full md:basis-1/3 2xl:basis-1/4 border-gray-200">
            <div class="flex flex-col items-center w-full h-5/6 gap-y-2 p-3">
              <img src="../assets/icons/memoji.svg" class="h-1/2" alt="">
              <span class="text-secondary font-medium text-xl mt-3">Ekpa Hysaint</span>
              <span class="text-black opacity-30 font-bold text-sm">Client Manager</span>
            </div>
            <div class="flex flex-row items-center w-full h-1/6 border-t border-t-gray-200">
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/twitter.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/fb.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/dribble.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="profile-card flex flex-col items-center rounded-lg border basis-full md:basis-1/3 2xl:basis-1/4 border-gray-200">
            <div class="flex flex-col items-center w-full h-5/6 gap-y-2 p-3">
              <img src="../assets/icons/memoji.svg" class="h-1/2" alt="">
              <span class="text-secondary font-medium text-xl mt-3">Ekpa Hysaint</span>
              <span class="text-black opacity-30 font-bold text-sm">Client Manager</span>
            </div>
            <div class="flex flex-row items-center w-full h-1/6 border-t border-t-gray-200">
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/twitter.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/fb.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/dribble.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="profile-card flex flex-col items-center rounded-lg border basis-full md:basis-1/3 2xl:basis-1/4 border-gray-200">
            <div class="flex flex-col items-center w-full h-5/6 gap-y-2 p-3">
              <img src="../assets/icons/memoji.svg" class="h-1/2" alt="">
              <span class="text-secondary font-medium text-xl mt-3">Neji Ekaba</span>
              <span class="text-black opacity-30 font-bold text-sm">Engineer</span>
            </div>
            <div class="flex flex-row items-center w-full h-1/6 border-t border-t-gray-200">
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/twitter.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/fb.svg" alt="">
              </div>
              <div class="grid place-items-center border-r h-full border-r-gray-200 w-2/6">
                <img src="../assets/icons/dribble.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- gallery -->
      <div class="gallery flex flex-col items-center w-full h-full gap-y-5 mt-24">
        <p class="text-gray-500 text-sm underline tracking-widest">OUR TEAM</p>
        <p class="text-secondary-header text-5xl uppercase underline font-black">GALLERY</p>

        <div class="mt-6 flex flex-row flex-auto w-full h-fit  flex-wrap gap-5 justify-center">
          <img src="../assets/gallery/images/1.jpg" class="h-72 basis-full md:basis-1/3 3xl:basis-1/4" alt="">
          <img src="../assets/gallery/images/2.jpg" class="h-72 basis-full md:basis-1/3 3xl:basis-1/4" alt="">
          <img src="../assets/gallery/images/3.jpg" class="h-72 basis-full md:basis-1/3 3xl:basis-1/4" alt="">
          <img src="../assets/gallery/images/4.jpg" class="h-72 basis-full md:basis-1/3 3xl:basis-1/4" alt="">
          <img src="../assets/gallery/images/5.jpg" class="h-72 basis-full md:basis-1/3 3xl:basis-1/4" alt="">
        </div>
      </div>

      <!-- sponsors -->
      <div class="sponsors flex flex-col items-center w-full h-full gap-y-5 mt-24">
        <p class="text-gray-500 text-sm underline tracking-widest">OUR TEAM</p>
        <p class="text-secondary-header text-5xl uppercase underline font-black">SPONSORS</p>

        <div class="flex flex-row items-center justify-center gap-x-10 w-full ">
          <img src="../assets/img/uba.svg" alt="">
        </div>
      </div>

      <div class="flex flex-row w-full items-center justify-between mt-24 py-8 border-b border-b-gray-200">
        <div class="flex flex-row items-center justify-between w-1/3">
          <p class="text-lg font-bold"><span class="text-primary">GAL</span><span
            style="color: black;">AXY</span></p>
          <p class="text-secondary text-sm">&#169; 2023 Galaxy. All rights reserved.</p>
        </div>
        <div class="flex flex-row items-center gap-x-3 w-2/3 justify-end">
          <span class="text-secondary text-sm">Portfolio</span>
          <span class="text-secondary text-sm">How it Works</span>
          <span class="text-secondary text-sm">FLL</span>
          <span class="text-secondary text-sm">FTC</span>
          <span class="text-secondary text-sm">The Team</span>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.corevalues-tab {
  width: 352px;
  height: 508px;
  background: #FFFFFF;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 28px;
}

.vision-tab {
  width: 400px;
  height: 260px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  box-shadow: 9px 4px 8px rgba(0, 0, 0, 0.25);
}

.profile-card {
  max-height: 370px;
  height: 370px;
}
</style>