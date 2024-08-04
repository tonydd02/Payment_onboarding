# Payment_onboarding
Onboard merchants, buyers and handle transactions

## Description
This project is designed to facilitate the onboarding of merchants and processing of payments through the Finix API. It includes modules for merchant onboarding, payment processing, and additional utilities to support transactions.

## Features
- **Merchant Onboarding**: Automates the creation of merchant identity, adding bank account, and provisioining.
- **Buyer Onboarding**: Automates the creation of buyer identity and adding payment card.
- **Transactions**: Charges a card from a buyer on behalf of a merchant.

## Installation
To get started with this project, clone the repository and install its dependencies.

### Finix Node.js API Library Prerequisites
- Node.js 16 or higher
- Suggested: Your own API credentials.
Our tests use the API credentials from Finix's public documentation, however you need your own credentials to submit requests.
### NPM
```
npm install --save @finix-payments/finix
```
If you have any questions, refer to [Finix Node.js API Library](https://github.com/finix-payments/finix-nodejs/blob/main/README.md).

## Using the SDK
### Credentials
Aquire your personal API key and password in Finix Dashboard and update them in the .env file.
### Data Models
Those can be found in /src/sdk/types.ts.
### APIs
Sample Usages are in /src/test.ts
#### Onboard the merchant: this will create identity, add bank accound, and provision the merchant  
```typescript
MerchantOnboarding.onboard(merchantOnboardingInput);
```
Creates idenity and merchant account along with bank account info in Finix Dashboard:
![abdd963b694e486af8d8dffb37eb5a8](https://github.com/user-attachments/assets/208d3357-6f57-42fd-be15-fc980650c05c)

![66adcf8295e8e1effdf6c0562c3410e](https://github.com/user-attachments/assets/34836ec6-f301-4515-9375-6e64f8a58ba8)


#### Onboard the buyer: this will create identity and add credit card
```typescript
Payment.addBuyerAndCard(buyerOnboardingInput);
```
Creats buyer identity along with payment card info:
![91dec04824866eacebfe113e97b7c9d](https://github.com/user-attachments/assets/4b9857a1-d4d4-4e89-a574-f13950c5e3c8)


#### Charge a buyer's card on behalf of a provisioned merchant
```typescript
Payment.makeTransfer(transferContent);
```
Generates a transaction from buyer to merchant with all details:
![c978345e0f669f88e07edcf06ee857c](https://github.com/user-attachments/assets/db85e0ca-c570-4abf-8e5d-366d62f38a70)

![f3518a4a0567ed2a2e01da461d60ef7](https://github.com/user-attachments/assets/cf9518ee-a3c7-4694-b2d3-1a9a24d983a5)



## Additional References
The Finix API usages in this project is mostly based on the [Finix API doc](https://finix.com/docs/api/overview/#section/Finix-API-Reference)
