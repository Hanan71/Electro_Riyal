import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material"; // استيراد Box لتحكم أفضل في الـ MUI

const useStyle = makeStyles(() => {
  return {
    root: {
      display: 'flex', // للتأكد من المحاذاة مع الكتل
      alignItems: 'center', // محاذاة الأيقونة في منتصف ارتفاع الكتلة
      justifyContent: 'center', 
      padding: '0 15px', // هامش أفقي أكبر قليلاً
      color: '#816f14ff', // لون أزرق عصري لنقطة الاتصال
    },
    iconStyle: {
        fontSize: '3rem', // تكبير حجم الأيقونة
        transform: 'rotate(90deg)', // تدوير الأيقونة 90 درجة لتبدو كأنها سهم أفقي (اختياري)
        opacity: 0.6, // تقليل الشفافية قليلاً
    }
  };
});

function Chain() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {/* تطبيق الستايل المخصص على الأيقونة */}
      <InsertLinkIcon className={classes.iconStyle} /> 
    </div>
  );
}

export default Chain;