import { Program } from '@/components/shared/ProgramCard/ProgramCard';
import { axiosInstance } from './instance';

export const getPrograms = async (): Promise<Program[]> => {
  try {
    const response = await axiosInstance.get<Program[]>('/products?_start=0&_limit=32');
    return response.data.filter(el => el.specializedSubjects.some(item=>item.skills.length > 0));
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
};