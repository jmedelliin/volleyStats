import { useEffect, useState } from "react";
import getComida from "../Services/getComida";

export default function useGetComida() {
  
  const [data, setData] = useState();


  useEffect(() => {
    getComida().then((result) => {
      const datosTabla = [];
      let data2 = [];
      data2 = result;
      [data2].forEach((x) => {
        console.log(x)
        datosTabla.push(x);
      });

      setData(datosTabla);

    });
  }, []);

  return { data };
}
