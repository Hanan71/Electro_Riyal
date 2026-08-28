import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Card, Grid, Typography } from "@mui/material";

const useStyle = makeStyles((theme) => { // يمكن استخدام theme إذا كان متاحًا
  return {
    // 🌟 تحديث ستايل البطاقة الرئيسية (Block Card)
    block: {
      padding: 20, /* زيادة الهامش الداخلي */
      background: "#ffffff", /* خلفية بيضاء نظيفة */
      borderRadius: 12, /* حواف دائرية عصرية */
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", /* ظل خفيف وجميل */
      border: "1px solid #ddd", /* إطار خفيف جداً */
      transition: "box-shadow 0.3s",
      "&:hover": {
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)", /* تأثير عند التمرير */
      },
    },
    row: {
      paddingBottom: 10,
      display: 'flex', // لضمان محاذاة أفضل
      alignItems: 'center',
    },
    head: {
      width: "120px", /* زيادة العرض قليلاً */
      display: "inline-block",
      fontWeight: 600, /* جعل العناوين أثقل */
      color: "#333",
      textAlign: 'left',
    },
    // 🌟 ستايل عصري لحقول الإدخال والقراءة (Inputs)
    inputField: {
        width: "250px", 
        padding: "8px 10px",
        borderRadius: 6,
        border: "1px solid #ccc",
        fontSize: '0.9rem',
        backgroundColor: '#f9f9f9', /* خلفية حقل خفيفة */
        transition: 'border-color 0.2s',
        '&:focus': {
            borderColor: '#e3d753ff', /* لون التركيز */
            outline: 'none',
        },
    }
  };
});

export default function Block({ block }) {
  const classes = useStyle();
  return (
    <Box sx={{ minWidth: 375, padding: 2 }}>
      <div className={classes.block}>
        
        {/* تغيير Grid إلى div لتجنب التعارض في الستايل الداخلي */}
        <div className={classes.row}>
          <div className={classes.head}>
            <Typography>Block:</Typography>
          </div>
          <input
            type="text"
            className={classes.inputField} /* استخدام الكلاس الجديد */
            value={`# ${block.index}`}
            readOnly
          />
        </div>
        <br />
        <div className={classes.row}>
          <div className={classes.head}>
            <Typography>Timestamp:</Typography>
          </div>
          <input
            type="text"
            className={classes.inputField}
            value={block.timestamp}
            readOnly
          />
        </div>
        <br />
        <div className={classes.row}>
          <div className={classes.head}>
            <Typography>Data:</Typography>
          </div>
          <textarea
            type="text"
            className={classes.inputField}
            rows={8}
            value={JSON.stringify(block.transactions)}
            readOnly
          />
        </div>
        <br />
        <div className={classes.row}>
          <div className={classes.head}>
            <Typography>Previous:</Typography>
          </div>
          <input
            type="text"
            className={classes.inputField}
            value={block.previous_hash}
            readOnly
          />
        </div>
        <br />
        <div className={classes.row}>
          <div className={classes.head}>
            <Typography>Hash:</Typography>
          </div>
          <input
            type="text"
            className={classes.inputField}
            value={block.hash}
            readOnly
          />
        </div>
        <br />
      </div>
    </Box>
  );
}