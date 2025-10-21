import React from "react";

const Section = () => {
  return (
    <section className="py-20 px-10 text-center bg-gray-50">
      <h2 className="text-sm text-orange-500 font-semibold uppercase mb-2">
        Category
      </h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-12">
        We Offer Best Services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Item 1 - Weather */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:-translate-y-2 transition">
          <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 flex items-center justify-center rounded-full">
            {/* Icon: Cloud + Sun */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1.5M4.219 4.219l1.06 1.06M1.5 12H3m15.75 0a4.5 4.5 0 10-8.91-.75A3.75 3.75 0 0010.5 19.5h8.25a3.75 3.75 0 000-7.5z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Calculated Weather</h4>
          <p className="text-gray-500 text-sm">
            Mengetahui kondisi cuaca dengan akurat sebelum bepergian.
          </p>
        </div>

        {/* Item 2 - Flights */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:-translate-y-2 transition">
          <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 flex items-center justify-center rounded-full">
            {/* Icon: Airplane */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955a.75.75 0 011.272.53V8.25l8.25 3-8.25 3v4.676a.75.75 0 01-1.272.53L2.25 12z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Best Flights</h4>
          <p className="text-gray-500 text-sm">
            Temukan penerbangan terbaik dengan harga terjangkau.
          </p>
        </div>

        {/*  Item 3 - Local Events */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:-translate-y-2 transition">
          <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 flex items-center justify-center rounded-full">
            {/* Icon: Calendar Event */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Local Events</h4>
          <p className="text-gray-500 text-sm">
            Nikmati acara lokal unik di setiap destinasi.
          </p>
        </div>

        {/* ⚙️ Item 4 - Customization */}
        <div className="p-6 bg-white shadow-md rounded-xl hover:-translate-y-2 transition">
          <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 flex items-center justify-center rounded-full">
 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="orange"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.032 1.724 1.724 0 012.356 2.356 1.724 1.724 0 001.032 2.591c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.032 2.591 1.724 1.724 0 01-2.356 2.356 1.724 1.724 0 00-2.591 1.032c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.591-1.032 1.724 1.724 0 01-2.356-2.356 1.724 1.724 0 00-1.032-2.591c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.032-2.591 1.724 1.724 0 012.356-2.356 1.724 1.724 0 002.591-1.032z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-lg mb-2">Customization</h4>
          <p className="text-gray-500 text-sm">
            Atur perjalanan sesuai kebutuhan dan preferensimu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
