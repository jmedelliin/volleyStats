export default async function getComida() {
   // const endpoint = localStorage.getItem("api");
   // const url = endpoint + "fieldsBoard" + "/" + localStorage.getItem("id")
  
   const json = [
    
    {
        id:1,name:"Amburguesa",valor:9000
    },
    {
        id:2,name:"Perro",valor:8500
    },
    {
        id:3,name:"Pizza",valor:5000
    },
    {
        id:4,name:"Carne",valor:15000
    },
    {
        id:5,name:"Pasta",valor:5000
    },
    {
        id:6,name:"Desayuno",valor:7500  
    },
    {
        id:6,name:"Almuerzo",valor:7500  
    },
    {
        id:6,name:"Comida",valor:7500  
    }
   ]

    try {
//      const config = { method: "GET", headers: {} };
//      const response = await fetch(url, config);
//      const json = await response.json();
      return json;
    } catch (error) {
      console.log("Error" + error);
    }
  }