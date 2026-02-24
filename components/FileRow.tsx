
import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { AcademicFile } from '../types';
import { TYPE_ICONS } from '../constants';

interface FileRowProps {
  file: AcademicFile;
}

const FileRow: React.FC<FileRowProps> = ({ file }) => {
  const handleDownload = () => {
    // يفتح الملف الموجود في نفس المجلد
    window.open(file.fileName, '_blank');
  };

  return (
    <div 
      onClick={handleDownload}
      className="group relative flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Horizontal Light Sweep */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent group-hover:left-[200%] transition-all duration-700 ease-in-out pointer-events-none" />

      {/* Type Icon */}
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
        {TYPE_ICONS[file.type]}
      </div>

      <div className="flex-grow">
        <h4 className="text-slate-200 font-semibold text-sm md:text-base leading-tight">
          <span className="text-blue-400 mr-2">#{file.number}</span>
          {file.name}
        </h4>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">{file.type}</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-[10px] md:text-xs text-slate-500">{file.date}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div 
          className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-blue-600/20 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all"
        >
          <Download className="w-5 h-5" />
        </div>
        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
      </div>
    </div>
  );
};

export default FileRow;
