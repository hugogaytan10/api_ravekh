import { Application } from 'express';
import users from './users';
import clothes from "./clothes";
import dotenv from 'dotenv';
import categories from './categories';
import store from './stores';
import sales from './sales';
import statistics from './statistics';
import employees from './employees';
import company from './company';
dotenv.config();
export default (app: Application) =>{
    app.use('/api',clothes);
    app.use('/api',users);
    app.use('/api',categories);
    app.use('/api',sales);
    app.use('/api',store);
    app.use('/api', statistics);
    app.use('/api',employees);
    app.use('/api',company)
}