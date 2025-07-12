import React from "react";
import ReadmeImg from "./readme-img";
import Text from "./text";

export interface Props {
  cover?: string;
  track?: string;
  artist: string;
  progress: number;
  duration?: number;
  isPlaying: boolean;
}

const Player = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
}: Props) => {
  return (
    <ReadmeImg width={750} height={180}>
      <style>
        {`
            .paused { 
              animation-play-state: paused !important;
              background: #e1e4e8 !important;
            }

            p {
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 14px;
              margin: -3.5px;
              border: 3.5px solid #e1e4e8;
              border-radius: 14px;
              overflow: hidden;
              padding: 7px;
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -3.5px;
              left: 0;
              width: 100%;
              height: 21px;
              transform-origin: left center;
              background-color: #ffffff;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }
            
            .progress-bar,
            #track,
            #artist,
            #cover {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #track {
              animation-delay: 400ms;
            }
            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 14px;
            }

            #cover {
              border-radius: 21px;
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 3.5px 10.5px rgba(0,0,0,0.1), 0 10.5px 35px rgba(0,0,0,0.05);
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-28px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }
        `}
      </style>
      <div
        className={isPlaying ? "disabled" : ""}
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 8,
          paddingLeft: 4,
        }}
      >
        <img id="cover" src={cover} width="350" height="350" />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: -4,
            marginLeft: 8,
          }}
        >
          <Text id="track" weight="bold">
            {`${track ?? ""} `.trim()}
          </Text>
          <Text id="artist" color={!track ? "gray" : undefined}>
            {artist || "Nothing playing..."}
          </Text>
          {track && (
            <div className="progress-bar">
              <div id="progress" className={!isPlaying ? "paused" : ""} />
            </div>
          )}
        </div>
      </div>
    </ReadmeImg>
  );
};

export default Player;
