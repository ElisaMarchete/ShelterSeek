// Contact
// - name!
// - email!
// - password!

// - phone
// - address
// - website

// - description
// - image

// Banking
// - transit number
// - institution number
// - account number

// const shelterSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       match: [/.+@.+\..+/, "Must use a valid email address"],
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 5,
//     },
//     website: {
//       type: String,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       maxlength: 150,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     BankTransitNumber: {
//       type: String,
//       required: true,
//     },
//     BankInstitutionNumber: {
//       type: String,
//       required: true,
//     },
//     BankAccount: {
//       type: String,
//       required: true,
//     },
//     donations: [Donation.schema],
//   },
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );