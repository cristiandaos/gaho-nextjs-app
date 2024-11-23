import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-gray-600">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://www.dogtagart.com/sites/default/files/blog/dogcat1.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="hidden lg:relative lg:block lg:p-12 text-white">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Bienvenidos a
              <span className="bg-gradient-to-r from-blue-800 via-blue-500 to-sky-500 bg-clip-text text-transparent sm:block">
                GAHO
              </span>
            </h1>
            <p className="mt-4 md:text-2xl leading-relaxed text-gray-200">
              En GAHO encontrarás todo lo que necesitas para tu mascota, desde
              alimentos hasta juguetes y accesorios.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <SignIn />
        </main>
      </div>
    </section>
  );
}
