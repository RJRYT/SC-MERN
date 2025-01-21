import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    fullName: {
      type: String,
    },
    address: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    mobile: {
      type: String,
    },
    gender: {
      type: String,
    },
    houseName: {
      type: String,
    },
    landMark: {
      type: String,
    },
    pincode: {
      type: String,
    },
    district: {
      type: String,
    },
    state: {
      type: String,
    },
    otp: {
      type: String,
    },
    otpExpires: {
      type: Date,
    },
    lastOtpSent: {
      type: Date,
    },
    fillProfile: {
      type: Boolean,
      default: false,
    },
    otpVerification: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
