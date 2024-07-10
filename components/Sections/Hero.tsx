export default function Hero() {
  return (
    // max-w-[110rem]
    <div class=" max-w-[95rem] mx-auto mt-12 sm:px-6 lg:px-8 drop-shadow-xl">
      <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div class="lg:col-span-3">
          <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl py-2">
            Discover the Path to Wellbeing
          </h1>
          <p class="mt-3 text-lg text-gray-800">
            At Be In peace, I believe in a holistic approach to mental health
            and wellness. I provide personalized care to help you navigate
            life's challenges and find inner peace.
          </p>

          <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <a
              class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blueBrand text-white hover:bg-blueBrand disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Schedule time with me
            </a>
          </div>
        </div>

        <div class="lg:col-span-4 mt-6 lg:mt-0 px-8">
          <img
            class="w-full rounded-xl"
            src="/oneToOne3.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
