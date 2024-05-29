import { h } from "preact";

export default function Values() {
  return (
    <section class="bg-gray-100 p-8 text-center">
    <h2 class="text-2xl font-bold mb-4">Meet Dr. [Therapist’s Name]</h2>
    <span
      class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mx-auto mb-4"
    ></span>
    <p class="mb-6">
      Dr. [Therapist’s Name] believes in empowering patients to achieve mental
      wellness through a supportive and comfortable therapeutic process.
    </p>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white"
    >
      Meet Dr. [Therapist’s Name]
    </button>
  </section>
  );
}
