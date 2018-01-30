import { PipeTransform, Pipe } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
	name: 'searchFilter'
})



export class SearchFilterPipe implements PipeTransform {

	constructor(private router: Router) {}

	//take in any data array, filter it against user input (term)
	transform(items: any, term: any): any {
		// console.log(items, term);
	    if (term === undefined) return items;

	    return items.filter((item) => {

	      for(let property in item){
					if (property === "ItemContent"){
						return (item.ItemContent.Title + item.ItemContent.Body).toString().toLowerCase().includes(term.toLowerCase());
					}
	        if (item[property] === (null || undefined)){
	          continue;
	        }
	        if(item[property] !== null) {
	        	if(item[property].toString().toLowerCase().includes(term.toLowerCase())) {
	        	  return true;
	        	}
	        }
	        
	      }
	      return false;
	    });
	  }

}

