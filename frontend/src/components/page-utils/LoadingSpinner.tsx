import { ClipLoader, HashLoader } from "react-spinners";

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
      <ClipLoader color="#5ACCCC" loading size={100} speedMultiplier={1} />
    </div>
  );
};

export default LoadingSpinner;