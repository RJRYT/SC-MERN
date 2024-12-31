import React from "react";
import {
  TextField,
  Button,
  Avatar,
  Box,
  Container,
  MenuItem,
} from "@mui/material";

export const FillProfile = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Button variant="text">{"<"} Back</Button>
        <h1>Fill Your Profile</h1>
      </Box>

      <form>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Avatar
            alt="Avatar"
            src="/path-to-avatar-placeholder.png"
            sx={{ width: 96, height: 96, border: "2px solid #ccc" }}
          />
        </Box>

        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Date of Birth"
          type="date"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          select
          label="Gender"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        >
          <MenuItem value="">Gender</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>

        <TextField
          label="House Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Landmark"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Pincode"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="District"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField label="State" variant="outlined" fullWidth sx={{ mb: 2 }} />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Continue
        </Button>
      </form>
    </Container>
  );
};
