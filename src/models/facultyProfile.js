const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true
  },
  Title: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  University: {
    type: String,
    required: true
  },
  "Phone Number": {
    type: String,
    required: true
  },
  "Office Location": {
    type: String,
    required: true
  },
  "Research Interests": {
    type: [String],
    required: true
  },
  "Teaching Interests": {
    type: [String],
    required: true
  },
  Bio: {
    type: String,
    required: true
  },
  Courses: {
    type: [String],
    required: true
  },
  Publications: {
    type: [String],
    required: true
  },
  Awards: {
    type: [String],
    required: true
  },
  "Professional Memberships": {
    type: [String],
    required: true
  },
  Education: {
    type: [
      {
        Degree: {
          type: String,
          required: true
        },
        Institution: {
          type: String,
          required: true
        },
        Year: {
          type: String,
          required: true
        }
      }
    ],
    required: true
  },
  "Photo URL": {
    type: String,
    required: true
  }
});

const Faculty = mongoose.model("Faculty", facultySchema, 'faculties');

module.exports = Faculty;
