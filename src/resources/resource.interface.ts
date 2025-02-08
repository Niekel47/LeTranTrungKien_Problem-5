export interface CreateResourceDTO  {
    name: string;
    description: string;
    category: string;
    status: 'active' | 'inactive';
  }
  
  export interface UpdateResourceDTO extends Partial<CreateResourceDTO> {
    id: number;
  }