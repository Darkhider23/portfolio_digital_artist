// types.ts
export interface Work {
    _id: string;
    imageUrl: string;
    title: string;
    description: string;
    clientUrl?: string;
  }
  
  export interface WorkItemProps {
    work: Work;
    onDelete: (_id: string) => void;
    onUpdate: (_id: string) => void;
  }
  