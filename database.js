const mongoose = require('mongoose');
mongoose.set("useFindAndModify", false);

mongoose.connect(
     process.env.DB_CONNECTION,
     {
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
     }
)
.then(()=>{
     console.log("DB Connected!");
}).catch(err=>{
     console.log(`DB Connection Error: ${err.message}`);
})
