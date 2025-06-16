import React from "react";

const videos = [
  {
   embedUrl: "https://www.youtube.com/embed/G5P7hUiiZfc",
    title: "जानिए कहां मिलेगी Real Estate की सही जानकारी",
  },
];

export default function VideoGallery() {
  return (
    <>
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10"> Videos </h1>
      </div>
      </div>
    <div className="py-10 px-4 max-w-screen-xl mx-auto">
      {/* Main Video */}
      <div className="mb-10">
         <div className="relative w-full h-[50px]"></div>
        <div className="aspect-w-16 h-[500px]">
          <iframe
            className="w-full h-full"
            src={videos[0].embedUrl}
            title={videos[0].title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <h2 className="text-xl font-semibold text-center mt-4">
          {videos[0].title}
        </h2>
      </div>

      {/* Grid of Videos */}
  <section className="bg-white text-black py-12 px-6 md: border-t">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-3xl font-bold">Our Videos</h2>
    <a
      href="/videos"
      className="text-black font-semibold text-sm underline underline-offset-4 hover:text-blue-600 flex items-center gap-1"
    >
      {/* VIEW ALL → */}
    </a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
    {[
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/9UyoxLtItDg",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
         {
        title: "",
        embedUrl: "https://www.youtube.com/embed/9UyoxLtItDg",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
       {
        title: "",
        embedUrl: "https://www.youtube.com/embed/9UyoxLtItDg",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
         {
        title: "",
        embedUrl: "https://www.youtube.com/embed/9UyoxLtItDg",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
         {
        title: "",
        embedUrl: "https://www.youtube.com/embed/9UyoxLtItDg",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/oLfuidzn2mw",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
      {
        title: "",
        embedUrl: "https://www.youtube.com/embed/n3lfxuttzwY",
      },
    ].map((video, index) => (
      <div key={index} className="flex flex-col items-center w-full max-w-md">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-3 font-semibold text-center">{video.title}</p>
      </div>
    ))}
  </div>
</section>
    </div>
    </>
  );
}
