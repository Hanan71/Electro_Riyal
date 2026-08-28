import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BlockChainScreen from "./components/blockchain_screen/blockchain_screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 🌟 1. استيراد مكون صفحة البداية الجديد
import LandingScreen from "./components/LandingScreen/LandingScreen"; 

// 1. استيراد أدوات تخصيص الـ Theme من MUI
import { createTheme, ThemeProvider } from '@mui/material/styles'; 

// 2. تعريف الـ Theme المخصص (تم الإبقاء على تعديلاتك للألوان)
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2b2d19ff', // أزرق عصري
    },
    secondary: {
      main: '#6b751eff', // أخضر للموافقة (يمكن استخدامه لزر الإرسال)
    },
  },
  components: {
    // تخصيص حقول الإدخال (TextFields)
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // حواف دائرية
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#262f04ff',
            borderWidth: '2px',
          },
        },
      },
    },
    // تخصيص الأزرار (Buttons)
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px', 
                textTransform: 'none', 
                boxShadow: 'none', 
                '&:hover': {
                    boxShadow: '0 4px 8px rgba(11, 13, 2, 0.1)', 
                }
            },
        },
    },
  },
});
// ------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}> 
      <BrowserRouter>
        <Routes>
          {/* 🌟 2. المسار الرئيسي (/) يعرض صفحة البداية */}
          <Route path="/" element={<LandingScreen />} />
          
          {/* 🌟 المسار (/app) يعرض صفحة الـ Blockchain */}
          <Route path="/app" element={<BlockChainScreen />} />

          {/* (يمكنك حذف مكون <App/> إذا لم تكن تستخدمه) */}
          {/* <Route path="/app" element={<App />} /> */} 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
