import { Authenticator } from './Authenticator';
import { Compressor } from './Compressor';
import { HttpRequest } from './HttpRequest';
import { Logger } from './Logger';
import { WebServer } from './WebServer';

//! Our Process pipeline
//?  auth -> logger -> compressor
const compressor = new Compressor(null);
const logger = new Logger(compressor);
const authenticator = new Authenticator(logger);
const server = new WebServer(authenticator);

server.handle(new HttpRequest('admin', '1234'));
