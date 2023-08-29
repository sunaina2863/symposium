import React, { useState, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
const Card = ({ keyVal, title, content, description }) => {
  const element = useRef();
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  //reframing of code, detect all the values previously and keep ready insted of finding them every time
  let change = () => {
    let curr = element.current.style;
    let c = document.getElementById(Number(element.current.className.slice(5)));
    let dataAttr = element.current.getAttribute("data-attr").split(",");
    let dataDesc = element.current.getAttribute("data-desc");
    let width = element.current.offsetWidth;
    let left = element.current.offsetLeft;
    let totWidth, relElemL, relElemR;
    relElemL = document.getElementsByClassName(2);
    relElemR = document.getElementsByClassName(1);
    if (!isExpanded) {
      if (element.current.className.slice(5) % 2 === 0) {
        curr.right = vw - (left + width) - 27 + "px";
        totWidth = left + width - relElemR[0].offsetLeft;
      } else {
        curr.left = left - 12 + "px";
        totWidth = relElemL[0].offsetLeft + relElemL[0].offsetWidth - left;
      }
      curr.maxWidth = "none";
      let id = setInterval(() => frame(), 10);
      let totWidth100 = totWidth / 100;
      function frame() {
        if (width >= totWidth) {
          let content = "<div class='rows'>";
          for (let i of dataAttr) {
            content += `<div class='column' ><img src='${i}'/></div>`;
          }
          content += `<div class='column' ><p>${dataDesc}</p></div>`;
          c.innerHTML = content + "</div>";

          clearInterval(id);
        } else {
          width += totWidth100;
          curr.width = width + "px";
        }
      }
      curr.zIndex = 100;
    } else {
      curr.maxWidth = "540px";
      if (element.current.className.slice(5) % 2 === 0) {
        curr.right = "0px";
      } else {
        curr.left = "0px";
      }
      curr.width = "auto";
      curr.zIndex = 0;
      c.innerHTML = `<img src='${dataAttr[0]}'/>`;
    }
    handleExpand();
  };
  const [isExpanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!isExpanded);
  };
  // doNothing is used to handle the medium screen and lesser devices
  let doNothing = () => {
    let c = document.getElementById(Number(element.current.className.slice(5)));
    let dataAttr = element.current.getAttribute("data-attr").split(",");
    let dataDesc = element.current.getAttribute("data-desc");
    if (!isExpanded) {
      c.innerHTML = `<img src='${dataAttr[0]}'/><div class='small-screen-expander'>${dataDesc}</div>`;
      console.log("hi");
    } else {
      c.innerHTML = `<img src='${dataAttr[0]}'/>`;
      console.log("hi");
    }
    handleExpand();
  };
  let baseStyling = { maxWidth: "540px", width: "auto", margin: "auto" };
  let necessity = { background: "black" };
  let leftAllign = (
    <div className={`col-md-6 pt-3`} style={necessity}>
      <div
        className={`card ${keyVal}`}
        style={({ margin: "auto" }, baseStyling)}
        ref={element}
        onClick={vw >= 768 ? change : doNothing}
        data-attr={content}
        data-desc={description}
      >
        <div className="card-body">
          <h5 className={`card-title ${isExpanded ? "expandedL" : ""}`}>
            {title}
          </h5>
          <div className="card-text" id={`${keyVal}`}>
            <img src={content[0]} alt="event" />
          </div>
        </div>
      </div>
    </div>
  );
  let rightAllign = (
    <div
      className={`col-md-6 pt-3`}
      style={{ direction: "rtl", background: "black" }}
    >
      <div
        className={`card ${keyVal}`}
        style={
          ({
            direction: "rtl",
            margin: "auto",
          },
          baseStyling)
        }
        ref={element}
        onClick={vw >= 768 ? change : doNothing}
        data-attr={content}
        data-desc={description}
      >
        <div className="card-body">
          <h5 className={`card-title ${isExpanded ? "expanded" : ""}`}>
            {title}
          </h5>
          <div className="card-text" id={`${keyVal}`}>
            <img src={content[0]} alt="event" />
          </div>
        </div>
      </div>
    </div>
  );
  return keyVal % 2 === 0 ? rightAllign : leftAllign;
};

export default Card;
