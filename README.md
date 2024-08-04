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
![image](https://github.com/user-attachments/assets/ff526de0-90bc-4ee4-83e8-89a37a722cad)

#### Charge a buyer's card on behalf of a provisioned merchant
```typescript
Payment.makeTransfer(transferContent);
```
Generates a transaction from buyer to merchant with all details:
![image](https://github.com/user-attachments/assets/acc85bd6-3de2-4f7a-9c61-9d220dd8ef1f)
![image](https://github.com/user-attachments/assets/38830db0-49b2-4d1a-9b91-85b5f5e5d59f)


## Additional References
The Finix API usages in this project is mostly based on the [Finix API doc](https://finix.com/docs/api/overview/#section/Finix-API-Reference)
