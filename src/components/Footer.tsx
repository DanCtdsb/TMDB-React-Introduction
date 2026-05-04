export const Footer = () => {
    return (
        <footer className="flex items-center justify-between py-4 border-t border-white/10 text-[12px] text-white/30">
            <p>Built with React, Vite, Tailwind and React Router</p>
            <div className="flex gap-4">
                <a href="https://github.com/DanCtdsb" target="_blank" className="hover:text-white/60 transition-colors">Github</a>
                <a href="https://ca.linkedin.com/" target="_blank" className="hover:text-white/60 transition-colors">LinkedIn</a>
            </div>
        </footer>
    )
}