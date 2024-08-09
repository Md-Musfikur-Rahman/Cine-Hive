import { CirclePlay } from "lucide-react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui";

const ShowTrailer = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="ghost">
            <CirclePlay />
            <span className="ml-2 text-lg">Play</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <video width="320" height="240" preload="auto">
            <source src="https://www.youtube.com/watch?v=qhAB4Y1VrO8" />
            <track
              src="https://www.youtube.com/watch?v=qhAB4Y1VrO8"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowTrailer;
