import { Component } from "@angular/core";

@Component({
  selector: "root",
  templateUrl: "./root.html",
  styleUrls: ["./root.css"]
})
export class RootComponent {
  selected: string = "nothing";
  languages = [
    {
      name: "C",
      img:
        "https://www.admecindia.co.in/sites/default/files/styles/articles/public/field/course/c-programming-course-rohini-delhi_0.png?itok=KZD3QA9J",
      yor: "1973"
    },
    {
      name: "C++",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
      yor: "1979"
    },
    {
      name: "Python",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAyCAMAAABmkLkWAAAA2FBMVEX///9WVlb8/Pw2b57k5OT29vY3c6U3dalmZmbGxsZZWVl7e3v/10dSUlL/0kLd3d2oqKj/zj3w8PCSkpKYmJhxcXH/3k9gYGBISEjMzMz/8tH/41W/v7/T09Pq6uqCgoIdY5bQ2+g3e7OxsbG1xNP/0jU2aZQgaaCKior/yin/wxm1xdo2Njb/7cbl6/G6zeD/35L/46f/5kr//9qBocKju9P/7Xj/ykhlkLj/+OD/327/57b/1Wj/+er/zlkAU45ynscUbq3/7Yf/32BTibn/6I3/62r/3D26oXuVAAADv0lEQVRYhe2Xa3eiOBiAQyQtRFOQi8AMF8G1qK3a2Wl3erGztXV2//8/2lwI46BnDtjlOHOOz6eGXHzI+/ImBeDEiRMnjggMHNTGumh5+7LZbO5v7xYHzVd9rw2vNFuvsyw7Pz/P8/SQBVRFa8Nrky3STIid5c12zDIaecEoCIAV11w8ewHg/pxxdpYvm2iZitnIC6BYVwOjrld2d5cJrbPhH028bNzUS42CKKq5+pqS5znV6nRa9oIQIVg3FxecZU619nvFhgrLhbc7HDza7wVVw9pqWoYBQROuNlmR8Xy3qNfV62DwNt8aEiU+w2QLo8QXPwexbwDj2tOwf20xLxjZxCe26LUmbIZbxMvgLWI3+GRveX3IRGp1Sq/B+EP54hPihmocuMqE/SDBhZemGMAKu56th5B5TfxkNNKwx+xjj5iGOsIk5I5kEsVxiHG3tla6ruxW55J79XqPcohOxHIWVvSqF8uvIo5eorLt9Fi+0b6Q7xMmBvtkbT4j4K16vEgtuVuXl8PlK9XqjZ+ll1K8psned9dL5j0sBiUAhHKKw6aY2BEtF+t1vTY7WpdD9C/VuhjLDCu9AqxYP/ESyRMq1KsrHtINU7x4y0sJamqhtYxhPizopN+Y1sX4U9XLwEpUywtqcmOQQqcc5sW18vtlKlg8fxszrf70puqlYhzU8kJbXvSvg7yE1tXn1384b288iBf993i9f7+gCOLt5z8/MgbsQxRa/elOHCPMKgPxGuSXSvBB+UUPa3Yipn/taPVnsoCVXiOMUb28N2WlCrELDvK6y+mHOFzsak2/yCGll8bWpwUq3PZy9nlZGItK5RL9MC/EjkTh9YNWfybDCHTs2bRkognmEXSwp9NSZSQe9wpJF+540acau2I5hB0Rh3iBlBaIvxeF1pgypcxms1U5Qsdu4nsuIZrK2zYh2MXXicu9wMTX6Lmn+rjw8vnuhoR0E+xzIdMX9R5ofu26yszSFDGrQe/xQ8nD934WR3VkO7q8DximMwos0CXi1mmMTARQEIjuOBBnNQpNJywGyGtgFNS9p0oGIoiPq9XX1df5j31lflVwibX3+f+J0KKpNV5NZ0+1vJDWyn9AVS+hNZ2Dp5peBk/wlnmURX4O5mXh+qmXqpG6l/R38NAbF2VrNbup9O16ISO0SVHGWub5pigQ1aynAdPcypPg2vfM9pO+4Hn+NH/Y21NVgGr7Gf8rAzlIIBrHVgLCivpYksLt2Fqg1IoZXOyX8AJbQfweymNLcWCRYpJj+5w4ceLEb8F/OwRnK29HVnQAAAAASUVORK5CYII=",
      yor: "1991"
    },
    {
      name: "Java Script",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAh1BMVEX////13hkAAAD24DH89sr85Rr44Rm/rROCdw0pJQT89czo0hj/6BpTSwjr1Rj/6hr+/O/34kynlxGejxDUwBXFsxTZxRbhzBezohIhHgO4pxP/7htNRggwKwRXTwnOuxVgVwpvZQs/OQaNgA5GPwcXFQISEAIbGQN4bQw1MAZoXgqWiBAKCQDGcT+eAAADbklEQVR4nO2c63KqMBRGm7SJVDC0gIAUuYjaenn/5zsgEsLFOTNnxhLOfOtXC2FmGTc72RuHlxcAAAAAAAAAAAAAAAAAAAAAAAAAgP+Ij+XbE1l+PFF9+fn6RD6XT1R/e+XkafDXt6eqP8+cEKhDHepQhzrUoQ51qEMd6lCHOtShDnWoQx3qUIc61KEOdahDHepQH8IbhifYjeETWF3UhXmne5hZIo3CknXArZ69LupuvLqRrZky47ZnJLvN4Xj83u6zC7e1VDdozWbRqjORXanC1unEk27q71Kd8wXtcw4Ud43Vw++BOs3M1l1bdZ5uh+alextP2qqTbMycUlfeq7qqs2Gg15y8JmR0Vf/atzFSOG6+u/+zSmXE6KrOpPmF2JZteXn19/YiLHmJpurcb8xXdS5nZhn7WUr0T45tqDv3AGE+DUlnK6C9eijzPLG6l2ivbrBHl2iqzr1G/eBbDy7RVF3JMHFqj/9aUlf1r3YbsDHIqLyu6ixUl9DcJ8P6SVd1Ina0Ix8F/RpPW3UeHjruNHNE94bVVr091MqHs6mSfvru9GwqWV5f9bKodjcD+WgOpUaJve7W1RWhjBmt1QkTYb9YOsp511u9DHix2Hfd9z6fhfqtceefO3nyMo9Zr+3twNi16u/3Zswc1Et55hltV2YxJ/Wq0GhX10J/9c7ayS25umbTq6tqY6tpEKjfADcb9d3k6iwImzxHRLPob+9Nas5M93pS62jOG/UTm1adkSihRaMVJM2M1s0tRsLqiKG4s0Bm9mln3fKrlNF003l6vGvFVebjVlp/C9eCyJix5W4sn1KdW+77zWLjfbFy0eFyuU+qeRaF3Hedg2oAZ5blyuToTqjOg3ZLWKS+F7WFaHFr5BbtAkTPURr4qaO0rL0p1cWJjnO8afFg9eD87bOIKQPGih5oZXUNx9bHBwMoPUTTbr9GKqA6FpoO46PPVt6kYmJ1kY9puTKfWOHY+ZKdmPrRABfDeb+6ygrEvGRE/Jqw6askTpxeDRF3H4sy8xL3zWNXGTLdRqAsIdyVauX3ekSc+06u3q654+vSzODE9MIiT1ZZ4aTmsDNXlXdB6hpZHCc/l8gX3SHTbnq5wt9HaNq4+wegDnWd1Gf74okZv+5jxi9ZAQAAAAAAAAAAAAAAAAAAAAAAAAD4df4AMpNVnyYrMBwAAAAASUVORK5CYII=",
      yor: "1995"
    },
    {
      name: "Golang",
      img:
        "https://www.edureka.co/blog/wp-content/uploads/2018/09/Golang-Logo-Golang-Tutorial-Edureka.jpg",
      yor: "2009"
    }
  ];

  selectLanguage(event) {
    console.log("Parent method is calling..", event);
    this.selected = event;
  }
}
