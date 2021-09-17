const { Schema, model } = require('mongoose');

const volunteerSchema = new Schema(
  {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    phone: {
        type: String,
        required: true,
        match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'Enter Valid Phone Number']
    }
  }
);

const Volunteer = model('Volunteer', volunteerSchema);

module.exports = Volunteer;
