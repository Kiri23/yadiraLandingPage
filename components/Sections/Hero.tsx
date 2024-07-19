export default function Hero() {
  return (
    <div className="mx-auto font-sans font-light lg:pt-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
        <div className="lg:w-[45%] text-center mx-3 lg:text-left lg:mx-0 mb-8 lg:mb-0">
          <h1 className="text-blueBrand leading-relaxed">
            <span className="text-5xl lg:text-6xl">
              Find Your Peace
            </span>
            <br />
            <span className="text-xl font-light lg:text-4xl px-5">
              Discover Your Resilience
            </span>
          </h1>
          <p className="mt-3 text-base leading-loose">
            Your journey to serenity and personal evolution begins here. We
            offer gentle guidance to help you navigate life's challenges with
            grace and confidence.
          </p>
          <div className="mt-8 w-full hidden lg:visible">
            <button
              type={"button"}
              class="lg:w-1/2 p-2 lg:p-6 sm:py-3 text-lg uppercase text-white font-medium rounded-xl bg-blueBrand hover:shadow-lg"
            >
              Schedule a session
            </button>
          </div>
        </div>

        <div className="lg:w-[55%]">
          <div
            className="relative w-full rounded-3xl overflow-hidden shadow-md"
            style={{ paddingTop: "66.67%" }}
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-90 filter brightness-105 contrast-95 saturate-105"
              src="/oneToOne3.jpg"
              alt="Serene therapeutic environment"
              style={{
                boxShadow: "inset 0 0 100px 20px rgba(245, 218, 225, 0.4)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-100 to-transparent opacity-30">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
