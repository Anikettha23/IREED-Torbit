import { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaWhatsapp,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

// Reusable podcast player
function AudioPlayer({ title, image, audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const setInitialDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setInitialDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setInitialDuration);
    };
  }, []);

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const newTime = (newProgress / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 border rounded-xl shadow-md bg-white">
      <img src={'/assets/background.png'} alt="Thumbnail" className="w-32 h-32 object-cover rounded-md" />

      <div className="flex-1 space-y-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button onClick={togglePlay} className="text-white bg-black p-2 rounded-full">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <input
            type="range"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-1 accent-gray-400"
          />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaPinterestP />
          <FaWhatsapp />
        </div>

        {/* Time + Volume + Download */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{formatTime(currentTime)} / {formatTime(duration)}</span>
          <HiOutlineSpeakerWave className="text-xl" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 accent-blue-400"
          />
          <a
            href={audioSrc}
            download
            className="text-xl text-black hover:text-blue-500"
          >
            <FiDownload />
          </a>
        </div>
      </div>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}

// Main component to render 3 podcasts
export default function Poadcast() {
  const podcasts = [
    {
      title: "Cube Mantra for Success – Mr. Yadav",
      image: "https://i.imgur.com/mb2gk8C.png",
      audioSrc: "/audio/best-time-advertising-vlog-hip-hop-112194.mp3",
    },
    {
      title: "Real Estate Market Trends 2025",
      image: "https://i.imgur.com/mb2gk8C.png",
      audioSrc: "/audio/best-time-advertising-vlog-hip-hop-112194.mp3",
    },
    {
      title: "Smart Investment in Property",
      image: "https://i.imgur.com/mb2gk8C.png",
      audioSrc: "/audio/best-time-advertising-vlog-hip-hop-112194.mp3",
    },
  ];

  return (
    <>
     <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[520px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-white text-4xl font-bold z-10"> Podcast </h1>
      </div>
      </div> 
    <div className="max-w-6xl mx-auto space-y-6 p-6">
      {podcasts.map((podcast, index) => (
        <AudioPlayer key={index} {...podcast} />
      ))}
    </div>
    </>
  );
}
