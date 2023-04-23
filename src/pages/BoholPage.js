import React, {  useCallback, useRef } from "react";
import { toJpeg } from 'html-to-image'
import Bohol from "./Bohol"
import ".././App.css"

function BoholPage() {
    const divRef = useRef(null);
  
    const fileName = 'phMap.jpg'
  
    const downloadJpg = useCallback(() => {
      if (divRef.current === null) {
        return
      }
      toJpeg(divRef.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${fileName}`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }, [divRef]);

    return (
        <section>
            <div id="ezoic-pub-ad-placeholder-105"> </div>
            <section className="Map-container">
                <section className="Map-padding" ref={divRef}>
                    <Bohol/>
                </section>
                <section className="save-image-button" onClick={downloadJpg}>Save Image</section>
            </section>

        <section className="donate">
      <div>Map created by <a href="https://github.com/jonnjasperejoc" rel="noreferrer" target="_blank">Jonn Jasper Ejoc</a>.</div>
    Special thanks to <a href="https://www.instagram.com/denzdelvillar/" rel="noreferrer" target="_blank">Denz Del Villar</a> for making the source code of <a href="https://www.my-philippines-travel-level.com/" rel="noreferrer" target="_blank">My Philippine Travel Level</a> open source.
        </section>
        <br></br>
      </section>
    );
};

export default BoholPage;