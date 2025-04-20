import {AfterViewInit, Component, ElementRef, ViewChild, viewChild} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistic',
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent implements AfterViewInit{
  @ViewChild('test') myChartRef!: ElementRef; // Référence à l'élément canvas
  chart!: Chart; // Type explicite pour éviter les erreurs

  ngAfterViewInit() {
    const canvas= this.myChartRef.nativeElement;
    const ctx=canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar', // Type de graphique (bar, line, pie, etc.)
      data: {
        labels: ['Rouge', 'Bleu', 'Vert'], // Libellés des données
        datasets: [{
          label: 'Mes données',
          data: [12, 19, 3], // Valeurs des données
          backgroundColor: [ // Couleurs des barres
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [ // Couleurs des bordures
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // Options de configuration du graphique (scales, plugins, etc.)
      }
    });
  }

// Pour détruire le graphique lorsque le composant est détruit (important pour éviter les fuites de mémoire)
ngOnDestroy(): void {
  if (this.chart) {
  this.chart.destroy();
}
}

}
