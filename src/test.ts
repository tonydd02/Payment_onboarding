import { MerchantOnboarding } from './sdk/merchantOnboarding';
import { Payment } from './sdk/payment';
import { Types } from './sdk/types';

async function main() {
    try {
        // all data required to onboard a merchant
        const merchantOnboardingInput: Types.MerchantOnboardingInput = {
            identity: {
                additionalUnderwritingData: {
                    annualAchVolume: 200000,
                    averageAchTransferAmount: 200000,
                    averageCardTransferAmount: 200000,
                    businessDescription: "SB3 vegan cafe",
                    cardVolumeDistribution: {
                        cardPresentPercentage: 30,
                        mailOrderTelephoneOrderPercentage: 10,
                        ecommercePercentage: 60
                    },
                    creditCheckAllowed: true,
                    creditCheckIpAddress: "42.1.1.112",
                    creditCheckTimestamp: "2021-04-28T16:42:55Z",
                    creditCheckUserAgent: "Mozilla 5.0(Macintosh; Intel Mac OS X 10 _14_6)",
                    merchantAgreementAccepted: true,
                    merchantAgreementIpAddress: "42.1.1.113",
                    merchantAgreementTimestamp: "2021-04-28T16:42:55Z",
                    merchantAgreementUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)",
                    refundPolicy: "MERCHANDISE_EXCHANGE_ONLY",
                    volumeDistributionByBusinessType: {
                        otherVolumePercentage: 0,
                        consumerToConsumerVolumePercentage: 0,
                        businessToConsumerVolumePercentage: 0,
                        businessToBusinessVolumePercentage: 100,
                        personToPersonVolumePercentage: 0
                    }
                },
                entity: {
                    annualCardVolume: 12000000,
                    businessAddress: {
                        city: "San Mateo",
                        country: "USA",
                        region: "CA",
                        line2: "Apartment 8",
                        line1: "741 Douglass St",
                        postalCode: "94114"
                    },
                    businessName: "Finix Flowers",
                    businessPhone: "+1 (408) 756-4497",
                    businessTaxId: "123456789",
                    businessType: "INDIVIDUAL_SOLE_PROPRIETORSHIP",
                    defaultStatementDescriptor: "Finix Flowers",
                    dob: {
                        year: 1978,
                        day: 27,
                        month: 6
                    },
                    doingBusinessAs: "Finix Flowers",
                    email: "user@example.org",
                    firstName: "John",
                    hasAcceptedCreditCardsPreviously: true,
                    incorporationDate: {
                        year: 1978,
                        day: 27,
                        month: 6
                    },
                    lastName: "Smith",
                    maxTransactionAmount: 1200000,
                    achMaxTransactionAmount: 1000000,
                    mcc: "4900",
                    ownershipType: "PRIVATE",
                    personalAddress: {
                        city: "San Mateo",
                        country: "USA",
                        region: "CA",
                        line2: "Apartment 7",
                        line1: "741 Douglass St",
                        postalCode: "94114"
                    },
                    phone: "14158885080",
                    principalPercentageOwnership: 50,
                    taxId: "123456789",
                    title: "CEO",
                    url: "https://www.finix.com"
                },
                tags: {
                    "Studio Rating": "4.7"
                }
            },
            bankAccount: {
                accountNumber: "635802010014976",
                accountType: "BUSINESS_CHECKING",
                bankCode: "026009593",
                identity: "Tony Ding",
                name: "John Doe Business Account",
                type: "BANK_ACCOUNT"
            },
            merchantData: {
                "processor": "DUMMY_V1",
                "tags": {
                  "key_2": "value_2"
                }
            }
        }

        // All data required to add buyer's identity and credit card
        const buyerOnboardingInput: Types.BuyerOnboardingInput = {
            identity: {
                entity: {
                    phone: "400123345",
                    firstName: "foo",
                    lastName: "bar",
                    email: "foobar@foo.bar", 
                    personalAddress: {
                        city: "foocity",
                        country: "USA",
                        region: "foobarregion",
                        line2: "trueLine2",
                        line1: "realLine1",
                        postalCode: "99999"
                    }
                },
                tags: {
                    "Key": "Value"
                }
            },
            card: {
                address: {
                    city: "San Francisco",
                    country: "USA",
                    line1: "900 Metro Center Blv",
                    line2: null,
                    postalCode: "94404",
                    region: "CA"
                },
                expirationMonth: 12,
                expirationYear: 2029,
                identity: "Tony Ding",
                name: "foo bar",
                number: "6011000990139424",
                securityCode: "022",
                type: "PAYMENT_CARD"
            }
        };

        // All data required to charge a buyer's card on behalf of an already provisioned merchant
        const transferContent: Types.Transfer = {
            amount: 9999,
            currency: "USD",
            merchant: "MUbHhJbMxqH3WBQa4UJsyEDv", // change this line into any already provisioned merchant account
            source: "PI4Y4cJQ9nPgnRr6s19wgkga", // change this line into any valid buyer payment instrument id
            tags: {
                test: "sale"
            }
        };

        // onboard the merchant, this will create identity, add bank accound, and provision the merchant
        await MerchantOnboarding.onboard(merchantOnboardingInput);
        
        // onboard the buyer, this will create identity and add credit card
        await Payment.addBuyerAndCard(buyerOnboardingInput);

        // make charge to a buyer's card on behalf of a provisioned merchant
        await Payment.makeTransfer(transferContent);

    } catch (error) {
        console.error('Failed to onboard merchant:', error);
    }
}

main();