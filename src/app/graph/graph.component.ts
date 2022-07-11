import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  title = 'ng-imda';
  endpoint = 'https://oasis-open.github.io/cti-documentation/examples/example_json/apt1.json'
  
  nodes: Array<any> = [];
  links: Array<any> = [];

  constructor(private httpClient: HttpClient) {
    this.nodes = [];
    this.links = []
  }

  getValueFromData = (data: any, id: any, key: string) => {
    const object = data.find((d: any) => d.id === id);
    return object[key];
  }

  getData() {
    this.httpClient.get(this.endpoint).subscribe((res: any) => {
      res.objects
      .filter((d: any) => d.type === 'relationship')
      .map((n: any) => {
        if(!this.nodes.find(e => e.id === n.source_ref)) {
          this.nodes = [
            ...this.nodes,
            {
              id: n.source_ref,
              label: this.getValueFromData(res.objects, n.source_ref, 'name')
            }
          ]
        }

        if(!this.nodes.find(e => e.id === n.target_ref)) {
          this.nodes = [
            ...this.nodes,
            {
              id: n.target_ref,
              label: this.getValueFromData(res.objects, n.target_ref, 'name')
            }
          ]  
        }

        this.links = [
          ...this.links,
          {
            id: n.id,
            source: n.source_ref,
            target: n.target_ref,
            label: n.relationship_type
          }
        ]
      });


      console.log(this.links);
      console.log(this.nodes);
    })
  }

  ngOnInit(): void {
    this.getData()


  }

}
