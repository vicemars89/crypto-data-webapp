import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Crypto } from '../models/crypto.model';
import { CryptoDataService } from '../service/crypto.service';


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  crypto: Crypto[] = [];
  gold: Crypto[] = [];

  constructor(public dialog: MatDialog,private cryptoService: CryptoDataService) {}

  ngOnInit(): void {

    let listOfCrypto = this.cryptoService.getAllCrypto();

	let goldPrice = this.cryptoService.getLastGoldGramPrice();
	
	let gold: Crypto = {
    	crypto: '',
    	price: 0
   	};

    listOfCrypto.forEach(item =>{
      this.crypto.push(...item);
    })

	goldPrice.subscribe((data:any) => {
      gold = data;
	  this.gold[0] = gold;
	});

  }

  openDialog(name: string, image: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '150px',
      data: {name: name,
        image: image
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
