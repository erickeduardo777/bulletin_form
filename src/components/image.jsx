import { useMediaQuery } from "@mui/material";

const CxImage = () => {
  const isMediaQuery = useMediaQuery('(min-width:1024px)')

  return (
    <div className="h-[50%] w-full lg:bg-red-600 lg:h-[600px] lg:w-[50%]">
      <img
        src={isMediaQuery ? "assets/images/illustration-sign-up-desktop.svg" : "assets/images/illustration-sign-up-mobile.svg"}
        alt="imagem de ilustração"
        className="w-full"
      />
    </div>
  );
};

export default CxImage;
