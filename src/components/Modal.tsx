import type { ReactNode } from 'react';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4" onClick={onClose}>
      <div
        className="w-full max-w-3xl max-h-[90vh] rounded-xl bg-[#111] border border-white/10 overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-white/30 hover:text-white/70 transition-colors text-[13px]"
        >
          ✕
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};