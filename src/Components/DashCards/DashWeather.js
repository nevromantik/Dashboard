import React from "react";
import style from "./dashweather.module.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import queryString from "query-string";

import sun from "../../Assets/Weather/icons/sun-removebg-preview.png";
import snow from "../../Assets/Weather/icons/neve-removebg-preview.png";
import cloud from "../../Assets/Weather/icons/nuvola-removebg-preview.png";
import partially from "../../Assets/Weather/icons/parizalmentenuvoloso-removebg-preview.png";
import wind from "../../Assets/Weather/icons/vento-removebg-preview.png";
import rain from "../../Assets/Weather/icons/pioggia-removebg-preview.png";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Location from "../location/Location";

function DashWeather() {
  const { state } = useContext(AppContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { location } = state[0];
  const [loc, setLoc] = useState(location)
  const optionalParams = {
    unitGroup: "uk",
    lang: "it",
  };
  const optionalParamsString = queryString.stringify(optionalParams);
  const apiKey = "DXJFUU5N4LFNRJFJUP4HGFTP8";

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc},IT?key=${apiKey}&${optionalParamsString}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);
  const {
    currentConditions: { conditions, temp, icon , datetime } = {},
    days,
  } = data || {};
  const [today, tomorrow] = days || [];
  
 
  const weatherImg = [
    { id: "snow", img: snow },
    { id: "rain", img: rain },
    { id: "fog", img: cloud },
    { id: "wind", img: wind },
    { id: "cloudy", img: cloud },
    { id: "partly-cloudy-day", img: partially },
    { id: "partly-cloudy-night", img: partially },
    { id: "clear-day", img: sun },
  ];
  const [currentConditionIcon, setCurrentConditionIcon] = useState({});

  useEffect(() => {
    const current = weatherImg?.find((el) => el?.id === icon);
    setCurrentConditionIcon(current);
  }, [icon]);

  console.log(data);
  return (
    <div className={` ${style.card}`}>
      <div className={style.todayWrap}>
        <div className={style.image}>
          <img src={currentConditionIcon?.img} alt="lbr" />
        </div>
        <div className={style.temp}>
          <div>
            {" "}
            <h3>{temp}°</h3>
          </div>
          <div>
            <p>{conditions}</p>
          </div>
        </div>      

        <div className={style.locationWrap}>
          <div className={style.cityWrap}>
            <IoLocationSharp style={{ color: "rgb(85, 83, 83)", fontSize: "1.5rem" }} />
            <p className={style.location}>{loc}</p>
          </div>
          <div className={style.dateWrap}>
            <BsFillCalendarDateFill
              style={{
                color: "rgb(85, 83, 83)",
                fontSize: "1.1rem",
                position: "relative",
                left: "2px",
              }}
            />
            <p className={style.date}> {today?.datetime}</p>
          </div>
        </div>
      </div>

      <div>
        <Location setLoc = {setLoc}/>
      </div>
    </div>
  );
}

export default DashWeather;
