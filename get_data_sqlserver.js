// api/getData.js
const sql = require('mssql');

const config = {
    user: 'YMAPSYS',
    password: 'AQuit@2Mn',
    server: 'sasqls00037.addelijn.be', 
    database: 'AAUDBPRSITES',
    options: {
        encrypt: true, // Gebruik encryptie voor Azure SQL
    },
};

module.exports = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT * FROM V_GEBOUWEN');
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving data');
    }
};
