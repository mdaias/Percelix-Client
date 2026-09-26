import Lottie from "react-lottie";
import loadingAnimation from "../../assets/json/loading.json";

const Loading = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="max-w-sm relative">
        <Lottie options={options} />
      </div>
    </div>
  );
};

export default Loading;