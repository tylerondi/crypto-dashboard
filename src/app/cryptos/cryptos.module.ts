import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptosRoutingModule } from './cryptos-routing.module';
import { AddCryptoComponent } from './add-crypto/add-crypto.component';
import { CryptoListComponent } from './crypto-list/crypto-list.component';

@NgModule({
  declarations: [AddCryptoComponent, CryptoListComponent],
  imports: [
    CommonModule,
    CryptosRoutingModule
  ]
})
export class CryptosModule { }
