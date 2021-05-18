import {useRef, useReducer,useEffect } from 'react'
import './../../styles/Works.scss';
import IMG2 from '../../img/foto1.jpg'
const slides = [
    {
      title: "Dragon Ball Super",
      subtitle: "lorem",
      description: "lorem ipsum",
      image: "https://laverdadnoticias.com/__export/1610221860938/sites/laverdad/img/2021/01/09/goku_dragon_ball_super.jpg_2065693783.jpg"    
    },
    {
      title: "Dragon Ball Super",
      subtitle: "lorem",
      description: "lorem ipsum",
      image: "https://www.gamecored.com/wp-content/uploads/2019/10/dragon-ball-super-1620x800.jpg"
    },
    {
      title: "Dragon Ball Super",
      subtitle: "lorem",
      description: "lorem ipsum",
      image: "https://radardeldragon.com/wp-content/uploads/2020/08/dragon-ball-super-manga-espa%C3%B1ol-completo-1024x576.jpg"
    },
    {
      title: "Dragon Ball Super",
      subtitle: "lorem",
      description: "lorem ipsum",
      image: "https://i.ytimg.com/vi/IyIVCtL8osA/maxresdefault.jpg"
    },
    {
      title: "Dragon Ball Super",
      subtitle: "lorem",
      description: "lorem ipsum",
      image: "https://sm.ign.com/t/ign_latam/screenshot/default/20210412-233434_y8zu.1280.jpg"
    }
  ];
  
  function useTilt(active) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  
  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };
  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      

      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
        >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
          />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
          >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </div>
          
    );
  }
  
  function Proyectos() {
    const [state, dispatch] = useReducer(slidesReducer, initialState);
  
    return (
     <div className="works-container">
          <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
  
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
     </div>
    );
  }

  export default Proyectos;