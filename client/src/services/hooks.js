import adminAPI from './backendAPI/admin';
import employerAPI from './backendAPI/employer';
import sltAPI from './backendAPI/slt';
import teacherAPI from './backendAPI/teacher';
import activityAPI from './backendAPI/activity_request';
import companyAPI from './backendAPI/company';
import schoolAPI from './backendAPI/school';
import socialMediaPostAPI from './backendAPI/social_media_post';

const hooks = {
  ...adminAPI,
  ...employerAPI,
  ...sltAPI,
  ...teacherAPI,
  ...activityAPI,
  ...companyAPI,
  ...schoolAPI,
  ...socialMediaPostAPI,
  endpoints: {
    ...adminAPI.endpoints,
    ...employerAPI.endpoints,
    ...sltAPI.endpoints,
    ...teacherAPI.endpoints,
    ...activityAPI.endpoints,
    ...companyAPI.endpoints,
    ...schoolAPI.endpoints,
    ...socialMediaPostAPI.endpoints,
  },
};

export default hooks;
