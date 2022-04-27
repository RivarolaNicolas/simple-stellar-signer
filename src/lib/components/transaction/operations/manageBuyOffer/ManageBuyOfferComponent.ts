import type { Operation, Transaction } from 'stellar-sdk';

import AbstractOperationComponent from '../AbstractOperationComponent';
import type IOperationComponent from '../IOperationComponent';

export default class ManageBuyOfferComponent extends AbstractOperationComponent implements IOperationComponent {
    constructor(tx: Transaction, operation: Operation.ManageBuyOffer) {
        super({
            title: 'OPERATION_MANAGE_BUY_OFFER',
            operationItems: [
                { title: 'SOURCE_ACCOUNT', value: operation.source || tx.source },
                { title: 'SELLING_ASSET', value: operation.selling.code },
                { title: 'BUYING_ASSET', value: operation.buying.code },
                { title: 'BUY_AMOUNT', value: operation.buyAmount },
                { title: 'PRICE', value: operation.price },
                { title: 'OFFER_ID', value: operation.offerId },
            ],
        });
    }
}
