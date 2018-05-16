
import { Pipe, PipeTransform } from '@angular/core';

const tab = {
	ask:'回答',
	share:'分享',
	job:'招聘',
	good:'精华',
}

@Pipe({name: 'entoch'})
export class EntochPipe implements PipeTransform {
  transform(value: string): string {
    return tab[value] || '其他';
  }
}