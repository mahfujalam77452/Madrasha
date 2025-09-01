import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AddPicture from '../../Components/AddPicture/AddPicture'
import AddVideo from '../../Components/AddVideo/AddVideo'
import AddNotice from '../../Components/AddNotice/AddNotice'
import AddTeacher from '../../Components/AddTeacher/AddTeacher'
import AddStudent from '../../Components/AddStudent/AddStudent'
import AddFee from '../../Components/AddFee/AddFee'
import AddRoutine from '../../Components/AddRoutine/AddRoutine'
import AddAdmitCard from '../../Components/AddAdmitCard/AddAdmitCard'
import AddMark from '../../Components/AddMark/AddMark'
import AddCertificate from '../../Components/AddCertificate/AddCertificate'
import SeeDonation from '../../Components/SeeDonation/SeeDonation'
import AllPicture from '../../Components/AllPicture/AllPicture'
import AllVideo from '../../Components/AllVideo/AllVideo'
import AllNotice from '../../Components/AllNotice/AllNotice'
import AllTeacher from '../../Components/AllTeacher/AllTeacher'
import AllStudent from '../../Components/AllStudent/AllStudent'
import AllRoutine from '../../Components/AllRoutine/AllRoutine'
import EditContact from '../../Components/EditContact/EditContact'
import LogIn from '../../Components/Login/LogIn'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChangePassword from '../../Components/ChangePassword/ChangePassword'
import './Admin.css'
import SeeFee from '../../Components/SeeFee/SeeFee'
import AddedFees from '../../Components/AddedFees/AddedFees'
import AddCategory from '../../Components/AddCategory/AddCategory'
import AddDepartment from '../../Components/AddDepartment/AddDepartment'
import AddExamName from '../../Components/AddExamName/AddExamName'
const Admin = () => {
  
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addpicture' element={<AddPicture/>}/>
        <Route path='/addvideo' element={<AddVideo/>}/>
        <Route path='/addnotice' element={<AddNotice/>}/>
        <Route path='/addteacher' element={<AddTeacher/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/addfee' element={<AddFee/>}/>
        <Route path='/addroutine' element={<AddRoutine/>}/>
        <Route path='/addadmitcard' element={<AddAdmitCard/>}/>
        <Route path='/addmarks' element={<AddMark/>}/>
        <Route path='/addcertificate' element={<AddCertificate/>}/>
        <Route path='/addcategory' element={<AddCategory/>}/>
        <Route path='/adddepartment' element={<AddDepartment/>}/>
        <Route path='/seedonation' element={<SeeDonation/>}/>
        <Route path='/seefee' element={<SeeFee/>}/>
        <Route path='/addedfees' element={<AddedFees/>}/>
        <Route path='/allpicture' element={<AllPicture/>}/>
        <Route path='/allvideo' element={<AllVideo/>}/>
        <Route path='/allnotice' element={<AllNotice/>}/>
        <Route path='/allteachers' element={<AllTeacher/>}/>
        <Route path='/allstudents' element={<AllStudent/>}/>
        <Route path='/allroutine' element={<AllRoutine/>}/>
        <Route path='/editcontact' element={<EditContact/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/addexamname' element={<AddExamName/>}/>
        <Route path='/changepassword' element = {<ChangePassword/>}/>
      </Routes>
    </div>
  )
}

export default Admin
