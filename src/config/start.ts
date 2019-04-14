import * as dotenv from "dotenv";
import { creatypeORMConnection } from '../datasources/typeorm'
dotenv.config();
creatypeORMConnection()