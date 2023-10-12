import {createServer} from 'http';
import expressApp from './express.js';

const httpServer = createServer(expressApp)

export default httpServer