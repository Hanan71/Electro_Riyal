import { Container, Grid, Box } from "@mui/material"; 
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Block from "./block";
import Chain from "./link";

// 🌟 1. استيراد الصورة (تأكد من تعديل المسار الصحيح)
import riyalsImage from '../../assets/riyals.png'; 

const useStyle = makeStyles((theme) => ({
  // 🌟 تحديث ستايل الحاوية الرئيسية للعرض الأفقي
  root: {
    paddingTop: 80, 
    overflowX: 'auto', 
    whiteSpace: 'nowrap', 
    minHeight: '100vh', // للتأكد من أن الصفحة تملأ الارتفاع
  },
  // ... (بقية الستايلات لم تتغير)
  blockchain: {
    display: 'flex', 
    flexWrap: 'nowrap', 
    padding: 20,
    minWidth: '100%', 
  },
  // 🌟 2. كلاس لستايل الصورة المطلق في أسفل اليمين
  footerImage: {
      position: 'fixed', // تثبيت الموقع عند التمرير
      bottom: 20, // 20px من الأسفل
      right: 20, // 20px من اليمين
      width: '150px', // حجم مناسب للصورة
      height: 'auto',
      opacity: 0.25, // جعلها شفافة قليلاً (علامة مائية)
      zIndex: 10, // للتأكد من أنها تظهر فوق أي محتوى آخر
  }
}));

function BlockChainScreen() {
  const classes = useStyle();

  const [blocks, setblocks] = useState([]);
  
  // ... (كود جلب البيانات لم يتغير) ...

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/get_chain");
      const result = await response.json();
      if (result) setblocks(result.chain);
    };
    fetchData();
  }, []);

  console.log(blocks);

  return (
    <>
      <Header />
      <Container className={classes.root}> 
        <Box> 
          <Grid
            className={classes.blockchain}
            container
            spacing={5}
          >
            {blocks.map((block) => (
              <React.Fragment key={block.index}> 
                <Block block={block} />
                {blocks.indexOf(block) < blocks.length - 1 && (
                    <Chain />
                )}
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
      
      {/* 🖼️ 3. إضافة الصورة في أسفل اليمين */}
      <img 
          src={riyalsImage} 
          alt="Riyals Digital Symbol" 
          className={classes.footerImage} 
      />
    </>
  );
}

export default BlockChainScreen;
