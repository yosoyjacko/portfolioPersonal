import {useRef, useReducer,useEffect } from 'react'
import './../../styles/Works.scss';
import IMG2 from '../../img/proyecto2.jpg'
import IMG1 from '../../img/proyecto1.jpg'
import IMG3 from '../../img/proyecto6.jpg'
import IMG4 from '../../img/proyecto4.jpg'
import IMG5 from '../../img/proyecto5.jpg'


const slides = [
    {
      title: "Movie-App",
      subtitle: <a href="https://github.com/yosoyjacko/movie-app" target="_blank" >GitHub</a>,
      description: "App utilizando una api pública con información de todas las peliculas creado con react.js",
      image: IMG1    
    },
    {
      title: "Todo-List",
      subtitle: <a href="https://github.com/yosoyjacko/todo-list" target="_blank" >GitHub</a>,
      description: "Todo-list creado con React.js",
      image: IMG2
    },
    {
      title: "Fragancias Salas",
      subtitle: <a href="http://fraganciasalas.com/" target="_blank" >Web</a>,
      description: "Página para un local de ventas de perfumes",
      image: IMG3
    },
    {
      title: "TreeBank",
      subtitle: <a href="https://github.com/yosoyjacko/treebank" target="_blank" >GitHub</a>,
      description: "Billetera virtual creada como ultimo proyecto de SOYHENRY creado con React native",
      image: IMG4
    },
    {
      title: "Prueba Fotografo",
      subtitle: <a href="https://github.com/yosoyjacko/pruebaFotografo" target="_blank" >GitHub</a>,
      description: "Práctica simple con html y css",
      image: IMG5
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