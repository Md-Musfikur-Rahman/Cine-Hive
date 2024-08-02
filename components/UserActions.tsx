import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { Bookmark, Heart, List } from "lucide-react";

const UserActions = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-row justify-start items-center gap-6">
        <Tooltip>
          <TooltipTrigger>
            <List />
          </TooltipTrigger>
          <TooltipContent>
            <p>Login to create and edit custom lists</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Heart />
          </TooltipTrigger>
          <TooltipContent>
            <p>Login to add this movie to your favorite list</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Bookmark />
          </TooltipTrigger>
          <TooltipContent>
            <p>Login to add this movie to your watchlist</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default UserActions;
