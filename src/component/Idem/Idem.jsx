import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function Idem() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1,
      spacing: 0,
    },
  })

  const imageCount = 15 // Change to your actual image count
  const imagePaths = Array.from({ length: imageCount }, (_, i) => `/assets/I${i + 1}.jpg`)

  return (
    <div className="relative w-full h-[calc(100vh-64px)] mt-16 bg-gray-100 flex flex-col items-center justify-center">
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider w-full h-full">
        {imagePaths.map((src, index) => (
          <div key={index} className="keen-slider__slide flex items-center justify-center h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center text-3xl shadow"
      >
        ‹
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-12 h-12 flex items-center justify-center text-3xl shadow"
      >
        ›
      </button>
    </div>
  )
}

export default Idem
