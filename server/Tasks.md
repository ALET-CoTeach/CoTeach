# Tasks to work on the back-end

- [ ] Make sure employers can't make lesson requests
- [ ] Make sure all lesson requests are visible for all employers from a company
- [ ] Make sure all taken lesson requests are visible to all companies, companies can see other companies lesson requests
- [ ] SLT can only see lesson requests from the school they work at
- [x] Add a lessonId field to the SocialMediaPost model
- [ ] Check that for each LessonRequest by authenticated teacher has a corresponding SocialMediaPost
- [x] Admins can create SLT and Teacher accounts from the front-end, Create suitable controllers and routes to do this

- [ ] Create a StudentFeedBack model which will be extracted from a microsoft form.
- [ ] StudentFeedBackController must be reviewed by a member of SLT or Admin

> Note: Do not create a Student model

- [ ] Add information about parking, oftsed link, address, on school profile (Possibly change School model)
- [ ] Add a field in the Teacher model for the subjects they take (Probably create a new model called Subject)
- [ ] Filter LessonRequests based by the Subjects a Teacher teaches
- [ ] Create a Coordinator model which doesn't have permision to view SocialMediaPosts

- [ ] Teachers can see all lessons from the school they work at
- [ ] Teachers can see relevent LessonRequests from other schools dependig on the subjects they teach
