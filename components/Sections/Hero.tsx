export default function Hero() {
  return (
    <div class="space-y-2 xl:space-y-4">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="grid mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 text-neutral-content">
          <div className="max-w-md">
            <h1 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
              Discover the Path to Wellbeing
            </h1>
            <p class="mx-auto text-white md:text-xl dark:text-white">
              At Be In peace, I believe in a holistic approach to mental health
              and wellness. I provide personalized care to help you navigate
              life's challenges and find inner peace.
            </p>
            <div class="space-x-4 mt-6">
              <a
                href=""
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/christian_nogueras94/30min?back=1'});return false;"
                class="inline-flex h-9 items-center justify-center rounded-md bg-pink px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-pink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2B4257] disabled:pointer-events-none disabled:opacity-50 dark:bg-pink dark:text-gray-50 dark:hover:bg-pink dark:focus-visible:ring-[#2B4257]"
              >
                Schedule time with me
              </a>
            </div>
          </div>
          <div class="flex flex-col items-start space-y-4">
            <div class="inline-block rounded-lg bg-pink px-3 py-1 text-sm text-white">
              Our Approach
            </div>
            <p class="mx-auto text-gray-500 md:text-xl dark:text-white">
              At Be In Peace, I believe in a holistic and personalized approach
              to mental wellness. I am Dr. Yadira Nogueras-Rosado, and I am here
              to help you navigate life's challenges and find inner peace with
              dedicated, compassionate care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
