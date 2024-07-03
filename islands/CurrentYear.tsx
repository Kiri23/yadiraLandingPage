import { useSignal } from "@preact/signals";

export default function CurrentYear() {
  const currentYear = useSignal(new Date().getFullYear());
  return <span>{currentYear}</span>;
}
