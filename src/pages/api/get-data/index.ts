import sql, { ConnectionPool } from 'mssql';
import { NextApiRequest, NextApiResponse } from 'next';
import { setupDatabase } from '../setup';

const pool = setupDatabase()

const GetDataHandler = async(req: NextApiRequest, res: NextApiResponse) => {
    // console.log(req.query.type, 'chuj')
    try {
        await pool.connect();
        console.log('Connected to the database');
        const request = pool.request();
        const blockResult = await request.query('SELECT * FROM block');
        const armorResult = await request.query('SELECT * FROM armor');
        const foodResult = await request.query('SELECT * FROM food');
        const otherResult = await request.query('SELECT * FROM other');
        const toolResult = await request.query('SELECT * FROM tool');
        const comResult = await request.query('SELECT id_com, id_father, id_godfather, login, value  FROM com_global, users where com_global.id_user = users.id_user and id_father IS NULL;');


        res.status(200).json({
            success: true,
            data: {
                armor: armorResult.recordset,
                block: blockResult.recordset,
                food: foodResult.recordset,
                other: otherResult.recordset,
                tool: toolResult.recordset,
                com: comResult.recordset,
            },
        })
    } catch (err) {
        console.log(err)
        res.status(200).json({
            success: false,
            reason: 'sie zjebalo',
        })
    } finally {
        pool.close()
    }
}

export default GetDataHandler