import { BeatLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <BeatLoader color="#5ACCCC" loading size={20} speedMultiplier={1} />
    </div>
  );
};

export default LoadingSpinner;
