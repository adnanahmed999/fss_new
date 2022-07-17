import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import CoursePage from "./components/CoursePage";
import Assignments from "./components/Assignments";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import MyCoursesUser from "./components/MyCoursesUser";
import ContactForm from "./components/ContactUs";
import MyCoursesInstr from "./components/MyCoursesInstr";
import CreateCourse from "./components/CreateCourse";
import CreateChapter from "./components/CreateChapter";
import CareerForm from "./components/CareerForm";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfile";
import DiscussionForum from "./components/DiscussionForum";
import InstructorAssignmentPage from "./components/InstructorAssignmentPage";
import CodeEditor from "./components/codeEditor/codeEditor";
import LeaderBoard from "./components/Leaderboard";
import Footer from "./components/Footer"
import CodeCompiler from "./components/CodeCompiler"
import InstructorSignin from "./components/InstructorSignin"
import InstructorSignup from "./components/InstructorSignup"
import Chatbot from "./components/Chatbot"
import LandingPage from "./components/LandingPage"
import Notes from "./components/Notes/Notes"
import ChatEngine from "./components/ChatEngine/ChatEngine"
import alanBtn from "@alan-ai/alan-sdk-web";
import Viva from "./components/Viva"
import { useNavigate } from "react-router-dom"
import SpeechyForm from "./components/SpeechyForm";
import HindiHome from "./components/HindiHome"
import RasaChatbot from "./components/RasaChatbot";
import ChatApp from "./components/chatsocket/ChatApp";

function App() {

  const navigate = useNavigate();
  const alanKey =
    "cfdac5b36d0a78de9cd6709b0a7e592e2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "login") {
          navigate("/signin");
        } else if (command === "signup") {
          navigate("/signup");
        } else if (command === "home") {
          navigate("/");
        } else if (command === "maps") {
          navigate("/map");
        } else if (command === "blogs") {
          navigate("/blogs");
        }
        else if (command === "courses") {
          navigate("/courses");
        } else if (command === "notes") {
          navigate("/notes");
        } else if (command === "chat") {
          navigate("/chat");
        }
      },
    });
  }, []);

  return (
    // <BrowserRouter>
    <>
      <Routes>

        <Route path="/" element={<LandingPage />} exact></Route>
        <Route path="/courses" element={<Home />} exact></Route>
        <Route path="/signin" element={<SignIn />} exact></Route>
        <Route path="/signup" element={<SignUp />} exact></Route>
        <Route path="/course/:id" element={<CoursePage />} exact></Route>
        <Route path="/leaderboard" element={<LeaderBoard />} exact></Route>
        <Route path="/assignments/:id" element={<Assignments />} exact></Route>
        <Route path="/admin/login" element={<AdminLogin />} exact></Route>
        <Route path="/admin/access" element={<AdminDashboard />} exact></Route>
        <Route path="/mycourses/:id" element={<MyCoursesUser />} exact></Route>
        <Route path="/contactForm" element={<ContactForm />} exact></Route>
        <Route path="/careerForm" element={<CareerForm />} exact></Route>
        <Route path="/myProfile" element={<ProfilePage />} exact></Route>
        <Route path="/editProfile" element={<EditProfilePage />} exact></Route>
        <Route path="/codeCompiler" element={<CodeCompiler />} exact></Route>
        <Route path="/viva" element={<Viva />} exact></Route>
        <Route path="/instructor/signin" element={<InstructorSignin />} exact></Route>
        <Route path="/instructor/signup" element={<InstructorSignup />} exact></Route>
        <Route path="/notes" element={<Notes />} exact />
        {/* <Route path="/chat" element={<ChatEngine />} exact /> */}
        <Route path="/chat" element={<ChatApp />} exact />
        {/* <Route
        path="/instructorcourses/:id"
        component={MyCoursesInstr}
        exact
      ></Route> */}
        <Route
          path="/instructorAssignments/:id"
          element={<InstructorAssignmentPage />}
          exact
        ></Route>
        {/* <Route path="/instructorcourses/:id" element={<MyCoursesInstr} exact></Route> */}
        <Route
          path="/instructorcourses/:id"
          element={<MyCoursesInstr />}
          exact
        ></Route>
        <Route path="/createCourse" element={<CreateCourse />} exact></Route>
        <Route path="/createChapter/:id" element={<CreateChapter />} exact></Route>
        {/* <Route path="/quiz/:courseId" element={<Quiz} exact></Route> */}
        <Route
          path="/discuss/:courseId"
          element={<DiscussionForum />}
          exact
        ></Route>
        <Route path="/codeEditor/" element={<CodeEditor />} exact></Route>
        <Route path="/hin" element={<HindiHome />} exact></Route>
        <Route path="/editProfileSpeech" element={<SpeechyForm />} exact />
      </Routes>
      <Footer />
      {/* <RasaChatbot /> */}
      <Chatbot />
    </>
    // </BrowserRouter>
  );
}

export default App;
