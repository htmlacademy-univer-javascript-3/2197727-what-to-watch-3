import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../const';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../index';
import { getFilmDataLoading } from '../components/film-data-selectors';
import LoadingScreen from '../components/loading-screen';
import useFilmById from '../components/film-by-id';
import { useRef, useState } from 'react';
import NotFoundScreen from '../pages/no-found-screen';
import { getTimeLeft } from '../get-time-left';

export default function PlayerScreen() {
  const navigate = useNavigate();
  const film = useFilmById();
  const isFilmDataLoading = useAppSelector(getFilmDataLoading);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLProgressElement | null>(null);
  const togglerRef = useRef<HTMLDivElement | null>(null);
  const timeLeftRef = useRef<HTMLDivElement | null>(null);

  function handleControlClick() {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleFullScreenClick() {
    if (!isFullScreen) {
      videoRef.current?.requestFullscreen({ navigationUI: 'hide' });
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  }

  function handleTimeUpdate() {
    if (
      progressRef.current &&
      videoRef.current &&
      film &&
      togglerRef.current &&
      timeLeftRef.current
    ) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressRef.current.value = progress;
      togglerRef.current.style.left = `${progress}%`;
      timeLeftRef.current.innerHTML = getTimeLeft(
        videoRef.current.duration - videoRef.current.currentTime
      );
    }
  }

  if (!film || isFilmDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (!film.id) {
    return (
      <NotFoundScreen />
    );
  }

  return (
    <div className="player">
      <Helmet>
        <title>WTW. Player {film.name}</title>
      </Helmet>

      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
      >
      </video>

      <button type="button" className="player__exit" onClick={() => navigate(`${AppRoute.FilmData}/${film.id}`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100" ref={progressRef}></progress>
            <div className="player__toggler" ref={togglerRef}>Toggler</div>
          </div>
          <div className="player__time-value" ref={timeLeftRef}>
            {getTimeLeft(film.runTime)}
          <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
        </div>
      </div>

        <div className="player__controls-row">
        <button type="button" className="player__play" onClick={handleControlClick}>
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>

          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>

            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
