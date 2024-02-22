import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ author, quote }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    
    const { height, width } =  pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
    
  }, [quote])
  


  return (
    <>
      <blockquote 
      className="blockquote" 
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
    >
      <p ref={pRef} className="mb-3"style={{ color: 'black' }} >{quote}</p> 
      <footer className="blockquote-footer" >{author}</footer>
      </blockquote>

    </>
  )
}
