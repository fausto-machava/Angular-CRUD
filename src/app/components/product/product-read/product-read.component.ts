import { ExcelService } from './../../../services/excel.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products!: Product[];
  displayedColumns = ['Id', 'Name', 'Price', 'Action'];
  Head = ['Id','Name','Price'];

  constructor(private productService: ProductService, private excelService: ExcelService, private pdfService: PdfService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

  exportarExcel():void {
    this.excelService.ExportarArquivoExcel(this.products, 'Produtos');
  }

  exportarPdf(): void{
    console.table(this.products)
    this.pdfService.ExportarArquivoPdf('Products',this.Head ,this.products)
  }

}
