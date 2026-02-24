
import React from 'react';
import { BookOpen, FileText, HelpCircle, PlusCircle, Video } from 'lucide-react';
import { Subject, FileType, AcademicFile } from './types';

// الإصدار الحالي للبيانات - غير هذا الرقم ليظهر إشعار للمستخدمين بوجود تحديث
export const DATA_VERSION = "2.5.0";

export const TYPE_ICONS: Record<FileType, React.ReactNode> = {
  Lecture: <BookOpen className="w-5 h-5" />,
  Section: <FileText className="w-5 h-5" />,
  Question: <HelpCircle className="w-5 h-5" />,
  Extra: <PlusCircle className="w-5 h-5" />,
  Recording: <Video className="w-5 h-5" />,
};

// دالة مساعدة لتوليد الملفات آلياً بناءً على النمط الاحترافي المطلوب
const generateFiles = (subjectName: string, counts: Record<FileType, number>): AcademicFile[] => {
  const files: AcademicFile[] = [];
  const types: FileType[] = ['Lecture', 'Section', 'Question', 'Extra', 'Recording'];
  const abbr: Record<FileType, string> = { Lecture: 'Lec', Section: 'Sec', Question: 'Q', Extra: 'EX', Recording: 'Rec' };

  types.forEach(type => {
    const count = counts[type] || 0;
    for (let i = 1; i <= count; i++) {
      const typeLabel = abbr[type];
      files.push({
        id: `${subjectName}-${type}-${i}`,
        number: i,
        type: type,
        name: `${subjectName} ${type}`,
        date: 'Session 2024/2025',
        fileName: `${i} ${typeLabel} ${subjectName}.pdf`
      });
    }
  });
  return files;
};

export const SUBJECTS: Subject[] = [
  {
    id: 'oral-path',
    name: 'Oral Pathology',
    color: 'blue',
    glowColor: '#3b82f6',
    energyAura: 'shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]',
    files: generateFiles('Oral Pathology', { Lecture: 12, Section: 10, Question: 10, Extra: 5, Recording: 0 })
  },
  {
    id: 'pharma',
    name: 'Pharmacology',
    color: 'crimson',
    glowColor: '#ef4444',
    energyAura: 'shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)]',
    files: generateFiles('Pharmacology', { Lecture: 12, Section: 10, Question: 10, Extra: 5, Recording: 0 })
  },
  {
    id: 'psych',
    name: 'Psychology',
    color: 'violet',
    glowColor: '#8b5cf6',
    energyAura: 'shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]',
    files: generateFiles('Psychology', { Lecture: 12, Section: 0, Question: 10, Extra: 5, Recording: 0 })
  },
  {
    id: 'tech-fixed-2',
    name: 'Tech Fixed 2',
    color: 'emerald',
    glowColor: '#10b981',
    energyAura: 'shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]',
    files: generateFiles('Tech Fixed 2', { Lecture: 12, Section: 10, Question: 10, Extra: 5, Recording: 0 })
  },
  {
    id: 'tech-op',
    name: 'Tech-Operative',
    color: 'teal',
    glowColor: '#14b8a6',
    energyAura: 'shadow-[0_0_30px_-5px_rgba(20,184,166,0.5)]',
    files: generateFiles('Tech-Operative', { Lecture: 12, Section: 10, Question: 10, Extra: 5, Recording: 0 })
  },
  {
    id: 'tech-rem',
    name: 'Tech-Removable',
    color: 'orange',
    glowColor: '#f59e0b',
    energyAura: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)]',
    files: generateFiles('Tech-Removable', { Lecture: 12, Section: 10, Question: 10, Extra: 5, Recording: 0 })
  }
];
