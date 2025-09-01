const express = require('express');
const router = express.Router();
const uploadImage = require('../Controllers/uploadpic.controller.js');
const upload = require('../middlewares/multer.middleware.js')
const addTeacher = require('../Controllers/addTeacher.controller.js')
const deleteTeacher = require('../Controllers/deleteTeacher.controller.js')
const getTeacher = require('../Controllers/getTeacher.controller.js')
const getVideo = require('../Controllers/getVideo.controller.js')
const deleteVideo = require('../Controllers/deleteVideo.controller.js')
const addVideo = require('../Controllers/addVideo.controller.js')
const queryDonation = require('../Controllers/queryDonation.controller.js')
const addDonation = require('../Controllers/addDonation.controller.js')
const addCollectedFee = require('../Controllers/addCollectedFee.controller.js')
const getPicture = require('../Controllers/getPicture.controller.js')
const deletePicture = require('../Controllers/deletePicture.controller.js')
const queryCollectedFee = require('../Controllers/queryCollectedFee.controller.js')
const addRoutine = require('../Controllers/addRoutine.controller.js')
const getRoutine = require('../Controllers/getRoutine.controller.js')
const deleteRoutine = require('../Controllers/deleteRoutine.controller.js')
const addNotice = require('../Controllers/addNotice.controller.js')
const getNotice = require('../Controllers/getNotice.controller.js')
const deleteNotice = require('../Controllers/deleteNotice.controller.js')
const addAddedFee = require('../Controllers/addAddedFee.controller.js')
const getAddedFee = require('../Controllers/getAddedFee.controller.js')
const deleteAddedFee = require('../Controllers/deleteAddedFee.controller.js')
const addStudent = require('../Controllers/addStudent.controller.js')
const deleteStudent = require('../Controllers/deleteStudent.controller.js')
const queryStudent = require('../Controllers/queryStudent.controller.js')
const addContact = require('../Controllers/addContact.controller.js')
const updateContact = require('../Controllers/updateContact.controller.js')
const {signUp,logIn,changePassword} = require('../Controllers/auth.controller.js')
const {signUpValidation,logInValidation,changePasswordValidation} = require('../middlewares/authValidation.middleware.js')
const ensureAuthenticated  = require('../middlewares/auth.middleware.js')
const addAdmitCard = require('../Controllers/addAdmitCard.controller.js')
const addResult = require('../Controllers/addResult.controller.js')
const addCertificate = require('../Controllers/addCertificate.controller.js')
const getAllRoutine = require('../Controllers/getAllRoutine.controller.js');
const addCategory = require('../Controllers/addCategory.controller.js');
const addDepartment = require('../Controllers/addDepartment.controller.js');
const getCategory = require('../Controllers/getCategory.controller.js');
const getDepartment = require('../Controllers/getDepartment.controller.js');
const deleteCategory = require('../Controllers/deleteCategory.controller.js');
const deleteDepartment = require('../Controllers/deleteDepartment.controller.js');
const addExamName = require('../Controllers/addExamName.controller.js');
const getExamName = require('../Controllers/getExamName.controller.js');
const deleteExamName = require('../Controllers/deleteExamName.controller.js');

router.route("/addimage").post(ensureAuthenticated,upload.single('file'),uploadImage)
router.route("/addteacher").post(ensureAuthenticated,upload.single('file'),addTeacher)
router.route("/adddonation").post(ensureAuthenticated,addDonation)
router.route("/addvideo").post(ensureAuthenticated,addVideo)
router.route("/addcollectedfee").post(ensureAuthenticated,addCollectedFee);
router.route("/addroutine").post(ensureAuthenticated,upload.single('file'),addRoutine);
router.route("/addnotice").post(ensureAuthenticated,upload.single('file'),addNotice);
router.route("/addaddedfee").post(ensureAuthenticated,addAddedFee)
router.route("/addstudent").post(ensureAuthenticated,upload.single('file'),addStudent)
router.route("/addcontact").post(ensureAuthenticated,addContact)
router.route("/login").post(logInValidation,logIn);
router.route("/signup").post(signUpValidation,signUp);
router.route("/changepassword").post(changePasswordValidation,changePassword);
router.route("/addadmit").post(ensureAuthenticated,upload.single('file'),addAdmitCard);
router.route("/addresult").post(ensureAuthenticated,upload.single('file'),addResult);
router.route("/addcertificate").post(ensureAuthenticated,upload.single('file'),addCertificate);
router.route("/querydonation").post(queryDonation)
router.route("/querycollectedfee").post(ensureAuthenticated,queryCollectedFee)
router.route("/addcategory").post(ensureAuthenticated,addCategory)
router.route("/adddepartment").post(ensureAuthenticated,addDepartment)
router.route("/addexamname").post(ensureAuthenticated,addExamName)
router.route("/getroutine").post(getRoutine)

router.route("/getteacher").get(getTeacher)
router.route("/getvideo").get(getVideo)
router.route("/getpicture").get(getPicture)
router.route("/getnotice").get(getNotice)
router.route("/getaddedfee").get(getAddedFee)
router.route("/getstudent").get(queryStudent)
router.route("/getallroutine").get(getAllRoutine)
router.route("/getcategory").get(getCategory)
router.route("/getdepartment").get(getDepartment)
router.route("/getexamname").get(getExamName)

router.route("/deletevideo/:id").delete(ensureAuthenticated,deleteVideo)
router.route("/deleteteacher/:id").delete(ensureAuthenticated,deleteTeacher)
router.route("/deletepicture/:id").delete(ensureAuthenticated,deletePicture)
router.route("/deleteroutine/:id").delete(ensureAuthenticated,deleteRoutine)
router.route("/deletenotice/:id").delete(ensureAuthenticated,deleteNotice)
router.route("/deleteaddedfee/:id").delete(ensureAuthenticated,deleteAddedFee)
router.route("/deletestudent/:id").delete(ensureAuthenticated,deleteStudent)
router.route("/deletecategory/:id").delete(ensureAuthenticated,deleteCategory)
router.route("/deletedepartment/:id").delete(ensureAuthenticated,deleteDepartment)
router.route("/deleteexamname/:id").delete(ensureAuthenticated,deleteExamName)

router.route("/updatecontact").patch(ensureAuthenticated,updateContact);


module.exports = router;