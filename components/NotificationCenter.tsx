
import React from 'react';
import { Bell, X, CheckCircle2 } from 'lucide-react';
import { Notification } from '../types';

interface NotificationCenterProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
  onMarkRead: (id: string) => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ 
  notifications, 
  isOpen, 
  onClose, 
  onMarkRead 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-20 right-4 md:right-8 w-80 md:w-96 max-h-[70vh] z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-blue-400" />
            <h3 className="font-bold text-slate-200">Alert Center</h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto overflow-x-hidden p-2">
          {notifications.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-slate-500 text-sm">No new alerts from space.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {notifications.map((n) => (
                <div 
                  key={n.id}
                  onClick={() => onMarkRead(n.id)}
                  className={`group relative p-4 rounded-xl transition-all cursor-pointer border ${
                    n.isRead ? 'bg-transparent border-transparent' : 'bg-blue-500/5 border-blue-500/10'
                  }`}
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className={`text-xs md:text-sm font-semibold mb-0.5 ${n.isRead ? 'text-slate-400' : 'text-slate-100'}`}>
                        {n.title}
                      </p>
                      <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed">
                        {n.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-3 bg-white/5 text-center">
          <button className="text-[10px] uppercase font-bold tracking-widest text-slate-500 hover:text-blue-400 transition-colors">
            Clear All Transmissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
