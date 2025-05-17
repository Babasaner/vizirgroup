"use client"
import { useState } from "react"

const videoList = [
  {
    id: "IaZ64UDFNag", // Remplace par tes ID YouTube
  
  },
]

export default function VideoPlaylist() {
  const [currentVideo, setCurrentVideo] = useState(videoList[0].id)

  return (
    <div className="container mx-auto p-4 space-y-4">
      {/* Vidéo principale */}
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src={`https://www.youtube.com/embed/${currentVideo}`}
          title="Vidéo en cours"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Playlist */}
      <div className="flex space-x-4 overflow-x-auto">
        {videoList.map((video) => (
          <button
            key={video.id}
            onClick={() => setCurrentVideo(video.id)}
            className={`p-2 text-sm rounded-md border ${
              currentVideo === video.id
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            } hover:bg-gray-200`}
          >
          </button>
        ))}
      </div>
    </div>
  )
}
