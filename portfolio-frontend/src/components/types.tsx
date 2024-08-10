// types.ts
export interface Work {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
  }
  
  export interface WorkItemProps {
    work: Work;
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
  }
  