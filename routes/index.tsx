export default function Home() {
  return (
    <div class="flex flex-col min-h-[100dvh] pink">
      <header class="px-4 lg:px-6 h-14 flex items-center bg-pink">
        <a class="flex items-center justify-center" href="#">
        </a>
        <nav class="ml-auto flex gap-4 sm:gap-6">
          <a
            class="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </a>
          <a
            class="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Services
          </a>
          <a
            class="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </a>
        </nav>
      </header>
      <main class="flex-1">
        <section class="w-full pt-12">
          <div class="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div class="grid mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                  Discover the Path to Wellbeing
                </h1>
                <p class="mx-auto text-white md:text-xl dark:text-white">
                  At Be In peace, I believe in a holistic approach to mental
                  health and wellness. I provide personalized care to help you
                  navigate life's challenges and find inner peace.
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
                  At Be In Peace, I believe in a holistic and personalized
                  approach to mental wellness. I am Dr. Yadira Nogueras-Rosado,
                  and I am here to help you navigate life's challenges and find
                  inner peace with dedicated, compassionate care.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full py-12">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-pink px-3 py-1 text-sm text-white">
                  Our Services
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Personalized Care for Your Wellbeing
                </h2>
                <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
                  At Be In peace, we offer a range of services to address your
                  unique mental health and wellness needs. I'm here to guide you
                  on your journey to personal growth and fulfillment.
                </p>
              </div>
            </div>
            <div class="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div class="grid gap-1">
                <div class="bg-pink rounded-xl p-6 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-10 w-10"
                  >
                    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
                    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z">
                    </path>
                    <path d="M4 18v2"></path>
                    <path d="M20 18v2"></path>
                    <path d="M12 4v9"></path>
                  </svg>
                  <h3 class="text-lg font-bold mt-4">Individual Therapy</h3>
                  <p class="text-sm mt-2">
                    Personalized one-on-one sessions to address your specific
                    mental health concerns and goals.
                  </p>
                </div>
              </div>
              <div class="grid gap-1">
                <div class="bg-pink rounded-xl p-6 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-10 w-10"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 class="text-lg font-bold mt-4">Telehealth Services</h3>
                  <p class="text-sm mt-2">
                    Convenient and accessible remote therapy sessions to support
                    your mental health needs.
                  </p>
                </div>
              </div>
              <div class="grid gap-1">
                <div class="bg-pink rounded-xl p-6 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-10 w-10"
                  >
                    <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                    <rect width="7" height="5" x="7" y="7" rx="1"></rect>
                    <rect width="7" height="5" x="10" y="12" rx="1"></rect>
                  </svg>
                  <h3 class="text-lg font-bold mt-4">Depression Treatment</h3>
                  <p class="text-sm mt-2">
                    Personalized care to help you overcome life's emotional
                    hurdles and achieve mental well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full py-12">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-pink px-3 py-1 text-sm text-white">
                  Meet Your Therapist
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Meet Dr. Yadira Nogueras Rosado
                </h2>
                <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#2B4257]">
                  Welcome! I earned my medical degree from the prestigious
                  Universidad Central Del Caribe, accredited by the Liaison
                  Committee on Medical Education. Specializing in psychiatry, I
                  completed my residency at the esteemed Ponce Health Science
                  University, an ACGME accredited program. After my training, I
                  moved to Florida, where I have been dedicated to enhancing
                  community mental health.
                </p>
              </div>
            </div>
            <div class="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-1">
              <div class="grid gap-1">
                <img
                  src="/me.png"
                  alt="Therapist"
                  class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="w-full py-6">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Make Your Appointment
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Schedule a Session Today
                </h2>
                <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Take the first step towards your mental health and wellness
                  journey. Book an appointment with one of our experienced
                  therapists today.
                </p>
              </div>
              <div class="space-x-4 mt-6">
                <a
                  href=""
                  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/christian_nogueras94/30min?back=1'});return false;"
                  class="inline-flex h-9 items-center justify-center rounded-md bg-pink px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-pink focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink disabled:pointer-events-none disabled:opacity-50 dark:bg-pink dark:text-gray-50 dark:hover:bg-pink dark:focus-visible:ring-pink"
                >
                  Schedule time with me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class="w-full py-12">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Stay Connected
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Follow Us on Social Media
                </h2>
                <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stay up-to-date with the latest news, tips, and resources from
                  Be In peace. Follow us on social media to connect with our
                  community.
                </p>
              </div>
              <div class="flex gap-4">
                <a
                  class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                    </path>
                  </svg>
                  <span class="sr-only">Facebook</span>
                </a>
                <a
                  class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                    </path>
                  </svg>
                  <span class="sr-only">Twitter</span>
                </a>
                <a
                  class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5">
                    </rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                    </path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span class="sr-only">Instagram</span>
                </a>
                <a
                  class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                    </path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span class="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Be In peace. All rights reserved.
        </p>
        <nav class="sm:ml-auto flex gap-4 sm:gap-6">
          <a class="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a class="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
        </nav>
      </footer>
    </div>
  );
}
