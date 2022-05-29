<template>
  <div class="bg-gray-100">
    <div class="relative c-container py-36">
      <div class="lg:flex lg:items-center">
        <div
          class="relative z-10 p-8 mx-auto shadow-lg  bg-opacity-90 bg-primary-stokerie rounded-tl-xl rounded-tr-xl lg:rounded-xl h-fit lg:-right-12"
        >
          <div class="absolute -top-6 border-gray-50">
            <span
              class="flex items-center justify-center w-16 h-16 bg-white border rounded-md "
            >
              <svg
                class="w-10 h-10 text-primary-stokerie"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 lg:w-96">
            <h2
              class="text-4xl font-extrabold tracking-tight text-gray-900 "
            >
              Location
            </h2>
            <p class="mt-4 text-lg text-gray-900">
              Je kan ons vinden in het Oud Pompgebouw te Bossuit:
              <a
                class="flex items-center mt-3 space-x-5 font-bold  hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=The+Spirits+Valley"
                target="_blank"
              >
                Doorniksesteenweg 402
                <br />
                8583 Bossuit
                <svg
                  class="w-8 h-8 lg:w-12 lg:h-12"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                  />
                </svg>
              </a>
            </p>
          </div>
        </div>
        <div>
          <div class="relative z-0 h-full">
            <img
              class="w-full shadow-xl  rounded-bl-xl rounded-br-xl lg:rounded-xl ring-1 ring-black ring-opacity-5 lg:w-auto"
              src="https://a.storyblok.com/f/120756/6000x4000/90eeaa44be/img_9972.jpg"
              alt="Drinks"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
};
</script>
