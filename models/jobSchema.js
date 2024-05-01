import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title."],
    minLength: [3, "Job Title must contain at least 3 Characters!"],
    maxLength: [50, "Job Title cannot exceed 50 Characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide job decription."],
    minLength: [30, "Description must contain at least 30 Characters!"],
    maxLength: [350, "Description cannot exceed 350 Characters!"],
  },
  category: {
    type: String,
    required: [true, "Job category is required!"],
  },
  country: {
    type: String,
    required: [true, "Job Country is required!"],
  },
  city: {
    type: String,
    required: [true, "Job city is required!"],
  },
  location: {
    type: String,
    required: [true, "Please provide exact location!"],
    minLength: [10, "Job Location must contian at least 10 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed Salary must contain at least 4 digits"],
    maxLength: [9, "Fixed Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary from must contain at least 4 digits"],
    maxLength: [9, "Salary from cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "SalaryTo must contain at least 4 digits"],
    maxLength: [9, "SalaryTo cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
