const whatsappUrl =
  'https://wa.me/+201099398877?text=Hi%20Air%20Marketing%20Agency%2C%20I%27d%20like%20to%20talk%20about%20marketing.';

export function WhatsAppBubble() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Air Marketing Agency on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8 sm:h-9 sm:w-9"
      >
        <path d="M16.04 3C8.87 3 3.04 8.82 3.04 15.99c0 2.29.6 4.52 1.75 6.48L3 29l6.69-1.75a13 13 0 0 0 6.35 1.62h.01c7.16 0 13-5.83 13-13 0-3.47-1.35-6.74-3.81-9.2A12.9 12.9 0 0 0 16.04 3Zm.01 23.67h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.97 1.04 1.06-3.87-.26-.4a10.7 10.7 0 0 1-1.64-5.71c0-5.91 4.81-10.72 10.73-10.72 2.86 0 5.55 1.12 7.57 3.14a10.65 10.65 0 0 1 3.14 7.58c0 5.91-4.81 10.72-10.72 10.72Zm5.88-8.03c-.32-.16-1.9-.94-2.19-1.05-.3-.11-.51-.16-.72.16-.22.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.11 1.32 3.33c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.67.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
