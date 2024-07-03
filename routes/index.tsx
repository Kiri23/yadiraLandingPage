import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import {
  HeroSection,
  MeetTherapistSection,
  ServicesSection,
} from "../components/Sections/index.tsx";
export default function Home() {
  return (
    <div class="flex flex-col min-h-[100dvh] pink">
      <Navbar />
      <main class="flex-1">
        <section id="hero" class="w-full pt-12">
          <HeroSection />
        </section>
        <section id="services" class="w-full py-12">
          <ServicesSection />
        </section>
        <section id="meetMe" class="w-full">
          <MeetTherapistSection />
        </section>
        <section class="w-full py-6">
          <div class="container px-4 md:px-6">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
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
      <Footer />
    </div>
  );
}
