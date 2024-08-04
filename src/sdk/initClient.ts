import dotenv from 'dotenv';
dotenv.config();

import {Client, Environment} from '@finix-payments/finix';

// function to get env variables
function getEnvVariable(key: string): string {
    const value = process.env[key];
    console.log(value);
    if (value === undefined) {
      throw new Error(`Environment variable ${key} is not set. at `);
    }
    return value;
}

// create finix api client
export function createClient() {
    const finixApiUser: string = getEnvVariable('FINIX_API_USER');
    const finixApiSecret: string = getEnvVariable('FINIX_API_SECRET');
    const client = new Client(finixApiUser, finixApiSecret, Environment.Sandbox);
    return client;
}

export * as InitClient from './initClient';