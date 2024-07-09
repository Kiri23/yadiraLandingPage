export default function Services() {
  return (
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <div class="inline-block rounded-lg bg-pink px-3 py-1 text-sm text-dark">
            Our Services
          </div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-dark">
            Personalized Care for Your Wellbeing
          </h2>
          <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-dark">
            At Be In peace, we offer a range of services to address your unique
            mental health and wellness needs. I'm here to guide you on your
            journey to personal growth and fulfillment.
          </p>
        </div>
      </div>
      <div class="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <div class="grid gap-1">
          <div class="bg-pink rounded-xl p-6 text-dark">
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
              Personalized one-on-one sessions to address your specific mental
              health concerns and goals.
            </p>
          </div>
        </div>
        <div class="grid gap-1">
          <div class="bg-pink rounded-xl p-6 text-dark">
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
              Convenient and accessible remote therapy sessions to support your
              mental health needs.
            </p>
          </div>
        </div>
        <div class="grid gap-1">
          <div class="bg-pink rounded-xl p-6 text-dark">
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
              Personalized care to help you overcome life's emotional hurdles
              and achieve mental well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
