import sql, { ConnectionPool } from 'mssql';
import { NextApiRequest, NextApiResponse } from 'next';
import { setupDatabase } from '../setup';
import {item.id_com} from '../../index';

const pool = setupDatabase()

const DelCom = async(req: NextApiRequest, res: NextApiResponse) => {
    // console.log(req.query.type, 'chuj')
    try {
        await pool.connect();
        console.log('Connected to the database');
        const request = pool.request();
        const delcom = await request.query('DELETE com_global where id_com_global = {}');
        
        res.status(200).json({
            success: true,
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

export default DelCom