import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Accounts/AuthProvider';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import QuickQuiz from './scenes/Quiz';
import CourseUnit from './scenes/courseUnit';
import Form from './scenes/form';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar/calendar';
import QuestionPage from './scenes/QuestionPage/QuestionPage';
import LoginPage from './components/login/login';
import SignupPage from './components/Signup/index';
import StudentsPortal from './components/Accounts/Students/StudentsPortal';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isSidebarVisible && <Sidebar />}
          <main className="content">
            <Topbar setIsSidebarVisible={setIsSidebarVisible} />
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Quiz" element={<QuickQuiz />} />
                <Route path="/QuestionPage" element={<QuestionPage />} />
                <Route path="/courseUnit" element={<CourseUnit />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/components/Accounts/student/StudentsPortal" element={<StudentsPortal />} />
              </Routes>
            </AuthProvider>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
