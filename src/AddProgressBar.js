import { useEffect, useState } from "react";
import CustomProgressBar from "./CustomProgressBar";

function AddProgressBar() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let interval = setInterval(
      () =>
        setCompleted((prev) => {
          if (prev < 100) {
            return (prev += 10);
          } else {
            clearInterval(interval);
            return (prev = 100);
          }
        }),
      1000
    );
  }, []);

  return (
    <div>
      <CustomProgressBar bgColor={"#6a1b9a"} completed={completed} />
    </div>
  );
}

export default AddProgressBar;
