import { useMediaQuery } from "@mui/material";

const CxImage = () => {
  const isMediaQuery = useMediaQuery('(min-width:1024px)')

  return (
    <div className="h-[50%] w-full lg:min-h-[300px] lg:w-[45%] lg:flex lg:justify-center lg:items-center">
      <img
        src={isMediaQuery ? "assets/images/illustration-sign-up-desktop.svg" : "assets/images/illustration-sign-up-mobile.svg"}
        alt="imagem de ilustração"
        className="w-full lg:w-[90%]"
      />
    </div>
  );
};

export default CxImage;
