import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Get from "./pages/GetID";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ScheduleEdit from "./pages/ScheduleEdit";
import ScheduleView from "./pages/ScheduleView";
import Student from "./pages/Student";
import Update from "./pages/Update";
import UpdateCourses from "./pages/UpdateCourses";
import ViewCourses from "./pages/ViewCourses";
import ViewStudent from "./pages/ViewStudent";
import CreateCourse from "./pages/CreateCourse";
import CreateDepartment from "./pages/CreateDepartment";
import CreateManagement from "./pages/CreateManagement";
import CreateStudent from "./pages/CreateStudent";
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import AddPost from "./pages/AddPost";
import Doctor from "./pages/Doctor";
import DoctorPosts from "./pages/DoctorPosts";
import DoctorStudents from "./pages/DoctorStudents";
import DoctorSchedule from "./pages/DoctorSchedule";
function App() {

  

  return (
    <BrowserRouter>
      <Routes>.
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Student" element={<Student />} />
        <Route path="ScheduleView" element={<ScheduleView />} />
        <Route path="GetID" element={<Get />} />
        <Route path="Update" element={<Update />} />
        <Route path="AdminPage" element={<AdminPage />} />
        <Route path="ViewStudent" element={<ViewStudent />} />
        <Route path="ViewCourses" element={<ViewCourses />} />
        <Route path="UpdateCourses" element={<UpdateCourses />} />
        <Route path="ScheduleEdit" element={<ScheduleEdit />} />
        <Route path="CreateCourse" element={<CreateCourse />} />
        <Route path="CreateDepartment" element={<CreateDepartment />} />
        <Route path="CreateManagement" element={<CreateManagement />} />
        <Route path="CreateStudent" element={<CreateStudent />} />
        <Route path="Departments" element={<Departments/>} />
        <Route path="Courses" element={<Courses/>} />
        <Route path="AddPost" element={<AddPost/>} />
        <Route path="Doctor" element={<Doctor/>} />
        <Route path="DoctorPosts" element={<DoctorPosts/>} />
        <Route path="DoctorStudents" element={<DoctorStudents/>} />
        <Route path="DoctorSchedule" element={<DoctorSchedule/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
