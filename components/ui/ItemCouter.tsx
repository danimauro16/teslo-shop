import { FC, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

interface Props {
  maxValue: number;
  currentValue: number;
  updateQuantity: (quantity: number) => void;
}

export const ItemCounter: FC<Props> = ({
  maxValue,
  currentValue,
  updateQuantity,
}) => {

  const increment = () => {
    if (currentValue >= maxValue) return;
    return updateQuantity(currentValue + 1);
  };

  const decrement = () => {
    if (currentValue === 1) return;
    return updateQuantity(currentValue - 1);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={decrement}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {" "}
        {currentValue}{" "}
      </Typography>
      <IconButton onClick={increment}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
