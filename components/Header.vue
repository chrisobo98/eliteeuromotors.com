<template>
  <header :class="{ 'header-scrolled': scrolled }" class="main-header bg-[#ffffff] dark:bg-[#1d1d1d]">
    <!-- Announcement Banner -->
    <div class="bg-red-600 text-center text-white py-2">
      <p>🔧 Oil Changes only $99 all Summer 2024 for a limited time ⚙️</p>
    </div>

    <!-- Top Navigation -->
    <div class="flex flex-wrap justify-between items-center px-4 py-2 border-b border-gray-700">
      <div class="flex flex-wrap space-x-4">

        <!-- Address -->
        <span class="flex items-center w-full md:w-auto ml-4">
          <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
            viewBox="0 0 24 24">
            <path fill="#ff0000"
              d="m13.622,15.038c.123-.023.248-.038.378-.038h8c.129,0,.255.015.377.038l-3.67,3.67c-.378.377-1.036.377-1.414,0l-3.671-3.67Zm6.499,5.084c-.585.585-1.353.877-2.121.877s-1.536-.292-2.121-.877l-3.764-3.764c-.069.202-.115.416-.115.641v5c0,1.105.895,2,2,2h8c1.105,0,2-.895,2-2v-5c0-.226-.046-.439-.115-.642l-3.764,3.764Zm-3.05-17.193c-1.888-1.889-4.399-2.929-7.07-2.929S4.818,1.04,2.929,2.929C1.04,4.818,0,7.329,0,10s1.04,5.182,2.955,7.096l5.181,4.833c.708.661,1.864.159,1.864-.81v-4.118c0-.756.222-1.456.587-2.059-.195.023-.386.059-.587.059-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5c0,1.131-.392,2.164-1.028,3.003.01,0,.018-.003.028-.003h5.54c.3-.959.46-1.967.46-3,0-2.671-1.04-5.182-2.929-7.071Zm-7.071,4.071c-1.654,0-3,1.346-3,3s1.346,3,3,3,3-1.346,3-3-1.346-3-3-3Z" />
          </svg>
          505 Roper Pkwy, Ocoee, FL 34761
        </span>

        <!-- Email -->
        <span class="flex items-center w-full md:w-auto mt-2 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="20" height="20" class="mr-2">
            <path fill="#ff0000"
              d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" />
            <path fill="#ff0000"
              d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" />
          </svg>
          info@eliteeuromotors.com
        </span>

        <!-- Phone Number -->
        <span class="flex items-center w-full md:w-auto mt-2 md:mt-0">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20"
            height="20" class="mr-2">
            <path fill="#ff0000"
              d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z" />
          </svg>
          (321) 527-1563
        </span>

        <!-- Appointment Button Desktop -->
        <NuxtLink to="/appointments"
          class="nav-item-bounce hidden lg:inline delay-200 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
          {{ $t('home.navbar.appointment') }}
        </NuxtLink>
      </div>

      <!-- Language Dropdown and support -->
      <div class="flex items-center space-x-4 mt-2 md:mt-0 ml-2">
        
        <!-- Notifications -->
        <button type="button" data-dropdown-toggle="notification-dropdown"
          class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <span class="sr-only">View notifications</span>
          <!-- Bell icon -->
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 14 20">
            <path
              d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
          </svg>
        </button>
        
        <!-- Dropdown menu -->
        <div
          class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
          id="notification-dropdown">
          <div
            class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            Notifications
          </div>
          <div>
            <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar">
                <div
                  class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                  <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 18 18">
                    <path
                      d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                    <path
                      d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                  </svg>
                </div>
              </div>
              <div class="pl-3 w-full">
                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">New message from <span
                    class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set
                  for the presentation?"</div>
                <div class="text-xs font-medium text-primary-700 dark:text-primary-400">a few moments ago</div>
              </div>
            </a>
            <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar">
                <div
                  class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                  <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                  </svg>
                </div>
              </div>
              <div class="pl-3 w-full">
                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span
                    class="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span
                    class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
                <div class="text-xs font-medium text-primary-700 dark:text-primary-400">10 minutes ago</div>
              </div>
            </a>
            <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                  alt="Joseph McFall avatar">
                <div
                  class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                  <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                  </svg>
                </div>
              </div>
              <div class="pl-3 w-full">
                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span
                    class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span
                    class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view
                  more stories.</div>
                <div class="text-xs font-medium text-primary-700 dark:text-primary-400">44 minutes ago</div>
              </div>
            </a>
            <a href="#" class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
              <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="Roberta Casas image">
                <div
                  class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                  <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 18">
                    <path
                      d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                </div>
              </div>
              <div class="pl-3 w-full">
                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span
                    class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a
                  comment: <span class="font-medium text-primary-700 dark:text-primary-500">@bonnie.green</span> what do
                  you say?</div>
                <div class="text-xs font-medium text-primary-700 dark:text-primary-400">1 hour ago</div>
              </div>
            </a>
            <a href="#" class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">
              <div class="flex-shrink-0">
                <img class="w-11 h-11 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                  alt="Robert image">
                <div
                  class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                  <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 14">
                    <path
                      d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                  </svg>
                </div>
              </div>
              <div class="pl-3 w-full">
                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"><span
                    class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video:
                  Glassmorphism - learn how to implement the new design trend.</div>
                <div class="text-xs font-medium text-primary-700 dark:text-primary-400">3 hours ago</div>
              </div>
            </a>
          </div>
          <NuxtLink href="/notifications"
            class="block py-2 text-base font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
            <div class="inline-flex items-center ">
              <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"></path>
              </svg>
              View all
            </div>
          </NuxtLink>
        </div>
        
        <!-- Apps -->
        <button type="button" data-dropdown-toggle="apps-dropdown"
          class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
          <span class="sr-only">View notifications</span>
          <!-- Icon -->
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 18 18">
            <path
              d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
          </svg>
        </button>
        
        <!-- Dropdown menu -->
        <div
          class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600"
          id="apps-dropdown">
          <div
            class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            Your Garage
          </div>
          <div class="grid grid-cols-3 gap-4 p-4">
            <NuxtLink to="/my-vehicle" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 25">                
                <path d="M22,18H2a2,2,0,0,1-2-2V15a4,4,0,0,1,4-4H20a4,4,0,0,1,4,4v1A2,2,0,0,1,22,18ZM3.058,20c-.587,3.954,5.472,3.952,4.884,0Zm13,0c-.587,3.954,5.472,3.952,4.884,0ZM12,9h7.825L16.437,4.141A5,5,0,0,0,12.336,2H12ZM10,2H8.5A5.024,5.024,0,0,0,3.825,5.228L2.3,9.249A5.956,5.956,0,0,1,4,9h6Z"/>
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">My Vehicle</div>
            </NuxtLink>
            <NuxtLink to="/maintenance" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 25">
                <path xmlns="http://www.w3.org/2000/svg" d="m2,2C2,.895,2.895,0,4,0s2,.895,2,2-.895,2-2,2-2-.895-2-2Zm10,7v-1.5c0-.828-.672-1.5-1.5-1.5h-3c-.828,0-1.5.672-1.5,1.5v1.5h6Zm-3-4c1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2,.895,2,2,2Zm5-1c1.105,0,2-.895,2-2S15.105,0,14,0s-2,.895-2,2,.895,2,2,2Zm-10,3.5c0-.98.407-1.864,1.058-2.5h-2.558c-.828,0-1.5.672-1.5,1.5v1.5h3v-.5Zm11.5-2.5h-2.558c.651.636,1.058,1.52,1.058,2.5v.5h3v-1.5c0-.828-.672-1.5-1.5-1.5Zm7.648,3.681c-.515-.469-1.186-.712-1.878-.678-.697.032-1.339.334-1.794.835l-3.541,3.737c.032.21.065.42.065.638,0,2.083-1.555,3.876-3.617,4.17l-4.241.606-.283-1.979,4.241-.606c1.084-.155,1.9-1.097,1.9-2.191,0-1.22-.993-2.213-2.213-2.213H3c-1.654,0-3,1.346-3,3v7c0,1.654,1.346,3,3,3h9.664l10.674-11.655c.948-1.062.862-2.707-.189-3.665Z"/>
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Maintenance</div>
            </NuxtLink>
            <NuxtLink href="/notifications" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path
                  d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                <path
                  d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Notifications</div>
            </NuxtLink>
            <NuxtLink href="/account" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Profile</div>
            </NuxtLink>
            <NuxtLink href="/garage" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Garage</div>
            </NuxtLink>
            <NuxtLink href="/vehicles" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path
                  d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">All Vehicles</div>
            </NuxtLink>
            <NuxtLink href="/account" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
              <svg
                class="mx-auto mb-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
              </svg>
              <div class="text-sm font-medium text-gray-900 dark:text-white">Logout</div>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Dark Mode Switch -->
        <DarkModeSwitcher @update:isDark="handleDarkModeUpdate" />
        <LanguageSelector />

        <!-- Support Link -->
        <a href="#" class="flex items-center">
          Support
          <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
            width="20" height="20" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512"
            xml:space="preserve">
            <g>
              <path
                d="M21 21.5V24H3v-2.5C3 19.019 5.019 17 7.5 17h9c2.481 0 4.5 2.019 4.5 4.5ZM6.872 4.027c1.529-1.433 3.531-2.141 5.63-2.011 3.924.254 6.999 3.669 6.999 7.774a3.212 3.212 0 0 1-3.209 3.209h-2.406a1.994 1.994 0 0 0-3.91.561 2 2 0 0 0 2 2c.538 0 1.025-.215 1.384-.561h2.932a5.215 5.215 0 0 0 5.209-5.209C21.5 4.634 17.604.342 12.63.021a9.41 9.41 0 0 0-7.126 2.548 9.535 9.535 0 0 0-2.99 6.432h2.003a7.42 7.42 0 0 1 2.355-4.973ZM15.1 11h1.368a.997.997 0 0 0 .997-.866 5.646 5.646 0 0 0-.091-1.831c-.444-2.079-2.131-3.756-4.213-4.184A5.51 5.51 0 0 0 6.502 9.5a5.48 5.48 0 0 0 1.52 3.792c.11-2.111 1.841-3.793 3.979-3.793 1.258 0 2.366.592 3.099 1.5Z"
                fill="#ff0000" opacity="1" data-original="#000000" />
            </g>
          </svg>
        </a>
      </div>
    </div>

    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-3xl p-4">
      <NuxtImg
      provider="cloudflare"
      loading="lazy"
      :src="imageSrc"
      alt="Elite Euro Logo"
      class="rounded-lg w-4/6 h-full md:w-1/2 lg:w-1/4"
    />
      <div class="flex items-center space-x-3 md:space-x-3">

        <!-- Hamburger Toggle Mobile -->
        <button @click="toggleMenu" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <!-- Nav Links -->
      <div :class="{ hidden: !menuOpen }" id="mega-menu-full" class="w-full lg:flex lg:w-auto lg:order-1 mt-4 lg:mt-0">
        <ul
          class="flex flex-col p-4 border border-gray-100 rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:border-0">
          <NavLink class="nav-item-bounce delay-300" href="/" :text="$t('home.navbar.home')" />
          <NavLink class="nav-item-bounce delay-500" href="/contact" :text="$t('home.navbar.contact')" />
          <NavLink class="nav-item-bounce delay-500" href="/services" :text="$t('home.navbar.services')" />
          <NavLink class="nav-item-bounce delay-500" href="/about" :text="$t('home.navbar.about')" />
          <NavLink class="nav-item-bounce delay-500" href="/careers" :text="$t('home.navbar.careers')" />
          <NavLink class="nav-item-bounce delay-500" href="/blog" :text="$t('home.navbar.blog')" />

          <!-- Appointment Button Mobile -->
          <NuxtLink to="/appointments"
            class="nav-item-bounce mt-4 delay-200 lg:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
            {{ $t('home.navbar.appointment') }}
          </NuxtLink>

          <!-- Account & Cart -->
          <div class="flex items-center space-x-4 mt-4 lg:mt-0">
            <a href="/cart" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" d="Layer_1"
                data-name="Layer 1" viewBox="0 0 24 24">
                <path fill="#ff0000"
                  d="m22,9h-13c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2h13c1.103,0,2-.897,2-2v-3c0-1.103-.897-2-2-2Zm-13-2h3c1.103,0,2-.897,2-2v-3c0-1.103-.897-2-2-2h-3c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2ZM22,1h-4c-1.103,0-2,.897-2,2v2c0,1.103.897,2,2,2h4c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2Zm1,17h-15c-1.654,0-3-1.346-3-3V4C5,1.794,3.206,0,1,0,.448,0,0,.447,0,1s.448,1,1,1c1.103,0,2,.897,2,2v11c0,2.045,1.237,3.802,3,4.576v1.424c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h5v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1c.552,0,1-.447,1-1s-.448-1-1-1Z" />
              </svg>
              4 items ($106.7)
            </a>
            <div class="relative">
              <button @click="toggleDropdown('account')" class="flex items-center focus:outline-none">
                Account
                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div v-if="isDropdownOpen.account"
                class="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                <NuxtLink to="/account" class="block px-4 py-2 hover:bg-gray-200">Profile</NuxtLink>
                <NuxtLink to="/account" class="block px-4 py-2 hover:bg-gray-200">Settings</NuxtLink>
                <NuxtLink to="/account" class="block px-4 py-2 hover:bg-gray-200">Logout</NuxtLink>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { defineComponent } from 'vue';
import LanguageSelector from '~/components/ui/LanguageSelector.vue';
import DarkModeSwitcher from '~/components/effects/DarkModeSwitcher.vue';
import NavLink from '~/components/ui/NavLink.vue';
import DropdownItem from '~/components/ui/DropdownItem.vue';

export default defineComponent({
  components: {
    LanguageSelector,
    DarkModeSwitcher,
    NavLink,
    DropdownItem,
  },
  setup() {
    const isDropdownOpen = reactive({
      language: false,
      location: false,
      account: false,
      allCategories: false,
    });

    const imageSrc = computed(() => !isDark.value ? "50490653-5765-4163-6f7a-5c4e4a960400/public" : "/35d4ffef-3a9e-4cc4-a5b6-86947beedc00/public")

    const scrolled = ref(false);
    const menuOpen = ref(false);
    const megaMenuOpen = ref(false);
    const isDark = ref(false);

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const toggleMegaMenu = () => {
      megaMenuOpen.value = !megaMenuOpen.value;
    };

    const handleDarkModeUpdate = (value: boolean) => {
      isDark.value = !isDark.value;
    };

    const toggleDropdown = (dropdown: keyof typeof isDropdownOpen) => {
      isDropdownOpen[dropdown] = !isDropdownOpen[dropdown];
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isDropdownOpen,
      scrolled,
      menuOpen,
      megaMenuOpen,
      toggleDropdown,
      toggleMenu,
      toggleMegaMenu,
      isDark,
      imageSrc,
      handleDarkModeUpdate,
    };
  },
});
</script>

<style scoped>
.main-header {
  transition: background-color 0.3s ease, color 0.3s ease;
  top: 0;
  z-index: 50;
}

.nav-item-bounce {
  transition: color 0.3s ease;
  /* Ensure text color transition is smooth */
}

@keyframes bounce-once {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.logo-bounce {
  animation: bounce-once 1s ease;
  animation-fill-mode: forwards;
}

.nav-item-bounce {
  animation: bounce-once 1s ease;
  animation-fill-mode: forwards;
}
</style>
