export default function Hero() {
  return (
    <div class="space-y-2 xl:space-y-4">
      <div className="hero place-items-stretch relative">
        <div className="hero-overlay bg-opacity-60 bg-white"></div>
        <div className="hero-content max-w-none justify-around px-4 py-10 sm:px-6 md:px-10 text-neutral-content">
          <div className="max-w-md">
            <h1 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-neutral">
              Discover the Path to Wellbeing
            </h1>
            <p class="mx-auto text-neutral md:text-xl">
              At Be In peace, I believe in a holistic approach to mental health
              and wellness. I provide personalized care to help you navigate
              life's challenges and find inner peace.
            </p>
            <div class="space-x-4 mt-10">
              <a
                role={"button"}
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/christian_nogueras94/30min?back=1'});return false;"
                class="btn-large rounded-2xl btn p-5 h-16 bg-blue text-neutral-content"
              >
                Schedule time with me
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <img
              src="heroPerson.jpg"
              alt="Dr. Yadira Nogueras-Rosado"
              className="max-w-sm rounded-lg shadow-2xl w-full h-auto object-cover lg:max-h-[80vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
