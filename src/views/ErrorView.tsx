import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

export const ErrorView = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">404</h1>
        <p className="text-[13px] text-white/50">
          The page you are looking for does not exist.
        </p>
        <p className="text-[13px] text-white/50">
          Are you trying so hard to break this website?
        </p>
        <p className="text-[13px] text-white/50">*Insert Github Unicorn*</p>
        <div className="w-fit">
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </div>
  );
};
