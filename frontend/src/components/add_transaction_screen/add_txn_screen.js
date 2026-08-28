import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function AddTxnForm({ open, handleClose }) {
  const [state, setState] = useState({
    sender: "",
    receiver: "",
    amount: 0,
  });

  const handleSubmit = async () => {
    handleClose();
    console.log(state);
    const response = await axios.post(
      "http://localhost:5000/add_transaction",
      state
    );
    console.log(response.data);
    alert(response.data.message);
  };

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send Crypto Coins</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Information Carefully.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="sender"
            label="Sender Address"
            type="text"
            fullWidth
            variant="outlined"
            value={state.sender}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="receiver"
            label="Receiver Address"
            type="text"
            fullWidth
            variant="outlined"
            value={state.receiver}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            variant="outlined"
            value={state.amt}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          {/* تعديل زر Cancel ليكون نظيفًا */}
          <Button 
            onClick={handleClose} 
            sx={{ 
                color: '#393c32ff', /* لون رمادي هادئ */
                '&:hover': { backgroundColor: 'rgba(108, 117, 125, 0.08)' } /* تأثير خفيف عند التمرير */
            }}>
                Cancel
          </Button>
          
          {/* تعديل زر Send ليكون عصريًا (لون أخضر للموافقة) */}
          <Button 
            variant="contained" 
            onClick={handleSubmit}
            sx={{ 
                backgroundColor: '#bebe62ff', /* لون أخضر للموافقة */
                '&:hover': { backgroundColor: '#878827ff' }, /* لون أغمق عند التمرير */
                borderRadius: '8px', /* حواف دائرية عصرية */
                boxShadow: 'none' /* إزالة الظل الافتراضي لـ MUI */
            }}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}