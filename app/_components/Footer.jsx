import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          className="flex justify-center text-blue-600 hover:text-blue-700 cursor-pointer"
          href="/"
        >
          <svg
            width="131"
            height="30"
            viewBox="0 0 131 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.12 9.8C19.6133 8.86667 18.88 8.16 17.92 7.68C16.9867 7.17333 15.88 6.92 14.6 6.92C12.3867 6.92 10.6133 7.65333 9.28 9.12C7.94667 10.56 7.28 12.4933 7.28 14.92C7.28 17.5067 7.97333 19.5333 9.36 21C10.7733 22.44 12.7067 23.16 15.16 23.16C16.84 23.16 18.2533 22.7333 19.4 21.88C20.5733 21.0267 21.4267 19.8 21.96 18.2H13.28V13.16H28.16V19.52C27.6533 21.2267 26.7867 22.8133 25.56 24.28C24.36 25.7467 22.8267 26.9333 20.96 27.84C19.0933 28.7467 16.9867 29.2 14.64 29.2C11.8667 29.2 9.38667 28.6 7.2 27.4C5.04 26.1733 3.34667 24.48 2.12 22.32C0.92 20.16 0.32 17.6933 0.32 14.92C0.32 12.1467 0.92 9.68 2.12 7.52C3.34667 5.33333 5.04 3.64 7.2 2.44C9.36 1.21333 11.8267 0.599998 14.6 0.599998C17.96 0.599998 20.7867 1.41333 23.08 3.04C25.4 4.66667 26.9333 6.92 27.68 9.8H20.12ZM53.4288 24.04H42.9488L41.2688 29H34.1088L44.2688 0.919999H52.1888L62.3488 29H55.1088L53.4288 24.04ZM51.6688 18.76L48.1888 8.48L44.7488 18.76H51.6688ZM93.7609 0.919999V29H86.9209V17.44H76.2809V29H69.4409V0.919999H76.2809V11.92H86.9209V0.919999H93.7609ZM115.979 29.28C113.339 29.28 110.912 28.6667 108.699 27.44C106.512 26.2133 104.765 24.5067 103.459 22.32C102.179 20.1067 101.539 17.6267 101.539 14.88C101.539 12.1333 102.179 9.66667 103.459 7.48C104.765 5.29333 106.512 3.58667 108.699 2.36C110.912 1.13333 113.339 0.52 115.979 0.52C118.619 0.52 121.032 1.13333 123.219 2.36C125.432 3.58667 127.165 5.29333 128.419 7.48C129.699 9.66667 130.339 12.1333 130.339 14.88C130.339 17.6267 129.699 20.1067 128.419 22.32C127.139 24.5067 125.405 26.2133 123.219 27.44C121.032 28.6667 118.619 29.28 115.979 29.28ZM115.979 23.04C118.219 23.04 120.005 22.2933 121.339 20.8C122.699 19.3067 123.379 17.3333 123.379 14.88C123.379 12.4 122.699 10.4267 121.339 8.96C120.005 7.46666 118.219 6.72 115.979 6.72C113.712 6.72 111.899 7.45333 110.539 8.92C109.205 10.3867 108.539 12.3733 108.539 14.88C108.539 17.36 109.205 19.3467 110.539 20.84C111.899 22.3067 113.712 23.04 115.979 23.04Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Gaho 2024. Todos los derechos reservados.
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">X</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
