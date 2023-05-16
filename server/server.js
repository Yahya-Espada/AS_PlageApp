//importing modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
 const db = require('./Models')
 
 const citoyenRoutes = require('./Routes/citoyenRoutes');
 const agentMunicipaliteRoutes = require('./Routes/agentmunicipaliteRoutes')
const locataireRoutes = require('./Routes/locataireRoutes')
const plageRoutes = require('./Routes/plageRoutes')
 const plage_privee = require('./Routes/plagePriveeRoutes')
 const plage_publique = require('./Routes/plagePubliqueRoutes')

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})



// routes for the citoyen API
app.use('/api/citoyen', citoyenRoutes);

//routes for the agentmunicipale API
app.use('/api/agentmunicipale',agentMunicipaliteRoutes);

//routes for the locataire API
app.use('/api/locataire', locataireRoutes );

app.use('/api/plage', plageRoutes );

app.use('/api/plage_privee',plage_privee);

app.use('/api/plage_publique', plage_publique );


//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))

