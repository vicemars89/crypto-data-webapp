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

  constructor(public dialog: MatDialog,private cryptoService: CryptoDataService) {}

  ngOnInit(): void {

    let listOfCrypto = this.cryptoService.getAllCrypto();

    listOfCrypto.forEach(item =>{
      this.crypto.push(...item);
    })

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
