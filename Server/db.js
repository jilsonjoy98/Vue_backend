const { default: mongoose } = require('mongoose');
const mongooses = require('mongoose');

mongooses.connect("mongodb://localhost:27017/product");

const list = mongoose.model("list", {
  id: String,
  label: String,
  second_level: [
    {
      label: String,
      third_level: [
        {
          label: String,
        },
      ],
    },
  ],
});
module.exports={
    list
}