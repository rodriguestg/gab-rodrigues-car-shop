import { Types } from 'mongoose';

const isValidObjectId = (id: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      if ((String)(new Types.ObjectId(id)) === id) {
        return true;
      }
      
      return false;
    }
  } catch (error) {
    return true;
  }
};

export default isValidObjectId;
