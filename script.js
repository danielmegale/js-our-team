const list=document.getElementById('list')

const teamList=[
    {
        Img:'img/wayne-barnett-founder-ceo.jpg',
        name:'Wayne Barnett',
        position:'Founder & CEO'
    },
    {
        Img:'img/angela-caroll-chief-editor.jpg',
        name:'Angela Caroll',
        position:'Chief Editor'
    },
    {
        Img:'img/walter-gordon-office-manager.jpg',
        name:'Walter Gordon',
        position:'Office Manager'
    },
    {
        Img:'img/angela-lopez-social-media-manager.jpg',
        name:'Angela Lopez',
        position:'Social Media Manager'
    },
    {
        Img:'img/scott-estrada-developer.jpg',
        name:'Scott Estrada',
        position:'Developer'
    },
    {
        Img:'img/barbara-ramos-graphic-designer.jpg',
        name:'Barbara Ramos',
        position:'Graphic Designer'
    }
]
let team='';
for(let i=0;i<teamList.length;i++){
    const teamMates= teamList[i];
    team +=`
    <li>
        <img src="${teamMates.Img}" alt="">
        <h4>${teamMates.name} </h4>
        <p>${teamMates.position}</p>
    </li>
    `;
    console.log(team)
}
list.innerHTML=team;