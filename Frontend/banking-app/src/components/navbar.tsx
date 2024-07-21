import { Landmark } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function NavBar() {
    return(
        <header className="bg-white dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-green-500 dark:text-green-500" href="#">
                            <span className="sr-only">YourBank</span>
                            <Landmark/>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <ModeToggle/>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}