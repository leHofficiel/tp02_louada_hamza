import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carteInfo',
  standalone: true
})
export class CarteInfoPipe implements PipeTransform {

  transform(value: string, type: string): string {
    if (!value) return '';

    switch (type) {
      case 'numero':
        return this.formatNumero(value);
      case 'ccv':
        return this.formatCCV(value);
      case 'dateExpiration':
        return this.formatDateExpiration(value);
      case 'numeroInput':
        return this.numeroInputtransform(value);
      default:
        return value;
    }
  }

  numeroInputtransform(value: string): string {
    if (!value) return '';

    // Diviser le numéro de carte par groupes de 4 caractères et les rejoindre avec un espace
    return value.match(/.{1,4}/g)?.join(' ') || '';
  }

  private formatNumero(numero: string): string {
    // Logique de formatage du numéro de carte
    // Par exemple, masquer tous les chiffres sauf les 4 derniers
    const hiddenPart = numero.slice(0, -4).replace(/./g, '•');
    const visiblePart = numero.slice(-4);
    return hiddenPart + visiblePart;
  }

  private formatCCV(ccv: string): string {
    // Logique de formatage du CCV (par exemple, masquer tous les chiffres sauf les 2 derniers)
    return ccv.slice(-2).padStart(ccv.length, '•');
  }

  private formatDateExpiration(date: string): string {
    // Logique de formatage de la date d'expiration (par exemple, afficher MM/AA)
    const [year, month] = date.split('-');
    return `${month}/${year.slice(-2)}`;
  }
}
