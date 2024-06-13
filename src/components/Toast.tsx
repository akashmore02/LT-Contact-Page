import { useEffect } from "react";

const Toast = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
};

export default Toast;
