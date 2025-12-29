function App() {
  return (
    <div className="font-sans text-gray-800 bg-[#f6fbf7]">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-green-100 via-green-50 to-white">
        <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              AI-Powered Crop Health Diagnosis
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Detect crop nutrient deficiencies using smartphone images and AI.
              Helping farmers take accurate fertilizer decisions early.
            </p>

            <button
              className="
                bg-green-600 text-white px-8 py-4 rounded-2xl text-lg shadow-xl
                transition-all duration-300
                hover:bg-green-700 hover:scale-105
                active:bg-green-700 active:scale-95
              "
            >
              Upload Leaf Image
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1974&h=1480&fit=crop"
            alt="Farmer using mobile in field"
            className="
              rounded-3xl shadow-2xl
              transition-all duration-300
              hover:scale-105
              active:scale-100
            "
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The Problem</h2>
          <p className="text-lg text-gray-600">
            Farmers rely on slow soil testing labs or expert visits to identify nutrient deficiencies.
            These methods are expensive, delayed, and inaccessible in rural areas, leading to poor crop yield.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
          <p className="text-lg text-gray-600">
            An AI-powered mobile application that analyzes crop leaf images to detect
            Nitrogen, Phosphorus, and Potassium deficiencies with confidence scores.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Capture Leaf",
                img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop",
              },
              {
                title: "AI Analysis",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
              },
              {
                title: "Deficiency Detection",
                img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=300&fit=crop",
              },
              {
                title: "Fertilizer Guidance",
                img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="
                  group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                  transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-2
                  active:shadow-xl active:-translate-y-1
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="
                      w-full h-48 object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                      group-active:scale-105
                    "
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-center">{step.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUTRIENTS DETECTED */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nutrients Detected</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Nitrogen Deficiency",
                desc: "Yellowing starting from older leaves",
                img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
              },
              {
                name: "Phosphorus Deficiency",
                desc: "Purple discoloration patterns",
                img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
              },
              {
                name: "Potassium Deficiency",
                desc: "Brown or burnt leaf edges",
                img: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=600&h=400&fit=crop",
              },
            ].map((n, i) => (
              <div
                key={i}
                className="
                  group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                  transition-all duration-300
                  hover:shadow-2xl hover:-translate-y-3
                  active:shadow-xl active:-translate-y-1
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.name}
                    className="
                      w-full h-56 object-cover
                      transition-all duration-500
                      group-hover:scale-110 group-hover:brightness-110
                      group-active:scale-105
                    "
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600">
                    {n.name}
                  </h3>
                  <p className="text-gray-600">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Early detection of crop nutrient deficiencies",
              "Reduced fertilizer misuse",
              "Improved crop yield and food quality",
              "Accessible to farmers via smartphones",
            ].map((text, i) => (
              <div
                key={i}
                className="
                  bg-green-100 p-6 rounded-lg cursor-pointer
                  transition-all duration-300
                  hover:bg-green-200 hover:scale-105
                  active:bg-green-200 active:scale-100
                "
              >
                <p className="text-lg">✓ {text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm">
          PU Code Hackathon 3.0 · AI Crop Health UI Prototype
        </div>
      </footer>

    </div>
  );
}

export default App;
