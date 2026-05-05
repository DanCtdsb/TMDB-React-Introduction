import { Button } from "@/components"
import { useNavigate } from "react-router";

export const HomeView = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
            <div className="flex flex-col gap-6 max-w-md">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-white">Welcome to TMDB React</h1>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                        A basic project built to demonstrate how to use React with the TMDB API.
                    </p>
                </div>
                <div className="w-fit">
                    <Button onClick={() => navigate("/movie/category/now_playing")}>Enter</Button>
                </div>
            </div>
        </div>
    )
}