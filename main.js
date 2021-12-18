// ----------------------------------------------------------
const model_mdb = require("./model");
const mongoose_config = require("mongoose");
// ----------------------------------------------------------
// MONGOOSE
const URL =
  "";

const connection_mongoose = async () => {
  await mongoose_config.connect(
    URL,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  );
};

// appel de la fonction
connection_mongoose()
  .then((positif) => {
    console.log("connexion mongodb : positif");
  })
  .catch((negatif) => {
    console.log(negatif);
  });

// model enregistrer
let mdl = new model_mdb({ data: "une donnée à enregister" });

const save_data = () => {
  mdl.save((err, doc) => {
    if (err) {
      console.log(err);
    }
    console.log(doc);
  });
};

save_data();