
export type FileType = 'Lecture' | 'Section' | 'Question' | 'Extra' | 'Recording';

export interface AcademicFile {
  id: string;
  name: string;
  number: number;
  type: FileType;
  date: string;
  fileName: string; // الاسم الحقيقي للملف على الهارد ديسك
}

export interface Subject {
  id: string;
  name: string;
  color: string;
  glowColor: string;
  energyAura: string;
  files: AcademicFile[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: number;
  isRead: boolean;
  type?: FileType;
}
