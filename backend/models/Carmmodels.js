import pool from "../config/database_connection.js";
export const getallcarsService = async ()=>{
    const result = await pool.query("SELECT * FROM CARS");
    return result.rows;
}

export const getCarsbyLocation = async ()=>{
    
}