import { Client } from '@finix-payments/finix';
import { Types } from './types';
import { InitClient } from './initClient';

// Merchant Identity
export async function createIdentity(client: Client, identity: Types.IdentityMerchant) {
    // TODO: -Can add some checks here for business type to make sure this is a merchant not a buyer
    try {
        const response = await client.Identities.create(identity);
        console.log('Merchant identity established:', response);
        return response;
    } catch (error) {
        console.error('Error in merchant identity:', error);
        throw error;
    }
}

// Merchant Bank Account
export async function addBankAccount(client: Client, bank:Types. BankAccount) {
    try {
        const response = await client.PaymentInstruments.create(bank);
        console.log('Successfully added merchant bank account:', response);
        return response;
    } catch (error) {
        console.error('Error in adding merchant bank account:', error);
        throw error;
    }
}

// Provision Merchants with identity and bank account
export async function provisionMerchant(client: Client, identityID: string, merchantData: Types.MerchantData) {
    try {
        const response = await client.Merchants.create(identityID, merchantData);
        console.log('Merchant onboarded:', response);
        return response;
    } catch (error) {
        console.error('Error in merchant onboarding:', error);
        throw error;
    }
}

/**
 * Integrates all steps required for onboarding a merchant into a single function.
 * This function creates a merchant identity, adds a bank account, and provisions the merchant.
 * @param {Types.MerchantOnboardingInput} input - The comprehensive input required to onboard a merchant.
 * @throws Will throw an error if any step of the onboarding process fails.
 */
export async function onboard(input: Types.MerchantOnboardingInput) {
    const client = InitClient.createClient();
    const merchantIdentity = await createIdentity(client, input.identity);
    let bankInfo = input.bankAccount;
    bankInfo.identity = merchantIdentity.id!;
    await addBankAccount(client, bankInfo);
    await provisionMerchant(client, merchantIdentity.id!, input.merchantData);
    // could return meaningful information depending on need
}

export * as MerchantOnboarding from './merchantOnboarding';