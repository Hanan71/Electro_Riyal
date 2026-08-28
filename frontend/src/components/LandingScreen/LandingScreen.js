import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//  1. تم إلغاء سطر الاستيراد الذي يسبب المشكلة
// import welcomeGif from './welcome.gif'; 
import { makeStyles } from '@mui/styles';

// تعريف الستايل المخصص
const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#e5e5d5', // لون الخلفية الرمادي الفاتح المخصص
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
    },
    title: {
        marginBottom: '20px',
        fontWeight: 700,
        color: '#333',
    },
    actionButton: {
        marginTop: '20px',
        marginRight: '10px',
    },
    gifStyle: {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '300px', // تحديد أقصى ارتفاع لملف الـ GIF
        margin: '30px 0',
        borderRadius: '10px',
    }
}));

const LandingScreen = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    // دالة للانتقال إلى صفحة الـ Blockchain (الصفحة الرئيسية للتطبيق)
    const handleLogin = () => {
        // الانتقال إلى المسار الجديد الذي حددناه في index.js
        navigate('/app'); 
    };


// ... (داخل دالة return في مكون LandingScreen)

    return (
        <Box className={classes.root}>
            
            {/*  السطر الأول: مرحباً بك في نظام (هذا هو المكان الذي نضع فيه الهامش السفلي) 🌟 */}
            <Typography 
                variant="h3" 
                className={classes.title}
                //  تعديل المسافة: هامش سفلي بسيط (مثلاً: 5px) 
                sx={{ marginBottom: '5px' }} 
            >
                مرحباً بك في نظام
            </Typography>
            
            {/*  السطر الثاني: Electro Riyal (نزيل منه أي هامش علوي سلبي) 🌟 */}
            <Typography 
                variant="h2" 
                className={classes.title} 
                // إزالة أي هامش علوي سلبي أو غير مرغوب فيه
                sx={{ 
                    marginTop: '0', // أو إزالة السطر إذا لم يكن موجوداً
                    color: '#2b2d19ff', 
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)' 
                }}
            >
                Electro Riyal
            </Typography>

            {/*  2. تم تعديل المسار لاستخدام المسار المطلق من مجلد public */}
            <img 
                src="/welcome.gif" //  المسار يبدأ بـ / ويشير إلى مجلد public
                alt="Welcome Animation" 
                className={classes.gifStyle}
            />

            <Typography variant="h5" color="textSecondary">
               Blockchain المنصة الآمنة لمعاملات سلسلة الـ 
            </Typography>

            <Box>
                {/* 🔑 زر تسجيل الدخول */}
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLogin} 
                    className={classes.actionButton}
                >
                    تسجيل الدخول / حساب جديد
                </Button>
                
                {/* (اختياري) زر للتنقل مباشرة إلى العرض للزوار */}
                {/* <Button variant="outlined" color="primary" className={classes.actionButton}>
                    استعراض كزائر
                </Button> */}
            </Box>
        </Box>
    );
};

export default LandingScreen;
