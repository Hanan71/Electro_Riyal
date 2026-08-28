import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AddTxnForm from "../add_transaction_screen/add_txn_screen";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const history = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mineBlock = async () => {
    const response = await axios.get("http://localhost:5000/mine_block");
    console.log(response.data);
    // history("/");
    alert(response.data.message + "Refresh Page to see new blocks!");
  };

  // 🌟 دالة إعادة التعيين المُعدَّلة لإرسال طلب إلى الخادم 🌟
  const handleReset = async () => {
    try {
      // 1. إرسال طلب إلى خادم Python لمسح البلوكتشين (مسار API الجديد)
      const response = await axios.get("http://localhost:5000/reset_chain");
      
      if (response.status === 200) {
          // 2. بعد نجاح المسح، قم بإظهار تنبيه وإعادة تحميل الصفحة لرؤية الكتلة رقم 1
          alert(response.data.message);
          window.location.reload(); 
      }
      
    } catch (error) {
      // التعامل مع الأخطاء (مثل إذا كان خادم Python مطفأ أو المسار غير موجود)
      console.error("Error resetting blockchain:", error);
      alert("فشل إعادة التعيين. تأكد من أن خادم Python يعمل وأن مسار /reset_chain صحيح.");
    }
  };


  const pages = [
    {
      page: "Blockchain",
      func: () => {
        history("/");
      },
    },
    {
      page: "Add Transaction",
      func: handleClickOpen,
    },
    {
      page: "Mine New Block",
      func: mineBlock,
    },
    // 🌟 زر إعادة التعيين يستخدم دالة handleReset المعدّلة 🌟
    {
      page: "Reset View",
      func: handleReset,
    },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "0 2px 4px rgba(16, 1, 1, 0.05)",
        borderBottom: "1px solid #eee",
        backgroundColor: "white", 
        color: "#333", 
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 🌟 تعديل نص العنوان على الشاشات الكبيرة */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#333", 
            }}
          >
            Electro Riyal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit" 
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={page.func}> 
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* 🌟 تعديل نص العنوان على الشاشات الصغيرة */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, color: '#333' }}
          >
            R
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={page.func}
                // 🌟 تعديل الأزرار لتكون داكنة ونظيفة
                sx={{
                  my: 2,
                  color: "#333", 
                  display: "block",
                  fontWeight: 600,
                  textTransform: 'none', 
                }}
              >
                {page.page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <AddTxnForm open={open} handleClose={handleClose} />
    </AppBar>
  );
};
export default Header;
