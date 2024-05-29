import { h } from "preact";

export default function Home() {
  return (
    <section
    id="home"
    class="flex flex-col items-center justify-center bg-gray-100 p-8 text-center"
  >
    <span
      class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4"
    ></span>
    <h2 class="text-3xl font-bold mb-2">Welcome to Be in Peace</h2>
    <p class="mb-6">
      Our mission is to provide compassionate and high-quality care to our
      patients.
    </p>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white"
    >
      Book an Appointment
    </button>
  </section>
  );
}
