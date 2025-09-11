import React from "react";

export default function Spline() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Spaceship 3D Model"
          src="https://sketchfab.com/models/8d913bda48f84217902e6829982c494f/embed?autostart=1&ui_infos=0&ui_controls=1&ui_watermark=0"
          frameBorder="0"
          allow="autoplay; fullscreen; vr"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
