import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'convertMe',
  pure: false
})

export class ConvertPipe implements PipeTransform {
  transform(value: any, args: any[] = []) {
    let keyArr = Object.keys(value),
        dataArr = [];

    keyArr.forEach(key => {
      dataArr.push(value[key])
    })

    return dataArr;
  }
}