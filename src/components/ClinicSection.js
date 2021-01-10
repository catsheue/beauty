import React from "react";
import { clinicList } from "../data/clinicList";

export default function ClinicSection() {
  return (
    <div className="clinics">
      {clinicList.map((item) => {
        const { name, district, link } = item;
        return (
          <a className="clinics__item" href={link} target="_blank">
            <h2>{name}</h2>
            <p>地區：{district}</p>
          </a>
        );
      })}
    </div>
  );
}
