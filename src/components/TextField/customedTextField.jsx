import React, { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import style from "./customedTextField.module.css";


const CustomTextField = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(inputValue);
    setInputValue("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
    <div>
    <TextField
        className={style.textField}
        variant="outlined"
        value={inputValue}
        placeholder="0x000124215... 검색"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon onClick={handleSubmit} />
            </InputAdornment>
          )
        }}
      />

    </div>
      
    </>
  );
};

export default CustomTextField;
