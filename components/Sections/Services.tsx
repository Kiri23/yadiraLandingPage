import { h } from "preact";

export default function Services() {
  return (
    <section id="services" class="bg-white p-8">
    <h2 class="text-2xl font-bold mb-6">Our Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center"
        data-v0-t="card"
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
          class="text-blue-600 mr-4"
        >
          <path
            d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
          ></path>
          <path
            d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
          ></path>
          <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
          <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
          <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
          <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
          <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
          <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
          <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
        </svg>
        <div>
          <h4 class="font-bold">Psychiatric Evaluation</h4>
          <p>
            Comprehensive assessment of emotional, behavioral, and developmental
            disorders.
          </p>
        </div>
      </div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center"
        data-v0-t="card"
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
          class="text-blue-600 mr-4"
        >
          <path
            d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
          ></path>
          <path d="m8.5 8.5 7 7"></path>
        </svg>
        <div>
          <h4 class="font-bold">Medication Management</h4>
          <p>
            Personalized medication strategies to optimize mental health
            treatment.
          </p>
        </div>
      </div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center"
        data-v0-t="card"
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
          class="text-blue-600 mr-4"
        >
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
          <path
            d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"
          ></path>
          <path d="M4 18v2"></path>
          <path d="M20 18v2"></path>
          <path d="M12 4v9"></path>
        </svg>
        <div>
          <h4 class="font-bold">Psychotherapy</h4>
          <p>
            Individual and group therapy sessions to support healing and growth.
          </p>
        </div>
      </div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm flex items-center"
        data-v0-t="card"
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
          class="text-blue-600 mr-4"
        >
          <rect width="14" height="8" x="5" y="2" rx="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2"></rect>
          <path d="M6 18h2"></path>
          <path d="M12 18h6"></path>
        </svg>
        <div>
          <h4 class="font-bold">Telemedicine</h4>
          <p>Remote consultations and therapy sessions for your convenience.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
