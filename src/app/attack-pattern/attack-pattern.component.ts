import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack-pattern',
  templateUrl: './attack-pattern.component.html',
  styleUrls: ['./attack-pattern.component.scss']
})
export class AttackPatternComponent implements OnInit {

  endpoint = 'https://oasis-open.github.io/cti-documentation/examples/example_json/apt1.json'
  datalist: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.endpoint).subscribe((res: any) => {
      this.datalist = res.objects
      .filter((d: any) => d.type === 'attack-pattern')
      
    })
  }

}
