import sql, { ConnectionPool, query } from 'mssql';
import { NextApiRequest, NextApiResponse } from 'next';
import { setupDatabase } from '../setup';

const pool = setupDatabase();

const GetItemData = async (req: NextApiRequest, res: NextApiResponse) => {
    
    try {
        const id = req.query.id as string;
        const table = req.query.table as string;
        await pool.connect();
        
        console.log('Connected to the database');

        const allowedTables = ['block', 'armor', 'food', 'other', 'tool', 'com'];
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
        .query(`SELECT * FROM ${table} WHERE id = ${id}`);



        res.status(200).json({
            success: true,
            data: {
                output: result.recordset,
            },
        });
    } catch (err) {
        console.error('Error in GetItemData:', err);
        res.status(500).json({
            success: false,
            reason: 'Internal Server Error',
        });
    } finally {
        pool.close();
    }
};

export default GetItemData;
