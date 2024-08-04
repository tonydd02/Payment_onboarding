import { Client } from '@finix-payments/finix';
import { Types } from './types';
import { InitClient } from './initClient';

// Buyer Identity
export async function createBuyerIdentity(client: Client, identity: Types.IdentityBuyer) {
    try {
        const response = await client.Identities.create(identity);
        console.log('Buyer identity established:', response);
        return response;
    } catch (error) {
        console.error('Error in buyer identity:', error);
        throw error;
    }
}

// Buyer Credit Card
export async function addCreditCard(client: Client, card: Types.CreditCard) {
    try {
        const response = await client.PaymentInstruments.create(card);
        console.log('Successfully added buyer card:', response);
        return response;
    } catch (error) {
        console.error('Error in adding buyer card:', error);
        throw error;
    }
}

/**
 * Simultaneously adds a buyer and their credit card in the payment system.
 * @param {Types.BuyerOnboardingInput} input - The input containing buyer and credit card data.
 * @throws {Error} If an error occurs during the process.
 */
export async function addBuyerAndCard(input: Types.BuyerOnboardingInput){
    const client = InitClient.createClient();
    const buyer = await createBuyerIdentity(client, input.identity);
    let buyerCard = input.card;
    buyerCard.identity = buyer.id!;
    await addCreditCard(client, input.card)
    // could return meaningful information depending on need
}

/**
 * Creates a transfer from the buyer's credit card on behalf of a merchant.
 * @param {Types.Transfer} transfer - The transfer details.
 * @returns {Promise<any>} The API response containing the transfer details.
 * @throws {Error} If the transfer fails.
 */
export async function makeTransfer(transfer: Types.Transfer) {
    const client = InitClient.createClient();
    try {
        const response = await client.Transfers.create(transfer);
        console.log('Transfer success:', response);
        return response;
    } catch (error) {
        console.error('Transfer failed', error);
        throw error;
    }
}

export * as Payment from './payment';