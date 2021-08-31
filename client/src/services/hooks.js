import { adminAPI } from './backendAPI/admin';
import { employerAPI } from './backendAPI/employer';
import { sltAPI } from './backendAPI/slt';
import { teacherAPI } from './backendAPI/teacher';

const hooks = {
  ...adminAPI,
  ...employerAPI,
  ...sltAPI,
  ...teacherAPI,
};

export default hooks;
