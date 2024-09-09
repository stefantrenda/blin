import React, { useEffect, useState } from "react";

const BN = ({ isExpanded }) => {
  const [isCollapsing, setIsCollapsing] = useState(false);

  useEffect(() => {
    if (!isExpanded) {
      setIsCollapsing(true);
      const timer = setTimeout(() => setIsCollapsing(false), 700); 
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);
  return (
    <div
      className={`${
        isExpanded ? "grow px-4" : "w-16"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex mb-[-9px] flex-container">
        <div
          style={{ minWidth: "36px" }}
          className={`svg-container ${isCollapsing ? "crash" : ""}`}
        >
          <svg
            width="27"
            viewBox="0 0 70 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 26.0256V0.0511794L19.5287 0.0157194C45.6736 -0.0197406 55.1711 -0.00201056 56.5584 0.139829C58.3014 0.299399 61.0759 1.06179 62.4099 1.73553C64.722 2.88797 66.4116 5.12194 67.3009 8.15376C67.9768 10.5296 68.1724 12.3026 68.0835 15.5294C67.9946 18.1535 67.9412 18.5435 67.4432 20.086C66.8385 21.8945 65.7358 23.7207 64.6864 24.6426L64.0639 25.1745L65.2912 26.0965C68.0479 28.1532 69.4352 30.9013 69.8976 35.2452C70.1466 37.5678 69.9332 40.6705 69.3463 43.2237C68.0657 48.7022 64.224 51.3263 56.6473 51.8227C55.26 51.9114 42.0809 52 27.0876 52H0V26.0256ZM51.2761 38.0288C53.4993 36.9295 53.6771 33.8445 51.614 32.4084L50.8314 31.8765L33.8639 31.8233L16.8964 31.7878V35.1565V38.5252L33.6683 38.4898L50.4223 38.4366L51.2761 38.0288ZM51.4717 18.6145C52.7523 17.8875 53.3036 16.7173 52.8945 15.5649C52.5922 14.6429 51.7918 13.8983 50.9381 13.7032C50.5468 13.5969 42.899 13.5259 33.5793 13.5259H16.8964V16.2741V19.0222H33.8461H50.7781L51.4717 18.6145Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={`w-full  ${isCollapsing ? "crash" : ""}`}>
          <hr className={`w-full ml-auto  py-0.5 bg-white  ${isCollapsing ? "crashHR" : ""} `} />
        </div>
      </div>

      <div className="flex">
        <div
          className={` self-end grow  ${
            isCollapsing ? "crash" : ""
          }`}
        >
          <hr className={`w-full mr-auto  py-0.5 bg-white  ${isCollapsing ? "crashHR" : ""} `} />
        </div>
        <div
          style={{ minWidth: "36px" }}
          className={`hr-container ${isCollapsing ? "crash" : ""}`}
        >
          <svg
            width="27"
            viewBox="0 0 70 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto"
          >
            <path
              d="M0 26V0H13.3232H26.6641L27.0204 0.390443C27.2163 0.62116 29.0509 3.15904 31.0814 6.03413C33.1298 8.90922 36.0509 13.0266 37.5827 15.1741C39.1145 17.3215 41.5725 20.7645 43.0153 22.8055C48.5013 30.5079 51.1196 34.1993 52.0458 35.4594L52.9898 36.755L53.0789 18.4218L53.1679 0.0887372H61.5394H69.9109L69.9644 26.0532L70 52L56.5165 51.9645L43.0331 51.9113L39.916 47.5454C38.1883 45.1317 35.374 41.1918 33.6641 38.7782C31.9542 36.3645 30.3511 34.1283 30.1018 33.8089C29.8524 33.4894 28.1781 31.129 26.3613 28.5734C24.5445 26.0177 22.8702 23.6573 22.6209 23.3379C22.3715 23.0184 20.9822 21.0485 19.5038 18.9898L16.8321 15.2451L16.7786 33.6137L16.743 52H8.3715H0V26Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );

};

export default BN;
