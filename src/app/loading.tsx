
import { Spinner } from "@/components/ui/spinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
     <Spinner className="size-20 " />
     <h1 className="text text-2xl  ">Loading...</h1>
    </div>
  );
};

export default loading;
