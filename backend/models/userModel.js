const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isInstructor: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    appliedForInstructor: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
      // required: true,
      default:
        "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=612x612&w=0&h=8J3VgOZab_OiYoIuZfiMIvucFYB8vWYlKnSjKuKeYQM=",
    },
    githubLink: {
      type: String,
      // required: true,
      default: "",
    },
    linkedInLink: {
      type: String,
      // required: true,
      default: "",
    },
    resumeLink: {
      type: String,
      default: "https://d.novoresume.com/images/doc/functional-resume-template.png"
    },
    mobileNumber: {
      type: Number,
      // required: true,
      default: 0,
    },
    domains: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "Describe yourself",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enterredPassword) {
  return await bcrypt.compare(enterredPassword, this.password);
};
// Middleware for password
// pre => before saving the user
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
// Middleware for hashing password
// pre => before saving the user in the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(5);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
