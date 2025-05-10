import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="mt-32 px-6 md:px-20 lg:px-32 mb-20">
      <h1 className="text-5xl font-bold text-sky-500 text-center">
        Contact AyoNgopi
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        {/* Form Kontak */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Kirim Pesan
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Alamat Email"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              placeholder="Pesan Anda"
              className="p-3 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <Button className="bg-sky-500 text-white py-3 rounded-md hover:bg-sky-600 transition-all">
              Kirim Pesan
            </Button>
          </form>
        </div>

        {/* Info Kontak */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Hubungi Kami
            </h2>
            <p className="text-gray-600">
              Kami siap membantu Anda. Hubungi kami melalui kontak berikut:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                📍 <span className="font-semibold">Alamat:</span> Jl. Raya Pacul
                No.18B, Sibata, West Mejasem, Tegal, Central Java
              </li>
              <li>
                📞 <span className="font-semibold">Telepon:</span> (0283)
                123-4567
              </li>
              <li>
                ✉️ <span className="font-semibold">Email:</span>{" "}
                info@ayongopi.com
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Lokasi AyoNgopi
            </h2>
            <iframe
              title="Lokasi AyoNgopi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.6871511168393!2d109.12676325600515!3d-6.863904599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e702a645e74da75%3A0x55b95b8a6d1c4b1!2sJl.%20Raya%20Pacul%20No.18B%2C%20Sibata%2C%20West%20Mejasem%2C%20Tegal%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1689621234567!5m2!1sen!2sid"
              width="100%"
              height="300"
              className="rounded-md"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
