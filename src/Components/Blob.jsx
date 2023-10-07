import React, { useEffect, useRef } from "react";
import "./Blob.css";
import gsap from "gsap";

const Blob = () => {
  const pathRef = useRef(null);
  const clipPathRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // These are your SVG path shapes to animate between
    const path1 =
      "M462,320.5Q444,391,384,435Q324,479,251,475.5Q178,472,121,428.5Q64,385,37.5,317.5Q11,250,30,177Q49,104,111.5,60Q174,16,248,22Q322,28,377.5,72.5Q433,117,456.5,183.5Q480,250,462,320.5Z";
    const path2 =
      "M443.5,316Q432,382,373,414Q314,446,249,449.5Q184,453,121.5,421Q59,389,32.5,319.5Q6,250,33,181Q60,112,123.5,84.5Q187,57,252,51Q317,45,382.5,75.5Q448,106,451.5,178Q455,250,443.5,316Z";
    const path3 =
      "M452,315.5Q430,381,371,411Q312,441,245,457Q178,473,129.5,423Q81,373,47,311.5Q13,250,38.5,182.5Q64,115,124.5,82Q185,49,253.5,39.5Q322,30,373,77Q424,124,449,187Q474,250,452,315.5Z";

    tl.to([pathRef.current, clipPathRef.current], {
      attr: { d: path2 },
      duration: 4,
      immediateRender: false,
    })
      .to([pathRef.current, clipPathRef.current], {
        attr: { d: path1 },
        duration: 4,
        immediateRender: false,
      })
      .to([pathRef.current, clipPathRef.current], {
        attr: { d: path3 },
        duration: 4,
        immediateRender: false,
      });
  }, []);

  return (
    <div className="blob">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <clipPath id="shape">
            <path
              ref={clipPathRef}
              d="M462,320.5Q444,391,384,435Q324,479,251,475.5Q178,472,121,428.5Q64,385,37.5,317.5Q11,250,30,177Q49,104,111.5,60Q174,16,248,22Q322,28,377.5,72.5Q433,117,456.5,183.5Q480,250,462,320.5Z"
            />
          </clipPath>
        </defs>
        <path
          ref={pathRef}
          fill="none"
          stroke="black"
          strokeWidth="10"
          d="M462,320.5Q444,391,384,435Q324,479,251,475.5Q178,472,121,428.5Q64,385,37.5,317.5Q11,250,30,177Q49,104,111.5,60Q174,16,248,22Q322,28,377.5,72.5Q433,117,456.5,183.5Q480,250,462,320.5Z"
        />
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#shape)"
          xlinkHref="tom-64.jpeg"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
    </div>
  );
};

export default Blob;
