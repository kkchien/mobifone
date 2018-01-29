import{Pipe, PipeTransform} from '@angular/core'


@Pipe({name:'newline'})
export class NewLine implements PipeTransform
{
    transform(value: string, args: string[]):any{
        return value.replace(/\n/gi,'<br/>');
    }
}