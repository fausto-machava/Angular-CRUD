import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import {UserOptions} from 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})

export class PdfService {

  constructor() { }

  public ExportarArquivoPdf(PdfFileName: string, Head: any[], Data: any[]) {
    const doc = new jspdf.jsPDF('portrait','px', 'a4') as jsPdfWithPlugin;
    doc.autoTable({
      head: [Head],
      body: [Data]
    });

    doc.save(PdfFileName+'.pdf');
  }
};

interface jsPdfWithPlugin extends jspdf.jsPDF{
  autoTable: (options: UserOptions) => jspdf.jsPDF;
};