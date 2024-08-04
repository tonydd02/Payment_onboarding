interface AdditionalUnderwritingData {
    annualAchVolume: number;
    averageAchTransferAmount: number;
    averageCardTransferAmount: number;
    businessDescription: string;
    cardVolumeDistribution: CardVolumeDistribution;
    creditCheckAllowed: boolean;
    creditCheckIpAddress: string;
    creditCheckTimestamp: string;
    creditCheckUserAgent: string;
    merchantAgreementAccepted: boolean;
    merchantAgreementIpAddress: string;
    merchantAgreementTimestamp: string;
    merchantAgreementUserAgent: string;
    refundPolicy: string;
    volumeDistributionByBusinessType: VolumeDistribution;
}

interface CardVolumeDistribution {
    cardPresentPercentage: number;
    mailOrderTelephoneOrderPercentage: number;
    ecommercePercentage: number;
}

interface VolumeDistribution {
    otherVolumePercentage: number;
    consumerToConsumerVolumePercentage: number;
    businessToConsumerVolumePercentage: number;
    businessToBusinessVolumePercentage: number;
    personToPersonVolumePercentage: number;
}

interface Entity {
    annualCardVolume: number;
    businessAddress: Address;
    businessName?: string;
    businessPhone?: string;
    businessTaxId?: string;
    businessType?: string;
    defaultStatementDescriptor?: string;
    dob: DateOfBirth;
    doingBusinessAs?: string;
    email: string;
    firstName?: string;
    hasAcceptedCreditCardsPreviously: boolean;
    incorporationDate?: DateOfBirth;
    lastName?: string;
    maxTransactionAmount: number;
    achMaxTransactionAmount: number;
    mcc: string;
    ownershipType?: string;
    personalAddress: Address;
    phone: string;
    principalPercentageOwnership?: number;
    taxId?: string;
    title?: string;
    url?: string;
}

interface Address {
    line1: string;
    line2: any;
    city: string;
    region: string;
    postalCode: string;
    country: any;
}

interface DateOfBirth {
    year: number;
    month: number;
    day: number;
}

interface Tags {
    [key: string]: any;
}

export interface IdentityMerchant {
    additionalUnderwritingData: AdditionalUnderwritingData;
    entity: Entity;
    tags: Tags;
}

export interface IdentityBuyer {
    entity: {
        phone: string;
        firstName: string;
        lastName: string;
        email: string;
        personalAddress: {
            city: string;
            country: any;
            region: string;
            line2: any;
            line1: string;
            postalCode: string;
        }
    },
    tags: Tags;
}

export interface BankAccount {
    accountNumber: string;
    accountType: string;
    bankCode: string;
    identity: string;
    name: string;
    type: string;
}

export interface MerchantData {
    processor: 'DUMMY_V1' | 'FINIX_V1' | 'LITLE_V1' | 'MASTERCARD_V1' | 'NMI_V1' | 'VANTIV_V1' | 'VISA_V1' | null;
    tags?: Record<string, string>; // Up to 50 key-value pairs
}

export interface CreditCard {
    address: Address;
    expirationMonth: number;
    expirationYear: number;
    identity: string;
    name: string;
    number: string;
    securityCode: string;
    type: string;
}

export interface Transfer {
    amount: number;
    currency: any;
    merchant: string;
    source: string;
    tags: Tags;
}

export interface MerchantOnboardingInput {
    identity: IdentityMerchant;
    bankAccount: {
        accountNumber: string;
        accountType: string;
        bankCode: string;
        name: string;
        type: string;
        identity: string;
    };
    merchantData: MerchantData;
}

export interface BuyerOnboardingInput {
    identity: IdentityBuyer;
    card: CreditCard;
}

export * as Types from './types';