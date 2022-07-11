import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  endpoint = 'https://oasis-open.github.io/cti-documentation/examples/example_json/apt1.json'
  datalist: any = [];
  originallist: any = [];
  searchText: string = ''

  constructor(private httpClient: HttpClient) { }

  flatten(obj: any = {}) {
    const doneObject: any = {}
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v == "object" && !(v instanceof  Date) && !Array.isArray(v) && !(v instanceof RegExp)) {
         Object.assign(doneObject, this.flatten(v))
      } else {
        doneObject[k] = v
      }
    }
    return doneObject
  }
  
  applySearch(query: string) {
    this.datalist = this.originallist.filter((d: any) => {
      
      const keyToSearch = ['name', 'type', 'malware_types']
      const text = keyToSearch.reduce((prev: any, next: any) => {
        const flatObject = this.flatten(d);

        if(typeof  flatObject[next] === 'string') {
          return flatObject[next] ? prev + ' ' + flatObject[next].toLowerCase() : prev
        } else {
          return flatObject[next] ? prev + ' ' + flatObject[next].join(' ').toLowerCase() : prev
        }
        
      }, '')
      console.log(text)
      return text.includes(query.toLowerCase())
      
    })
  }

  onKey(value: string) {
    this.searchText = value;
    this.applySearch(this.searchText)
  }

  ngOnInit(): void {
    this.httpClient.get(this.endpoint).subscribe((res: any) => {
      this.originallist = res.objects
      .filter((d: any) => d.type === 'malware' || d.type === 'tool');
      this.applySearch(this.searchText)
    })
  }

}
