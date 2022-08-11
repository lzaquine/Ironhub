const { Schema, model } = require("mongoose");

function removeHttp (link) {
  if(link.indexOf('https://') === 0){
    return link.substring(8)
  } else if (link.indexOf('http://') === 0){
    return link.substring(7);
} else{
    return link;
  }
}


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    surname: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 20
    },
    password: {
      type: String,
      required: true
    },
    ironpass: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true,
      enum: ['Web Dev', 'UX/UI', 'Data Analyst', 'Cybersecurity']
    },
    campus: {
      type: String,
      required: true
    },
    profilepicture: {
      type: String,
      default: "https://res.cloudinary.com/dkdf4rhxp/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1660229420/ironhub-project/yiisznvaxj6tzw9d0zmg.jpg"
    },
    location: {
      type: String
    },
    email: {
      type: String
    },
    website: {
      type: String,
      set: removeHttp
    },
    linkedin: {
      type: String,
      set: removeHttp
    },
    instagram: {
      type: String,
      set: removeHttp
    },
    bio: {
      type: String
    },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
