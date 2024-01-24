import sql, { ConnectionPool } from 'mssql';
import { NextApiRequest, NextApiResponse } from 'next';
import { setupDatabase } from '../setup';

const pool = setupDatabase();

const GetCom = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await pool.connect();
        console.log('Connected to the database');

        const id = req.query.id as string | undefined;
        const table = req.query.table as string | undefined;

        const allowedTables = ['com_block', 'com_armor', 'com_food', 'com_other', 'com_tool'];
        if (!table || !allowedTables.includes(table)) {
            return res.status(400).json({
                success: false,
                reason: 'Invalid table name',
            });
        }

        if (!id) {
            return res.status(400).json({
                success: false,
                reason: 'Invalid or missing ID',
            });
        }

        const request = pool.request();
        const result = await request
            .input('id', sql.Int, parseInt(id, 10))
            .query('SELECT id_com, id_father, id_godfather, login, value  FROM com_${table}, users where com_${table}.id_user = users.id_user and id_father IS NULL; and id_item = @id');
        
        res.status(200).json({
            success: true,
            data: {
                [table]: result.recordset,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            reason: 'Internal Server Error',
        });
    } finally {
        pool.close();
    }
};

export default GetCom;