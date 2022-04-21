import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'replaceString'
})
export class ReplaceStringPipe implements PipeTransform {

	transform(value: string, substr: string, newSubstr: string): string {
		return value.replaceAll(substr, newSubstr);
	}

}
