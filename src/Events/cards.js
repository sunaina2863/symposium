import React, { useState, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
const Card = ({ keyVal, title, content }) => {
  const element = useRef();
  let vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  //reframing of code, detect all the values previously and keep ready insted of finding them every time
  const change = () => {
    let curr = element.current.style;
    let c = element.current.getElementsByClassName("card-body");

    let left = element.current.offsetLeft;
    let width = element.current.offsetWidth;
    if (element.current.className.slice(5) % 2 === 0) {
      if (!isExpanded) {
        let relElem = document.getElementsByClassName(
          Number(element.current.className.slice(5)) - 1
        );
        curr.right = vw - (left + width) - 27 + "px";
        curr.maxWidth = "none";
        let id = setInterval(frame, 10);
        let totWidth = left + width - relElem[0].offsetLeft;
        let totWidth100 = totWidth / 100;
        function frame() {
          if (width >= totWidth) {
            clearInterval(id);
          } else {
            width += totWidth100;
            curr.width = width + "px";
          }
        }
        let content = "";
        let dataAttr = element.current.getAttribute["data"];
        for (var i of dataAttr) {
        }
        curr.zIndex = 100;
      } else {
        curr.maxWidth = "540px";
        curr.right = "0px";
        curr.width = "auto";
        curr.zIndex = 0;
      }
    } else {
      if (!isExpanded) {
        let relElem = document.getElementsByClassName(
          Number(element.current.className.slice(5)) + 1
        );
        curr.left = left - 12 + "px";
        curr.maxWidth = "none";

        let id = setInterval(frame, 10);
        let totWidth = relElem[0].offsetLeft + relElem[0].offsetWidth - left;
        let totWidth100 = totWidth / 100;
        function frame() {
          if (width >= totWidth) {
            clearInterval(id);
          } else {
            width += totWidth100;
            curr.width = width + "px";
          }
        }
        curr.zIndex = 100;
      } else {
        curr.maxWidth = "540px";
        curr.left = "0px";
        curr.width = "auto";
        curr.zIndex = 0;
      }
    }
    handleExpand();
  };
  const [isExpanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!isExpanded);
  };
  let doNothing = () => {};
  let baseStyling = { maxWidth: "540px", width: "auto", margin: "auto" };
  let necessity = { background: "black" };
  let leftAllign = (
    <div className={`col-md-6 pt-3`} style={necessity}>
      <div
        className={`card ${keyVal}`}
        style={({ margin: "auto" }, baseStyling)}
        ref={element}
        onClick={vw >= 768 ? change : doNothing}
        data={content}
      >
        <div className="card-body">
          <h5 className={`card-title ${isExpanded ? "expandedL" : ""}`}>
            {title}
          </h5>
          <div className="card-text">
            <img src={content[0]} alt="teachers day" />
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
        data={content}
      >
        <div className="card-body">
          <h5 className={`card-title ${isExpanded ? "expanded" : ""}`}>
            {title}
          </h5>
          <div className="card-text">
            <img src={content[0]} alt="teachers day" />
          </div>
        </div>
      </div>
    </div>
  );
  return keyVal % 2 === 0 ? rightAllign : leftAllign;
  // return leftAllign;
};
export default Card;
