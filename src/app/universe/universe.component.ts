import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})


export class UniverseComponent implements OnInit {
  folders = [
    {id: 0, name: "Local Supercumulus", image: "assets/versiones/universe/images/folders/0.png", level: 0},
    {id: 1, name: "Local Group", image: "assets/versiones/universe/images/folders/1.png", level: 1},
    {id: 2, name: "Milky Way", image: "assets/versiones/universe/images/folders/2.png", level: 2},
    {id: 3, name: "Sun", image: "assets/versiones/universe/images/folders/3.png", level: 3},
    {id: 4, name: "Mercury", image: "assets/versiones/universe/images/folders/4.png", level: 4},
    {id: 5, name: "Venus", image: "assets/versiones/universe/images/folders/5.png", level: 4},
    {id: 6, name: "Earth", image: "assets/versiones/universe/images/folders/6.png", level: 4},
    {id: 7, name: "Moon", image: "assets/versiones/universe/images/folders/7.png", level: 5},
    {id: 8, name: "Mars", image: "assets/versiones/universe/images/folders/8.png", level: 4},
    {id: 9, name: "Phobos", image: "assets/versiones/universe/images/folders/9.png", level: 5},
    {id: 10, name: "Deimos", image: "assets/versiones/universe/images/folders/10.png", level: 5},
    {id: 11, name: "Jupiter", image: "assets/versiones/universe/images/folders/11.png", level: 4},
    {id: 12, name: "Metis", image: "assets/versiones/universe/images/folders/12.png", level: 5},
    {id: 13, name: "Adrastea", image: "assets/versiones/universe/images/folders/13.png", level: 5},
    {id: 14, name: "Saturn", image: "assets/versiones/universe/images/folders/14.png", level: 4},
    {id: 15, name: "Atlas", image: "assets/versiones/universe/images/folders/15.png", level: 5},
    {id: 16, name: "Prometheus", image: "assets/versiones/universe/images/folders/16.png", level: 5},
    {id: 17, name: "Pandora", image: "assets/versiones/universe/images/folders/17.png", level: 5},
    {id: 18, name: "Uranus", image: "assets/versiones/universe/images/folders/18.png", level: 4},
    {id: 19, name: "Oberon", image: "assets/versiones/universe/images/folders/19.png", level: 5},
    {id: 20, name: "Titania", image: "assets/versiones/universe/images/folders/20.png", level: 5},
    {id: 21, name: "Neptune", image: "assets/versiones/universe/images/folders/21.png", level: 4},
    {id: 22, name: "Triton", image: "assets/versiones/universe/images/folders/22.png", level: 5},
    {id: 23, name: "Nereida", image: "assets/versiones/universe/images/folders/23.png", level: 5},
    {id: 24, name: "Ceres", image: "assets/versiones/universe/images/folders/24.png", level: 4},
    {id: 25, name: "Pluto", image: "assets/versiones/universe/images/folders/25.png", level: 4},    
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
