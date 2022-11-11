import CircularProgress from '@mui/material/CircularProgress';
import PaperContenedor from '../Components/PaperContenedor';
import useGetComida from "../Hooks/useGetComida";


const CardsContainer = () => {

    const {data} = useGetComida() 

    console.log(data)
  if (data) {
    return (
 <PaperContenedor></PaperContenedor>
    );
  } else {
    return (
      <div>
        <div className="d-flex justify-content-center" />
        <div className="d-flex justify-content-center">
          <CircularProgress color="inherit"></CircularProgress>
        </div>
      </div>
    );
  }
};

export default CardsContainer;
