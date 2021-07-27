import { Box, Stack, Text } from '@chakra-ui/react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef, useState } from 'react';
import './slider.styles.css';

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

const Slider = ({ slides }) => {
  const color = 'gray.50';

  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true);
    });
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      {/* <pre>{JSON.stringify({ slides, s: slides.length }, null, 2)}</pre> */}
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide) => {
            return (
              <Box
                key={slide.id}
                h={['10rem', '15rem', '17.5rem', '20rem']}
                bg="cyan.100" // borrar
                objectFit="cover"
                backgroundImage={slide?.image}
                backgroundSize="cover"
                className="keen-slider__slide"
              >
                <Stack textAlign="center" direction="column" w="100%" h="100%" justifyContent="center">
                  <Text as="h2" fontSize={['1.5rem', '3rem']} color={color}>
                    <span className="slider-text">{slide?.name}</span>
                  </Text>
                  <Text as="h2" fontSize={['1rem', '2rem']} color={color}>
                    <span className="slider-text">{slide?.description}</span>
                  </Text>
                </Stack>
              </Box>
            );
          })}
        </div>
        {slider && (
          <>
            <ArrowLeft onClick={(e) => e.stopPropagation() || slider.prev()} disabled={currentSlide === 0} />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Slider;
